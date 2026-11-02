<?php


namespace ModStart\Module;


use Composer\Autoload\ClassLoader;

/**
 * 模块命名空间动态加载器
 *
 * Class ModuleClassLoader
 * @package ModStart\Module
 */
class ModuleClassLoader
{
    /** @var ClassLoader $loader */
    private static $loader = null;
    private static $namespacesAdded = [];

    private static function loaderInit()
    {
        if (null == self::$loader) {
            self::$loader = app(ClassLoader::class);
            self::$loader->register(true);
        }
    }

    /**
     * 注册单个类的自动加载映射
     *
     * 注意：目标文件不存在时**不注册**。历史上有模块把类搬走后忘记同步这里的路径
     * （例如 I18nSite 注册 `MNavI18n` 指向早已不存在的 `../Helpers/MNavI18n.php`），
     * 一旦 classmap 被这种幽灵路径覆盖，加载该类时就是
     * `include(...): Failed to open stream` 的致命错误——而且是偶发的，
     * 取决于哪个模块先 boot。
     *
     * @param string $class
     * @param string $file
     * @return bool 是否真的注册成功
     */
    public static function addClass($class, $file)
    {
        if (!is_file($file)) {
            return false;
        }
        self::loaderInit();
        self::$loader->addClassMap([$class => $file]);
        return true;
    }

    /**
     * 注册单个类，已有映射时保留先注册的那个（先到先得）
     * @param string $class
     * @param string $file
     * @return bool
     */
    public static function addClassIfMissing($class, $file)
    {
        if (!is_file($file)) {
            return false;
        }
        self::loaderInit();
        if (class_exists($class, false)) {
            return false;
        }
        $map = self::$loader->getClassMap();
        if (isset($map[$class]) && is_file($map[$class])) {
            return false;
        }
        self::$loader->addClassMap([$class => $file]);
        return true;
    }

    public static function addNamespace($namespace, $path)
    {
        self::loaderInit();
        if (!ends_with($namespace, '\\')) {
            $namespace = $namespace . '\\';
        }
        self::$namespacesAdded[$namespace] = $path;
        self::$loader->addPsr4($namespace, [$path]);
    }

    public static function addNamespaceIfMissing($namespace, $path)
    {
        if (!self::hasNamespace($namespace)) {
            self::addNamespace($namespace, $path);
        }
    }

    /**
     * @param $namespace
     * @return bool
     * @since 1.6.0
     */
    public static function hasNamespace($namespace)
    {
        if (!ends_with($namespace, '\\')) {
            $namespace = $namespace . '\\';
        }
        return isset(self::$namespacesAdded[$namespace]);
    }
}
