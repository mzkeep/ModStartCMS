<?php

namespace Module\Vendor\QuickRun\Wechat;

use Module\Vendor\QuickRun\Wechat\Api\CustomerServiceApi;
use Module\Vendor\QuickRun\Wechat\Api\JssdkApi;
use Module\Vendor\QuickRun\Wechat\Api\MediaApi;
use Module\Vendor\QuickRun\Wechat\Api\MenuApi;
use Module\Vendor\QuickRun\Wechat\Api\QrcodeApi;
use Module\Vendor\QuickRun\Wechat\Api\TemplateMessageApi;
use Module\Vendor\QuickRun\Wechat\Api\UserApi;

/**
 * 微信公众号应用
 *
 * 兼容原 EasyWeChat 的常用调用方式：
 *   $app->qrcode->temporary($scene, $expire)
 *   $app->media->uploadImage($path)
 *   $app->customer_service->message($msg)->to($openId)->send()
 *   $app->jssdk->buildConfig($apis, $debug, $beta, $json, $openTagList, $url)
 *   $app->menu->create($menu)
 *   $app->template_message->send($data)
 *   $app->user->get($openId)
 *   $app->server->push(callable) / $app->server->serve()
 */
class OfficialAccount extends Application
{
    /**
     * @param string $name
     * @return mixed
     */
    public function __get($name)
    {
        switch ($name) {
            case 'qrcode':
                return new QrcodeApi($this);
            case 'media':
                return new MediaApi($this);
            case 'customer_service':
                return new CustomerServiceApi($this);
            case 'jssdk':
                return new JssdkApi($this);
            case 'menu':
                return new MenuApi($this);
            case 'template_message':
                return new TemplateMessageApi($this);
            case 'user':
                return new UserApi($this);
            case 'server':
                return new Server($this);
        }
        throw new \RuntimeException('微信公众号接口暂不支持: ' . $name);
    }
}
