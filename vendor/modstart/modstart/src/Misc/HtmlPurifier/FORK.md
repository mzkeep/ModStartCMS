# HTMLPurifier 内置说明

- forked-from: https://github.com/ezyang/htmlpurifier
- 基线版本: 4.18.0（见本目录 `VERSION`）
- 命名空间: `HTMLPurifier_*`（扁平类名，未修改）
- 本地改动: 未修改（`library` 目录整包原样搬运，未删文件、未改源码）
- 加载方式: `ModStart\Misc\Bootstrap::register()` 注册兜底自动加载，首次命中 `HTMLPurifier*` 类时：
  1. 定义 `HTMLPURIFIER_PREFIX` 指向本目录 `library`
  2. `require_once library/HTMLPurifier/Bootstrap.php`
  3. `HTMLPurifier_Bootstrap::registerAutoload()` 由库自身完成类名到文件名的映射
  > 不使用 `set_include_path`（避免全局副作用），不走 `HTMLPurifier.includes.php`（一次性 require 220 个文件，首次开销大）
- 使用位置: `ModStart\Misc\Html\Purifier`（`HtmlUtil::purify` 等），配置见 `ModStart\Misc\Html\config.php`
- 缓存目录: `storage/cache/purifier`（`Cache.SerializerPath`，由 `Purifier` 自动创建）
- 上游同步方式: 拉取 release tag 后覆盖 `library` 目录 + 更新 `VERSION`，跑 XSS 用例集，建议每季度或安全公告时同步
- License: LGPL-2.1-or-later（见本目录 `LICENSE`，禁止改写许可证，修改源码需在同一许可证下并记录）
- 已知限制: `Cache.SerializerPath` 目录需可写；`HTML.Allowed` 白名单见 `config.php`
- 依赖策略（6.0.0 起）: 业务代码只调用本目录内置实现；同名第三方包仅作线上兼容兜底，**后续版本将整体移除**（届时 `composer require` 与 `vendor/<pkg>` 一起删除）。新增代码禁止直接引用第三方类。
