## [Unreleased]

- 新增：模块 README 集成说明（module/ContentBlock/README.md，其他系统集成先读此文件）
- 优化：截图命名统一为 `<设备前缀>.<页面>.png`（pc / pcFull / m / mFull，后台页面为 pc.）
- 优化：测试种子统一为单文件 module/ContentBlock/Test/Seed.php
- 优化：预览截图脚本迁移到 module/ContentBlock/Test/ScreenShot.php，截图产物统一输出到 Temp/ScreenShotImage 目录
- 新增：支持 Laravel 13 / PHP 8.5，config.json 环境声明新增 laravel13

---

## 1.2.1 多语言管理菜单显示优化

- 优化：多语言管理菜单显示优化

---

## 1.2.0 内容块支持通用类型，内容块修改时自动清理缓存

- 新增：内容块支持通用类型
- 优化：内容块修改时自动清理缓存

---

## 1.1.0 新增ID获取方法，接口文档信息完善

- 新增：增加根据ID获取内容块的方法
- 优化：增加调用接口文档信息

---

## 1.0.0 内容区块

- 后台提供便捷的的内容块管理代码，方便前端调用展示
