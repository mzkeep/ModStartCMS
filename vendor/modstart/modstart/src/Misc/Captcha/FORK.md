# Captcha 内置说明

- forked-from: https://github.com/mewebstudio/captcha（mews/captcha）
- 基线版本: dev-master（按项目内长期使用的版本行为对齐）
- 命名空间: `ModStart\Misc\Captcha`（内置到 modstart 后已改名，避免与宿主安装的 mews/captcha 冲突）
- 本地改动:
  - 绘制引擎由 `intervention/image` 改为 `ModStart\Core\Util\Gd\GdImage`（内部 GD 实现）
  - 移除 `ImageManager` 容器绑定与构造参数，改由 `ModStart\ModStartServiceProvider` 注册 `CaptchaServiceProvider`
  - 修复 API 模式（`create($config, true)`）缺少 `sensitive` 字段的问题
- 依赖: `ext-gd`、`ext-mbstring`；字体与背景图位于 `resources/misc/captcha/`
- 使用位置: `ModStart\Admin\Controller\AuthController`、`Module\CaptchaFormula`、`Module\Member` 等（通过 `CaptchaFacade`）
- 上游同步方式: 与 mews/captcha 行为对齐即可，无需逐行同步（推荐只关注安全与可用性修复）
- License: MIT（上游 mews/captcha）
- 已知限制: 未实现 imagick 驱动；验证码校验值直接存放在 session `captcha` 中（与项目原有行为一致）
- 依赖策略（6.0.0 起）: 业务代码只调用本目录内置实现；同名第三方包仅作线上兼容兜底，**后续版本将整体移除**（届时 `composer require` 与 `vendor/<pkg>` 一起删除）。新增代码禁止直接引用第三方类。
