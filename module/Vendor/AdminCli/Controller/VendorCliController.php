<?php

namespace Module\Vendor\AdminCli\Controller;

use Illuminate\Routing\Controller;
use ModStart\Core\Input\Response;

class VendorCliController extends Controller
{

    /**
     * @Api Vendor 信息
     * @ApiMethod post
     */
    public function index()
    {
        return Response::generateSuccessData(['module' => 'Vendor', 'title' => '通用功能包', 'note' => '该模块为后台自定义页面/工具，暂无可通过 CLI 管理的数据资源']);
    }
}
