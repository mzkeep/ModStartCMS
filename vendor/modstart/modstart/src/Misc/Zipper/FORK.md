# Zipper 内置说明

- forked-from: https://github.com/Chumper/Zipper
- 基线版本: 未标注版本号（按代码头部与仓库主线搬入，未保留上游测试与文档）
- 命名空间: `Chumper\Zipper\`（未修改）
- 本地改动: 仅保留 `src` 代码，移除了上游测试 / phpunit 配置 / 文档
- 依赖扩展: `ext-zip`（`Repositories/ZipRepository.php` 使用 `ZipArchive`）
- 加载方式: `composer.json` 的 `psr-4` 直接映射 `Chumper\Zipper\` => `src/Misc/Zipper`（无第三方包参与）
- 使用位置: `ModStart\Core\Util\ZipUtil`、`ModuleDeveloper`、`ModStart` 等模块的打包 / 解包逻辑
- 上游同步方式: 手工 diff 覆盖本目录，跑打包 / 解包冒烟（含“打开不存在的 zip”用例），建议每季度同步
- License: MIT（上游 Chumper/Zipper）
- 已知限制: 依赖 PHP 的 zip 扩展；PHP 8 下 `open()` 返回值语义有细微差异，冒烟需覆盖异常路径
- 依赖策略（6.0.0 起）: 业务代码只调用本目录内置实现；同名第三方包仅作线上兼容兜底，**后续版本将整体移除**（届时 `composer require` 与 `vendor/<pkg>` 一起删除）。新增代码禁止直接引用第三方类。
