<?php

namespace ModStart\Core\Exception;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\View\View;
use ModStart\Core\Input\Response;
use ModStart\Core\Monitor\StatisticMonitor;
use ModStart\Core\Util\CurlUtil;
use ModStart\Core\Util\SerializeUtil;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

trait ExceptionReportHandleTrait
{
    private function errorReportCheck($exception)
    {
        try {
            $errorReportUrl = config('env.ERROR_REPORT_URL', null);
            if (empty($errorReportUrl)) {
                return;
            }
            $needReport = true;
            if ($needReport && $exception instanceof BizException) {
                $needReport = false;
            }
            if ($needReport && $exception instanceof NotFoundHttpException) {
                $needReport = false;
            }
            if ($needReport && $exception instanceof MethodNotAllowedHttpException) {
                $needReport = false;
            }
            if ($needReport && $exception instanceof HttpException) {
                switch ($exception->getStatusCode()) {
                    case 200:
                        $needReport = false;
                        break;
                }
            }
            if ($needReport && $this->isExceptionIgnore($exception)) {
                $needReport = false;
            }
            if (!$needReport) {
                return;
            }
            $error = [];
            $error['URL'] = Request::url();
            if (empty($error['URL']) || in_array($error['URL'], ['http://localhost',])) {
                $error['URL'] = base_path();
                $error['HOST'] = gethostname();
            }
            $error['METHOD'] = 'GET';
            if (\ModStart\Core\Input\Request::isPost()) {
                $error['METHOD'] = 'POST';
            }
            $error['FILE'] = $exception->getFile() . ':' . $exception->getLine();
            $error['MESSAGE'] = $exception->getMessage();
            foreach ($error as &$v) {
                $v = str_replace(base_path(), '', $v);
            }
            CurlUtil::get($errorReportUrl, ['data' => SerializeUtil::jsonEncode($error)]);
        } catch (\Exception $e) {
            // do nothing
        }
    }

    private function isExceptionIgnore($exception)
    {
        if ($exception instanceof \UnexpectedValueException) {
            if (Str::contains($exception->getMessage(), 'Invalid method override')) {
                return true;
            }
        }
        return false;
    }

    /**
     * 是否为「页面请求」。
     *
     * 只有页面请求才应该用 403/404/500 错误页返回；接口 / JSON / XHR 请求一律保持 HTTP 200
     * （业务异常是预期内的结果）。判定为接口请求的信号：
     *   - X-Requested-With: XMLHttpRequest 或显式 is-ajax 头
     *   - JSONP 请求
     *   - 前端 API（api.bootstrap）/ 开放 API 通道
     *   - 客户端显式要求 application/json
     *   - 携带 admin-api-key 的后台接口调用
     */
    private function isPageRequest()
    {
        if (\ModStart\Core\Input\Request::isAjax()) {
            return false;
        }
        if (\ModStart\Core\Input\Request::isJsonp()) {
            return false;
        }
        $accept = \ModStart\Core\Input\Request::headerGet('accept');
        if ($accept && stripos($accept, 'application/json') !== false) {
            return false;
        }
        if (\ModStart\Core\Input\Request::headerGet('admin-api-key')) {
            return false;
        }
        try {
            if (\ModStart\App\Core\CurrentApp::isApi() || \ModStart\App\Core\CurrentApp::isOpenApi()) {
                return false;
            }
        } catch (\Exception $e) {
            // Session 未就绪时忽略
        }
        return true;
    }

    private function getExceptionResponse($exception)
    {
        if ($exception instanceof BizException) {
            $exceptionParam = $exception->param;
            $ret = Response::sendError($exception->getMessage());
            $statusCode = 200;
            if ($this->isPageRequest()) {
                // 页面请求下，业务异常意味着当前页面无法正常产出：
                // 显式声明的状态码优先（403 / 404 / 500 会使用对应的错误页），
                // 未显式声明时一律返回 500，避免「页面已出错却返回 HTTP 200」
                // 掩盖问题（如 View Not Exists、模板未找到、参数缺失等）。
                // 需要返回 200 友好提示页的调用方，显式传 ['statusCode' => 200] 即可。
                if (isset($exceptionParam['statusCode'])) {
                    $statusCode = (int)$exceptionParam['statusCode'];
                } else {
                    $statusCode = 500;
                }
                if (empty($exceptionParam['view'])
                    && !empty($exceptionParam['statusCode'])
                    && in_array($exceptionParam['statusCode'], [403, 404, 500])) {
                    $exceptionParam['view'] = 'modstart::core.msg.' . $exceptionParam['statusCode'];
                }
                if (!empty($exceptionParam['view'])) {
                    if (!isset($exceptionParam['viewData'])) {
                        $exceptionParam['viewData'] = [];
                    }
                    $ret = view($exceptionParam['view'], array_merge([
                        '_viewFrame' => 'theme.default.pc.frame',
                        'msg' => $exception->getMessage(),
                    ], $exceptionParam['viewData']));
                }
            }
            if ($ret instanceof View) {
                return response()->make($ret, $statusCode);
            }
            return $ret;
        } else if ($exception instanceof MethodNotAllowedHttpException) {
            return Response::page404();
        } elseif ($exception instanceof NotFoundHttpException) {
            if (\ModStart\Core\Input\Request::isAjax()) {
                return Response::page404();
            }
            return null;
        } elseif ($exception instanceof ModelNotFoundException) {
            return null;
        } else if ($exception instanceof HttpException) {
            switch ($exception->getStatusCode()) {
                case 200:
                    if (\ModStart\Core\Input\Request::isJsonp()) {
                        $ret = Response::generateError($exception->getMessage());
                        return Response::jsonp($ret);
                    }
                    $ret = Response::sendError($exception->getMessage());
                    if ($ret instanceof View) {
                        return response()->make($ret);
                    }
                    return $ret;
            }
        } else if ($exception instanceof \UnexpectedValueException) {
            if (Str::contains($exception->getMessage(), 'Invalid method override')) {
                return Response::page404();
            }
        }

        try {
            if (StatisticMonitor::isEnable()) {
                $request = \ModStart\Core\Input\Request::instance();
                $time = round((microtime(true) - LARAVEL_START) * 1000, 2);
                $url = $request->url();
                $method = $request->method();
                $routeAction = Route::currentRouteAction();
                $domain = \ModStart\Core\Input\Request::domain();
                StatisticMonitor::tick($domain, "$method." . $routeAction, $time, false, 500);
            }
        } catch (\Exception $e) {
        }

        $msg = $exception->getMessage();
        $msgDetail = $exception->getTraceAsString();
        //var_dump([
        //    'env' => ModStart::env(),
        //    'msg' => $msg,
        //    'msgDetail' => $msgDetail,
        //]);
        return null;
    }

}
