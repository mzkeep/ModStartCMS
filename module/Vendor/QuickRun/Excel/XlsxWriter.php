<?php

namespace Module\Vendor\QuickRun\Excel;

use ModStart\Core\Exception\BizException;
use ZipArchive;

/**
 * xlsx 写入（ZipArchive 打包最小 OOXML 结构，单元格统一按文本写入以保留前导 0）
 */
class XlsxWriter
{
    /**
     * @param string $path
     * @param string $sheetName
     * @param array $rows
     * @return void
     */
    public static function write($path, $sheetName = 'Sheet1', $rows = [])
    {
        BizException::throwsIf('PHP zip 扩展未安装', !class_exists('ZipArchive'));
        $sheetName = self::safeSheetName($sheetName);
        $sheetXml = self::sheetXml($rows);
        $zip = new ZipArchive();
        if (true !== $zip->open($path, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            BizException::throws('无法创建 xlsx 文件: ' . $path);
        }
        $zip->addFromString('[Content_Types].xml', self::contentTypes());
        $zip->addFromString('_rels/.rels', self::rootRels());
        $zip->addFromString('xl/workbook.xml', self::workbook($sheetName));
        $zip->addFromString('xl/_rels/workbook.xml.rels', self::workbookRels());
        $zip->addFromString('xl/styles.xml', self::styles());
        $zip->addFromString('xl/worksheets/sheet1.xml', $sheetXml);
        $zip->close();
    }

    /**
     * @param string $name
     * @return string
     */
    private static function safeSheetName($name)
    {
        $name = strval($name);
        $name = preg_replace('/[\\\\\\/\\?\\*\\[\\]:]/', '_', $name);
        if ('' === $name) {
            $name = 'Sheet1';
        }
        return mb_substr($name, 0, 31);
    }

    /**
     * @return string
     */
    private static function contentTypes()
    {
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            . '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
            . '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
            . '<Default Extension="xml" ContentType="application/xml"/>'
            . '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
            . '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
            . '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
            . '</Types>';
    }

    /**
     * @return string
     */
    private static function rootRels()
    {
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            . '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            . '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
            . '</Relationships>';
    }

    /**
     * @param string $sheetName
     * @return string
     */
    private static function workbook($sheetName)
    {
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            . '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
            . '<sheets><sheet name="' . self::escape($sheetName) . '" sheetId="1" r:id="rId1"/></sheets>'
            . '</workbook>';
    }

    /**
     * @return string
     */
    private static function workbookRels()
    {
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            . '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            . '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>'
            . '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
            . '</Relationships>';
    }

    /**
     * @return string
     */
    private static function styles()
    {
        return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            . '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
            . '<fonts count="1"><font><sz val="11"/><name val="Calibri"/></font></fonts>'
            . '<fills count="1"><fill><patternFill patternType="none"/></fill></fills>'
            . '<borders count="1"><border/></borders>'
            . '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
            . '<cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="49" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs>'
            . '</styleSheet>';
    }

    /**
     * @param array $rows
     * @return string
     */
    private static function sheetXml($rows)
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            . '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>';
        $rowIndex = 1;
        foreach ((array)$rows as $row) {
            $xml .= '<row r="' . $rowIndex . '">';
            $columnIndex = 0;
            foreach ((array)$row as $value) {
                if (null === $value) {
                    $value = '';
                }
                if (is_array($value) || is_object($value)) {
                    $value = json_encode($value, JSON_UNESCAPED_UNICODE);
                }
                $ref = Excel::columnLetter($columnIndex) . $rowIndex;
                $xml .= '<c r="' . $ref . '" t="inlineStr" s="1"><is><t xml:space="preserve">'
                    . self::escape(strval($value)) . '</t></is></c>';
                $columnIndex++;
            }
            $xml .= '</row>';
            $rowIndex++;
        }
        $xml .= '</sheetData></worksheet>';
        return $xml;
    }

    /**
     * @param string $text
     * @return string
     */
    private static function escape($text)
    {
        return htmlspecialchars(strval($text), ENT_QUOTES | ENT_XML1, 'UTF-8');
    }
}
