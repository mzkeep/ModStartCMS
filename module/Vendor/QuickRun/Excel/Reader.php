<?php

namespace Module\Vendor\QuickRun\Excel;

use ModStart\Core\Exception\BizException;

/**
 * Excel / CSV 读取器
 */
class Reader
{
    /** @var string */
    private $file;

    /** @var bool */
    private $noHeading = false;

    /**
     * @param string $file
     */
    public function __construct($file)
    {
        BizException::throwsIf('Excel 文件不存在', !is_file($file));
        $this->file = $file;
    }

    /**
     * 不把首行当作标题行
     * @return $this
     */
    public function noHeading()
    {
        $this->noHeading = true;
        return $this;
    }

    /**
     * 全部数据行
     * @return RowCollection
     */
    public function all()
    {
        return new RowCollection($this->readAll());
    }

    /**
     * @return RowCollection
     */
    public function get()
    {
        return $this->all();
    }

    /**
     * @param int $index
     * @return RowCollection
     */
    public function sheet($index = 0)
    {
        return $this->all();
    }

    /**
     * 读取全部行
     * @return array
     */
    private function readAll()
    {
        $format = Excel::format($this->file);
        if ('csv' === $format) {
            return $this->readCsv();
        }
        $xlsx = new XlsxReader($this->file);
        $rows = $xlsx->rows();
        if ($this->noHeading) {
            return $rows;
        }
        // 默认首行作为标题行：后续行转换为「标题 => 值」的关联数组
        if (empty($rows)) {
            return [];
        }
        $head = array_shift($rows);
        $result = [];
        foreach ($rows as $row) {
            $item = [];
            foreach ($head as $i => $title) {
                $item[strval($title)] = isset($row[$i]) ? $row[$i] : null;
            }
            $result[] = $item;
        }
        return $result;
    }

    /**
     * @return array
     */
    private function readCsv()
    {
        $rows = [];
        $handle = fopen($this->file, 'r');
        if (false === $handle) {
            return $rows;
        }
        // PHP 8.4 起 fgetcsv() 要求显式传入 $escape，显式传 '\\' 保持原有转义行为
        while (false !== ($row = fgetcsv($handle, 0, ',', '"', '\\'))) {
            $rows[] = array_map(function ($value) {
                return is_string($value) ? trim($value) : $value;
            }, $row);
        }
        fclose($handle);
        return $rows;
    }
}
