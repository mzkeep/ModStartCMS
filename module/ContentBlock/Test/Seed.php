<?php

/**
 * ContentBlock 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('ContentBlock Seed', function () {

    if (!TestSeed::ensureTable('content_block')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'type' => 'basic',
            'name' => '如何快速搭建企业官网',
            'title' => '如何快速搭建企业官网',
            'image' => 'asset/image/avatar.png',
            'link' => '/demo-contentblock-1',
            'content' => '<p>本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。</p>',
            'sort' => 1,
            'startTime' => '2026-10-16 17:37:16',
            'endTime' => '2026-10-16 17:37:16',
            'enable' => 1,
            'remark' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'texts' => '示例内容',
            'images' => '["asset\/image\/avatar.png","theme\/default\/image\/bg_1.png"]',
        ],
        [
            'id' => 2,
            'type' => 'image',
            'name' => '产品迭代的五个关键节点',
            'title' => '产品迭代的五个关键节点',
            'image' => 'theme/default/image/bg_1.png',
            'link' => '/demo-contentblock-2',
            'content' => '<p>本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。</p>',
            'sort' => 2,
            'startTime' => '2026-10-15 17:37:16',
            'endTime' => '2026-10-15 17:37:16',
            'enable' => 1,
            'remark' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'texts' => '示例内容',
            'images' => '["theme\/default\/image\/bg_1.png","theme\/default\/image\/bg_2.png"]',
        ],
        [
            'id' => 3,
            'type' => 'html',
            'name' => '从零开始的内容运营方法论',
            'title' => '从零开始的内容运营方法论',
            'image' => 'theme/default/image/bg_2.png',
            'link' => '/demo-contentblock-3',
            'content' => '<p>本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。</p>',
            'sort' => 3,
            'startTime' => '2026-10-14 17:37:16',
            'endTime' => '2026-10-14 17:37:16',
            'enable' => 1,
            'remark' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'texts' => '示例内容',
            'images' => '["theme\/default\/image\/bg_2.png","theme\/default\/image\/bg_3.png"]',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('content_block')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('content_block', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'ContentBlock Seed: 执行完成');
    });
});
