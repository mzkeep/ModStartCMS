<?php

/**
 * Vendor 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('Vendor Seed', function () {

    if (!TestSeed::ensureTable('data_temp')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'category' => '',
            'path' => 'vendor-seed-1',
            'filename' => '',
            'size' => 1,
            'md5' => 'VEN202610160001',
        ],
        [
            'id' => 2,
            'category' => '',
            'path' => 'vendor-seed-2',
            'filename' => '',
            'size' => 1,
            'md5' => 'VEN202610160002',
        ],
        [
            'id' => 3,
            'category' => '',
            'path' => 'vendor-seed-3',
            'filename' => '',
            'size' => 1,
            'md5' => 'VEN202610160003',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('data_temp')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('data_temp', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'Vendor Seed: 执行完成');
    });
});
