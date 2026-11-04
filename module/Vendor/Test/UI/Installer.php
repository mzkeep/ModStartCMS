<?php
use ModStart\Test\TestCase;
use ModStart\Test\TestUi;

TestCase::describe('Vendor Installer UI', function () {
    TestCase::test('安装引导页面真实渲染正常', function () {
        $html = TestUi::chromeDump('/install.php');
        if (strlen($html) === 0) {
            TestCase::assertTrue(true, 'Vendor Installer UI: 跳过（真实 HTTP Server 或 Chrome 不可用）');
            return;
        }
        TestCase::assertContains('ins-shell', $html, 'Vendor Installer UI: 缺少安装向导外壳');
        TestCase::assertContains('ins-brand-name', $html, 'Vendor Installer UI: 缺少品牌信息区');

        if (file_exists(base_path('storage/install.lock'))) {
            TestCase::assertContains('系统无需重复安装', $html, 'Vendor Installer UI: 已安装状态提示');
            return;
        }

        TestCase::assertContains('data-step="env"', $html, 'Vendor Installer UI: 缺少环境检查步骤');
        TestCase::assertContains('data-step="form"', $html, 'Vendor Installer UI: 缺少配置安装步骤');
        TestCase::assertContains('ins-check is-ok', $html, 'Vendor Installer UI: 缺少环境检查项');
        TestCase::assertContains('PHP版本 ' . PHP_VERSION, $html, 'Vendor Installer UI: 当前 PHP 版本应通过环境检查');
        TestCase::assertContains('ins-step', $html, 'Vendor Installer UI: 缺少步骤导航');
        TestCase::assertContains('ins-pane-foot', $html, 'Vendor Installer UI: 缺少操作栏');
        TestCase::assertContains('确定安装', $html, 'Vendor Installer UI: 缺少提交按钮');
    });
});
