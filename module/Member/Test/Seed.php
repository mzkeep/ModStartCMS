<?php
/**
 * Member 模块 Seed
 *
 * 创建/更新演示会员用户（demo / 123456），其它模块的 Seed 直接引用该账号，
 * 与后台默认管理员 admin / 123456 的做法保持一致。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Util\EncodeUtil;
use ModStart\Test\TestCase;
use ModStart\Test\TestSeed;
use Module\Member\Test\Support\TestMember;
use Module\Member\Type\MemberStatus;

TestCase::describe('Member Seed', function () {
    if (!TestSeed::ensureTable('member_user')) {
        return;
    }

    // 固定盐值，保证多次执行结果一致，且 demo / 123456 可以直接登录
    $passwordSalt = '00000000';

    TestCase::test('填充演示会员用户', function () use ($passwordSalt) {
        TestSeed::upsert('member_user', ['username' => 'demo'], [
            'phone' => null,
            'email' => 'demo@example.com',
            'password' => EncodeUtil::md5WithSalt('123456', $passwordSalt),
            'passwordSalt' => $passwordSalt,
            'avatar' => 'asset/image/avatar.svg',
            'nickname' => 'demo',
            'status' => MemberStatus::NORMAL,
            'isDeleted' => false,
        ], 'Member Seed: 演示会员用户');

        // 供后续 API / Biz 测试注入登录态使用；AUTO_TEST 未开启时退回已有用户
        $user = ModelUtil::get('member_user', ['username' => 'demo']);
        if (empty($user)) {
            $user = ModelUtil::get('member_user', []);
        }

        if (!empty($user)) {
            TestMember::setTestUserId($user['id']);
            TestCase::assertTrue(true, 'Member Seed: 演示用户 demo / 123456 (id=' . $user['id'] . ')');
        } else {
            TestCase::assertTrue(true, 'Member Seed: 无可用会员用户（跳过 Member auth 测试）');
        }
    });
});
