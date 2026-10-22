# BaconQrCode 内置说明

- forked-from: https://github.com/Bacon/BaconQrCode
- 基线版本: 1.0.3（PSR-0 布局 `src/BaconQrCode`，整合到本目录后为 PSR-4 风格 `src/Misc/BaconQrCode`）
- 命名空间: `BaconQrCode\`（未修改，便于与上游 diff）
- 本地改动: 未修改（整包搬运，未删文件、未改源码）
- 依赖扩展: `ext-iconv`（二维码字符编码转换）
- 加载方式: `ModStart\Misc\Bootstrap::register()` 注册兜底自动加载；宿主项目如自行安装 `bacon/bacon-qr-code`，优先使用宿主版本
- 上游同步方式: 拉取指定 tag 后覆盖本目录并跑二维码冒烟（`QrcodeUtil` 三种尺寸），建议每季度或安全公告时同步
- License: BSD-2-Clause（见本目录 `LICENSE`）
- 已知限制: 仅内置 1.x，`QrcodeUtil` 保留 1.x / 2.x 双分支（2.x 由宿主项目自行安装时生效）
- 依赖策略（6.0.0 起）: 业务代码只调用本目录内置实现；同名第三方包仅作线上兼容兜底，**后续版本将整体移除**（届时 `composer require` 与 `vendor/<pkg>` 一起删除）。新增代码禁止直接引用第三方类。
