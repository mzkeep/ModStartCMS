<?php

namespace Module\CaptchaTecmz\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api 智能验证码 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam CaptchaTecmz_AppId string CaptchaTecmz_AppId
     * @ApiBodyParam CaptchaTecmz_AppSecret string CaptchaTecmz_AppSecret
     */
    public function index()
    {
        $keys = ['CaptchaTecmz_AppId', 'CaptchaTecmz_AppSecret'];
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
