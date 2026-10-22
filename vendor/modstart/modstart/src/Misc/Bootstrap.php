<?php

namespace ModStart\Misc;

/**
 * 内置依赖库加载器
 *
 * 基础库与模块代码统一改用 src/Misc/<LibName> 下的内置实现（命名空间保持不变，便于与上游 diff）；
 * 第三方库仍然保留在 Composer 依赖中，供线上可能直接使用这些类的代码兜底。
 *
 * 加载策略（重要）：
 *   - 只作为 Composer 自动加载的「兜底」，由 spl_autoload_register 追加注册；
 *   - 宿主项目如果自己安装了同名包（Composer 自动加载先命中），则优先使用宿主版本；
 *   - 内置库之间不交叉引用。
 *
 * 内置清单（见各目录下 FORK.md）：
 *   - src/Misc/BaconQrCode  命名空间 BaconQrCode\
 *   - src/Misc/NinjaMutex   命名空间 NinjaMutex\
 *   - src/Misc/HtmlPurifier 命名空间 HTMLPurifier_（扁平类名）
 */
class Bootstrap
{
    /** @var bool 是否已注册 */
    private static $registered = false;

    /** @var bool HTMLPurifier 是否已初始化 */
    private static $htmlPurifierLoaded = false;

    /** @var array 命名空间前缀 => 目录 */
    private static $prefixes = [
        'BaconQrCode\\' => 'BaconQrCode',
        'NinjaMutex\\' => 'NinjaMutex',
    ];

    /**
     * 注册内置依赖库的兜底自动加载
     * @return void
     */
    public static function register()
    {
        if (self::$registered) {
            return;
        }
        self::$registered = true;
        spl_autoload_register([__CLASS__, 'autoload']);
    }

    /**
     * 自动加载入口
     * @param string $class 类名
     * @return void
     */
    public static function autoload($class)
    {
        if (!is_string($class) || '' === $class) {
            return;
        }
        foreach (self::$prefixes as $prefix => $directory) {
            if (0 === strpos($class, $prefix)) {
                $relative = substr($class, strlen($prefix));
                $file = __DIR__ . '/' . $directory . '/' . str_replace('\\', '/', $relative) . '.php';
                if (is_file($file)) {
                    require_once $file;
                }
                return;
            }
        }
        if (0 === strpos($class, 'HTMLPurifier')) {
            self::loadHtmlPurifier($class);
        }
    }

    /**
     * HTMLPurifier 是扁平类名（HTMLPurifier_*），由库自带的 Bootstrap 负责映射
     * @param string $class
     * @return void
     */
    private static function loadHtmlPurifier($class)
    {
        $library = __DIR__ . '/HtmlPurifier/library';
        if (!is_file($library . '/HTMLPurifier/Bootstrap.php')) {
            return;
        }
        if (!defined('HTMLPURIFIER_PREFIX')) {
            define('HTMLPURIFIER_PREFIX', $library);
        }
        if (!self::$htmlPurifierLoaded) {
            self::$htmlPurifierLoaded = true;
            if (!class_exists('HTMLPurifier_Bootstrap', false)) {
                require_once $library . '/HTMLPurifier/Bootstrap.php';
            }
            \HTMLPurifier_Bootstrap::registerAutoload();
        }
        if (!class_exists('HTMLPurifier_Bootstrap', false)) {
            return;
        }
        $file = \HTMLPurifier_Bootstrap::getPath($class);
        if ($file) {
            require_once $library . '/' . $file;
        }
    }

    /**
     * HTMLPurifier 是否由内置版本提供
     * @return bool
     */
    public static function isHtmlPurifierInternal()
    {
        if (!defined('HTMLPURIFIER_PREFIX')) {
            return false;
        }
        return realpath(HTMLPURIFIER_PREFIX) === realpath(__DIR__ . '/HtmlPurifier/library');
    }
}
