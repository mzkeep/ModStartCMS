<?php

namespace Module\Vendor\QuickRun\Excel;

/**
 * 数据行集合（兼容 ->all()->toArray() 用法）
 */
class RowCollection
{
    /** @var array */
    private $rows = [];

    /**
     * @param array $rows
     */
    public function __construct($rows = [])
    {
        $this->rows = array_values((array)$rows);
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return $this->rows;
    }

    /**
     * @return array
     */
    public function all()
    {
        return $this->rows;
    }

    /**
     * @return int
     */
    public function count()
    {
        return count($this->rows);
    }

    /**
     * @return array
     */
    public function first()
    {
        return empty($this->rows) ? [] : $this->rows[0];
    }
}
