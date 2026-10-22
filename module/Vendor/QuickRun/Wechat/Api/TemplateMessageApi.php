<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 模板消息接口（/cgi-bin/message/template/send）
 */
class TemplateMessageApi
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
     * 发送模板消息
     * @param array $data 支持 touser / template_id / url / miniprogram / data
     * @return array 微信返回结果（errcode 为 0 表示成功）
     */
    public function send($data)
    {
        $data = (array)$data;
        // 兼容 EasyWeChat 的 data 写法：标量值自动包装为 ['value' => ...]
        if (isset($data['data']) && is_array($data['data'])) {
            foreach ($data['data'] as $key => $value) {
                if (!is_array($value)) {
                    $data['data'][$key] = ['value' => strval($value)];
                }
            }
        }
        return $this->app->apiPost('/cgi-bin/message/template/send', $data);
    }
}
