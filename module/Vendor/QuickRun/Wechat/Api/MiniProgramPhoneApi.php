<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 小程序手机号（/wxa/business/getuserphonenumber）
 */
class MiniProgramPhoneApi
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
     * 获取用户手机号
     * @param string $code
     * @return array 包含 phone_info
     */
    public function getUserPhoneNumber($code)
    {
        return $this->app->apiPost('/wxa/business/getuserphonenumber', [
            'code' => strval($code),
        ]);
    }
}
