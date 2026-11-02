# 管理员基础框架

提供基于管理员角色、管理员、管理日志基础功能

## 基本信息

- 模块标识：`AdminManager`
- 适用端：Admin
- 依赖模块：`Vendor`
- 安装：`php artisan modstart:module-install AdminManager`（数据表由 `Migrate/` 自动创建）
- 启用：后台「模块管理」启用，或在 `config/module.php` 中注册

## 目录结构

| 目录 | 说明 |
| --- | --- |
| `Admin/` | 后台管理控制器与路由 |
| `AdminCli/` | 后台 CLI 接口（Controller + routes.php + api.json） |
| `Asset/` | 静态资源 |
| `Core/` | 模块服务提供者（菜单 / 事件 / 业务注册） |
| `Docs/` | 文档 |
| `Migrate/` | 数据库迁移 |
| `Test/` | 测试与演示数据 |
| `Util/` | 工具类 |
| `View/` | Blade 模板 |

## 对外能力

- 后台管理：`Admin/routes.php`（挂载在 `/{adminPath}/` 下）
- CLI 接口：`AdminCli/api.json`（挂载在 `/{adminPath}/cli/` 下，见 `module/AdminCli/README.md`）

## 测试

- Api 测试：`Test/Api/`
- Biz 测试：`Test/Biz/`
- UI 测试：`Test/UI/`
- 截图脚本：`Test/ScreenShot.php`

## 文档索引

- 模块介绍：`Docs/module/content.md`
- 预览图：`Docs/module/preview.md`
- 更新记录：`Docs/release.md`

## 集成说明

其他系统 / 模块集成本模块时，先阅读上面的「对外能力」与文档索引；
需要补充的调用示例、初始化数据、扩展点请写入 `Docs/manual/`（随模块包发布），并在此处登记索引。
