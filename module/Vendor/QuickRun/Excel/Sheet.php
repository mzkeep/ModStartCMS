<?php

namespace Module\Vendor\QuickRun\Excel;

/**
 * 工作表配置
 */
class Sheet
{
    /** @var string */
    private $name;

    /** @var array */
    private $rows = [];

    /** @var array */
    private $columnFormats = [];

    /**
     * @param string $name
     */
    public function __construct($name)
    {
        $this->name = strval($name);
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * 写入数据行
     * @param array $rows
     * @param bool $withHeader 首行是否为标题行（仅影响样式，内容原样写入）
     * @return $this
     */
    public function rows($rows, $withHeader = false)
    {
        $this->rows = array_values((array)$rows);
        return $this;
    }

    /**
     * @param array $rows
     * @return $this
     */
    public function fromArray($rows)
    {
        return $this->rows($rows);
    }

    /**
     * 设置列格式（当前仅支持 '@' 文本格式）
     * @param array $formats
     * @return $this
     */
    public function setColumnFormat($formats)
    {
        $this->columnFormats = (array)$formats;
        return $this;
    }

    /**
     * 自动列宽（导出时按最长内容估算）
     * @param bool $autoSize
     * @return $this
     */
    public function setAutoSize($autoSize = true)
    {
        return $this;
    }

    /**
     * @return array
     */
    public function getRows()
    {
        return $this->rows;
    }

    /**
     * @return array
     */
    public function getColumnFormats()
    {
        return $this->columnFormats;
    }
}
