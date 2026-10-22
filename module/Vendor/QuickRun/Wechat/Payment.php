<?php

namespace Module\Vendor\QuickRun\Wechat;

use ModStart\Core\Exception\BizException;
use Module\Vendor\QuickRun\Wechat\Api\PaymentJssdkApi;
use Module\Vendor\QuickRun\Wechat\Api\PaymentOrderApi;

/**
 * 微信支付应用（V2 接口）
 *
 * 兼容原 EasyWeChat 的常用调用方式：
 *   $payment->order->unify($attributes)
 *   $payment->jssdk->bridgeConfig($prepayId, false)
 *   $payment->handlePaidNotify(function ($message, $fail) { ... })
 */
class Payment extends Application
{
    /**
     * @param string $name
     * @return mixed
     */
    public function __get($name)
    {
        switch ($name) {
            case 'order':
                return new PaymentOrderApi($this);
            case 'jssdk':
                return new PaymentJssdkApi($this);
        }
        throw new \RuntimeException('微信支付接口暂不支持: ' . $name);
    }

    /**
     * @return string
     */
    public function mchId()
    {
        $mchId = $this->config('mch_id');
        BizException::throwsIf('微信支付商户号未配置', empty($mchId));
        return $mchId;
    }

    /**
     * @return string
     */
    public function key()
    {
        $key = $this->config('key');
        BizException::throwsIf('微信支付密钥未配置', empty($key));
        return $key;
    }

    /**
     * 处理支付结果通知
     * @param callable $handler function ($message, callable $fail) { return true; }
     * @return string 应答 XML
     */
    public function handlePaidNotify($handler)
    {
        $raw = Request::rawBody();
        $message = Http::xmlToArray($raw);
        if (empty($message)) {
            return Http::arrayToXml(['return_code' => 'FAIL', 'return_msg' => 'empty body']);
        }
        if (!Http::verifyMd5Sign($message, $this->key())) {
            return Http::arrayToXml(['return_code' => 'FAIL', 'return_msg' => 'sign error']);
        }
        if (!isset($message['return_code']) || 'SUCCESS' !== $message['return_code']) {
            return Http::arrayToXml(['return_code' => 'FAIL', 'return_msg' => 'return_code error']);
        }
        $failed = null;
        $fail = function ($message) use (&$failed) {
            $failed = strval($message);
        };
        $result = call_user_func($handler, $message, $fail);
        if (null !== $failed) {
            return Http::arrayToXml(['return_code' => 'FAIL', 'return_msg' => $failed]);
        }
        if (false === $result) {
            return Http::arrayToXml(['return_code' => 'FAIL', 'return_msg' => 'handle error']);
        }
        return Http::arrayToXml(['return_code' => 'SUCCESS', 'return_msg' => 'OK']);
    }
}
