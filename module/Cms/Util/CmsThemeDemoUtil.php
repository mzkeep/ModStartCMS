<?php

namespace Module\Cms\Util;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use ModStart\Core\Dao\ModelManageUtil;
use ModStart\Module\ModuleManager;
use Module\Nav\Util\NavUtil;

/**
 * 主题演示数据导入
 *
 * 主题模块自带 Backup/init_data.json（structure + backup + config），
 * 执行「覆盖式恢复 + 写入配置 + 清理缓存」，等价于后台「数据库恢复」。
 */
class CmsThemeDemoUtil
{
    /**
     * 主题演示数据文件路径
     * @param string $module
     * @return string
     */
    public static function backupFile($module)
    {
        return ModuleManager::path($module, 'Backup/init_data.json');
    }

    /**
     * 主题是否自带演示数据
     * @param string $module
     * @return bool
     */
    public static function hasDemoData($module)
    {
        return is_file(self::backupFile($module));
    }

    /**
     * 按模块导入演示数据
     * @param string $module
     * @return bool 是否执行了导入
     */
    public static function importByModule($module)
    {
        $file = self::backupFile($module);
        if (!is_file($file)) {
            return false;
        }
        $data = json_decode(file_get_contents($file), true);
        if (empty($data['structure']) || empty($data['backup'])) {
            Log::warning('Theme demo data invalid: ' . $file);
            return false;
        }
        try {
            // 按实际表结构裁剪字段，避免 json 里多余字段导致 Unknown column
            foreach ($data['backup'] as $table => $rows) {
                if (!isset($data['structure'][$table]) || !ModelManageUtil::hasTable($table)) {
                    continue;
                }
                $columns = array_map(function ($column) {
                    return $column->Field;
                }, \DB::select('SHOW COLUMNS FROM `' . $table . '`'));
                $columnMap = array_flip($columns);
                foreach ($rows as $index => $row) {
                    $data['backup'][$table][$index] = array_intersect_key($row, $columnMap);
                }
            }
            CmsBackupUtil::restoreBackup($data);
            if (!empty($data['config']) && is_array($data['config'])) {
                foreach ($data['config'] as $key => $value) {
                    modstart_config()->set($key, $value);
                }
            }
            CmsCatUtil::clearCache();
            CmsModelUtil::clearCache();
            NavUtil::clearCache();
            Cache::flush();
            return true;
        } catch (\Exception $e) {
            Log::error('Theme demo data import failed: ' . $module . ' - ' . $e->getMessage());
            return false;
        }
    }
}
