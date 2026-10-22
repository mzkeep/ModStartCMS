<?php

namespace Module\Vendor\QuickRun\Wechat;

use Illuminate\Support\Facades\Cache;
use ModStart\Core\Exception\BizException;

/**
 * 微信应用基类（公众号 / 小程序 / 支付共用配置与 access_token）
 */
abstract class Application
{
    /** @var array */
    protected $config = [];

    /**
     * @param array $config 支持 app_id / secret / token / aes_key / mch_id / key 等
     */
    public function __construct($config = [])
    {
        $this->config = (array)$config;
    }

    /**
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    public function config($key, $default = null)
    {
        return isset($this->config[$key]) ? $this->config[$key] : $default;
    }

    /**
     * @return string
     */
    public function appId()
    {
        $appId = $this->config('app_id');
        BizException::throwsIf('微信 AppId 未配置', empty($appId));
        return $appId;
    }

    /**
     * @return string
     */
    public function secret()
    {
        $secret = $this->config('secret');
        BizException::throwsIf('微信 AppSecret 未配置', empty($secret));
        return $secret;
    }

    /**
     * 获取 access_token（缓存 7000 秒）
     * @param bool $forceRefresh
     * @return string
     */
    public function accessToken($forceRefresh = false)
    {
        $cacheKey = 'Wechat:AccessToken:' . $this->appId();
        if (!$forceRefresh) {
            $token = Cache::get($cacheKey);
            if (!empty($token)) {
                return $token;
            }
        }
        $ret = Http::get('https://api.weixin.qq.com/cgi-bin/token', [
            'grant_type' => 'client_credential',
            'appid' => $this->appId(),
            'secret' => $this->secret(),
        ]);
        $data = @json_decode($ret['body'], true);
        if (empty($data['access_token'])) {
            $message = isset($data['errmsg']) ? $data['errmsg'] : '获取 access_token 失败';
            if (false !== strpos($message, 'invalid ip')) {
                BizException::throws('请将服务器IP加入微信接口白名单(' . $message . ')');
            }
            BizException::throws('微信接口错误: ' . $message);
        }
        Cache::put($cacheKey, $data['access_token'], 7000);
        return $data['access_token'];
    }

    /**
     * 清除 access_token 缓存
     * @return void
     */
    public function clearAccessToken()
    {
        Cache::forget('Wechat:AccessToken:' . $this->appId());
    }

    /**
     * 接口地址
     * @param string $path
     * @return string
     */
    protected function apiUrl($path)
    {
        return 'https://api.weixin.qq.com' . $path;
    }

    /**
     * GET 接口（自动附加 access_token，errcode 40001/42001 时刷新后重试一次）
     * @param string $path
     * @param array $query
     * @return array
     */
    public function apiGet($path, $query = [])
    {
        $query['access_token'] = $this->accessToken();
        $ret = Http::get($this->apiUrl($path), $query);
        $data = @json_decode($ret['body'], true);
        if (is_array($data) && isset($data['errcode']) && in_array(intval($data['errcode']), [40001, 42001], true)) {
            $this->clearAccessToken();
            $query['access_token'] = $this->accessToken(true);
            $ret = Http::get($this->apiUrl($path), $query);
        }
        return Http::jsonData($ret);
    }

    /**
     * POST 接口（JSON）
     * @param string $path
     * @param array $data
     * @return array
     */
    public function apiPost($path, $data = [])
    {
        $token = $this->accessToken();
        $ret = Http::postJson($this->apiUrl($path) . '?access_token=' . $token, $data);
        $json = @json_decode($ret['body'], true);
        if (is_array($json) && isset($json['errcode']) && in_array(intval($json['errcode']), [40001, 42001], true)) {
            $this->clearAccessToken();
            $token = $this->accessToken(true);
            $ret = Http::postJson($this->apiUrl($path) . '?access_token=' . $token, $data);
        }
        return Http::jsonData($ret);
    }

    /**
     * POST 接口（原始响应，用于下载小程序码等二进制返回）
     * @param string $path
     * @param array $data
     * @return BodyResponse
     */
    public function apiPostRaw($path, $data = [])
    {
        $token = $this->accessToken();
        $ret = Http::postJson($this->apiUrl($path) . '?access_token=' . $token, $data);
        $json = @json_decode($ret['body'], true);
        if (is_array($json) && isset($json['errcode']) && intval($json['errcode']) > 0) {
            BizException::throws('微信接口错误(' . $json['errcode'] . '): ' . (isset($json['errmsg']) ? $json['errmsg'] : ''));
        }
        return new BodyResponse($ret['body']);
    }
}
