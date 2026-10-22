<?php

/**
 * AigcBase 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('AigcBase Seed', function () {

    if (!TestSeed::ensureTable('aigc_key_pool')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'type' => '',
            'status' => 1,
            'priority' => 1,
            'param' => '{}',
            'remark' => '这是用于演示的示例数据，可在后台自由编辑或删除。',
            'lastCallTime' => '2026-10-16 17:37:15',
            'callCount' => 1,
            'successCount' => 1,
            'failCount' => 1,
        ],
        [
            'id' => 2,
            'type' => '',
            'status' => 1,
            'priority' => 1,
            'param' => '{}',
            'remark' => '这是用于演示的示例数据，可在后台自由编辑或删除。',
            'lastCallTime' => '2026-10-15 17:37:15',
            'callCount' => 2,
            'successCount' => 2,
            'failCount' => 2,
        ],
        [
            'id' => 3,
            'type' => '',
            'status' => 1,
            'priority' => 1,
            'param' => '{}',
            'remark' => '这是用于演示的示例数据，可在后台自由编辑或删除。',
            'lastCallTime' => '2026-10-14 17:37:15',
            'callCount' => 3,
            'successCount' => 3,
            'failCount' => 3,
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('aigc_key_pool')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('aigc_key_pool', $row);
    }

    if (!TestSeed::ensureTable('aigc_task')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'memberUserId' => 0,
            'biz' => '',
            'status' => 1,
            'statusRemark' => '您可以在后台对应配置项中完成设置，如有疑问请联系技术支持。',
            'startTime' => '2026-10-16 17:37:15',
            'cost' => 1990,
            'modelConfig' => '{}',
            'result' => '示例内容',
            'creditCost' => 1990,
        ],
        [
            'id' => 2,
            'memberUserId' => 0,
            'biz' => '',
            'status' => 1,
            'statusRemark' => '您可以在后台对应配置项中完成设置，如有疑问请联系技术支持。',
            'startTime' => '2026-10-15 17:37:15',
            'cost' => 2990,
            'modelConfig' => '{}',
            'result' => '示例内容',
            'creditCost' => 2990,
        ],
        [
            'id' => 3,
            'memberUserId' => 0,
            'biz' => '',
            'status' => 1,
            'statusRemark' => '您可以在后台对应配置项中完成设置，如有疑问请联系技术支持。',
            'startTime' => '2026-10-14 17:37:15',
            'cost' => 3990,
            'modelConfig' => '{}',
            'result' => '示例内容',
            'creditCost' => 3990,
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('aigc_task')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('aigc_task', $row);
    }

    if (!TestSeed::ensureTable('aigc_work')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'biz' => '',
            'status' => 1,
            'statusRemark' => '系统自动记录的数据。',
            'startTime' => '2026-10-16 17:37:15',
            'cost' => 1990,
            'param' => '{}',
            'result' => '',
        ],
        [
            'id' => 2,
            'biz' => '',
            'status' => 1,
            'statusRemark' => '系统自动记录的数据。',
            'startTime' => '2026-10-15 17:37:15',
            'cost' => 2990,
            'param' => '{}',
            'result' => '',
        ],
        [
            'id' => 3,
            'biz' => '',
            'status' => 1,
            'statusRemark' => '系统自动记录的数据。',
            'startTime' => '2026-10-14 17:37:15',
            'cost' => 3990,
            'param' => '{}',
            'result' => '',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('aigc_work')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('aigc_work', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'AigcBase Seed: 执行完成');
    });
});
