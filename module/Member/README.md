# Member 会员体系

会员模块提供用户账号、登录态、分组、VIP、积分、钱包、消息、地址等基础能力，是所有需要「用户」的业务模块的地基。

## 何时需要集成

- 业务需要区分「游客 / 登录会员 / VIP」；
- 业务需要给会员加积分、扣余额、发 VIP；
- 业务需要在会员中心挂菜单入口；
- 业务需要会员信息（昵称、头像、等级）用于展示。

## 安装与启用

- 依赖：无（基础模块）；建议同时启用 `MemberCharge`（充值）、`MemberVip` 相关能力内置于本模块。
- 启用后前台自带 `/login`、`/register`、`/member` 三个入口。
- 会员相关数据表由本模块 `Migrate/` 自动创建，启用后执行 `php artisan modstart:module-install Member`。

## 其他模块如何对接

### 后台菜单

在 `Core/ModuleServiceProvider::boot()` 中通过 `AdminMenu` 注册本模块的会员数据入口（参考 `module/MemberReward`）。

### 会员中心菜单

通过 `MemberMenu::register(function () { ... })` 注册会员中心左侧菜单，参考 `module/MemberReward/Core/ModuleServiceProvider.php`。

### 会员数据读取与合并

```php
use Module\Member\Util\MemberUtil;

$memberUser = MemberUtil::get($memberUserId);                 // 完整信息
$basic = MemberUtil::getBasic($memberUserId);                  // 基础字段（昵称、头像等）
MemberUtil::mergeMemberUsers($records);                        // 列表批量合并 _memberUser
MemberUtil::mergeMemberUserBasics($records);                   // 列表批量合并基础字段
MemberUtil::listViewName($memberUserIds);                      // 批量取展示名
```

登录、注册、改密、唯一性校验统一走 `MemberUtil`（`login()` / `register()` / `changePassword()` / `uniqueCheck()`），禁止在业务模块内自己拼密码加密与唯一性判断。

### 积分、余额、VIP

| 能力 | 入口 | 说明 |
| --- | --- | --- |
| 积分变动 | `MemberCreditUtil::change($memberUserId, $change, $remark, $meta)` | 余额不足先 `checkOrFail()`；支持冻结 `freezePrepare/freezeCommit/freezeCancel` |
| 余额 | `MemberMoneyUtil` | 充值走 `MemberCharge` 模块，流水可查 |
| VIP 判定 | `MemberVipUtil::vipsByIds() / map() / allVisible()` | VIP 专享内容先判断会员 VIP 有效期 |
| 分组 | `MemberGroupUtil` | 会员分组、可见性控制 |

### 鉴权中间件

- 会员接口在路由组叠加 `\Module\Member\Middleware\ApiAuthMiddleware::class`（支持 `api-token` 复用登录态）；
- 后台会员鉴权使用 `MemberAuthMiddleware`，具体用法参考其他会员业务模块的 `Web/routes.php`。

### 用户使用协议 / 用户隐私协议 / 账号申诉

文档标题与内容由 `Module\Member\Util\MemberDocUtil::get($type)` 统一读取（`$type` 为 `agreement` / `privacy` / `appeal`），前台页面 `/member/agreement`、`/member/privacy`、`/member/appeal` 与接口 `/api/member_doc/get` 都走这里：

| 数据源 | 位置 | 优先级 |
| --- | --- | --- |
| Markdown 文件 | `public/theme/Member/Agreement.md`、`Privacy.md`、`Appeal.md` | 高（文件存在且正文非空时生效） |
| 后台配置 | 会员 → 用户协议（`Member_*Title` / `Member_*Content`） | 低（无文件时生效） |

Markdown 文件格式（`---` 需独占一行，正文按 Markdown 解析为 HTML）：

```
# 标题

---

正文
```

> 站点把协议内容放进 `public/theme/Member/` 后，改后台「用户协议」里的标题与内容不再生效，需要直接改文件（便于随代码版本管理）。

## 测试辅助

其他模块通过 `Module\Member\Test\Support\TestMember` 模拟登录：

```php
use Module\Member\Test\Support\TestMember;

TestMember::loginAsTest();          // 当前请求上下文模拟登录
TestMember::loginAsTestHttp();      // 内部 HTTP Kernel 请求携带登录态
TestMember::getTestUserId();
```

## 与其他模块的边界

- 支付相关（充值、购买）走 `module/PayCenter/README.md`，不要在会员模块内直接对接支付渠道；
- 消息通知（邮件/站内/Webhook）走 `module/Notifier/README.md`；
- 会员数据对外输出（统计、标签）见 `MemberDataHub`、`MemberTickHub` 模块。

## 文档索引

- 模块介绍：`Docs/module/content.md`
- 账号架构：`Docs/doc/MemberAccountArch.md`
- 登录与鉴权：`Docs/doc/MemberLoginCheck.md`
- VIP 分组：`Docs/doc/VipGroup.md`
- 充值：`Docs/doc/MemberCharge.md`
- 完整建设方案：`Docs/doc/Solution.md`
- 更新记录：`Docs/release.md`
