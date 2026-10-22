<?php

/**
 * Partner 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('Partner Seed', function () {

    if (!TestSeed::ensureTable('partner')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'position' => 'ResHome',
            'sort' => 1,
            'title' => '演示数据一',
            'logo' => 'asset/image/avatar.png',
            'link' => '/demo-partner-1',
            'enable' => 1,
        ],
        [
            'id' => 2,
            'position' => 'wenkuHome',
            'sort' => 2,
            'title' => '演示数据二',
            'logo' => 'theme/default/image/bg_1.png',
            'link' => '/demo-partner-2',
            'enable' => 1,
        ],
        [
            'id' => 3,
            'position' => 'Blog',
            'sort' => 3,
            'title' => '演示数据三',
            'logo' => 'theme/default/image/bg_2.png',
            'link' => '/demo-partner-3',
            'enable' => 1,
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('partner')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('partner', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'Partner Seed: 执行完成');
    });
});
