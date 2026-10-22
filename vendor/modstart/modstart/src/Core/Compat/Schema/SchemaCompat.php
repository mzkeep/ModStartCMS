<?php

namespace ModStart\Core\Compat\Schema;

use ModStart\Core\Compat\Runtime;

/**
 * Schema 兼容注册
 *
 * 未安装 doctrine/dbal 时，把所有 MySQL 连接（含带前缀）的 Schema 语法替换为
 * ModStart\Core\Compat\Schema\MySqlGrammar，使 renameColumn / change 不依赖 DBAL。
 * 宿主项目已安装 doctrine/dbal 时不做任何替换，保持 Laravel 原生行为。
 */
class SchemaCompat
{
    /** @var bool 是否已完成注册 */
    private static $registered = false;

    /**
     * 注册兼容语法
     * @param mixed $databaseManager 数据库管理器（Illuminate\Database\DatabaseManager）
     * @return void
     */
    public static function register($databaseManager)
    {
        if (self::$registered) {
            return;
        }
        self::$registered = true;
        if (Runtime::has('Doctrine\DBAL\Connection')) {
            return;
        }
        if (!is_object($databaseManager) || !method_exists($databaseManager, 'connection')) {
            return;
        }
        $connections = config('database.connections');
        if (!is_array($connections)) {
            return;
        }
        foreach ($connections as $name => $config) {
            if (!isset($config['driver']) || 'mysql' !== $config['driver']) {
                continue;
            }
            try {
                $connection = $databaseManager->connection($name);
                $grammar = new MySqlGrammar();
                if (method_exists($grammar, 'setTablePrefix')) {
                    $grammar->setTablePrefix($connection->getTablePrefix());
                }
                $connection->setSchemaGrammar($grammar);
            } catch (\Exception $e) {
                // 连接配置异常时保持 Laravel 默认行为
            }
        }
    }
}
