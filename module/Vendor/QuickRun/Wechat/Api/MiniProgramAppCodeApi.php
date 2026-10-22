<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 小程序码（/wxa/getwxacodeunlimit）
 */
class MiniProgramAppCodeApi
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
     * 获取不限数量的小程序码（返回图片二进制）
     * @param string $scene
     * @param array $params 支持 page / check_path / env_version / width / auto_color / line_color
     * @return \Module\Vendor\QuickRun\Wechat\BodyResponse
     */
    public function getUnlimit($scene, $params = [])
    {
        $data = array_merge([
            'scene' => strval($scene),
        ], (array)$params);
        return $this->app->apiPostRaw('/wxa/getwxacodeunlimit', $data);
    }

    /**
     * 获取小程序码（指定页面路径）
     * @param string $path
     * @param array $params
     * @return \Module\Vendor\QuickRun\Wechat\BodyResponse
     */
    public function get($path, $params = [])
    {
        $data = array_merge([
            'path' => strval($path),
        ], (array)$params);
        return $this->app->apiPostRaw('/wxa/getwxacode', $data);
    }
}
