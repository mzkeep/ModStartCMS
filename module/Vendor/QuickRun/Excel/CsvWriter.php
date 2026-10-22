<?php

namespace Module\Vendor\QuickRun\Excel;

/**
 * CSV 写入
 */
class CsvWriter
{
    /**
     * @param string $path
     * @param array $rows
     * @return void
     */
    public static function write($path, $rows = [])
    {
        $handle = fopen($path, 'w');
        if (false === $handle) {
            return;
        }
        // 写入 BOM，避免 Excel 打开中文乱码
        fwrite($handle, "\xEF\xBB\xBF");
        foreach ((array)$rows as $row) {
            $line = [];
            foreach ((array)$row as $value) {
                if (is_array($value) || is_object($value)) {
                    $value = json_encode($value, JSON_UNESCAPED_UNICODE);
                }
                $line[] = strval($value);
            }
            fputcsv($handle, $line);
        }
        fclose($handle);
    }
}
