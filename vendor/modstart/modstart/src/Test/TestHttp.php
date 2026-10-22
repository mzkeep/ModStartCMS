<?php

namespace ModStart\Test;

/**
 * HTTP 测试工具 — 通过 Laravel HTTP Kernel 发起内部请求，测试完整路由+中间件链路
 *
 * 基本用法：
 *   $ret = TestHttp::post('/api/banner/get');
 *   TestCase::assertSuccess($ret, 'Banner API');
 *
 * 带 Member 认证：
 *   $token = \Module\Member\Test\Support\TestMember::loginAsTestHttp();
 *   TestHttp::useToken($token);
 *   $ret = TestHttp::post('/api/member/current');
 *   TestHttp::clearToken();
 *   TestCase::assertSuccess($ret, 'Member API');
 */
class TestHttp
{
    /** @var string|null 当前 api-token（= session id） */
    private static $apiToken = null;

    /** @var array 附加请求头 */
    private static $headers = [];

    /**
     * 设置 api-token（用于 Member 认证）
     * @param string|null $token
     */
    public static function useToken($token)
    {
        self::$apiToken = $token;
    }

    /**
     * 清除 api-token
     */
    public static function clearToken()
    {
        self::$apiToken = null;
    }

    /**
     * 设置附加请求头（如 admin-api-key）
     * @param array $headers ['admin-api-key' => 'xxx']
     * @return void
     */
    public static function useHeaders($headers)
    {
        self::$headers = array_merge(self::$headers, (array)$headers);
    }

    /**
     * 清除附加请求头
     * @return void
     */
    public static function clearHeaders()
    {
        self::$headers = [];
    }

    /**
     * 发起 POST 请求
     * @param string $path  完整路径，如 /api/banner/get
     * @param array  $params POST 参数
     * @return array  解析后的 JSON 响应，失败时返回 ['code' => -1, 'msg' => '...']
     */
    public static function post($path, $params = [])
    {
        return self::request('POST', $path, $params);
    }

    /**
     * 发起 GET 请求
     * @param string $path
     * @param array  $params Query 参数
     * @return array
     */
    public static function get($path, $params = [])
    {
        return self::request('GET', $path, $params);
    }

    /**
     * 发起带文件的 POST 请求（multipart/form-data）
     * @param string $path      完整路径
     * @param array  $params    表单参数
     * @param string $fileField 文件字段名
     * @param string $filePath  本地文件绝对路径
     * @return array
     */
    public static function postFile($path, $params = [], $fileField = 'file', $filePath = '')
    {
        $file = new \Symfony\Component\HttpFoundation\File\UploadedFile($filePath, basename($filePath), null, null, null, true);
        return self::request('POST', $path, $params, [$fileField => $file]);
    }

    /**
     * 执行请求并返回原始响应对象（用于校验状态码、响应头等）
     * @param string $method
     * @param string $path
     * @param array  $params
     * @param array  $files
     * @param bool   $ajax   是否带 X-Requested-With 头（默认 true，设为 false 可用于测试跳转等非 ajax 响应）
     * @return \Illuminate\Http\Response
     */
    public static function response($method, $path, $params = [], $files = [], $ajax = true)
    {
        // 将 api-token 注入请求参数，SessionMiddleware 会根据它恢复 Session
        if (self::$apiToken) {
            $params['api-token'] = self::$apiToken;
        }

        $server = [
            'CONTENT_TYPE' => empty($files) ? 'application/x-www-form-urlencoded' : 'multipart/form-data',
        ];
        if ($ajax) {
            $server['HTTP_X_REQUESTED_WITH'] = 'XMLHttpRequest';
        }
        // SessionMiddleware 按 api_token（下划线参数）/ api-token（请求头）/ api_token（Cookie）顺序读取，
        // 这里显式写入 api-token 请求头，确保登录态会话被正确恢复
        if (self::$apiToken) {
            $server['HTTP_API_TOKEN'] = self::$apiToken;
        }
        foreach (self::$headers as $headerName => $headerValue) {
            $server['HTTP_' . strtoupper(str_replace('-', '_', $headerName))] = $headerValue;
        }

        // 模拟真实客户端：同时携带 Session Cookie 与 api-token，
        // 保证全局 StartSession 中间件直接用该 Session 恢复登录态
        $cookies = [];
        if (self::$apiToken) {
            // Session Cookie 默认会被 EncryptCookies 中间件解密校验，测试里需要先加密
            $cookieValue = self::$apiToken;
            try {
                if (app()->bound('encrypter')) {
                    $cookieValue = app('encrypter')->encrypt(self::$apiToken, false);
                }
            } catch (\Exception $e) {
            }
            $cookies[config('session.cookie')] = $cookieValue;
        }

        $request = \Illuminate\Http\Request::create($path, $method, $params, $cookies, $files, $server);

        // 重置进程内 Session 状态：
        // Laravel 5.1 的 Store::loadSession() 是 array_merge 语义，同一进程内连续发请求时，
        // 上一个请求的登录态会泄漏到下一个请求（未登录用例被误判为已登录、登录用例拿到空会话）。
        // 每次请求前清空内存中的 Session 属性并换一个空会话 ID，
        // 让每个请求只依赖自己携带的 api-token / Cookie 来恢复 Session。
        self::resetSessionState();

        if (self::$apiToken) {
            $h = app('session.store')->getHandler();
            $raw = $h->read(self::$apiToken);
            @file_put_contents(base_path('_temp/mw-debug.log'), json_encode([
                'before_request' => ['tokenHasUid' => false !== strpos($raw, 'memberUserId'), 'size' => strlen($raw)],
            ]) . "\n", FILE_APPEND);
        }

        /** @var \Illuminate\Foundation\Http\Kernel $kernel */
        $kernel = app('Illuminate\Contracts\Http\Kernel');
        return $kernel->handle($request);
    }

    /**
     * 重置进程内 Session 状态，避免请求之间互相串登录态
     * @return void
     */
    private static function resetSessionState()
    {
        $stores = [];
        try {
            $stores[] = app('session.store');
        } catch (\Exception $e) {
        }
        try {
            $stores[] = \Illuminate\Support\Facades\Session::getFacadeRoot()->driver();
        } catch (\Exception $e) {
        }
        $seen = [];
        foreach ($stores as $store) {
            if (!$store instanceof \Illuminate\Session\Store) {
                continue;
            }
            $hash = spl_object_hash($store);
            if (isset($seen[$hash])) {
                continue;
            }
            $seen[$hash] = true;
            $store->flush();
            $store->setId(md5(uniqid('', true) . mt_rand()) . substr(md5(mt_rand()), 0, 8));
        }
    }

    /**
     * 执行请求并返回解析后的响应数据
     * @param string $method
     * @param string $path
     * @param array  $params
     * @param array  $files
     * @return array
     */
    private static function request($method, $path, $params = [], $files = [])
    {
        $response = self::response($method, $path, $params, $files);

        $statusCode = $response->getStatusCode();
        $content    = $response->getContent();

        // 非 200 响应 — 提取简短错误说明
        if ($statusCode !== 200) {
            $short = substr(strip_tags($content), 0, 200);
            return ['code' => -1, 'msg' => "HTTP $statusCode: $short"];
        }

        $data = json_decode($content, true);
        if ($data === null) {
            return ['code' => -1, 'msg' => 'Invalid JSON: ' . substr($content, 0, 200)];
        }
        return $data;
    }
}
