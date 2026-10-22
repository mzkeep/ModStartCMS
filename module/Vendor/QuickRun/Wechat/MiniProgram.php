<?php

namespace Module\Vendor\QuickRun\Wechat;

use Module\Vendor\QuickRun\Wechat\Api\MiniProgramAppCodeApi;
use Module\Vendor\QuickRun\Wechat\Api\MiniProgramAuthApi;
use Module\Vendor\QuickRun\Wechat\Api\MiniProgramPhoneApi;
use Module\Vendor\QuickRun\Wechat\Api\TemplateMessageApi;

/**
 * 微信小程序应用
 *
 * 兼容原 EasyWeChat 的常用调用方式：
 *   $app->auth->session($code)
 *   $app->app_code->getUnlimit($scene, $params)
 *   $app->phone_number->getUserPhoneNumber($code)
 *   $app->template_message->send($data)
 */
class MiniProgram extends Application
{
    /**
     * @param string $name
     * @return mixed
     */
    public function __get($name)
    {
        switch ($name) {
            case 'auth':
                return new MiniProgramAuthApi($this);
            case 'app_code':
                return new MiniProgramAppCodeApi($this);
            case 'phone_number':
                return new MiniProgramPhoneApi($this);
            case 'template_message':
                return new TemplateMessageApi($this);
        }
        throw new \RuntimeException('微信小程序接口暂不支持: ' . $name);
    }
}
