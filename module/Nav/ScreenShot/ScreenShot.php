<?php

// ===============================================================================
// Nav 模块自动截图脚本（独立运行）
//
// 用法：
//   php module/Nav/ScreenShot/ScreenShot.php
//
// 产出（module/Nav/ScreenShot/image/）：
//   - 后台页面：<name>.png（仅截取 iframe 内容区，自动追加 _is_tab=1）
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

$module = 'Nav';

// 后台页面（仅截取 iframe 内容区）
TestScreenShot::start();
TestScreenShot::capturePages($module, [
    'nav' => '/admin/nav',
]);
TestScreenShot::stop();
