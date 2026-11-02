# AI平台对接

提供AI基础框架包，支持各种模型接入

## 基本信息

- 模块标识：`AigcBase`
- 适用端：PC
- 依赖模块：`Vendor:>=4.1.0`
- 安装：`php artisan modstart:module-install AigcBase`（数据表由 `Migrate/` 自动创建）
- 启用：后台「模块管理」启用，或在 `config/module.php` 中注册

## 目录结构

| 目录 | 说明 |
| --- | --- |
| `Admin/` | 后台管理控制器与路由 |
| `AdminCli/` | 后台 CLI 接口（Controller + routes.php + api.json） |
| `Api/` | 对外 API 控制器与路由 |
| `Asset/` | 静态资源 |
| `Biz/` | 业务逻辑与提供者注册 |
| `Core/` | 模块服务提供者（菜单 / 事件 / 业务注册） |
| `Docs/` | 文档 |
| `Job/` | 队列任务 |
| `Migrate/` | 数据库迁移 |
| `Model/` | 数据模型 |
| `Provider/` | 服务提供者实现 |
| `Temp/` | 截图产物与临时素材（打包排除） |
| `Test/` | 测试与演示数据 |
| `Type/` | 类型定义 |
| `Util/` | 工具类 |
| `View/` | Blade 模板 |
| `Web/` | 前台控制器与路由 |

## 对外能力

- 后台管理：`Admin/routes.php`（挂载在 `/{adminPath}/` 下）
- CLI 接口：`AdminCli/api.json`（挂载在 `/{adminPath}/cli/` 下，见 `module/AdminCli/README.md`）
- 前台页面：`Web/routes.php`
- 业务扩展：`Biz/`（提供者 / 业务逻辑，供其他模块注册或调用）

## 测试

- 演示 / 测试数据：`Test/Seed.php`
- Api 测试：`Test/Api/`
- Biz 测试：`Test/Biz/`
- 截图脚本：`Test/ScreenShot.php`（产物 `Temp/ScreenShotImage/pc.<page>.png`）

## 文档索引

- 模块介绍：`Docs/module/content.md`
- 预览图：`Docs/module/preview.md`
- 手机预览图：`Docs/module/mobilePreview.md`
- 更新记录：`Docs/release.md`

## 集成说明

其他系统 / 模块集成本模块时，先阅读上面的「对外能力」与文档索引；
需要补充的调用示例、初始化数据、扩展点请写入 `Docs/manual/`（随模块包发布），并在此处登记索引。
