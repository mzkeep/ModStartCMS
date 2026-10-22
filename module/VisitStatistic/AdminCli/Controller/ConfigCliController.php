<?php

namespace Module\VisitStatistic\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api 网站访问记录 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam VisitStatistic_Enable string VisitStatistic_Enable
     * @ApiBodyParam VisitStatistic_TickEnable string VisitStatistic_TickEnable
     * @ApiBodyParam VisitStatistic_MaxHistoryDay string VisitStatistic_MaxHistoryDay
     * @ApiBodyParam VisitStatistic_UaDisable string VisitStatistic_UaDisable
     * @ApiBodyParam VisitStatistic_IgnoreRobot string VisitStatistic_IgnoreRobot
     */
    public function index()
    {
        $keys = ['VisitStatistic_Enable', 'VisitStatistic_TickEnable', 'VisitStatistic_MaxHistoryDay', 'VisitStatistic_UaDisable', 'VisitStatistic_IgnoreRobot'];
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
