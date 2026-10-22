<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;
use Module\Vendor\QuickRun\Wechat\Message\Raw;

/**
 * 客服消息接口（/cgi-bin/message/custom/send）
 */
class CustomerServiceApi
{
    /** @var Application */
    private $app;

    /**
     * @param Application $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * @param mixed $message 文本 / 图片 / 原始消息对象
     * @return CustomerServiceMessage
     */
    public function message($message)
    {
        return new CustomerServiceMessage($this->app, $message);
    }

    /**
     * 发送消息
     * @param string $openId
     * @param mixed $message
     * @return array
     */
    public function send($openId, $message)
    {
        return $this->message($message)->to($openId)->send();
    }

    /**
     * @param mixed $message
     * @return array
     */
    public static function messageData($message)
    {
        if ($message instanceof Raw) {
            $data = @json_decode($message->getRaw(), true);
            return is_array($data) ? $data : [];
        }
        if (is_array($message)) {
            return $message;
        }
        if (is_object($message) && method_exists($message, 'toCustomerServiceData')) {
            return $message->toCustomerServiceData();
        }
        return [
            'msgtype' => 'text',
            'text' => ['content' => strval($message)],
        ];
    }
}
