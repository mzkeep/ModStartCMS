<?php

namespace Module\Vendor\QuickRun\Wechat;

/**
 * 当前请求信息（供消息服务器使用）
 */
class Request
{
    /**
     * 查询参数
     * @param string $key
     * @param string $default
     * @return string
     */
    public static function query($key, $default = '')
    {
        try {
            $value = \Illuminate\Support\Facades\Request::query($key);
        } catch (\Exception $e) {
            $value = null;
        }
        if (null === $value || '' === $value) {
            return $default;
        }
        return strval($value);
    }

    /**
     * 原始请求体
     * @return string
     */
    public static function rawBody()
    {
        try {
            return strval(\Illuminate\Support\Facades\Request::getContent());
        } catch (\Exception $e) {
            return '';
        }
    }
}
