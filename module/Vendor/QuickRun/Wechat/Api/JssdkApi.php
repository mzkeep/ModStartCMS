<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Illuminate\Support\Facades\Cache;
use ModStart\Core\Exception\BizException;
use Module\Vendor\QuickRun\Wechat\Application;
use Module\Vendor\QuickRun\Wechat\Http;

/**
 * JS-SDK 配置（/cgi-bin/ticket/getticket）
 */
class JssdkApi
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
     * 获取 jsapi_ticket（缓存 7000 秒）
     * @param bool $forceRefresh
     * @return string
     */
    public function ticket($forceRefresh = false)
    {
        $cacheKey = 'Wechat:JsapiTicket:' . $this->app->appId();
        if (!$forceRefresh) {
            $ticket = Cache::get($cacheKey);
            if (!empty($ticket)) {
                return $ticket;
            }
        }
        $ret = Http::get('https://api.weixin.qq.com/cgi-bin/ticket/getticket', [
            'access_token' => $this->app->accessToken(),
            'type' => 'jsapi',
        ]);
        $data = Http::jsonData($ret);
        BizException::throwsIfEmpty('获取 jsapi_ticket 失败', $data['ticket']);
        Cache::put($cacheKey, $data['ticket'], 7000);
        return $data['ticket'];
    }

    /**
     * 生成 JS-SDK 配置
     * @param array $apis 需要使用的 JS 接口列表
     * @param bool $debug
     * @param bool $beta
     * @param bool $json 是否返回 JSON 字符串
     * @param array $openTagList
     * @param string|null $url 当前页面地址（为空时取当前请求地址）
     * @return array|string
     */
    public function buildConfig($apis = [], $debug = false, $beta = false, $json = false, $openTagList = [], $url = null)
    {
        $ticket = $this->ticket();
        $nonceStr = Http::randomString(16);
        $timestamp = time();
        if (null === $url) {
            $url = \ModStart\Core\Input\Request::domain() . '/' . ltrim(\ModStart\Core\Input\Request::path(), '/');
            $url = rtrim($url, '/');
        }
        $signature = sha1('jsapi_ticket=' . $ticket . '&noncestr=' . $nonceStr . '&timestamp=' . $timestamp . '&url=' . $url);
        $config = [
            'appId' => $this->app->appId(),
            'timestamp' => $timestamp,
            'nonceStr' => $nonceStr,
            'signature' => $signature,
            'url' => $url,
            'jsApiList' => array_values((array)$apis),
            'debug' => boolval($debug),
            'beta' => boolval($beta),
            'openTagList' => array_values((array)$openTagList),
        ];
        if ($json) {
            return json_encode($config, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        }
        return $config;
    }
}
