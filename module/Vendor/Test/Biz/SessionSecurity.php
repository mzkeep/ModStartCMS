<?php

/**
 * /session 会话初始化接口安全测试
 *
 * 覆盖：未签名请求拒绝、签名被篡改拒绝、票据过期 / 重复使用拒绝、开放重定向拒绝、
 * 合法票据不采用票据中的会话 ID、已登录用户点击票据不会把登录态写入票据会话。
 */

use ModStart\Core\Util\SerializeUtil;
use ModStart\Test\TestCase;
use ModStart\Test\TestHttp;
use Module\Vendor\Util\NoneLoginOperateUtil;
use Module\Vendor\Util\SessionUtil;

TestCase::describe('Vendor Session 接口安全', function () {

    /** 生成合法的 40 位十六进制会话 ID */
    $sessionId = function () {
        return md5(uniqid('', true) . mt_rand()) . substr(md5(mt_rand()), 0, 8);
    };

    /** 按 /session 约定构造签名查询串 */
    $signedQuery = function ($apiToken, $redirect, $timestamp = null) {
        $timestamp = null === $timestamp ? time() : intval($timestamp);
        $nonce = 'session' . mt_rand(100000, 999999);
        $param = SerializeUtil::jsonEncode([
            'api_token' => $apiToken,
            'redirect' => $redirect,
        ]);
        return http_build_query([
            'timestamp' => $timestamp,
            'nonce' => $nonce,
            'param' => $param,
            'sign' => NoneLoginOperateUtil::sign('session', $nonce, $timestamp, $param),
        ]);
    };

    /** 读取响应下发的会话 ID（解密 Cookie） */
    $responseSessionId = function ($response) {
        $cookieName = config('session.cookie');
        foreach ($response->headers->getCookies() as $cookie) {
            if ($cookie->getName() === $cookieName) {
                try {
                    return app('encrypter')->decrypt($cookie->getValue());
                } catch (\Exception $e) {
                    return null;
                }
            }
        }
        return null;
    };

    /** 写入一个指定 ID 的会话，返回该 ID */
    $seedSession = function ($id, $data = []) {
        $store = app('session.store');
        $store->flush();
        $store->setId($id);
        $store->put('_token', md5(uniqid('', true)));
        foreach ($data as $k => $v) {
            $store->put($k, $v);
        }
        $store->save();
        return $id;
    };

    TestCase::test('未签名请求被拒绝', function () use ($sessionId) {
        $path = '/session?api_token=' . $sessionId() . '&redirect=' . urlencode('/member');
        $response = TestHttp::response('GET', $path, [], [], false);
        TestCase::assertTrue($response->getStatusCode() !== 302, 'Vendor: /session 未签名请求不被执行');
    });

    TestCase::test('签名后篡改 api_token 被拒绝', function () use ($sessionId) {
        $timestamp = time();
        $nonce = 'session' . mt_rand(100000, 999999);
        $signedParam = SerializeUtil::jsonEncode([
            'api_token' => $sessionId(),
            'redirect' => '/member',
        ]);
        $tamperedParam = SerializeUtil::jsonEncode([
            'api_token' => $sessionId(),
            'redirect' => '/member',
        ]);
        $query = http_build_query([
            'timestamp' => $timestamp,
            'nonce' => $nonce,
            'param' => $tamperedParam,
            'sign' => NoneLoginOperateUtil::sign('session', $nonce, $timestamp, $signedParam),
        ]);
        $response = TestHttp::response('GET', '/session?' . $query, [], [], false);
        TestCase::assertTrue($response->getStatusCode() !== 302, 'Vendor: /session 篡改 api_token 后签名校验失败');
    });

    TestCase::test('过期票据被拒绝', function () use ($sessionId, $signedQuery) {
        $query = $signedQuery($sessionId(), '/member', time() - SessionUtil::TICKET_EXPIRE - 60);
        $response = TestHttp::response('GET', '/session?' . $query, [], [], false);
        TestCase::assertTrue($response->getStatusCode() !== 302, 'Vendor: /session 过期票据不被执行');
    });

    TestCase::test('开放重定向地址被拒绝', function () use ($sessionId, $signedQuery) {
        $query = $signedQuery($sessionId(), 'https://evil.example.com/phish');
        $response = TestHttp::response('GET', '/session?' . $query, [], [], false);
        TestCase::assertTrue($response->getStatusCode() !== 302, 'Vendor: /session 拒绝跳转外站地址');
    });

    TestCase::test('票据只能使用一次', function () use ($sessionId, $signedQuery) {
        $query = $signedQuery($sessionId(), '/member');
        $first = TestHttp::response('GET', '/session?' . $query, [], [], false);
        TestCase::assertEquals(302, $first->getStatusCode(), 'Vendor: /session 首次使用票据成功');
        $second = TestHttp::response('GET', '/session?' . $query, [], [], false);
        TestCase::assertTrue($second->getStatusCode() !== 302, 'Vendor: /session 重复使用票据被拒绝');
    });

    TestCase::test('浏览器不会使用票据中的会话 ID', function () use ($sessionId, $signedQuery, $seedSession, $responseSessionId) {
        $ticketSessionId = $seedSession($sessionId(), ['memberUserId' => 12345]);
        $response = TestHttp::response('GET', '/session?' . $signedQuery($ticketSessionId, '/member'), [], [], false);
        TestCase::assertEquals(302, $response->getStatusCode(), 'Vendor: /session 合法票据返回跳转');
        TestCase::assertContains('/member', (string)$response->headers->get('Location'), 'Vendor: /session 跳转到站内地址');
        $browserSessionId = $responseSessionId($response);
        TestCase::assertTrue(null !== $browserSessionId, 'Vendor: /session 下发新的会话 Cookie');
        TestCase::assertTrue($browserSessionId !== $ticketSessionId, 'Vendor: /session 浏览器会话 ID 与票据 ID 不同');
        // 票据指向的会话数据（登录态）会迁移到新的浏览器会话
        app('session.store')->save();
        $raw = (string)app('session.store')->getHandler()->read($browserSessionId);
        TestCase::assertTrue(false !== strpos($raw, 'memberUserId'), 'Vendor: /session 票据会话数据迁移到新会话');
    });

    TestCase::test('SessionUtil 生成的交接链接可用且只能使用一次', function () use ($sessionId) {
        // 固定当前会话 ID，保证链接中的 api_token 合法
        app('session.store')->setId($sessionId());
        $url = SessionUtil::startForWebFullUrl('/member');
        $path = parse_url($url, PHP_URL_PATH) . '?' . parse_url($url, PHP_URL_QUERY);
        $response = TestHttp::response('GET', $path, [], [], false);
        TestCase::assertEquals(302, $response->getStatusCode(), 'Vendor: SessionUtil 交接链接可用');
        TestCase::assertContains('/member', (string)$response->headers->get('Location'), 'Vendor: SessionUtil 交接链接跳转站内地址');
        $again = TestHttp::response('GET', $path, [], [], false);
        TestCase::assertTrue($again->getStatusCode() !== 302, 'Vendor: SessionUtil 交接链接重复使用被拒绝');
    });

    TestCase::test('已登录用户点击票据不会把登录态写入票据会话', function () use ($sessionId, $signedQuery, $seedSession, $responseSessionId) {
        $victimSessionId = $seedSession($sessionId(), ['memberUserId' => 99999]);
        $ticketSessionId = $seedSession($sessionId());

        TestHttp::useToken($victimSessionId);
        $response = TestHttp::response('GET', '/session?' . $signedQuery($ticketSessionId, '/member'), [], [], false);
        TestHttp::clearToken();
        TestCase::assertEquals(302, $response->getStatusCode(), 'Vendor: /session 已登录用户访问票据返回跳转');

        $handler = app('session.store')->getHandler();
        $browserSessionId = $responseSessionId($response);
        TestCase::assertTrue($browserSessionId !== $ticketSessionId, 'Vendor: /session 浏览器会话 ID 与票据 ID 不同');
        TestCase::assertTrue(false === strpos((string)$handler->read($ticketSessionId), 'memberUserId'), 'Vendor: 票据会话未写入登录态');
        app('session.store')->save();
        TestCase::assertTrue(false === strpos((string)$handler->read($browserSessionId), 'memberUserId'), 'Vendor: 新会话未携带当前浏览器的登录态');
    });
});
