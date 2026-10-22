<?php

namespace Module\Vendor\Middleware;

class StatelessRouteMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        // 无状态路由临时切换 session driver，请求结束后必须还原，
        // 否则常驻进程（队列 / Octane / 同一进程内连续请求）会把 array 驱动泄漏给后续请求
        $previousDriver = config('session.driver');
        config()->set('session.driver', 'array');
        try {
            return $next($request);
        } finally {
            config()->set('session.driver', $previousDriver);
        }
    }

}