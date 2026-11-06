<?php


namespace Module\Cms\Util;


use ModStart\Core\Dao\ModelManageUtil;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Util\ArrayUtil;
use ModStart\Core\Util\FileUtil;
use ModStart\Core\Util\LockUtil;
use ModStart\Module\ModuleManager;
use Module\Cms\Provider\Theme\CmsThemeProvider;

class CmsBackupUtil
{
    public static function listBackups()
    {
        $results = [];
        foreach (CmsThemeProvider::all() as $theme) {
            $root = ModuleManager::path($theme->name(), 'Backup/');
            $files = FileUtil::listFiles($root, '*.json');
            foreach ($files as $file) {
                $content = file_get_contents($file['pathname']);
                if (empty($content)) {
                    continue;
                }
                $json = @json_decode($content, true);
                if (empty($json) || empty($json['structure'])) {
                    continue;
                }
                if (empty($json['config'])) {
                    $json['config'] = [];
                }
                $moduleInfo = ModuleManager::getModuleBasic($theme->name());
                $results[] = [
                    'module' => $theme->name(),
                    'moduleInfo' => $moduleInfo,
                    'root' => 'module/' . $theme->name() . '/Backup',
                    'filename' => $file['filename'],
                    'filemtime' => filemtime($file['pathname']),
                    'size' => $file['size'],
                    'tables' => array_keys($json['structure']),
                    'config' => $json['config'],
                ];
            }
        }
        $results = ArrayUtil::sortByKey($results, 'filemtime', 'desc');
        return $results;
    }

    public static function restoreBackup($backup)
    {
        BizException::throwsIf('备份文件损坏', empty($backup['structure']));
        BizException::throwsIf('备份文件损坏', empty($backup['backup']));
        // 恢复过程会改名 / 重建数据表，并发执行时会出现 1050 Table already exists，这里串行化
        $lockKey = 'Cms:BackupRestore';
        if (!LockUtil::acquire($lockKey, 30)) {
            BizException::throws('数据库正在恢复中，请稍后再试');
        }
        try {
            self::restoreBackupExecute($backup);
        } catch (\Exception $e) {
            LockUtil::release($lockKey);
            throw $e;
        }
        LockUtil::release($lockKey);
    }

    /**
     * 执行数据库恢复（步骤不可拆分：改名旧表 -> 建新表 -> 写入数据 -> 写入配置）
     * @param $backup array
     * @throws \Exception
     */
    private static function restoreBackupExecute($backup)
    {
        // 加随机后缀：同一秒内并发 / 连续触发恢复时，旧表名不会冲突
        $tableBackupBatch = '_del_' . date('Ymd_His_') . substr(md5(uniqid(mt_rand(), true)), 0, 4) . '_';
        // 记录本次恢复对数据表的改动，失败时按表回滚，避免出现「旧表已改名、新表没建出来」的中间状态
        $archives = [];
        $createdTables = [];
        try {
            foreach ($backup['structure'] as $table => $structure) {
                if (!self::isCmsTable($table) && !self::isCmsBackupTable($table)) {
                    continue;
                }
                if (ModelManageUtil::hasTable($table)) {
                    $archiveTable = $tableBackupBatch . $table;
                    if (self::renameTableQuietly($table, $archiveTable)) {
                        $archives[$table] = $archiveTable;
                    }
                }
                $structure = self::structureCompat($structure, $table);
                self::createTable($table, $structure, $tableBackupBatch, $archives);
                $createdTables[] = $table;
            }
            foreach ($backup['backup'] as $table => $data) {
                if (!self::isCmsTable($table) && !self::isCmsBackupTable($table)) {
                    continue;
                }
                ModelUtil::insertAll($table, self::dataCompat($data), false);
            }
            if (!empty($backup['config'])) {
                $config = modstart_config();
                foreach ($backup['config'] as $k => $v) {
                    $config->set($k, $v);
                }
            }
        } catch (\Exception $e) {
            self::rollbackTableChanges($createdTables, $archives);
            throw $e;
        }
    }

    /**
     * 回滚本次恢复对数据表的改动（MySQL 的 DDL 无法整体事务化，只能按表回滚）
     * 删除本次新建的表，并把改名备份的表改回原名，避免恢复中途失败后站点直接丢表
     * @param $createdTables array 本次新建的表
     * @param $archives array 原表名 => 备份表名
     */
    private static function rollbackTableChanges($createdTables, $archives)
    {
        foreach (array_reverse($createdTables) as $table) {
            try {
                if (ModelManageUtil::hasTable($table)) {
                    ModelManageUtil::dropTable($table);
                }
            } catch (\Exception $e) {
                // 回滚失败不影响抛出原始异常
            }
        }
        foreach ($archives as $table => $archiveTable) {
            try {
                if (!ModelManageUtil::hasTable($table)) {
                    self::renameTableQuietly($archiveTable, $table);
                }
            } catch (\Exception $e) {
                // 回滚失败不影响抛出原始异常
            }
        }
    }

    /**
     * 兼容旧备份结构（返回可直接执行的结构 SQL）
     *
     * 1. 表名统一按当前连接的「前缀 + 表名」重写：
     *    旧备份里可能写死 `banner` 或带其他前缀，在配置了 DB_PREFIX 的站点上会建到错误的表，
     *    后续写入就会报 1146 Table 'xxx.banner' doesn't exist
     * 2. 零日期默认值：MySQL 5.7 / 8 默认 sql_mode 包含 NO_ZERO_DATE、NO_ZERO_IN_DATE，
     *    旧备份里的 `NOT NULL DEFAULT '0000-00-00 00:00:00'` 会直接报 1067 Invalid default value，
     *    这里统一改成可空列（与现代 timestamps() 迁移一致）
     *
     * @param $structure string
     * @param $table string 备份里的表名（不含前缀）
     * @return string
     */
    private static function structureCompat($structure, $table)
    {
        $structure = str_replace('__table_prefix__', ModelManageUtil::tablePrefix(), $structure);
        $structure = preg_replace(
            '/^(\s*CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?)`[A-Za-z0-9_]+`/i',
            '${1}`' . ModelManageUtil::table($table) . '`',
            $structure,
            1
        );
        $structure = str_ireplace("NOT NULL DEFAULT '0000-00-00 00:00:00'", 'NULL DEFAULT NULL', $structure);
        $structure = str_ireplace("NOT NULL DEFAULT '0000-00-00'", 'NULL DEFAULT NULL', $structure);
        $structure = str_ireplace("DEFAULT '0000-00-00 00:00:00'", 'DEFAULT NULL', $structure);
        $structure = str_ireplace("DEFAULT '0000-00-00'", 'DEFAULT NULL', $structure);
        return $structure;
    }

    /**
     * 兼容旧备份数据
     *
     * 零日期 / 非法时间在 MySQL 严格模式（NO_ZERO_DATE）下写入会报 1292，
     * 这里统一兜底为当前时间，保证恢复流程不中断
     *
     * @param $rows array
     * @return array
     */
    private static function dataCompat($rows)
    {
        $now = date('Y-m-d H:i:s');
        $today = date('Y-m-d');
        foreach ($rows as $index => $row) {
            foreach ($row as $key => $value) {
                if (!is_string($value)) {
                    continue;
                }
                if (!preg_match('/^(\d{4})-(\d{2})-(\d{2})([ T](\d{2}):(\d{2}):(\d{2}))?$/', $value, $matched)) {
                    continue;
                }
                if (strpos($value, '0000-00-00') !== 0 && strtotime($value) !== false) {
                    continue;
                }
                $rows[$index][$key] = empty($matched[4]) ? $today : $now;
            }
        }
        return $rows;
    }

    /**
     * 创建数据表
     *
     * 并发恢复、上一次恢复中断、hasTable 判定不到等情况下，数据表可能仍然存在，
     * 此时直接 CREATE 会抛出 1050（Base table or view already exists），
     * 这里把残留表改名备份后再重试，避免整个恢复流程直接失败
     *
     * @param $table string
     * @param $structure string
     * @param $tableBackupBatch string
     * @param $archives array 原表名 => 备份表名（用于失败回滚）
     * @throws \Exception
     */
    private static function createTable($table, $structure, $tableBackupBatch, &$archives = [])
    {
        for ($retry = 0; $retry <= 3; $retry++) {
            try {
                ModelManageUtil::statement($structure);
                return;
            } catch (\Exception $e) {
                if ($retry >= 3 || !self::isTableExistsException($e)) {
                    throw $e;
                }
                $realTable = self::structureTableName($structure);
                if (empty($realTable)) {
                    throw $e;
                }
                // 以 CREATE 语句里的真实表名为准改名备份（忽略前缀 / 大小写等判定误差）
                $archiveTable = $tableBackupBatch . $table . '_r' . $retry;
                self::archiveTable($realTable, $archiveTable);
                $archives[$table] = $archiveTable;
            }
        }
    }

    /**
     * 解析 CREATE TABLE 语句中的真实表名
     * @param $structure string
     * @return null|string
     */
    private static function structureTableName($structure)
    {
        if (preg_match('/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`([A-Za-z0-9_]+)`/i', $structure, $matched)) {
            return $matched[1];
        }
        return null;
    }

    /**
     * 将真实数据表改名备份，表不存在时忽略（其他进程可能已经处理）
     * @param $table string 真实表名（含前缀）
     * @param $targetTable string 备份表名（不含前缀）
     * @throws \Exception
     */
    private static function archiveTable($table, $targetTable)
    {
        try {
            ModelManageUtil::statement('RENAME TABLE `' . $table . '` TO `' . ModelManageUtil::table($targetTable) . '`');
        } catch (\Exception $e) {
            if (!self::isTableNotExistsException($e)) {
                throw $e;
            }
        }
    }

    /**
     * 将数据表改名备份，表不存在时返回 false（不抛异常）
     * @param $table string
     * @param $targetTable string
     * @return bool
     * @throws \Exception
     */
    private static function renameTableQuietly($table, $targetTable)
    {
        try {
            ModelManageUtil::renameTable($table, $targetTable);
        } catch (\Exception $e) {
            if (self::isTableNotExistsException($e)) {
                return false;
            }
            throw $e;
        }
        return true;
    }

    /**
     * 是否为「数据表已存在」异常（MySQL 1050 / SQLSTATE[42S01]）
     * @param \Exception $e
     * @return bool
     */
    private static function isTableExistsException(\Exception $e)
    {
        $message = $e->getMessage();
        if (strpos($message, '42S01') !== false) {
            return true;
        }
        return strpos($message, '1050') !== false && stripos($message, 'already exists') !== false;
    }

    /**
     * 是否为「数据表不存在」异常（MySQL 1146 / SQLSTATE[42S02]）
     * @param \Exception $e
     * @return bool
     */
    private static function isTableNotExistsException(\Exception $e)
    {
        $message = $e->getMessage();
        if (strpos($message, '42S02') !== false) {
            return true;
        }
        if (strpos($message, '1146') !== false && stripos($message, "doesn't exist") !== false) {
            return true;
        }
        return stripos($message, 'base table or view not found') !== false;
    }

    public static function mergeConfigTitle(&$configs)
    {
        $titleMap = [
            '/^Cms_/' => 'CMS配置',
            '/^CmsTheme.*?/' => '主题配置',
        ];
        foreach ($configs as $k => $v) {
            foreach ($titleMap as $pattern => $title) {
                if (preg_match($pattern, $v['key'])) {
                    $configs[$k]['title'] = $title;
                    break;
                }
            }
        }
    }

    public static function mergeTableTitle(&$tables)
    {
        $titleMap = [
            '/^banner$/' => '通用轮播',
            '/^partner$/' => '友情链接',
            '/^nav$/' => '通用导航',
            '/^content_block$/' => '内容区块',
            '/^cms_model$/' => 'CMS模型',
            '/^cms_model_field$/' => 'CMS模型字段',
            '/^cms_cat$/' => 'CMS栏目',
            '/^cms_content$/' => 'CMS内容主表',
            '/^cms_m_.*?$/' => 'CMS内容副表',
        ];
        foreach ($tables as $k => $v) {
            foreach ($titleMap as $pattern => $title) {
                if (preg_match($pattern, $v['name'])) {
                    $tables[$k]['title'] = $title;
                    break;
                }
            }
        }
    }

    public static function listBackupConfigs()
    {
        $configs = modstart_config()->all();
        $buildIns = [
            '/^Cms_/',
            '/^CmsTheme.*?/',
        ];
        $configs = array_filter($configs, function ($o) use ($buildIns) {
            foreach ($buildIns as $pattern) {
                if (preg_match($pattern, $o['key'])) {
                    return true;
                }
            }
            return false;
        });
        CmsBackupUtil::mergeConfigTitle($configs);
        $configs = ArrayUtil::sortByKey($configs, 'key');
        return array_values($configs);
    }

    public static function listBackupTables()
    {
        $tables = ModelManageUtil::listTables();
        $tables = array_filter($tables, function ($table) {
            return self::isCmsTable($table);
        });
        $tables = array_map(function ($table) {
            return [
                'name' => $table,
                'checked' => true,
            ];
        }, $tables);
        foreach ([
                     'Banner' => ['banner'],
                     'Partner' => ['partner'],
                     'Nav' => ['nav'],
                     'ContentBlock' => ['content_block'],
                 ] as $module => $moduleTables) {
            if (!modstart_module_enabled($module)) {
                continue;
            }
            foreach ($moduleTables as $moduleTable) {
                $tables[] = [
                    'name' => $moduleTable,
                    'checked' => false,
                ];
            }
        }
        self::mergeTableTitle($tables);
        $tables = ArrayUtil::sortByKey($tables, 'name');
        return array_values($tables);
    }

    public static function isCmsBackupTable($table)
    {
        $tables = [
            'banner',
            'partner',
            'nav',
            'content_block',
        ];
        return in_array($table, $tables);
    }

    public static function isCmsTable($table)
    {
        if (in_array($table, ['cms_cat', 'cms_content', 'cms_model', 'cms_model_field'])) {
            return true;
        }
        if (starts_with($table, 'cms_m_')) {
            return true;
        }
        return false;
    }
}
