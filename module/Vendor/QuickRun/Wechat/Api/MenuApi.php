<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 自定义菜单接口（/cgi-bin/menu/create）
 */
class MenuApi
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
     * 创建菜单
     * @param array $menu 形如 ['button' => [...]]
     * @return array
     */
    public function create($menu)
    {
        if (!isset($menu['button'])) {
            $menu = ['button' => array_values((array)$menu)];
        }
        return $this->app->apiPost('/cgi-bin/menu/create', $menu);
    }

    /**
     * 删除菜单
     * @return array
     */
    public function delete()
    {
        return $this->app->apiGet('/cgi-bin/menu/delete');
    }

    /**
     * 查询菜单
     * @return array
     */
    public function current()
    {
        return $this->app->apiGet('/cgi-bin/menu/get');
    }
}
