<?php

namespace Module\SiteCounter\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api 网站统计设置 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam systemCounter string systemCounter
     * @ApiBodyParam systemCounterBody string systemCounterBody
     */
    public function index()
    {
        $keys = ['systemCounter', 'systemCounterBody'];
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
