<?php

namespace Module\AdminManager\AdminCli\Controller;

use Illuminate\Routing\Controller;
use ModStart\Core\Input\Response;

class AdminManagerCliController extends Controller
{

    /**
     * @Api 版本信息
     * @ApiMethod post
     */
    public function index()
    {
        return Response::generateSuccessData(['version' => \ModStart\ModStart::$version, 'debug' => (bool)config('env.APP_DEBUG')]);
    }
}
