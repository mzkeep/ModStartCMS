<?php

namespace Module\Vendor\QuickRun\Wechat;

use ModStart\Core\Exception\BizException;
use Module\Vendor\QuickRun\Wechat\Message\Raw;

/**
 * 公众号消息服务器（被动回复 / 事件推送）
 *
 * 用法：
 *   $app->server->push(function ($message) { ... return new Text('回复内容'); });
 *   return $app->server->serve();
 */
class Server
{
    /** @var Application */
    private $app;

    /** @var callable|null */
    private $handler = null;

    /**
     * @param Application $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * 注册消息处理器
     * @param callable $handler
     * @return $this
     */
    public function push($handler)
    {
        $this->handler = $handler;
        return $this;
    }

    /**
     * 处理微信服务器请求并返回响应内容
     * @return string
     */
    public function serve()
    {
        $token = strval($this->app->config('token'));
        $signature = Request::query('signature');
        $timestamp = Request::query('timestamp');
        $nonce = Request::query('nonce');
        $encrypted = Request::query('encrypt_type');
        // 接入校验：直接返回 echostr
        $echostr = Request::query('echostr');
        if ('' !== $echostr) {
            $array = [$token, $timestamp, $nonce];
            sort($array, SORT_STRING);
            if (sha1(implode('', $array)) !== $signature) {
                return '';
            }
            return $echostr;
        }
        $rawXml = Request::rawBody();
        $crypt = new Crypt($this->app->appId(), $token, strval($this->app->config('aes_key')));
        if ('aes' === $encrypted) {
            $encryptedXml = Http::xmlToArray($rawXml);
            $encryptedContent = isset($encryptedXml['Encrypt']) ? $encryptedXml['Encrypt'] : '';
            if (!$crypt->verifySignature(Request::query('msg_signature'), $timestamp, $nonce, $encryptedContent)) {
                BizException::throws('微信消息签名校验失败');
            }
            $rawXml = $crypt->decrypt($encryptedContent);
        }
        $message = Http::xmlToArray($rawXml);
        if (empty($message) || null === $this->handler) {
            return 'success';
        }
        $reply = call_user_func($this->handler, $message);
        if (null === $reply || false === $reply) {
            return 'success';
        }
        if (is_string($reply)) {
            return $reply;
        }
        if ($reply instanceof Raw) {
            $xml = $reply->getRaw();
        } else if (is_object($reply) && method_exists($reply, 'toReplyData')) {
            $data = $reply->toReplyData();
            $data['ToUserName'] = isset($message['FromUserName']) ? $message['FromUserName'] : '';
            $data['FromUserName'] = isset($message['ToUserName']) ? $message['ToUserName'] : '';
            $data['CreateTime'] = time();
            $xml = Http::arrayToXml($data);
        } else {
            return 'success';
        }
        if ('aes' === $encrypted) {
            $encryptedXml = $crypt->encrypt($xml);
            $timestamp = time();
            $nonce = Http::randomString(16);
            return Http::arrayToXml([
                'Encrypt' => $encryptedXml,
                'MsgSignature' => $crypt->signature($timestamp, $nonce, $encryptedXml),
                'TimeStamp' => $timestamp,
                'Nonce' => $nonce,
            ]);
        }
        return $xml;
    }
}
