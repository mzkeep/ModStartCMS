<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;
use Module\Vendor\QuickRun\Wechat\Http;

/**
 * 小程序登录（/sns/jscode2session）
 */
class MiniProgramAuthApi
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
     * 登录凭证校验，返回 openid / session_key / unionid（失败时包含 errcode / errmsg）
     * @param string $code
     * @return array
     */
    public function session($code)
    {
        $ret = Http::get('https://api.weixin.qq.com/sns/jscode2session', [
            'appid' => $this->app->appId(),
            'secret' => $this->secret(),
            'js_code' => strval($code),
            'grant_type' => 'authorization_code',
        ]);
        $data = @json_decode($ret['body'], true);
        return is_array($data) ? $data : ['errmsg' => '小程序登录接口返回格式错误'];
    }
}
