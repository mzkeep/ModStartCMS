<?php

/**
 * Nav 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('Nav Seed', function () {

    if (!TestSeed::ensureTable('nav')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'position' => 'cinemaHomeLeft',
            'sort' => 1,
            'name' => '首页',
            'link' => '/demo-nav-1',
            'openType' => 1,
            'pid' => 0,
            'enable' => 1,
            'icon' => 'asset/image/avatar.png',
        ],
        [
            'id' => 2,
            'position' => 'cinemaHomeLeftFoot',
            'sort' => 2,
            'name' => '产品中心',
            'link' => '/demo-nav-2',
            'openType' => 1,
            'pid' => 0,
            'enable' => 1,
            'icon' => 'theme/default/image/bg_1.png',
        ],
        [
            'id' => 3,
            'position' => 'cinemaHomeLeft',
            'sort' => 3,
            'name' => '解决方案',
            'link' => '/demo-nav-3',
            'openType' => 1,
            'pid' => 0,
            'enable' => 1,
            'icon' => 'theme/default/image/bg_2.png',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('nav')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('nav', $row);
    }

    // 顶栏导航（position=head），供前台 header 与首页视觉验收使用
    $headRows = [
        ['id' => 10, 'name' => '模块市场', 'link' => '/store', 'sort' => 1, 'openType' => 1],
        ['id' => 11, 'name' => '下载', 'link' => '/download', 'sort' => 2, 'openType' => 1],
        ['id' => 12, 'name' => '在线演示', 'link' => 'https://demo.modstart.com', 'sort' => 3, 'openType' => 2],
        ['id' => 13, 'name' => '开发文档', 'link' => 'https://modstart.com/doc', 'sort' => 4, 'openType' => 2],
        ['id' => 14, 'name' => '关于我们', 'link' => '/article/about', 'sort' => 5, 'openType' => 1],
    ];
    foreach ($headRows as $row) {
        TestSeed::upsert('nav', ['id' => $row['id']], [
            'position' => 'head',
            'name' => $row['name'],
            'link' => $row['link'],
            'sort' => $row['sort'],
            'openType' => $row['openType'],
            'pid' => 0,
            'enable' => 1,
            'icon' => '',
        ]);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'Nav Seed: 执行完成');
    });
});
