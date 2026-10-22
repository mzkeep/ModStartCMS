<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Http;
use Module\Vendor\QuickRun\Wechat\Payment;

/**
 * 微信支付下单（/pay/unifiedorder）
 */
class PaymentOrderApi
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
     * 统一下单
     * @param array $attributes trade_type / body / out_trade_no / total_fee / notify_url 等
     * @return array 微信返回数组（含 prepay_id / code_url 等）
     */
    public function unify($attributes)
    {
        $data = array_merge([
            'appid' => $this->payment->appId(),
            'mch_id' => $this->payment->mchId(),
            'nonce_str' => Http::randomString(32),
            'sign_type' => 'MD5',
        ], (array)$attributes);
        $data['sign'] = Http::md5Sign($data, $this->payment->key());
        $ret = Http::postXml('https://api.mch.weixin.qq.com/pay/unifiedorder', $data);
        if (isset($ret['return_code']) && 'SUCCESS' === $ret['return_code'] && !empty($ret['sign'])) {
            if (!Http::verifyMd5Sign($ret, $this->payment->key())) {
                throw new \Exception('微信支付返回签名校验失败');
            }
        }
        return $ret;
    }

    /**
     * 查询订单
     * @param array $attributes out_trade_no 或 transaction_id
     * @return array
     */
    public function query($attributes)
    {
        $data = array_merge([
            'appid' => $this->payment->appId(),
            'mch_id' => $this->payment->mchId(),
            'nonce_str' => Http::randomString(32),
        ], (array)$attributes);
        $data['sign'] = Http::md5Sign($data, $this->payment->key());
        return Http::postXml('https://api.mch.weixin.qq.com/pay/orderquery', $data);
    }

    /**
     * 关闭订单
     * @param string $outTradeNo
     * @return array
     */
    public function close($outTradeNo)
    {
        $data = [
            'appid' => $this->payment->appId(),
            'mch_id' => $this->payment->mchId(),
            'out_trade_no' => strval($outTradeNo),
            'nonce_str' => Http::randomString(32),
        ];
        $data['sign'] = Http::md5Sign($data, $this->payment->key());
        return Http::postXml('https://api.mch.weixin.qq.com/pay/closeorder', $data);
    }
}
