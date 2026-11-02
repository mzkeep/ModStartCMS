<?php

use ModStart\Test\TestCase;
use Module\Vendor\Provider\SiteTemplate\SiteTemplateUtil;

/**
 * SiteTemplateUtil::seedDemo() — 主题演示数据种子执行工具
 *
 * 只校验「不满足执行条件时安全跳过」与「主题解析失败返回 null」这两条无副作用的分支：
 * 真正执行种子会清空 blog 等演示表，由 seed-test 的 Seed 阶段分别验证，这里不做破坏性调用。
 */
TestCase::describe('SiteTemplateUtil::seedDemo 演示数据种子执行', function () {

    TestCase::test('模块名为空时返回 false', function () {
        TestCase::assertFalse(SiteTemplateUtil::seedDemo(''), 'seedDemo(\'\') 返回 false');
    });

    TestCase::test('模块不存在时返回 false（不抛异常）', function () {
        TestCase::assertFalse(SiteTemplateUtil::seedDemo('NotExistsModuleForSeed'), 'seedDemo(NotExistsModuleForSeed) 返回 false');
    });

    TestCase::test('主题名不存在时 resolve 返回 null', function () {
        TestCase::assertEmpty(SiteTemplateUtil::resolve('NotExistsThemeName'), 'resolve(NotExistsThemeName) 为空');
    });

    TestCase::test('别名解析忽略大小写（当前站点主题可解析）', function () {
        $current = SiteTemplateUtil::current();
        if (empty($current)) {
            TestCase::assertTrue(true, '当前站点未设置主题，跳过别名解析校验');
            return;
        }
        $provider = SiteTemplateUtil::resolve(strtolower($current));
        TestCase::assertNotEmpty($provider, '别名解析忽略大小写：' . strtolower($current));
        if (!empty($provider)) {
            TestCase::assertEquals($current, $provider->name(), '解析结果与当前主题一致');
        }
    });

});
