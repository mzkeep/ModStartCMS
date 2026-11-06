<?php

use ModStart\Core\Dao\ModelManageUtil;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Test\TestCase;
use Module\Cms\Util\CmsBackupUtil;
use Module\Nav\Model\Nav;

TestCase::describe('Cms Backup Biz', function () {

    TestCase::test('建表遇到已存在的数据表（1050）时自动改名并重试', function () {
        $table = 'cms_backup_restore_test';
        $structure = 'CREATE TABLE `' . ModelManageUtil::table($table) . '` ('
            . '`id` int(10) unsigned NOT NULL AUTO_INCREMENT,'
            . '`value` varchar(50) DEFAULT NULL,'
            . 'PRIMARY KEY (`id`)'
            . ') ENGINE=InnoDB DEFAULT CHARSET=utf8';
        $renamed = '_del_test_batch_' . $table . '_r0';
        // 模拟 hasTable 判定失败 / 并发恢复时表仍然存在的场景
        ModelManageUtil::statement($structure);
        TestCase::assertTrue(ModelManageUtil::hasTable($table), 'Cms Backup Biz: 残留表已创建');
        $reflection = new ReflectionMethod(CmsBackupUtil::class, 'createTable');
        $reflection->setAccessible(true);
        $reflection->invoke(null, $table, $structure, '_del_test_batch_');
        TestCase::assertTrue(ModelManageUtil::hasTable($table), 'Cms Backup Biz: 建表冲突后重试成功');
        TestCase::assertTrue(ModelManageUtil::hasTable($renamed), 'Cms Backup Biz: 残留表已改名备份');
        TestCase::assertEquals(0, ModelUtil::count($table), 'Cms Backup Biz: 重建后为全新空表');
        ModelManageUtil::dropTable($table);
        ModelManageUtil::dropTable($renamed);
    });

    $hasNav = ModelManageUtil::hasTable('nav');
    TestCase::test('恢复数据可重复执行（第二次恢复不会因表已存在失败）', function () use ($hasNav) {
        if (!$hasNav) {
            TestCase::assertTrue(true, 'Cms Backup Biz: 跳过（nav 表未迁移）');
            return;
        }
        $tablesBefore = ModelManageUtil::listTables();
        $countBefore = ModelUtil::count(Nav::class);
        // 用当前 nav 表的真实结构和数据构造备份，恢复后数据保持一致
        $backup = [
            'structure' => ['nav' => ModelManageUtil::tableStructure('nav')],
            'backup' => ['nav' => ModelUtil::all(Nav::class)],
            'config' => [],
        ];
        try {
            CmsBackupUtil::restoreBackup($backup);
            TestCase::assertTrue(true, 'Cms Backup Biz: 首次恢复成功');
            // 连续第二次恢复：同一秒内表名冲突、旧表已存在等场景都必须成功
            CmsBackupUtil::restoreBackup($backup);
            TestCase::assertTrue(true, 'Cms Backup Biz: 再次恢复成功');
            TestCase::assertEquals($countBefore, ModelUtil::count(Nav::class), 'Cms Backup Biz: 恢复后数据量一致');
            $archived = array_values(array_filter(ModelManageUtil::listTables(), function ($table) use ($tablesBefore) {
                return strpos($table, '_del_') === 0 && substr($table, -4) === '_nav' && !in_array($table, $tablesBefore);
            }));
            TestCase::assertNotEmpty($archived, 'Cms Backup Biz: 旧表已改名备份');
        } catch (Exception $e) {
            TestCase::assertTrue(false, 'Cms Backup Biz: 恢复失败 ' . $e->getMessage());
        }
        // 清理本次测试产生的临时表，避免测试库不断堆积 _del_ 表
        foreach (ModelManageUtil::listTables() as $table) {
            if (strpos($table, '_del_') === 0 && substr($table, -4) === '_nav' && !in_array($table, $tablesBefore)) {
                ModelManageUtil::dropTable($table);
            }
        }
    });

    TestCase::test('MySQL 严格模式（NO_ZERO_DATE）下恢复旧备份不报 1067', function () use ($hasNav) {
        if (!$hasNav) {
            TestCase::assertTrue(true, 'Cms Backup Biz: 跳过（nav 表未迁移）');
            return;
        }
        $tablesBefore = ModelManageUtil::listTables();
        $sqlModeBefore = ModelManageUtil::query('SELECT @@SESSION.sql_mode AS sqlMode');
        $sqlModeBefore = $sqlModeBefore[0]['sqlMode'];
        // 模拟 MySQL 5.7 / 8 默认 sql_mode，旧备份的零日期默认值在这里会报 1067
        ModelManageUtil::statement("SET SESSION sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'");
        $structure = ModelManageUtil::tableStructure('nav');
        // 还原成老备份（MySQL 5.6 时代）的零日期默认值结构
        $structure = str_replace('`created_at` timestamp NULL DEFAULT NULL', "`created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", $structure);
        $structure = str_replace('`updated_at` timestamp NULL DEFAULT NULL', "`updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'", $structure);
        // 清掉上一次运行可能残留的测试数据，避免主键冲突
        ModelUtil::delete(Nav::class, ['id' => 999999]);
        $rows = ModelUtil::all(Nav::class);
        $zeroRow = empty($rows) ? ['id' => 999999, 'title' => 'zero-date', 'link' => '/', 'sort' => 1] : $rows[0];
        $zeroRow['id'] = 999999;
        $zeroRow['created_at'] = '0000-00-00 00:00:00';
        $zeroRow['updated_at'] = '0000-00-00 00:00:00';
        $rows[] = $zeroRow;
        $backup = [
            'structure' => ['nav' => $structure],
            'backup' => ['nav' => $rows],
            'config' => [],
        ];
        try {
            TestCase::assertTrue(strpos($structure, "0000-00-00 00:00:00") !== false, 'Cms Backup Biz: 旧备份结构包含零日期默认值');
            CmsBackupUtil::restoreBackup($backup);
            TestCase::assertTrue(true, 'Cms Backup Biz: 严格模式下恢复成功');
            $column = ModelManageUtil::query("SHOW COLUMNS FROM `" . ModelManageUtil::table('nav') . "` LIKE 'created_at'");
            TestCase::assertEquals('YES', $column[0]['Null'], 'Cms Backup Biz: 零日期列已改为可空');
            $restored = ModelUtil::get(Nav::class, ['id' => 999999]);
            TestCase::assertTrue(!empty($restored) && substr($restored['created_at'], 0, 10) === date('Y-m-d'), 'Cms Backup Biz: 零日期数据已兜底为当前时间');
        } catch (Exception $e) {
            TestCase::assertTrue(false, 'Cms Backup Biz: 严格模式恢复失败 ' . $e->getMessage());
        }
        ModelManageUtil::statement("SET SESSION sql_mode='" . $sqlModeBefore . "'");
        ModelUtil::delete(Nav::class, ['id' => 999999]);
        foreach (ModelManageUtil::listTables() as $table) {
            if (strpos($table, '_del_') === 0 && substr($table, -4) === '_nav' && !in_array($table, $tablesBefore)) {
                ModelManageUtil::dropTable($table);
            }
        }
    });

    TestCase::test('恢复中途建表失败时回滚，不丢原有数据表', function () use ($hasNav) {
        if (!$hasNav) {
            TestCase::assertTrue(true, 'Cms Backup Biz: 跳过（nav 表未迁移）');
            return;
        }
        $tablesBefore = ModelManageUtil::listTables();
        $countBefore = ModelUtil::count(Nav::class);
        // 故意写坏建表语句，保证建表失败，用于验证回滚逻辑
        $structure = str_replace('PRIMARY KEY', 'PRIMARY KEYS', ModelManageUtil::tableStructure('nav'));
        $backup = [
            'structure' => ['nav' => $structure],
            'backup' => ['nav' => []],
            'config' => [],
        ];
        $failed = false;
        try {
            CmsBackupUtil::restoreBackup($backup);
        } catch (Exception $e) {
            $failed = true;
        }
        TestCase::assertTrue($failed, 'Cms Backup Biz: 建表失败按预期抛出异常');
        TestCase::assertTrue(ModelManageUtil::hasTable('nav'), 'Cms Backup Biz: 原数据表已回滚恢复');
        TestCase::assertEquals($countBefore, ModelUtil::count(Nav::class), 'Cms Backup Biz: 原有数据未丢失');
        $leftovers = array_values(array_filter(ModelManageUtil::listTables(), function ($table) use ($tablesBefore) {
            return strpos($table, '_del_') === 0 && !in_array($table, $tablesBefore);
        }));
        TestCase::assertEmpty($leftovers, 'Cms Backup Biz: 失败回滚后无遗留备份表');
    });
    TestCase::test('备份结构里写死的表名会改写为当前前缀的真实表名', function () {
        $reflection = new ReflectionMethod(CmsBackupUtil::class, 'structureCompat');
        $reflection->setAccessible(true);
        $structure = "CREATE TABLE `banner` (\n  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB";
        $result = $reflection->invoke(null, $structure, 'banner');
        TestCase::assertTrue(strpos($result, 'CREATE TABLE `' . ModelManageUtil::table('banner') . '`') === 0, 'Cms Backup Biz: 写死的表名已改写');
        $prefixBefore = ModelManageUtil::tablePrefix();
        config(['database.connections.mysql.prefix' => 'ww']);
        try {
            $result = $reflection->invoke(null, $structure, 'banner');
            TestCase::assertTrue(strpos($result, 'CREATE TABLE `wwbanner`') === 0, 'Cms Backup Biz: 表前缀已生效');
        } catch (Exception $e) {
            TestCase::assertTrue(false, 'Cms Backup Biz: 表前缀改写异常 ' . $e->getMessage());
        }
        config(['database.connections.mysql.prefix' => $prefixBefore]);
    });

});
