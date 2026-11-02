<?php

namespace ModStart\Test;

/**
 * 独立测试脚本引导工具 — 免去每个脚本重复写「找项目根 + 加载 bootstrap + 启动 Laravel + 解析参数」
 *
 * 典型用法（模块里的独立脚本，如 module/CmsThemeXxx/Test/ScreenShot.php）：
 *
 *   <?php
 *   require __DIR__ . '/../../../vendor/autoload.php';   // 仅需先加载 composer 自动加载
 *   TestScript::boot(__DIR__);
 *   TestScreenShot::captureFrontPages('CmsThemeXxx', array('index' => '/'), array('urlSuffix' => 'msSiteTemplate=xxx'));
 *
 * 或手动控制流程：
 *
 *   TestScript::boot(__DIR__);            // 自动向上定位项目根并启动 Laravel（幂等）
 *   $args = TestScript::args();
 *   $baseUrl = isset($args['positional'][0]) ? $args['positional'][0] : null;
 *   $withAnim = !isset($args['flags']['anim']) || $args['flags']['anim'];
 *
 * 参数解析规则：
 *   php script.php http://host:port --no-anim --frames=10
 *   → positional = ['http://host:port']，flags = ['anim' => false]，options = ['frames' => '10']
 */
class TestScript
{
    /** @var string|null 项目根目录缓存 */
    private static $projectRoot = null;

    /**
     * 定位项目根目录（含 bootstrap/app.php 与 artisan 的目录）
     *
     * 依次尝试：指定目录 → 当前脚本所在目录（$_SERVER['argv'][0]）→ 当前工作目录 → 本类目录，
     * 各自逐级向上查找，最多 12 层。
     *
     * @param string|null $startDir
     * @return string|null 找不到返回 null
     */
    public static function projectRoot($startDir = null)
    {
        if (self::$projectRoot !== null) {
            return self::$projectRoot;
        }
        $candidates = array();
        if (!empty($startDir)) {
            $candidates[] = $startDir;
        }
        if (!empty($_SERVER['argv'][0])) {
            $script = $_SERVER['argv'][0];
            $real = @realpath($script);
            $candidates[] = dirname($real ? $real : $script);
        }
        $cwd = @getcwd();
        if (!empty($cwd)) {
            $candidates[] = $cwd;
        }
        $candidates[] = __DIR__;

        foreach ($candidates as $dir) {
            $cur = $dir;
            for ($i = 0; $i < 12; $i++) {
                if (is_file($cur . '/bootstrap/app.php') && is_file($cur . '/artisan')) {
                    self::$projectRoot = $cur;
                    return $cur;
                }
                $parent = dirname($cur);
                if ($parent === $cur) {
                    break;
                }
                $cur = $parent;
            }
        }
        return null;
    }

    /**
     * 引导项目：加载 bootstrap/autoload.php 并启动 Laravel 内核（幂等）
     *
     * 已在 Laravel 环境中（如 seed-test 的测试脚本）时直接返回，不会重复引导。
     *
     * @param string|null $startDir 起始目录，一般传调用脚本的 __DIR__
     * @return bool 引导成功返回 true
     */
    public static function boot($startDir = null)
    {
        // 已在 Laravel 环境中（如 seed-test 的测试脚本）时直接返回
        if (function_exists('app') && app() instanceof \Illuminate\Foundation\Application) {
            return true;
        }
        $root = self::projectRoot($startDir);
        if ($root === null) {
            fwrite(STDERR, "❌ 未找到项目根目录（需要包含 bootstrap/app.php 与 artisan）\n");
            return false;
        }
        if (!defined('LARAVEL_START')) {
            require $root . '/bootstrap/autoload.php';
        }
        $app = require $root . '/bootstrap/app.php';
        $app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();
        return true;
    }

    /**
     * 解析命令行参数
     *
     * @param array|null $argv 默认取 $_SERVER['argv']
     * @return array ['positional' => [位置参数...], 'flags' => [名字 => bool], 'options' => [名字 => 值]]
     *               --no-anim → flags['anim'] = false；--anim → flags['anim'] = true；--frames=10 → options['frames'] = '10'
     */
    public static function args($argv = null)
    {
        if ($argv === null) {
            $argv = isset($_SERVER['argv']) ? $_SERVER['argv'] : array();
        }
        $positional = array();
        $flags = array();
        $options = array();
        foreach (array_slice($argv, 1) as $arg) {
            if (strpos($arg, '--') !== 0) {
                $positional[] = $arg;
                continue;
            }
            $body = substr($arg, 2);
            if ($body === '') {
                continue;
            }
            if (strpos($body, '=') !== false) {
                $pair = explode('=', $body, 2);
                $options[$pair[0]] = $pair[1];
                continue;
            }
            if (strpos($body, 'no-') === 0) {
                $flags[substr($body, 3)] = false;
                continue;
            }
            $flags[$body] = true;
        }
        return array(
            'positional' => $positional,
            'flags' => $flags,
            'options' => $options,
        );
    }

    /**
     * 取布尔开关（支持 --xxx / --no-xxx）
     * @param array $args TestScript::args() 的返回值
     * @param string $name 开关名（不含 -- 与 no-）
     * @param bool $default 未指定时的默认值
     * @return bool
     */
    public static function flag($args, $name, $default = false)
    {
        if (!isset($args['flags'][$name])) {
            return $default;
        }
        return !!$args['flags'][$name];
    }
}
