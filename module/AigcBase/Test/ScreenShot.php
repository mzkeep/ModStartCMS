<?php

// ===============================================================================
// AigcBase 模块自动截图脚本（独立运行）
//
// 用法：
//   php module/AigcBase/Test/ScreenShot.php
//
// 产出（module/AigcBase/Temp/ScreenShotImage/）：
//   - 前台页面：pc.<name>.png / pcFull.<name>.png / m.<name>.png / mFull.<name>.png
//   - 后台页面：pc.<name>.png（仅截取 iframe 内容区，自动追加 _is_tab=1）
//
// 前置条件：
//   - .env 设置 MS_AUTO_TEST=1（忽略后台登录验证码）
//   - Node + playwright-core + 系统 Chrome 可用
//   - 截图前请先执行 Seed 填充演示数据：php artisan modstart:seed-test --phase=seed
// ===============================================================================

require __DIR__ . '/../../../vendor/autoload.php';

use ModStart\Test\TestScreenShot;
use ModStart\Test\TestScript;

TestScript::boot(__DIR__);

$module = 'AigcBase';

// 前台页面（PC + 手机，各含视口图与全页长图）
// 注意：该模块前台路由带会员鉴权，未登录时可能跳转登录页
TestScreenShot::captureFrontPages($module, [
    'distribution' => '/aigc/distribution',
]);

// 后台页面（仅截取 iframe 内容区）
TestScreenShot::start();
TestScreenShot::capturePages($module, [
    'config' => '/admin/aigc/key_pool/config',
    'key_pool' => '/admin/aigc/key_pool',
]);
TestScreenShot::stop();
