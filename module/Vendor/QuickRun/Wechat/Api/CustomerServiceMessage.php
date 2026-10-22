<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use ModStart\Core\Exception\BizException;
use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 客服消息发送器（$api->message($msg)->to($openId)->send()）
 */
class CustomerServiceMessage
{
    /** @var Application */
    private $app;

    /** @var mixed */
    private $message;

    /** @var string */
    private $openId = '';

    /**
     * @param Application $app
     * @param mixed $message
     */
    public function __construct($app, $message)
    {
        $this->app = $app;
        $this->message = $message;
    }

    /**
     * @param string $openId
     * @return $this
     */
    public function to($openId)
    {
        $this->openId = strval($openId);
        return $this;
    }

    /**
     * @return array
     */
    public function send()
    {
        BizException::throwsIfEmpty('微信 openId 不能为空', $this->openId);
        $data = CustomerServiceApi::messageData($this->message);
        $data['touser'] = $this->openId;
        return $this->app->apiPost('/cgi-bin/message/custom/send', $data);
    }
}
