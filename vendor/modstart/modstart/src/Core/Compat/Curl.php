<?php

namespace ModStart\Core\Compat;

/**
 * curl 扩展兼容层
 *
 * PHP 8.5 起 curl_close / finfo_close 弃用，句柄由 GC 自动回收，
 * 统一通过本类关闭句柄，避免新版本产生弃用告警。
 */
class Curl
{
    /**
     * 是否是有效的 curl 句柄
     * @param mixed $handle
     * @return bool
     */
    public static function isHandle($handle)
    {
        return Runtime::isCurl($handle);
    }

    /**
     * 关闭 curl 句柄
     * @param mixed $handle
     * @return void
     */
    public static function close($handle)
    {
        Runtime::curlClose($handle);
    }
}
