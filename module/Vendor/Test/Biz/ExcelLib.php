<?php

/**
 * 自研 Excel 读写库测试（module/Vendor/QuickRun/Excel）
 *
 * 覆盖：xlsx 写入与读回、表头模式、CSV 写入与读回、列号互转、非 xlsx 格式报错。
 */

use ModStart\Test\TestCase;
use Module\Vendor\QuickRun\Excel\Excel;

TestCase::describe('Excel 内置库', function () {

    $temp = storage_path('temp/excel-lib-' . substr(md5(uniqid('', true)), 0, 8));

    TestCase::beforeEach(function () use ($temp) {
        if (!is_dir($temp)) {
            @mkdir($temp, 0755, true);
        }
    });

    TestCase::test('列号与列字母互转', function () {
        TestCase::assertEquals('A', Excel::columnLetter(0), '第 0 列 => A');
        TestCase::assertEquals('Z', Excel::columnLetter(25), '第 25 列 => Z');
        TestCase::assertEquals('AA', Excel::columnLetter(26), '第 26 列 => AA');
        TestCase::assertEquals(0, Excel::columnIndex('A'), 'A => 0');
        TestCase::assertEquals(25, Excel::columnIndex('Z'), 'Z => 25');
        TestCase::assertEquals(26, Excel::columnIndex('AA'), 'AA => 26');
    });

    TestCase::test('xlsx 写入后可原样读回（保留前导 0）', function () use ($temp) {
        $file = $temp . '/round-trip.xlsx';
        $rows = [
            ['标题', '编码', '数量'],
            ['测试资源', '00123', '10'],
            ['第二行', '000', '0'],
        ];
        Excel::create('round-trip', function ($excel) use ($rows) {
            $excel->sheet('Data', function ($sheet) use ($rows) {
                $sheet->rows($rows, true);
            });
        })->store($file, 'xlsx');
        TestCase::assertTrue(file_exists($file) && filesize($file) > 0, 'xlsx 文件已生成');

        $read = Excel::load($file)->noHeading()->all()->toArray();
        TestCase::assertEquals(3, count($read), '读回行数一致');
        TestCase::assertEquals('标题', $read[0][0], '首行首列内容一致');
        TestCase::assertEquals('00123', $read[1][1], '前导 0 被保留为文本');
        TestCase::assertEquals('000', $read[2][1], '全 0 编码被保留');
    });

    TestCase::test('默认按表头读取为关联数组', function () use ($temp) {
        $file = $temp . '/head.xlsx';
        Excel::create('head', function ($excel) {
            $excel->sheet('Data', function ($sheet) {
                $sheet->rows([
                    ['名称', '数量'],
                    ['A', '1'],
                    ['B', '2'],
                ], true);
            });
        })->store($file, 'xlsx');
        $rows = Excel::load($file)->all()->toArray();
        TestCase::assertEquals(2, count($rows), '表头之外两行数据');
        TestCase::assertEquals('A', $rows[0]['名称'], '按表头取值');
        TestCase::assertEquals('2', $rows[1]['数量'], '第二行数据正确');
    });

    TestCase::test('CSV 写入与读回', function () use ($temp) {
        $file = $temp . '/data.csv';
        Excel::create('data', function ($excel) {
            $excel->sheet('Data', function ($sheet) {
                $sheet->rows([
                    ['名称', '编码'],
                    ['中文名称', '0042'],
                ], true);
            });
        })->store($file, 'csv');
        TestCase::assertTrue(file_exists($file), 'CSV 文件已生成');
        $rows = Excel::load($file)->noHeading()->all()->toArray();
        TestCase::assertEquals('中文名称', $rows[1][0], 'CSV 中文内容正确');
        TestCase::assertEquals('0042', $rows[1][1], 'CSV 前导 0 保留');
    });

    TestCase::test('不支持的格式给出明确错误', function () use ($temp) {
        $file = $temp . '/data.xls';
        file_put_contents($file, 'not a real xls');
        $thrown = false;
        try {
            Excel::load($file)->all()->toArray();
        } catch (\Exception $e) {
            $thrown = true;
            TestCase::assertContains('仅支持 xlsx / csv', $e->getMessage(), '错误提示说明支持的格式');
        }
        TestCase::assertTrue($thrown, 'xls 格式抛出异常');
    });

    TestCase::test('清理临时文件', function () use ($temp) {
        foreach ((array)glob($temp . '/*') as $file) {
            @unlink($file);
        }
        @rmdir($temp);
        TestCase::assertFalse(is_dir($temp), '临时目录已清理');
    });

});
