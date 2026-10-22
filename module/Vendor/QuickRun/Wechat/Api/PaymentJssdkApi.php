<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Http;
use Module\Vendor\QuickRun\Wechat\Payment;

/**
 * 微信支付 JS-SDK 配置（公众号 / 小程序内支付）
 */
class PaymentJssdkApi
{
    /** @var Payment */
    private $payment;

    /**
     * @param Payment $payment
     */
    public function __construct($payment)
    {
        $this->payment = $payment;
    }

    /**
     * 生成调起支付的配置
     * @param string $prepayId
     * @param bool $json 是否返回 JSON 字符串
     * @return array|string
     */
    public function bridgeConfig($prepayId, $json = false)
    {
        $config = [
            'appId' => $this->payment->appId(),
            'timeStamp' => strval(time()),
            'nonceStr' => Http::randomString(32),
            'package' => 'prepay_id=' . strval($prepayId),
            'signType' => 'MD5',
        ];
        $config['paySign'] = Http::md5Sign($config, $this->payment->key());
        if ($json) {
            return json_encode($config, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        }
        return $config;
    }
}
