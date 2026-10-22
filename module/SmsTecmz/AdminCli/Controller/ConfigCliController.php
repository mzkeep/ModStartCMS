<?php

namespace Module\SmsTecmz\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api 魔众短信 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam SmsTecmz_Enable string SmsTecmz_Enable
     * @ApiBodyParam SmsTecmz_AppId string SmsTecmz_AppId
     * @ApiBodyParam SmsTecmz_AppSecret string SmsTecmz_AppSecret
     */
    public function index()
    {
        $keys = ['SmsTecmz_Enable', 'SmsTecmz_AppId', 'SmsTecmz_AppSecret'];
        $data = [];
        foreach ($keys as $key) {
            if (Input::has($key)) {
                modstart_config()->set($key, Input::get($key));
            }
            $data[$key] = modstart_config($key, '');
        }
        return Response::generateSuccessData($data);
    }
}
