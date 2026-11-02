<?php


namespace ModStart\Core\Util;


use Illuminate\Support\Facades\Event;

/**
 * @Util 事件操作
 */
class EventUtil
{
    /**
     * @Util 触发一个Laravel事件，兼容了不同版本
     * @param $event object|string
     */
    public static function fire($event)
    {
        if (is_string($event)) {
            $event = new $event();
        }
        // dispatch() 自 Laravel 5.5 起可用，fire() 在 Laravel 6 中被移除，
        // 这里按方法是否存在判断，避免用 PHP 版本号误判框架能力。
        if (method_exists(Event::getFacadeRoot(), 'dispatch')) {
            Event::dispatch($event);
        } else {
            Event::fire($event);
        }
    }

    /**
     * @Util 监听一个Laravel事件
     * @param $eventClass string 事件类名
     * @param $callback callable 回调函数
     */
    public static function listen($eventClass, $callback)
    {
        Event::listen($eventClass, function ($event) use ($callback) {
            call_user_func($callback, $event);
        });
    }
}
