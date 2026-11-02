<?php

/**
 * Cms 模块 Seed 测试数据填充
 *
 * 在 AUTO_TEST=true 时写入场景化演示数据，供后台列表 / 前台页面展示。
 * 写入前先清空对应表，保证多次执行结果一致且不与唯一索引冲突。
 */

use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Illuminate\Support\Facades\DB;
use ModStart\Test\TestSeed;

TestCase::describe('Cms Seed', function () {

    if (!TestSeed::ensureTable('cms_cat')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'pid' => 0,
            'sort' => 1,
            'title' => '如何快速搭建企业官网',
            'subTitle' => '如何快速搭建企业官网',
            'bannerBg' => 'asset/image/avatar.png',
            'url' => '/demo-cms-1-1',
            'modelId' => 1,
            'listTemplate' => '',
            'detailTemplate' => '建国路 88 号 1 号楼 1201 室',
            'seoTitle' => '如何快速搭建企业官网',
            'seoDescription' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'seoKeywords' => '精选好物，品质保障',
            'icon' => 'asset/image/avatar.png',
            'cover' => 'asset/image/avatar.png',
            'visitMemberGroupEnable' => 1,
            'visitMemberGroups' => '',
            'visitMemberVipEnable' => 1,
            'visitMemberVips' => '',
            'pageTemplate' => '',
            'formTemplate' => '',
            'memberUserPostEnable' => 1,
            'postMemberGroupEnable' => 1,
            'postMemberGroups' => '',
            'postMemberVipEnable' => 1,
            'postMemberVips' => '',
            'pageSize' => 1,
            'enable' => 1,
            'captchaProvider' => '',
        ],
        [
            'id' => 2,
            'pid' => 0,
            'sort' => 2,
            'title' => '产品迭代的五个关键节点',
            'subTitle' => '产品迭代的五个关键节点',
            'bannerBg' => 'theme/default/image/bg_1.png',
            'url' => '/demo-cms-2-2',
            'modelId' => 1,
            'listTemplate' => '',
            'detailTemplate' => '世纪大道 100 号 2503 室',
            'seoTitle' => '产品迭代的五个关键节点',
            'seoDescription' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'seoKeywords' => '限时特惠，先到先得',
            'icon' => 'theme/default/image/bg_1.png',
            'cover' => 'theme/default/image/bg_1.png',
            'visitMemberGroupEnable' => 1,
            'visitMemberGroups' => '',
            'visitMemberVipEnable' => 1,
            'visitMemberVips' => '',
            'pageTemplate' => '',
            'formTemplate' => '',
            'memberUserPostEnable' => 1,
            'postMemberGroupEnable' => 1,
            'postMemberGroups' => '',
            'postMemberVipEnable' => 1,
            'postMemberVips' => '',
            'pageSize' => 1,
            'enable' => 1,
            'captchaProvider' => '',
        ],
        [
            'id' => 3,
            'pid' => 0,
            'sort' => 3,
            'title' => '从零开始的内容运营方法论',
            'subTitle' => '从零开始的内容运营方法论',
            'bannerBg' => 'theme/default/image/bg_2.png',
            'url' => '/demo-cms-3-3',
            'modelId' => 1,
            'listTemplate' => '',
            'detailTemplate' => '科技园南路 15 号 A 座 806 室',
            'seoTitle' => '从零开始的内容运营方法论',
            'seoDescription' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'seoKeywords' => '官方正品，假一赔十',
            'icon' => 'theme/default/image/bg_2.png',
            'cover' => 'theme/default/image/bg_2.png',
            'visitMemberGroupEnable' => 1,
            'visitMemberGroups' => '',
            'visitMemberVipEnable' => 1,
            'visitMemberVips' => '',
            'pageTemplate' => '',
            'formTemplate' => '',
            'memberUserPostEnable' => 1,
            'postMemberGroupEnable' => 1,
            'postMemberGroups' => '',
            'postMemberVipEnable' => 1,
            'postMemberVips' => '',
            'pageSize' => 1,
            'enable' => 1,
            'captchaProvider' => '',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('cms_cat')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('cms_cat', $row);
    }

    if (!TestSeed::ensureTable('cms_content')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'catId' => 1,
            'modelId' => 1,
            'alias' => 'cms-seed-1-1',
            'title' => '如何快速搭建企业官网',
            'summary' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'cover' => 'asset/image/avatar.png',
            'seoTitle' => '如何快速搭建企业官网',
            'seoDescription' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'seoKeywords' => '精选好物，品质保障',
            'postTime' => '2026-10-16 17:37:16',
            'wordCount' => 1,
            'viewCount' => 1,
            'status' => 1,
            'commentCount' => 1,
            'likeCount' => 1,
            'isRecommend' => 1,
            'isTop' => 1,
            'tags' => '',
            'author' => '',
            'source' => '',
            'memberUserId' => 0,
            'verifyStatus' => 1,
            'detailTemplate' => '建国路 88 号 1 号楼 1201 室',
        ],
        [
            'id' => 2,
            'catId' => 1,
            'modelId' => 1,
            'alias' => 'cms-seed-2-2',
            'title' => '产品迭代的五个关键节点',
            'summary' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'cover' => 'theme/default/image/bg_1.png',
            'seoTitle' => '产品迭代的五个关键节点',
            'seoDescription' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'seoKeywords' => '限时特惠，先到先得',
            'postTime' => '2026-10-15 17:37:16',
            'wordCount' => 2,
            'viewCount' => 2,
            'status' => 1,
            'commentCount' => 2,
            'likeCount' => 2,
            'isRecommend' => 1,
            'isTop' => 1,
            'tags' => '',
            'author' => '',
            'source' => '',
            'memberUserId' => 0,
            'verifyStatus' => 1,
            'detailTemplate' => '世纪大道 100 号 2503 室',
        ],
        [
            'id' => 3,
            'catId' => 1,
            'modelId' => 1,
            'alias' => 'cms-seed-3-3',
            'title' => '从零开始的内容运营方法论',
            'summary' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'cover' => 'theme/default/image/bg_2.png',
            'seoTitle' => '从零开始的内容运营方法论',
            'seoDescription' => '本文结合实际项目经验，系统梳理完整流程与落地要点，供实践参考。',
            'seoKeywords' => '官方正品，假一赔十',
            'postTime' => '2026-10-14 17:37:16',
            'wordCount' => 3,
            'viewCount' => 3,
            'status' => 1,
            'commentCount' => 3,
            'likeCount' => 3,
            'isRecommend' => 1,
            'isTop' => 1,
            'tags' => '',
            'author' => '',
            'source' => '',
            'memberUserId' => 0,
            'verifyStatus' => 1,
            'detailTemplate' => '科技园南路 15 号 A 座 806 室',
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('cms_content')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('cms_content', $row);
    }

    if (!TestSeed::ensureTable('cms_model')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'title' => '如何快速搭建企业官网',
            'name' => '如何快速搭建企业官网-1',
            'listTemplate' => '',
            'detailTemplate' => '建国路 88 号 1 号楼 1201 室',
            'mode' => 1,
            'pageTemplate' => '',
            'formTemplate' => '',
            'enable' => 1,
        ],
        [
            'id' => 2,
            'title' => '产品迭代的五个关键节点',
            'name' => '产品迭代的五个关键节点-2',
            'listTemplate' => '',
            'detailTemplate' => '世纪大道 100 号 2503 室',
            'mode' => 1,
            'pageTemplate' => '',
            'formTemplate' => '',
            'enable' => 1,
        ],
        [
            'id' => 3,
            'title' => '从零开始的内容运营方法论',
            'name' => '从零开始的内容运营方法论-3',
            'listTemplate' => '',
            'detailTemplate' => '科技园南路 15 号 A 座 806 室',
            'mode' => 1,
            'pageTemplate' => '',
            'formTemplate' => '',
            'enable' => 1,
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('cms_model')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('cms_model', $row);
    }

    if (!TestSeed::ensureTable('cms_model_field')) {
        return;
    }

    $rows = [
        [
            'id' => 1,
            'modelId' => 1,
            'sort' => 1,
            'title' => '如何快速搭建企业官网',
            'name' => '如何快速搭建企业官网',
            'fieldType' => '',
            'fieldData' => '{}',
            'maxLength' => 1,
            'isRequired' => 1,
            'isSearch' => 1,
            'isList' => 1,
            'placeholder' => '',
            'enable' => 1,
            'guestVisitVisible' => 1,
        ],
        [
            'id' => 2,
            'modelId' => 1,
            'sort' => 2,
            'title' => '产品迭代的五个关键节点',
            'name' => '产品迭代的五个关键节点',
            'fieldType' => '',
            'fieldData' => '{}',
            'maxLength' => 1,
            'isRequired' => 1,
            'isSearch' => 1,
            'isList' => 1,
            'placeholder' => '',
            'enable' => 1,
            'guestVisitVisible' => 1,
        ],
        [
            'id' => 3,
            'modelId' => 1,
            'sort' => 3,
            'title' => '从零开始的内容运营方法论',
            'name' => '从零开始的内容运营方法论',
            'fieldType' => '',
            'fieldData' => '{}',
            'maxLength' => 1,
            'isRequired' => 1,
            'isSearch' => 1,
            'isList' => 1,
            'placeholder' => '',
            'enable' => 1,
            'guestVisitVisible' => 1,
        ],
    ];

    // 先清空再写入，保证可重复执行且不与唯一索引冲突
    DB::table('cms_model_field')->delete();
    foreach ($rows as $row) {
        ModelUtil::insert('cms_model_field', $row);
    }

    TestCase::test('测试数据填充执行完成', function () {
        TestCase::assertTrue(true, 'Cms Seed: 执行完成');
    });
});
