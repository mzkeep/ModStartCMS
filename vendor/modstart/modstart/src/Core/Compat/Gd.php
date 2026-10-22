<?php

namespace ModStart\Core\Compat;

/**
 * GD 扩展兼容层
 *
 * PHP 8.0 起 GD 句柄由 resource 变为 GdImage 对象，PHP 8.5 起 imagedestroy 弃用，
 * 统一通过本类判断和释放句柄。
 */
class Gd
{
    /**
     * 是否是有效的 GD 句柄
     * @param mixed $handle
     * @return bool
     */
    public static function isImage($handle)
    {
        return Runtime::isGd($handle);
    }

    /**
     * 创建真彩色画布
     * @param int $width
     * @param int $height
     * @return mixed
     */
    public static function create($width, $height)
    {
        return imagecreatetruecolor($width, $height);
    }

    /**
     * 释放 GD 句柄（PHP 8.5 起无需显式释放）
     * @param mixed $handle
     * @return void
     */
    public static function destroy($handle)
    {
        if (!self::isImage($handle)) {
            return;
        }
        if (Runtime::phpAtLeast('8.5')) {
            return;
        }
        @imagedestroy($handle);
    }
}
