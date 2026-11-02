## [Unreleased]

- 新增：模块 README 集成说明（module/VisitStatistic/README.md，其他系统集成先读此文件）
- 优化：截图命名统一为 `<设备前缀>.<页面>.png`（pc / pcFull / m / mFull，后台页面为 pc.）
- 优化：多语言管理菜单显示优化
- 优化：测试种子统一为单文件 module/VisitStatistic/Test/Seed.php
- 优化：预览截图脚本迁移到 module/VisitStatistic/Test/ScreenShot.php，截图产物统一输出到 Temp/ScreenShotImage 目录
- 新增：支持 Laravel 13 / PHP 8.5，config.json 环境声明新增 laravel13

---

## 1.3.0 访问明细数据支持导出功能

- 新增：访问明细数据支持导出功能

---

## 1.2.2 网站静态页面访问记录功能，增加 visit_statistic/tick 请求记录功能

- 新增：网站静态页面访问记录功能，增加 visit_statistic/tick 请求记录功能

---

## 1.2.1 运营报表-网站访问-明细-删除提示无权限问题

- 修复：运营报表-网站访问-明细-删除提示无权限问题

---

## 1.2.0 运营报表页面，实时数据优化

- 新增：运营报表-网站访问页面，合并设置和详细页面
- 优化：网站统计报表实时查询数据库插入冲突问题

---

## 1.1.0 爬虫开关功能，避免记录无效访问记录

- 新增：网站访问记录增加忽略爬虫开关功能，避免记录无效访问记录

---

## 1.0.0 网站访问记录

- 提供内置的网站访问记录功能
