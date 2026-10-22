<?php

/**
 * Article 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('Article Seed', function () {

    if (!TestSeed::ensureTable('article')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'position' => '',
            'title' => '如何快速搭建企业官网',
            'content' => '<p>本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。</p>',
            'sort' => 1,
            'alias' => 'article-seed-1',
        ],
        [
            'id' => 2,
            'position' => '',
            'title' => '产品迭代的五个关键节点',
            'content' => '<p>本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。</p>',
            'sort' => 2,
            'alias' => 'article-seed-2',
        ],
        [
            'id' => 3,
            'position' => '',
            'title' => '从零开始的内容运营方法论',
            'content' => '<p>本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。</p>',
            'sort' => 3,
            'alias' => 'article-seed-3',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('article')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('article', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'Article Seed: 执行完成');
    });
});
