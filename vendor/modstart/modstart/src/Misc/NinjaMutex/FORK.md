# NinjaMutex 内置说明

- forked-from: https://github.com/arvenil/ninja-mutex
- 基线版本: 0.6.0（PSR-0 布局 `src/NinjaMutex`，整合到本目录后为 PSR-4 风格 `src/Misc/NinjaMutex`）
- 命名空间: `NinjaMutex\`（未修改，便于与上游 diff）
- 本地改动: 未修改（整包搬运，未删文件、未改源码）
- 依赖: 无（`PredisRedisLock` / `MemcachedLock` 等文件仅在被使用时才加载，其客户端由宿主项目提供）
- 加载方式: `ModStart\Misc\Bootstrap::register()` 注册兜底自动加载；宿主项目如自行安装 `arvenil/ninja-mutex`，优先使用宿主版本
- 使用位置: `ModStart\Core\Util\LockUtil`、`ModStart\Core\Util\DBLockUtil`、`ModStart\Core\Util\Support\MySqlLock`
- 上游同步方式: 拉取指定 tag 后覆盖本目录并跑并发锁冒烟，建议每季度同步
- License: MIT（见本目录 `LICENSE`）
- 已知限制: 仅使用 MySQL `GET_LOCK` 实现，不依赖 Redis / Memcached
- 依赖策略（6.0.0 起）: 业务代码只调用本目录内置实现；同名第三方包仅作线上兼容兜底，**后续版本将整体移除**（届时 `composer require` 与 `vendor/<pkg>` 一起删除）。新增代码禁止直接引用第三方类。
