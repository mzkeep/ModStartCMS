<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use ModStart\Core\Exception\BizException;
use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 二维码接口（/cgi-bin/qrcode/create）
 */
class QrcodeApi
{
    /** @var Application */
    private $app;

    /**
     * @param Application $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * 创建临时二维码（字符串场景值）
     * @param string $scene
     * @param int $expireSeconds
     * @return array ['url' => 图片地址, 'ticket' => ticket, 'expire_seconds' => 秒]
     */
    public function temporary($scene, $expireSeconds = 604800)
    {
        BizException::throwsIfEmpty('二维码场景值不能为空', $scene);
        $ret = $this->app->apiPost('/cgi-bin/qrcode/create', [
            'expire_seconds' => intval($expireSeconds),
            'action_name' => 'QR_STR_SCENE',
            'action_info' => [
                'scene' => [
                    'scene_str' => strval($scene),
                ],
            ],
        ]);
        BizException::throwsIfEmpty('二维码创建失败', $ret['ticket']);
        return [
            'ticket' => $ret['ticket'],
            'expire_seconds' => isset($ret['expire_seconds']) ? $ret['expire_seconds'] : $expireSeconds,
            'url' => 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' . urlencode($ret['ticket']),
        ];
    }
}
