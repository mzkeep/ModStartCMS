# CMS系统

提供通用的动态模型内容管理系统

## 基本信息

- 模块标识：`Cms`
- 适用端：PC
- 依赖模块：`Vendor:>=1.9.0`、`Member`、`Banner:>=1.1.0`
- 安装：`php artisan modstart:module-install Cms`（数据表由 `Migrate/` 自动创建）
- 启用：后台「模块管理」启用，或在 `config/module.php` 中注册

## 目录结构

| 目录 | 说明 |
| --- | --- |
| `Admin/` | 后台管理控制器与路由 |
| `AdminCli/` | 后台 CLI 接口（Controller + routes.php + api.json） |
| `Api/` | 对外 API 控制器与路由 |
| `Asset/` | 静态资源 |
| `Core/` | 模块服务提供者（菜单 / 事件 / 业务注册） |
| `Docs/` | 文档 |
| `Migrate/` | 数据库迁移 |
| `Model/` | 数据模型 |
| `Provider/` | 服务提供者实现 |
| `Test/` | 测试与演示数据 |
| `Type/` | 类型定义 |
| `Util/` | 工具类 |
| `View/` | Blade 模板 |
| `Web/` | 前台控制器与路由 |

## 对外能力

- 后台管理：`Admin/routes.php`（挂载在 `/{adminPath}/` 下）
- CLI 接口：`AdminCli/api.json`（挂载在 `/{adminPath}/cli/` 下，见 `module/AdminCli/README.md`）
- API 接口：`Api/routes.php`（前缀 `api/`，会员鉴权接口叠加 `ApiAuthMiddleware`）
- 前台页面：`Web/routes.php`

## 测试

- 演示 / 测试数据：`Test/Seed.php`

## 文档索引

- 模块介绍：`Docs/module/content.md`
- 预览图：`Docs/module/preview.md`
- 手机预览图：`Docs/module/mobilePreview.md`
- 演示说明：`Docs/module/demo.md`
- 模块市场文档：`Docs/doc/Solution.md`
- 模块市场文档：`Docs/doc/TemplateEdit.md`
- 模块市场文档：`Docs/doc/ThemeCustom.md`
- 更新记录：`Docs/release.md`

## 集成说明

其他系统 / 模块集成本模块时，先阅读上面的「对外能力」与文档索引；
需要补充的调用示例、初始化数据、扩展点请写入 `Docs/manual/`（随模块包发布），并在此处登记索引。
