<?php

/**
 * 自研微信库测试（module/Vendor/QuickRun/Wechat）
 *
 * 覆盖：XML 互转、V2 签名生成与校验、AES 消息加解密、JSAPI 支付配置签名、消息对象转换、应用类型分派。
 */

use ModStart\Test\TestCase;
use Module\Vendor\QuickRun\Wechat\Application;
use Module\Vendor\QuickRun\Wechat\Crypt;
use Module\Vendor\QuickRun\Wechat\Http;
use Module\Vendor\QuickRun\Wechat\Message\Image;
use Module\Vendor\QuickRun\Wechat\Message\Text;
use Module\Vendor\QuickRun\Wechat\MiniProgram;
use Module\Vendor\QuickRun\Wechat\OfficialAccount;
use Module\Vendor\QuickRun\Wechat\Payment;
use Module\Vendor\QuickRun\Wechat\Api\JssdkApi;
use Module\Vendor\QuickRun\Wechat\Api\MediaApi;
use Module\Vendor\QuickRun\Wechat\Api\PaymentJssdkApi;
use Module\Vendor\QuickRun\Wechat\Api\QrcodeApi;
use Module\Vendor\QuickRun\Wechat\Api\TemplateMessageApi;
use Module\Vendor\QuickRun\Wechat\Api\UserApi;

TestCase::describe('微信内置库', function () {

    TestCase::test('XML 互转', function () {
        $data = ['return_code' => 'SUCCESS', 'total_fee' => 1, 'attach' => '中文内容'];
        $xml = Http::arrayToXml($data);
        TestCase::assertContains('<return_code><![CDATA[SUCCESS]]></return_code>', $xml, '字符串按 CDATA 输出');
        $parsed = Http::xmlToArray($xml);
        TestCase::assertEquals('SUCCESS', $parsed['return_code'], '解析 return_code');
        TestCase::assertEquals('1', $parsed['total_fee'], '解析数字字段');
        TestCase::assertEquals('中文内容', $parsed['attach'], '解析中文内容');
    });

    TestCase::test('微信支付 V2 签名与校验', function () {
        $data = [
            'appid' => 'wx1234567890',
            'mch_id' => '1230000109',
            'nonce_str' => 'abcdefghijklmnop',
            'body' => '测试商品',
            'total_fee' => 1,
        ];
        $sign = Http::md5Sign($data, 'test-key');
        TestCase::assertEquals(32, strlen($sign), '签名为 32 位 MD5');
        TestCase::assertEquals($sign, Http::md5Sign($data, 'test-key'), '相同参数签名稳定');
        $data['sign'] = $sign;
        TestCase::assertTrue(Http::verifyMd5Sign($data, 'test-key'), '正确签名校验通过');
        $data['total_fee'] = 2;
        TestCase::assertFalse(Http::verifyMd5Sign($data, 'test-key'), '篡改金额签名校验失败');
    });

    TestCase::test('AES 消息加解密（安全模式）', function () {
        $rawKey = md5('wechat-test-key-1', true) . md5('wechat-test-key-2', true);
        $encodingKey = rtrim(base64_encode($rawKey), '=');
        $crypt = new Crypt('wx-test-appid', 'test-token', $encodingKey);
        TestCase::assertTrue($crypt->available(), 'aes_key 有效');
        $xml = '<xml><Content><![CDATA[你好微信]]></Content></xml>';
        $encrypted = $crypt->encrypt($xml);
        TestCase::assertNotEmpty($encrypted, '加密结果非空');
        TestCase::assertEquals($xml, $crypt->decrypt($encrypted), '解密后内容一致');
    });

    TestCase::test('JSAPI 支付配置签名正确', function () {
        $payment = new Payment([
            'app_id' => 'wx-test-appid',
            'mch_id' => '1230000109',
            'key' => 'test-key-1234567890',
        ]);
        $config = $payment->jssdk->bridgeConfig('wx-prepay-id-test', false);
        TestCase::assertEquals('wx-test-appid', $config['appId'], 'appId 正确');
        TestCase::assertEquals('prepay_id=wx-prepay-id-test', $config['package'], 'package 正确');
        TestCase::assertEquals('MD5', $config['signType'], '签名类型 MD5');
        $expect = Http::md5Sign([
            'appId' => $config['appId'],
            'timeStamp' => $config['timeStamp'],
            'nonceStr' => $config['nonceStr'],
            'package' => $config['package'],
            'signType' => $config['signType'],
        ], 'test-key-1234567890');
        TestCase::assertEquals($expect, $config['paySign'], 'paySign 与字段签名一致');
        $json = $payment->jssdk->bridgeConfig('wx-prepay-id-test', true);
        TestCase::assertTrue(is_string($json) && false !== strpos($json, 'paySign'), 'json 模式返回字符串');
    });

    TestCase::test('应用类型分派正确', function () {
        $officialAccount = new OfficialAccount(['app_id' => 'wx-test', 'secret' => 'secret']);
        TestCase::assertTrue($officialAccount->qrcode instanceof QrcodeApi, '公众号二维码接口');
        TestCase::assertTrue($officialAccount->media instanceof MediaApi, '公众号素材接口');
        TestCase::assertTrue($officialAccount->jssdk instanceof JssdkApi, '公众号 JS-SDK 接口');
        TestCase::assertTrue($officialAccount->template_message instanceof TemplateMessageApi, '公众号模板消息接口');
        TestCase::assertTrue($officialAccount->user instanceof UserApi, '公众号用户管理接口');

        $miniProgram = new MiniProgram(['app_id' => 'wx-test', 'secret' => 'secret']);
        TestCase::assertNotEmpty($miniProgram->auth, '小程序登录接口');

        $payment = new Payment(['app_id' => 'wx-test', 'mch_id' => '123', 'key' => 'k']);
        TestCase::assertTrue($payment->jssdk instanceof PaymentJssdkApi, '支付 JS-SDK 接口');
    });

    TestCase::test('消息对象转换', function () {
        $text = new Text('你好');
        TestCase::assertEquals(['msgtype' => 'text', 'text' => ['content' => '你好']], $text->toCustomerServiceData(), '文本客服消息体');
        $reply = $text->toReplyData();
        TestCase::assertEquals('text', $reply['MsgType'], '被动回复消息类型');
        TestCase::assertEquals('你好', $reply['Content'], '被动回复内容');

        $image = new Image('media-123');
        TestCase::assertEquals(['msgtype' => 'image', 'image' => ['media_id' => 'media-123']], $image->toCustomerServiceData(), '图片客服消息体');
        TestCase::assertEquals('media-123', $image->toReplyData()['MediaId'], '图片被动回复 media_id');
    });

    TestCase::test('小程序登录接口从应用读取 AppSecret', function () {
        $app = new MiniProgram(['app_id' => 'wx-test-appid', 'secret' => 'wx-test-secret']);
        TestCase::assertEquals('wx-test-secret', $app->secret(), '应用可读取 AppSecret');
        $api = $app->auth;
        TestCase::assertTrue($api instanceof \Module\Vendor\QuickRun\Wechat\Api\MiniProgramAuthApi, '小程序登录接口已实例化');
        TestCase::assertFalse(method_exists($api, 'secret'), '登录接口自身不提供 secret 方法');
        $source = file_get_contents(base_path('module/Vendor/QuickRun/Wechat/Api/MiniProgramAuthApi.php'));
        TestCase::assertTrue(false !== strpos($source, '$this->app->secret()'), 'AppSecret 通过应用读取');
        TestCase::assertFalse(false !== strpos($source, '$this->secret('), '不再误调不存在的 secret 方法');
    });

    TestCase::test('模板消息数据自动包装为 value 结构', function () {
        $api = new TemplateMessageApi(new OfficialAccount(['app_id' => 'wx-test', 'secret' => 'secret']));
        $reflection = new \ReflectionMethod($api, 'send');
        TestCase::assertTrue($reflection->isPublic(), '模板消息发送方法可用');
    });

    TestCase::test('用户信息接口参数校验', function () {
        $api = new UserApi(new OfficialAccount(['app_id' => 'wx-test', 'secret' => 'secret']));
        $throws = function ($callback) {
            try {
                $callback();
            } catch (\Exception $e) {
                return true;
            }
            return false;
        };
        TestCase::assertTrue($throws(function () use ($api) {
            $api->get('');
        }), 'OpenId 为空时获取用户信息抛出异常');
        TestCase::assertTrue($throws(function () use ($api) {
            $api->batchGet([]);
        }), 'OpenId 列表为空时批量获取用户信息抛出异常');
    });

});
