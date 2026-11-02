<?php

// ===============================================================================
// Vendor 模块自动截图脚本（独立运行）
//
// 用法：
//   php module/Vendor/Test/ScreenShot.php
//
// 产出（module/Vendor/Temp/ScreenShotImage/）：
//   - 安装引导「环境检查」步骤：pc.install_env.png / m.install_env.png
//   - 安装引导「配置安装」步骤：pc.install_form.png / m.install_form.png
//
// 前置条件：
//   - .env 设置 MS_AUTO_TEST=1
//   - Node + playwright-core + 系统 Chrome 可用
//   - 项目未安装（不存在 storage/install.lock）时才能截到安装引导步骤
// ===============================================================================

require __DIR__ . '/../../../vendor/autoload.php';

use ModStart\Test\TestBrowser;
use ModStart\Test\TestScreenShot;
use ModStart\Test\TestScript;
use ModStart\Test\TestServer;

TestScript::boot(__DIR__);

$module = 'Vendor';
$outDir = TestScreenShot::screenShotDir($module);
if (!is_dir($outDir)) {
    @mkdir($outDir, 0755, true);
}
foreach (glob($outDir . '/*') as $f) {
    @unlink($f);
}

$ownServer = false;
if (!TestServer::isRunning()) {
    if (!TestServer::start()) {
        echo "ERROR: 无法启动本地 server（php artisan serve）\n";
        exit(1);
    }
    $ownServer = true;
}
$baseUrl = TestServer::baseUrl();

if (!TestBrowser::isRunning() && !TestBrowser::start()) {
    echo "ERROR: 浏览器启动失败（需 Node + playwright-core + 系统 Chrome）\n";
    if ($ownServer) {
        TestServer::stop();
    }
    exit(1);
}

// [前缀, 宽, 高, 是否手机]
$modes = [
    ['pc', 1280, 800, false],
    ['m', 390, 844, true],
];

foreach ($modes as $mode) {
    list($prefix, $width, $height, $mobile) = $mode;
    echo "\n📷 {$prefix} ({$width}x{$height}" . ($mobile ? ' 手机' : '') . ")\n";

    // ⚠️ 必须先切换视口再导航（切换视口会重建 context）
    TestBrowser::setViewport($width, $height, $mobile, 2);
    $ret = TestBrowser::open(rtrim($baseUrl, '/') . '/install.php', false);
    if (empty($ret['ok'])) {
        echo "  [跳过] 安装引导页访问失败: " . (isset($ret['error']) ? $ret['error'] : 'unknown') . "\n";
        continue;
    }
    TestBrowser::waitAssets(5000);

    // 环境检查步骤（步骤导航在协议未确认前是 disabled，直接调用页面内的 switch_step）
    TestBrowser::evalJs("switch_step('env'); 1");
    sleep(2);
    $file = $outDir . '/' . $prefix . '.install_env.png';
    if (TestBrowser::screenshotCompressed($file, false, ['quality' => 85])) {
        echo '  OK ' . basename($file) . "\n";
    } else {
        echo "  [跳过] 环境检查步骤截图失败\n";
    }

    // 配置安装步骤
    TestBrowser::evalJs("switch_step('form'); 1");
    sleep(1);
    // 预览图不暴露本地数据库/管理员密码
    TestBrowser::evalJs('(function(){'
        . 'var p=document.getElementById("insDbPassword"); if(p){p.value="";}'
        . 'var a=document.getElementById("insAdminPassword"); if(a){a.value="";a.placeholder="";}'
        . 'return 1;})()');
    $file = $outDir . '/' . $prefix . '.install_form.png';
    if (TestBrowser::screenshotCompressed($file, false, ['quality' => 85])) {
        echo '  OK ' . basename($file) . "\n";
    } else {
        echo "  [跳过] 配置安装步骤截图失败\n";
    }
}

echo "\n✅ 截图完成，保存在 {$outDir}/\n";

TestBrowser::stop();
if ($ownServer) {
    TestServer::stop();
}
