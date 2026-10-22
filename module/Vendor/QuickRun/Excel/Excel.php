<?php

namespace Module\Vendor\QuickRun\Excel;

use ModStart\Core\Exception\BizException;

/**
 * Excel 读写（自研，不依赖 maatwebsite/excel、PhpSpreadsheet、PHPExcel）
 *
 * 用法与原来的 Laravel Excel 保持一致：
 *   Excel::load($file, function ($reader) { $reader->noHeading(); $data = $reader->all()->toArray(); });
 *   Excel::create('文件名', function ($excel) {
 *       $excel->sheet('Data', function ($sheet) { $sheet->rows($rows, true); });
 *   })->export('xlsx');
 *
 * 仅支持 xlsx / csv 格式（不支持二进制 xls）。
 */
class Excel
{
    /**
     * 读取文件
     * @param string $file
     * @param callable|null $callback
     * @return Reader|null
     */
    public static function load($file, $callback = null)
    {
        $reader = new Reader($file);
        if (is_callable($callback)) {
            call_user_func($callback, $reader);
            return null;
        }
        return $reader;
    }

    /**
     * 创建导出文件
     * @param string $name
     * @param callable|null $callback
     * @return Writer
     */
    public static function create($name, $callback = null)
    {
        $writer = new Writer($name);
        if (is_callable($callback)) {
            call_user_func($callback, $writer);
        }
        return $writer;
    }

    /**
     * 列序号转列字母（0 => A, 26 => AA）
     * @param int $index
     * @return string
     */
    public static function columnLetter($index)
    {
        $index = intval($index);
        $letters = '';
        do {
            $letters = chr(65 + ($index % 26)) . $letters;
            $index = intval($index / 26) - 1;
        } while ($index >= 0);
        return $letters;
    }

    /**
     * 列字母转列序号（A => 0, AA => 26）
     * @param string $letters
     * @return int
     */
    public static function columnIndex($letters)
    {
        $letters = strtoupper(preg_replace('/[^A-Za-z]/', '', strval($letters)));
        $index = 0;
        for ($i = 0; $i < strlen($letters); $i++) {
            $index = $index * 26 + (ord($letters[$i]) - 64);
        }
        return max(0, $index - 1);
    }

    /**
     * 校验文件格式
     * @param string $file
     * @return string xlsx|csv
     */
    public static function format($file)
    {
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, ['xlsx', 'csv'], true)) {
            return $ext;
        }
        BizException::throws('仅支持 xlsx / csv 格式的 Excel 文件（当前：' . $ext . '）');
        return $ext;
    }
}
