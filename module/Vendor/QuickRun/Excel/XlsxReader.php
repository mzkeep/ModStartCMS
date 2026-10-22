<?php

namespace Module\Vendor\QuickRun\Excel;

use ModStart\Core\Exception\BizException;
use ZipArchive;

/**
 * xlsx 读取（ZipArchive + SimpleXML）
 */
class XlsxReader
{
    /** @var string */
    private $file;

    /**
     * @param string $file
     */
    public function __construct($file)
    {
        BizException::throwsIf('Excel 文件不存在', !is_file($file));
        BizException::throwsIf('PHP zip 扩展未安装', !class_exists('ZipArchive'));
        $this->file = $file;
    }

    /**
     * 读取第一个工作表
     * @return array
     */
    public function rows()
    {
        $zip = new ZipArchive();
        if (true !== $zip->open($this->file)) {
            BizException::throws('无法打开 xlsx 文件');
        }
        $sharedStrings = $this->readSharedStrings($zip);
        $sheetXml = $zip->getFromName('xl/worksheets/sheet1.xml');
        if (false === $sheetXml || '' === $sheetXml) {
            $sheetXml = $this->firstWorksheet($zip);
        }
        $zip->close();
        if ('' === strval($sheetXml)) {
            return [];
        }
        $document = @simplexml_load_string($sheetXml, 'SimpleXMLElement', LIBXML_NOCDATA | LIBXML_NOERROR);
        if (false === $document) {
            BizException::throws('xlsx 工作表解析失败');
        }
        $rows = [];
        $maxColumn = 0;
        foreach ($document->sheetData->row as $row) {
            $cells = [];
            foreach ($row->c as $cell) {
                $ref = strval($cell['r']);
                $index = Excel::columnIndex(preg_replace('/\d+/', '', $ref));
                $type = strval($cell['t']);
                if ('inlineStr' === $type) {
                    $value = isset($cell->is->t) ? strval($cell->is->t) : '';
                } elseif ('s' === $type) {
                    $sharedIndex = intval($cell->v);
                    $value = isset($sharedStrings[$sharedIndex]) ? $sharedStrings[$sharedIndex] : '';
                } elseif ('str' === $type) {
                    $value = strval($cell->v);
                } else {
                    $value = isset($cell->v) ? strval($cell->v) : '';
                }
                $cells[$index] = $value;
                if ($index + 1 > $maxColumn) {
                    $maxColumn = $index + 1;
                }
            }
            $line = [];
            for ($i = 0; $i < $maxColumn; $i++) {
                $line[$i] = isset($cells[$i]) ? $cells[$i] : null;
            }
            $rows[] = $line;
        }
        return $rows;
    }

    /**
     * 读取共享字符串
     * @param ZipArchive $zip
     * @return array
     */
    private function readSharedStrings($zip)
    {
        $xml = $zip->getFromName('xl/sharedStrings.xml');
        if (false === $xml || '' === strval($xml)) {
            return [];
        }
        $document = @simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA | LIBXML_NOERROR);
        if (false === $document) {
            return [];
        }
        $strings = [];
        foreach ($document->si as $item) {
            if (isset($item->t)) {
                $strings[] = strval($item->t);
                continue;
            }
            $text = '';
            foreach ($item->r as $run) {
                $text .= isset($run->t) ? strval($run->t) : '';
            }
            $strings[] = $text;
        }
        return $strings;
    }

    /**
     * 取第一个工作表内容（sheet1.xml 命名不固定时）
     * @param ZipArchive $zip
     * @return string
     */
    private function firstWorksheet($zip)
    {
        for ($i = 0; $i < $zip->numFiles; $i++) {
            $name = $zip->getNameIndex($i);
            if (0 === strpos($name, 'xl/worksheets/') && '.xml' === substr($name, -4)) {
                return strval($zip->getFromName($name));
            }
        }
        return '';
    }
}
