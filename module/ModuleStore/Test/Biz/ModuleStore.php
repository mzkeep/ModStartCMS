<?php

/**
 * ModuleStore 模块业务逻辑测试
 *
 * 覆盖：远程模块数据与本地模块的合并（安装 / 启用 / 版本 / 系统模块标记）、
 * 非法模块标识与包路径校验。
 */

use Illuminate\Support\Facades\Cache;
use ModStart\Core\Exception\BizException;
use ModStart\Test\TestCase;
use Module\ModuleStore\Util\ModuleStoreUtil;

TestCase::describe('ModuleStore', function () {

    TestCase::test('远程模块与本地模块合并', function () {
        Cache::put('ModuleStore_Modules:0', [
            'code' => 0,
            'data' => [
                'categories' => [['id' => 1, 'title' => '全部应用']],
                'types' => [['id' => 1, 'name' => '插件']],
                'modules' => [
                    ['name' => 'Member', 'title' => '会员（远程）', 'latestVersion' => '9.9.9'],
                    ['name' => 'RemoteOnlyModule', 'title' => '仅远程模块', 'latestVersion' => '1.0.0'],
                ],
            ],
        ], 60);

        $all = ModuleStoreUtil::all();
        TestCase::assertArrayHasKey('storeConfig', $all, '返回 storeConfig');
        TestCase::assertArrayHasKey('categories', $all, '返回 categories');
        TestCase::assertArrayHasKey('types', $all, '返回 types');
        TestCase::assertArrayHasKey('modules', $all, '返回 modules');
        TestCase::assertEquals(1, count($all['categories']), '分类数据来自远程');
        TestCase::assertEquals('全部应用', $all['categories'][0]['title'], '分类标题正确');

        $map = [];
        foreach ($all['modules'] as $module) {
            $map[$module['name']] = $module;
        }

        // 本地已安装模块：使用本地信息覆盖，并标记安装 / 启用状态
        TestCase::assertArrayHasKey('Member', $map, '本地已安装模块存在');
        TestCase::assertTrue($map['Member']['_isInstalled'], 'Member 标记为已安装');
        TestCase::assertTrue($map['Member']['_isEnabled'], 'Member 标记为已启用');
        TestCase::assertFalse($map['Member']['_isLocal'], '远程存在的模块不是本地独有');
        TestCase::assertNotEmpty($map['Member']['_localVersion'], '带出本地版本号');

        // 仅远程模块：默认未安装
        TestCase::assertArrayHasKey('RemoteOnlyModule', $map, '仅远程模块存在');
        TestCase::assertFalse($map['RemoteOnlyModule']['_isInstalled'], '仅远程模块未安装');

        // 仅本地模块：标记 _isLocal
        $localOnly = null;
        foreach ($map as $name => $module) {
            if (!empty($module['_isLocal'])) {
                $localOnly = $module;
                break;
            }
        }
        TestCase::assertNotEmpty($localOnly, '存在仅本地模块并标记 _isLocal');
        TestCase::assertArrayHasKey('releases', $localOnly, '仅本地模块补齐 releases 字段');
        // 仅本地模块（模块市场不存在）也必须带本地安装标记，否则前端会走远程安装并提示“模块不存在”
        TestCase::assertArrayHasKey('_hasLocalUninstalled', $localOnly, '仅本地模块带 _hasLocalUninstalled 字段');
        TestCase::assertArrayHasKey('_localUninstalledVersion', $localOnly, '仅本地模块带 _localUninstalledVersion 字段');
        TestCase::assertEquals(
            !$localOnly['_isInstalled'],
            $localOnly['_hasLocalUninstalled'],
            '仅本地模块的 _hasLocalUninstalled 与安装状态一致'
        );
        TestCase::assertEquals($localOnly['_localVersion'], $localOnly['_localUninstalledVersion'], '仅本地模块带出本地版本号');

        Cache::forget('ModuleStore_Modules:0');
    });

    TestCase::test('所有本地模块都带本地安装标记', function () {
        Cache::put('ModuleStore_Modules:0', [], 60);
        $all = ModuleStoreUtil::all();
        TestCase::assertNotEmpty($all['modules'], '返回本地模块列表');
        foreach ($all['modules'] as $module) {
            TestCase::assertArrayHasKey('_hasLocalUninstalled', $module, $module['name'] . ' 带 _hasLocalUninstalled');
            TestCase::assertArrayHasKey('_localUninstalledVersion', $module, $module['name'] . ' 带 _localUninstalledVersion');
        }
        Cache::forget('ModuleStore_Modules:0');
    });

    TestCase::test('远程数据为空时仍返回本地模块', function () {
        Cache::put('ModuleStore_Modules:0', [], 60);
        $all = ModuleStoreUtil::all();
        TestCase::assertEmpty($all['categories'], '无远程分类');
        TestCase::assertNotEmpty($all['modules'], '仍返回本地模块列表');
        Cache::forget('ModuleStore_Modules:0');
    });

    TestCase::test('卸载模块时校验模块标识与包路径', function () {
        $thrown = false;
        try {
            ModuleStoreUtil::unpackModule('../Member', '/tmp/not-exists.zip', '');
        } catch (BizException $e) {
            $thrown = true;
        }
        TestCase::assertTrue($thrown, '非法模块标识被拒绝');

        $thrown = false;
        try {
            ModuleStoreUtil::unpackModule('Member', '', '');
        } catch (BizException $e) {
            $thrown = true;
        }
        TestCase::assertTrue($thrown, '空包路径被拒绝');
    });

});
