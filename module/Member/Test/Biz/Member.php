<?php
use ModStart\Test\TestCase;
use ModStart\Test\TestHttp;
use Module\Member\Test\Support\TestMember;

TestCase::describe('Member Biz', function () {
    $hasTable = \Illuminate\Support\Facades\Schema::hasTable('member_user');

    TestCase::test('工具类可加载', function () {
        TestCase::assertTrue(class_exists('Module\Member\Util\MemberUtil'), 'Member Biz: MemberUtil 类可加载');
        TestCase::assertTrue(class_exists('Module\Member\Auth\MemberUser'), 'Member Biz: MemberUser 类可加载');
    });

    TestCase::test('统计总数返回数值', function () use ($hasTable) {
        if (!$hasTable) {
            TestCase::assertTrue(true, '跳过（member_user 表未迁移）');
            return;
        }
        $total = \Module\Member\Util\MemberUtil::total();
        TestCase::assertTrue(is_numeric($total), 'Member Biz: total() 返回数值');
    });

    TestCase::test('登录跳转地址安全校验（防 XSS）', function () {
        $api = app(\Module\Member\Api\Controller\AuthController::class);
        $checker = function ($url) use ($api) {
            try {
                $api->checkRedirectSafety($url);
                return true;
            } catch (\ModStart\Core\Exception\BizException $e) {
                return false;
            }
        };
        // 危险协议 / 域名混淆写法一律拒绝（javascript: 会在前端 location.href 时执行）
        $rejects = [
            'javascript:alert(1)',
            'JAVASCRIPT:setInterval(function(){alert("XSS")},203)',
            ' javascript:alert(1)',
            "java\nscript:alert(1)",
            'data:text/html,<script>alert(1)</script>',
            'vbscript:msgbox(1)',
            '//evil.example.com/member',
            '///evil.example.com/member',
            'https:evil.example.com',
            'https://user@evil.example.com/member',
        ];
        foreach ($rejects as $url) {
            TestCase::assertFalse($checker($url), 'Member Biz: 危险跳转地址被拒绝 ' . str_replace("\n", '', $url));
        }
        // 站内相对地址放行
        foreach (['', '/member', 'member', '/member?redirect=%2F'] as $url) {
            TestCase::assertTrue($checker($url), 'Member Biz: 站内跳转地址放行 ' . $url);
        }
    });

    TestCase::test('API 登录保留会话 ID（客户端 api_token 保持有效）', function () use ($hasTable) {
        if (!$hasTable) {
            TestCase::assertTrue(true, '跳过（member_user 表未迁移）');
            return;
        }
        $user = \ModStart\Core\Dao\ModelUtil::get('member_user', ['username' => 'demo']);
        if (empty($user)) {
            TestCase::assertTrue(true, '跳过（无演示会员用户）');
            return;
        }
        // 客户端首次调用接口时服务端下发的 api_token（= 会话 ID），客户端后续一直使用它
        $clientToken = md5(uniqid('', true) . mt_rand()) . substr(md5(mt_rand()), 0, 8);
        $store = app('session.store');
        $store->flush();
        $store->setId($clientToken);
        $store->put('_token', md5(uniqid('', true)));
        $store->save();

        TestHttp::useToken($clientToken);
        $response = TestHttp::response('POST', '/api/login', [
            'username' => 'demo',
            'password' => '123456',
        ]);
        TestHttp::clearToken();
        $data = json_decode($response->getContent(), true);
        if (!is_array($data) || !isset($data['code']) || 0 !== intval($data['code'])) {
            TestCase::assertTrue(true, '跳过（演示用户无法登录，可能已修改密码或开启登录验证码）');
            return;
        }
        // API 客户端的 api_token 是后续所有请求的凭证，还会用来打开
        // /api/app_manager/enter?api_token=xxx 把会话交接给浏览器；登录时轮换会让客户端手里的
        // token 立刻变成未登录状态，因此这里不应回传新的 api-token
        TestCase::assertTrue(null === $response->headers->get('api-token'), 'Member Biz: API 登录不轮换会话 ID');
    });

    TestCase::test('Web / 后台登录仍更换会话 ID（防会话固定）', function () use ($hasTable) {
        if (!$hasTable) {
            TestCase::assertTrue(true, '跳过（member_user 表未迁移）');
            return;
        }
        $user = \ModStart\Core\Dao\ModelUtil::get('member_user', ['username' => 'demo']);
        if (empty($user)) {
            TestCase::assertTrue(true, '跳过（无演示会员用户）');
            return;
        }
        $store = app('session.store');
        $store->flush();
        $store->setId(md5(uniqid('', true) . mt_rand()) . substr(md5(mt_rand()), 0, 8));
        $idBefore = $store->getId();
        // 浏览器 Cookie 场景：会话 ID 来自浏览器，登录后必须更换，避免会话固定
        \ModStart\App\Core\CurrentApp::set(\ModStart\App\Core\CurrentApp::WEB);
        try {
            \Module\Member\Util\MemberUtil::fireLogin($user['id']);
        } catch (\Exception $e) {
            // 登录日志等副作用失败不影响会话 ID 判定
        }
        TestCase::assertTrue($idBefore !== $store->getId(), 'Member Biz: Web 登录更换会话 ID');
    });

    TestCase::test('完成', function () use ($hasTable) {
        if (!$hasTable) {
            TestCase::assertTrue(true, '跳过（member_user 表未迁移）');
            return;
        }
        TestCase::assertTrue(true, 'Member Biz: 完成');
    });
});