<?php

/**
 * Banner 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('Banner Seed', function () {

    if (!TestSeed::ensureTable('banner')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'position' => 'blindBoxMobile',
            'sort' => 1,
            'image' => 'asset/image/avatar.png',
            'link' => '/demo-banner-1',
            'type' => 1,
            'title' => '首页顶部横幅',
            'slogan' => '精选好物，品质保障',
            'linkText' => '限时活动，欢迎参与。',
            'colorReverse' => 1,
            'video' => '',
            'backgroundColor' => '',
        ],
        [
            'id' => 2,
            'position' => 'CreditShopMobile',
            'sort' => 2,
            'image' => 'theme/default/image/bg_1.png',
            'link' => '/demo-banner-2',
            'type' => 1,
            'title' => '活动推广位',
            'slogan' => '限时特惠，先到先得',
            'linkText' => '限时活动，欢迎参与。',
            'colorReverse' => 1,
            'video' => '',
            'backgroundColor' => '',
        ],
        [
            'id' => 3,
            'position' => 'EduMobile',
            'sort' => 3,
            'image' => 'theme/default/image/bg_2.png',
            'link' => '/demo-banner-3',
            'type' => 1,
            'title' => '新品上线公告',
            'slogan' => '官方正品，假一赔十',
            'linkText' => '限时活动，欢迎参与。',
            'colorReverse' => 1,
            'video' => '',
            'backgroundColor' => '',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('banner')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('banner', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'Banner Seed: 执行完成');
    });
});
