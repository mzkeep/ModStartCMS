# 内置微信开发库（module/Vendor/QuickRun/Wechat）

> 不依赖 EasyWeChat 等第三方微信 SDK，只用 modstart 自身的 HTTP/缓存能力实现微信常用接口。

## 支持范围

| 应用 | 用法 | 说明 |
| --- | --- | --- |
| 公众号 | `new OfficialAccount($config)` | `$app->qrcode->temporary()`、`$app->media->uploadImage()`、`$app->customer_service->message($msg)->to($openId)->send()`、`$app->jssdk->buildConfig()`、`$app->menu->create()`、`$app->template_message->send()`、`$app->server->push()/serve()` |
| 小程序 | `new MiniProgram($config)` | `$app->auth->session($code)`、`$app->app_code->getUnlimit($scene, $params)`、`$app->phone_number->getUserPhoneNumber($code)`、`$app->template_message->send()` |
| 微信支付 | `new Payment($config)` | `$payment->order->unify()` / `query()` / `close()`、`$payment->jssdk->bridgeConfig($prepayId)`、`$payment->handlePaidNotify($handler)` |

`$config` 字段与 EasyWeChat 一致：`app_id` / `secret` / `token` / `aes_key`（公众号）；`app_id` / `mch_id` / `key`（支付）。

## 说明

- `access_token`、`jsapi_ticket` 通过 Laravel Cache 缓存（7000 秒），失败自动刷新重试一次。
- 消息加解密（安全模式）由 `Crypt` 实现（AES-256-CBC，兼容 WXBizMsgCrypt）。
- 支付为微信支付 **V2** 接口（MD5 签名、XML 报文）。
- 错误提示保留关键信息（如 `invalid ip`）便于提示配置白名单。

## 测试

`module/Vendor/Test/Biz/WechatLib.php` 覆盖 XML 互转、签名、AES 加解密、JSAPI 支付签名、消息对象与应用分派。
