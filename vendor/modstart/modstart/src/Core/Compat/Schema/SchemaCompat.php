<?php

namespace ModStart\Core\Compat\Schema;

use ModStart\Core\Compat\Runtime;

/**
 * Schema 兼容注册
 *
 * 未安装 doctrine/dbal 时，把所有 MySQL 连接（含带前缀）的 Schema 语法替换为
 * ModStart\Core\Compat\Schema\MySqlGrammar，使 renameColumn / change 不依赖 DBAL。
 * 宿主项目已安装 doctrine/dbal 时不做任何替换，保持 Laravel 原生行为。
 *
 * Laravel 10 起 change / renameColumn 已内置实现（不再依赖 DBAL），且 Grammar 构造函数
 * 需要传入 Connection，此时直接使用原生语法，不做任何替换。
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
        if (self::nativeChangeSupported()) {
            return;
        }
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
            } catch (\Throwable $e) {
                // PHP 7+ 的 Error（如 ArgumentCountError）同样兜底，PHP 5.6 下不会命中
            }
        }
    }

    /**
     * 框架是否已内置 change / renameColumn
     *
     * Laravel 10+ 的 Grammar 构造函数需要 Connection，且 Schema 原生支持修改 / 重命名列，
     * 此时无需替换语法。这里用反射探测构造函数参数，避免硬编码版本号。
     * @return bool
     */
    private static function nativeChangeSupported()
    {
        if (!class_exists('Illuminate\Database\Grammar')) {
            return false;
        }
        $reflection = new \ReflectionClass('Illuminate\Database\Grammar');
        $constructor = $reflection->getConstructor();
        if (null === $constructor) {
            return false;
        }
        return $constructor->getNumberOfRequiredParameters() > 0;
    }
}
