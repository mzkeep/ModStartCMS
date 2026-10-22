<?php

namespace Module\Vendor\QuickRun\Excel;

/**
 * 导出配置（Excel::create($name, function ($excel) { $excel->sheet('Data', function ($sheet) {...}); })）
 */
class Writer
{
    /** @var string */
    private $name;

    /** @var Sheet[] */
    private $sheets = [];

    /**
     * @param string $name
     */
    public function __construct($name)
    {
        $this->name = strval($name);
    }

    /**
     * 添加工作表
     * @param string $name
     * @param callable|null $callback
     * @return $this
     */
    public function sheet($name, $callback = null)
    {
        $sheet = new Sheet($name);
        if (is_callable($callback)) {
            call_user_func($callback, $sheet);
        }
        $this->sheets[] = $sheet;
        return $this;
    }

    /**
     * 导出并下载（返回 Laravel 下载响应）
     * @param string $format xlsx|csv
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function export($format = 'xlsx')
    {
        if (empty($this->sheets)) {
            $this->sheets[] = new Sheet('Sheet1');
        }
        $format = strtolower($format);
        $fileName = $this->name . '.' . ('csv' === $format ? 'csv' : 'xlsx');
        $tempFile = tempnam(sys_get_temp_dir(), 'excel_') . '.' . ('csv' === $format ? 'csv' : 'xlsx');
        if ('csv' === $format) {
            CsvWriter::write($tempFile, $this->sheets[0]->getRows());
        } else {
            XlsxWriter::write($tempFile, $this->sheets[0]->getName(), $this->sheets[0]->getRows());
        }
        return response()->download($tempFile, $fileName)->deleteFileAfterSend(true);
    }

    /**
     * @param string $format
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function download($format = 'xlsx')
    {
        return $this->export($format);
    }

    /**
     * 保存到指定文件
     * @param string $path
     * @param string $format
     * @return string
     */
    public function store($path, $format = 'xlsx')
    {
        if (empty($this->sheets)) {
            $this->sheets[] = new Sheet('Sheet1');
        }
        if ('csv' === strtolower($format)) {
            CsvWriter::write($path, $this->sheets[0]->getRows());
        } else {
            XlsxWriter::write($path, $this->sheets[0]->getName(), $this->sheets[0]->getRows());
        }
        return $path;
    }
}
