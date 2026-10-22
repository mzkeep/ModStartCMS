# 内置 Excel 读写库（module/Vendor/QuickRun/Excel）

> 不依赖 maatwebsite/excel、PhpSpreadsheet、PHPExcel，自行实现 xlsx / csv 读写。

## 用法（与原 Laravel Excel 一致）

```php
use Module\Vendor\QuickRun\Excel\Excel;

// 导入
$data = Excel::load($file)->noHeading()->all()->toArray();   // 首行也作为数据
$rows = Excel::load($file)->all()->toArray();                // 首行作为表头，返回关联数组

// 导出（控制器中直接 return）
return Excel::create('文件名', function ($excel) {
    $excel->sheet('Data', function ($sheet) {
        $sheet->rows($rows, true);      // 第二参数仅表示首行是标题
    });
})->export('xlsx');
```

## 说明

- 支持 `xlsx` 与 `csv`；**不支持二进制 `xls`**（会给出明确错误提示）。
- 写入的单元格统一按文本（inlineStr）输出，可保留编码的前导 0。
- `setColumnFormat()` / `setAutoSize()` 为兼容保留的空实现。
- `store($path, $format)` 可保存到指定文件，便于脚本导出。

## 测试

`module/Vendor/Test/Biz/ExcelLib.php` 覆盖 xlsx 往返读写、表头模式、CSV、列号互转与非法格式提示。
