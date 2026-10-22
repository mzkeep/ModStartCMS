<?php

/**
 * VisitStatistic 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('VisitStatistic Seed', function () {

    if (!TestSeed::ensureTable('visit_statistic_daily_report')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'day' => '2026-10-16',
            'uv' => 1,
            'pv' => 1,
        ],
        [
            'id' => 2,
            'day' => '2026-10-15',
            'uv' => 2,
            'pv' => 2,
        ],
        [
            'id' => 3,
            'day' => '2026-10-14',
            'uv' => 3,
            'pv' => 3,
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('visit_statistic_daily_report')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('visit_statistic_daily_report', $row);
    }

    if (!TestSeed::ensureTable('visit_statistic_item')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'url' => '/demo-visitstatistic-1',
            'ip' => '127.0.0.1',
            'device' => 1,
            'ua' => '',
        ],
        [
            'id' => 2,
            'url' => '/demo-visitstatistic-2',
            'ip' => '127.0.0.1',
            'device' => 1,
            'ua' => '',
        ],
        [
            'id' => 3,
            'url' => '/demo-visitstatistic-3',
            'ip' => '127.0.0.1',
            'device' => 1,
            'ua' => '',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('visit_statistic_item')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('visit_statistic_item', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'VisitStatistic Seed: 执行完成');
    });
});
