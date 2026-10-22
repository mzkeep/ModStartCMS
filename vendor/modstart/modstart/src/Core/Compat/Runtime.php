<?php

namespace ModStart\Core\Compat;

/**
 * 运行时能力探测
 *
 * 统一收口 "PHP 版本 / 扩展 / 类是否存在" 三类判断，禁止在业务代码中散落 version_compare。
 * 版本判断优先使用 class_exists / method_exists，避免硬编码版本号。
 */
class Runtime
{
    /**
     * PHP 版本是否不低于指定版本
     * @param string $version 版本号，如 8.5
     * @return bool
     */
    public static function phpAtLeast($version)
    {
        return version_compare(PHP_VERSION, $version, '>=');
    }

    /**
     * PHP 版本是否低于指定版本
     * @param string $version 版本号，如 8.5
     * @return bool
     */
    public static function phpBelow($version)
    {
        return version_compare(PHP_VERSION, $version, '<');
    }

    /**
     * 扩展是否加载
     * @param string $extension 扩展名，如 gd
     * @return bool
     */
    public static function extLoaded($extension)
    {
        return extension_loaded($extension);
    }

    /**
     * 能力探测：类 -> 方法 -> 函数 -> 扩展 依次判断
     * @param string $feature 类名 / 方法名（Class::method）/ 函数名 / 扩展名
     * @return bool
     */
    public static function has($feature)
    {
        if (empty($feature)) {
            return false;
        }
        if (false !== strpos($feature, '::')) {
            list($class, $method) = explode('::', $feature, 2);
            return class_exists($class) && method_exists($class, $method);
        }
        if (class_exists($feature) || interface_exists($feature)) {
            return true;
        }
        if (function_exists($feature)) {
            return true;
        }
        return extension_loaded(strtolower($feature));
    }

    /**
     * GD 句柄判断（PHP 8 起 GD 句柄由 resource 变为 GdImage 对象）
     * @param mixed $handle
     * @return bool
     */
    public static function isGd($handle)
    {
        if (class_exists('GdImage')) {
            return $handle instanceof \GdImage;
        }
        return is_resource($handle);
    }

    /**
     * curl 句柄判断（PHP 8 起 curl 句柄由 resource 变为 CurlHandle 对象）
     * @param mixed $handle
     * @return bool
     */
    public static function isCurl($handle)
    {
        if (class_exists('CurlHandle')) {
            return $handle instanceof \CurlHandle;
        }
        return is_resource($handle);
    }

    /**
     * finfo 句柄判断（PHP 8.1 起变为 finfo 对象）
     * @param mixed $handle
     * @return bool
     */
    public static function isFinfo($handle)
    {
        if (class_exists('finfo')) {
            return $handle instanceof \finfo;
        }
        return is_resource($handle);
    }

    /**
     * 安全关闭 curl 句柄
     * PHP 8.5 起 curl_close 已废弃，句柄由 GC 自动回收。
     * @param mixed $handle
     * @return void
     */
    public static function curlClose($handle)
    {
        if (self::phpAtLeast('8.5')) {
            return;
        }
        if (self::isCurl($handle)) {
            @curl_close($handle);
        }
    }

    /**
     * 安全关闭 finfo 句柄
     * PHP 8.5 起 finfo_close 已废弃。
     * @param mixed $handle
     * @return void
     */
    public static function finfoClose($handle)
    {
        if (self::phpAtLeast('8.5')) {
            return;
        }
        if (self::isFinfo($handle) && function_exists('finfo_close')) {
            @finfo_close($handle);
        }
    }
}
