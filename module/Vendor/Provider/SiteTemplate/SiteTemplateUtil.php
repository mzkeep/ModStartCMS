<?php

namespace Module\Vendor\Provider\SiteTemplate;

use ModStart\Core\Exception\BizException;
use ModStart\Module\ModuleManager;
use ModStart\Test\TestContext;

/**
 * 站点模板（主题）工具
 *
 * 统一封装「解析主题 → 执行测试种子 → 导入主题演示数据 → 写入 siteTemplate → 清理预览 Session」，
 * 供 /set_theme、/seed_theme 之类的演示站入口复用，业务侧只需一行调用。
 *
 * - resolve($name)        按 Provider 标识 / 模块名 / 模块名去前缀解析（忽略大小写）
 * - moduleName($provider) 由 Provider 推导模块目录名（Module\CmsThemeXxx\... -> CmsThemeXxx）
 * - current()             当前站点主题标识
 * - switchTo($name)       切换主题（可选导入演示数据）
 * - seedDemo($module)     执行模块测试种子 module/<Module>/Test/Seed.php
 *
 * @since 5.3.0
 */
class SiteTemplateUtil
{
    const CONFIG_KEY = 'siteTemplate';
    const SESSION_KEY = 'msSiteTemplateUsing';

    /**
     * 主题模块名的系统前缀（模块名约定为 <系统>Theme<名称>，如 CmsThemeAtlas -> CmsTheme）
     *
     * 任意系统通用：WenkuThemeAzure -> WenkuTheme、BlogThemeMono -> BlogTheme，
     * 后续新增系统（如 ShopThemeXxx）无需再维护前缀白名单。
     *
     * @param string $module
     * @return string|null
     */
    private static function themeModulePrefix($module)
    {
        if (preg_match('/^([A-Z][A-Za-z0-9]*)Theme([A-Z][A-Za-z0-9]*)$/', $module, $matches)) {
            return $matches[1] . 'Theme';
        }
        return null;
    }

    /**
     * 全部已注册的主题
     * @return AbstractSiteTemplateProvider[]
     */
    public static function all()
    {
        return SiteTemplateProvider::all();
    }

    /**
     * 由 Provider 推导模块目录名
     * @param AbstractSiteTemplateProvider $provider
     * @return string|null
     */
    public static function moduleName($provider)
    {
        if (empty($provider)) {
            return null;
        }
        $class = get_class($provider);
        if (strpos($class, 'Module\\') !== 0) {
            return null;
        }
        $parts = explode('\\', $class);
        return isset($parts[1]) ? $parts[1] : null;
    }

    /**
     * 主题可用别名：Provider 标识、模块名、模块名去掉系统前缀（<系统>Theme）
     * @param AbstractSiteTemplateProvider $provider
     * @return array
     */
    public static function aliases($provider)
    {
        if (empty($provider)) {
            return array();
        }
        $aliases = array($provider->name());
        $module = self::moduleName($provider);
        if ($module) {
            $aliases[] = $module;
            $prefix = self::themeModulePrefix($module);
            if (!empty($prefix)) {
                $short = substr($module, strlen($prefix));
                if ($short !== '' && $short !== $module) {
                    $aliases[] = $short;
                }
            }
        }
        return array_values(array_unique(array_filter($aliases, function ($item) {
            return $item !== null && $item !== '';
        })));
    }

    /**
     * 解析主题（Provider 标识精确匹配优先，其次按别名忽略大小写匹配）
     * @param string $name
     * @return AbstractSiteTemplateProvider|null
     */
    public static function resolve($name)
    {
        $name = trim((string)$name);
        if ($name === '') {
            return null;
        }
        $provider = SiteTemplateProvider::get($name);
        if (!empty($provider)) {
            return $provider;
        }
        $probe = strtolower($name);
        foreach (self::all() as $item) {
            foreach (self::aliases($item) as $alias) {
                if (strtolower($alias) === $probe) {
                    return $item;
                }
            }
        }
        return null;
    }

    /**
     * 当前站点主题标识（配置值不存在时返回 null）
     * @return string|null
     */
    public static function current()
    {
        $name = modstart_config(self::CONFIG_KEY);
        if (empty($name)) {
            return null;
        }
        return $name;
    }

    /**
     * 切换站点主题
     *
     * @param string $name 主题标识 / 模块名 / 别名
     * @param array $option
     *   - importDemo    bool     是否导入主题自带演示数据（默认 true，仅 Cms 存在时生效）
     *   - before        callable 写入 siteTemplate 之前执行 function ($module, $provider)
     *   - after         callable 写入之后执行 function ($provider)
     *   - clearSession  bool     是否清理主题预览 Session（默认 true）
     * @return AbstractSiteTemplateProvider
     * @throws BizException 主题不存在时抛出（statusCode 404）
     */
    public static function switchTo($name, $option = array())
    {
        $option = array_merge(array(
            'importDemo' => true,
            'before' => null,
            'after' => null,
            'clearSession' => true,
        ), (array)$option);

        $provider = self::resolve($name);
        if (empty($provider)) {
            BizException::throws('主题不存在：' . $name, array('statusCode' => 404));
        }
        $module = self::moduleName($provider);

        if (is_callable($option['before'])) {
            call_user_func($option['before'], $module, $provider);
        }
        if ($option['importDemo'] && $module) {
            self::importDemo($module);
        }
        // 演示数据导入会写入 init_data 里的 siteTemplate，因此必须在导入之后再写一次
        modstart_config()->set(self::CONFIG_KEY, $provider->name());
        if ($option['clearSession']) {
            try {
                session()->forget(self::SESSION_KEY);
            } catch (\Exception $e) {
                // CLI / 无会话场景忽略
            }
        }
        if (is_callable($option['after'])) {
            call_user_func($option['after'], $provider);
        }
        return $provider;
    }

    /**
     * 导入主题自带演示数据（module/<Module>/Backup/init_data.json）
     *
     * Vendor 是通用包，不硬依赖 Cms：Cms 未安装时静默跳过。
     *
     * @param string $module
     * @return bool 是否执行了导入
     */
    public static function importDemo($module)
    {
        $class = '\\Module\\Cms\\Util\\CmsThemeDemoUtil';
        if (!class_exists($class)) {
            return false;
        }
        return call_user_func(array($class, 'importByModule'), $module);
    }

    /**
     * 执行模块的测试种子 module/<Module>/Test/Seed.php（演示 / 开发入口使用）
     *
     * 与 importDemo() 是两套机制：
     *   - importDemo()  产品级初始化数据 Backup/init_data.json（仅 CMS 有，后台可一键导入）
     *   - seedDemo()    测试种子 Test/Seed.php（Blog 等没有 init_data.json 的系统靠它填充演示内容）
     *
     * ⚠️ 种子脚本是破坏性操作（通常先清空 blog / blog_category / blog_comment / blog_message /
     * nav / banner / partner 等演示表再写入），只在演示 / 开发环境调用。
     *
     * @param string $module 模块目录名（如 BlogThemeHaven）
     * @return bool 是否执行了种子脚本（模块没有 Test/Seed.php 时返回 false）
     * @throws BizException 种子脚本执行失败
     */
    public static function seedDemo($module)
    {
        if (empty($module)) {
            return false;
        }
        $file = ModuleManager::path($module, 'Test/Seed.php');
        if (!is_file($file)) {
            return false;
        }
        $autoTest = getenv('AUTO_TEST');
        $failedBefore = TestContext::getFailed();
        // 种子脚本里的 TestSeed::upsert 依赖 AUTO_TEST，执行期间临时打开，结束后还原
        putenv('AUTO_TEST=true');
        try {
            include $file;
        } finally {
            if (false === $autoTest) {
                putenv('AUTO_TEST');
            } else {
                putenv('AUTO_TEST=' . $autoTest);
            }
        }
        if (TestContext::getFailed() > $failedBefore) {
            $failures = TestContext::getFailures();
            $last = end($failures);
            $reason = '';
            if (is_array($last)) {
                $reason = isset($last['reason']) ? trim((string)$last['reason']) : '';
                if ('' === $reason) {
                    $reason = isset($last['name']) ? (string)$last['name'] : '';
                }
            }
            BizException::throws('演示数据填充失败：' . ('' === $reason ? '未知错误' : $reason));
        }
        return true;
    }
}
