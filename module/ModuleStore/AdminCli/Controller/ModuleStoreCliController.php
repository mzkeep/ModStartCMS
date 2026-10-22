<?php

namespace Module\ModuleStore\AdminCli\Controller;

use Illuminate\Routing\Controller;
use ModStart\Core\Input\Response;
use Module\ModuleStore\Util\ModuleStoreUtil;

/**
 * 模块市场 CLI 接口（只读）
 */
class ModuleStoreCliController extends Controller
{

    /**
     * @Api 模块市场列表
     * @ApiDesc 返回模块市场可用模块列表
     * @ApiMethod post
     */
    public function index()
    {
        return Response::generateSuccessData(ModuleStoreUtil::all());
    }
}
