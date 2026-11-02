<?php

namespace ModStart\Core\Compat\Schema;

use Illuminate\Database\Connection;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Grammars\MySqlGrammar as BaseMySqlGrammar;
use Illuminate\Support\Fluent;

/**
 * MySQL Schema 语法兼容层
 *
 * Laravel 的 renameColumn / change 默认依赖 doctrine/dbal（第三方包），
 * modstart 的 Composer require 只保留 php 与 ext-*，因此这里在未安装 DBAL 时
 * 用原生 SQL 实现等价能力：
 *   - change：直接按 Blueprint 中声明的列定义生成 alter table ... modify
 *   - renameColumn：读取 SHOW FULL COLUMNS 得到列定义，生成 alter table ... change
 * 已安装 doctrine/dbal 的宿主项目仍然走 Laravel 原生逻辑（行为完全一致）。
 */
class MySqlGrammar extends BaseMySqlGrammar
{
    /**
     * 宿主项目是否安装了 doctrine/dbal
     * @return bool
     */
    protected function hasDoctrineDbal()
    {
        return class_exists('Doctrine\DBAL\Connection');
    }

    /**
     * 修改列（无 DBAL 时的原生实现）
     * @param Blueprint $blueprint
     * @param Fluent $command
     * @param Connection|null $connection
     * @return string|array
     */
    public function compileChange(Blueprint $blueprint, Fluent $command, $connection = null)
    {
        if ($this->hasDoctrineDbal()) {
            return parent::compileChange($blueprint, $command, $connection);
        }
        $parts = [];
        // 只处理标记了 change 的列，新增列由 compileAdd 处理
        foreach ((array)$blueprint->getChangedColumns() as $column) {
            $sql = $this->wrap($column) . ' ' . $this->getType($column);
            $definition = $this->addModifiers($sql, $blueprint, $column);
            // MySQL 的 modify 语句不能重复声明主键（会报 1068 Multiple primary key defined），
            // 主键已存在时只需保留 auto_increment
            $definition = preg_replace('/\s+primary key\b/i', '', $definition);
            $parts[] = 'modify ' . $definition;
        }
        if (empty($parts)) {
            return null;
        }
        return 'alter table ' . $this->wrapTable($blueprint) . ' ' . implode(', ', $parts);
    }

    /**
     * 重命名列（无 DBAL 时的原生实现）
     * @param Blueprint $blueprint
     * @param Fluent $command
     * @param Connection|null $connection
     * @return string|array
     */
    public function compileRenameColumn(Blueprint $blueprint, Fluent $command, $connection = null)
    {
        if ($this->hasDoctrineDbal()) {
            return parent::compileRenameColumn($blueprint, $command, $connection);
        }
        $table = $this->wrapTable($blueprint);
        $definition = $this->getColumnDefinition($blueprint, $command->from, $connection);
        if (null === $definition) {
            // 取不到原列定义时使用 MySQL 8+ 的原生语法
            return sprintf('alter table %s rename column %s to %s', $table, $this->wrap($command->from), $this->wrap($command->to));
        }
        return sprintf('alter table %s change %s %s %s', $table, $this->wrap($command->from), $this->wrap($command->to), $definition);
    }

    /**
     * 从数据库读取列定义
     * @param Blueprint $blueprint
     * @param string $column
     * @param Connection|null $connection
     * @return string|null
     */
    protected function getColumnDefinition(Blueprint $blueprint, $column, $connection = null)
    {
        if (null === $connection) {
            return null;
        }
        try {
            // SHOW 语句不支持预处理参数，列名使用 PDO quote 内联
            $sql = 'SHOW FULL COLUMNS FROM ' . $this->wrapTable($blueprint) . ' LIKE ' . $connection->getPdo()->quote($column);
            $rows = $connection->select($sql);
        } catch (\Exception $e) {
            return null;
        }
        if (empty($rows)) {
            return null;
        }
        $row = (array)$rows[0];
        $fieldMap = [];
        foreach ($row as $key => $value) {
            $fieldMap[strtolower($key)] = $value;
        }
        if (empty($fieldMap['type'])) {
            return null;
        }
        $definition = $fieldMap['type'];
        $nullable = isset($fieldMap['null']) && 'YES' === strtoupper(strval($fieldMap['null']));
        $definition .= $nullable ? ' null' : ' not null';
        $default = array_key_exists('default', $fieldMap) ? $fieldMap['default'] : null;
        if (null !== $default) {
            $definition .= ' default ' . $this->quoteDefault($default, $connection);
        }
        $extra = isset($fieldMap['extra']) ? strval($fieldMap['extra']) : '';
        if ('' !== $extra) {
            if (false !== stripos($extra, 'auto_increment')) {
                $definition .= ' auto_increment';
            }
            if (preg_match('/(on update .+)$/i', $extra, $mat)) {
                $definition .= ' ' . $mat[1];
            }
        }
        if (!empty($fieldMap['collation'])) {
            $definition .= ' collate ' . $fieldMap['collation'];
        }
        if (!empty($fieldMap['comment'])) {
            $definition .= ' comment ' . $connection->getPdo()->quote($fieldMap['comment']);
        }
        return $definition;
    }

    /**
     * 默认值转 SQL 片段
     * @param mixed $default
     * @param Connection $connection
     * @return string
     */
    protected function quoteDefault($default, Connection $connection)
    {
        $value = strval($default);
        if (is_bool($default)) {
            return $default ? '1' : '0';
        }
        if (is_int($default) || is_float($default) || is_numeric($value)) {
            return $value;
        }
        if (preg_match('/^(current_timestamp(\(\d*\))?|null)$/i', $value)) {
            return $value;
        }
        return $connection->getPdo()->quote($value);
    }
}
