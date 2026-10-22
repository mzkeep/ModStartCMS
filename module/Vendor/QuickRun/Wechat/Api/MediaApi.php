<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;
use Module\Vendor\QuickRun\Wechat\Http;

/**
 * 临时素材接口（/cgi-bin/media/upload）
 */
class MediaApi
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
     * 上传图片素材
     * @param string $filePath
     * @return array ['media_id' => ..., 'url' => ...]
     */
    public function uploadImage($filePath)
    {
        return $this->upload($filePath, 'image');
    }

    /**
     * 上传素材
     * @param string $filePath
     * @param string $type image|voice|video|thumb
     * @return array
     */
    public function upload($filePath, $type = 'image')
    {
        $url = 'https://api.weixin.qq.com/cgi-bin/media/upload?access_token=' . $this->app->accessToken() . '&type=' . $type;
        $ret = Http::upload($url, $filePath, 'media');
        return Http::jsonData($ret);
    }
}
