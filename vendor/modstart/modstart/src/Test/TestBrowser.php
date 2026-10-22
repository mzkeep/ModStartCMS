<?php

namespace ModStart\Test;

use ModStart\Core\Util\ImageUtil;

/**
 * 真实浏览器测试驱动 — 通过 Node + Playwright(playwright-core) 驱动系统 Chrome(headless)
 *
 * 启动一个常驻 Node 浏览器服务进程（browser-server.js），通过 stdin/stdout 行 JSON 通信：
 *   - 登录后台（真实打开登录页、填表、提交）
 *   - 访问页面（携带登录态 cookie）
 *   - 填表 / 点击 / 执行 JS / 截图
 *
 * 依赖：
 *   - Node.js（node 命令可用）
 *   - playwright-core（项目根 node_modules 或本目录 node_modules）
 *   - 系统 Chrome / Chromium
 *
 * 使用：
 *   TestBrowser::start();
 *   TestBrowser::login('admin', '123456', 'http://127.0.0.1:xxxx/admin/login');
 *   $ret = TestBrowser::goto('http://127.0.0.1:xxxx/admin/ai_auto_article/task');
 *   TestBrowser::stop();
 */
class TestBrowser
{
    /** @var resource|null proc_open 进程句柄 */
    private static $process = null;

    /** @var array|null 管道 */
    private static $pipes = null;

    /** @var string|null 脚本路径 */
    private static $scriptPath = null;

    /** @var bool 是否已启动 */
    private static $started = false;

    /**
     * 浏览器服务脚本路径
     * @return string
     */
    private static function scriptPath()
    {
        if (null === self::$scriptPath) {
            self::$scriptPath = __DIR__ . '/browser/browser-server.js';
        }
        return self::$scriptPath;
    }

    /**
     * 检测浏览器驱动是否可用（Node + 脚本存在）
     * @return bool
     */
    public static function available()
    {
        if (!file_exists(self::scriptPath())) {
            return false;
        }
        $nodeBin = trim(shell_exec('command -v node 2>/dev/null'));
        return !empty($nodeBin);
    }

    /**
     * 自动化测试依赖共享目录（默认 ~/.modstart/auto-test/node-modules）
     * 可通过环境变量 MODSTART_AUTO_TEST_HOME 覆盖
     *
     * @return string 无法确定用户目录时返回空字符串
     */
    public static function autoTestHome()
    {
        $env = getenv('MODSTART_AUTO_TEST_HOME');
        if (!empty($env)) {
            return rtrim($env, '/\\');
        }
        $home = getenv('HOME');
        if (empty($home)) {
            $home = getenv('USERPROFILE');
        }
        if (empty($home) && isset($_SERVER['HOME'])) {
            $home = $_SERVER['HOME'];
        }
        if (empty($home) && isset($_SERVER['USERPROFILE'])) {
            $home = $_SERVER['USERPROFILE'];
        }
        if (empty($home)) {
            return '';
        }
        return rtrim($home, '/\\') . '/.modstart/auto-test/node-modules';
    }

    /**
     * playwright-core 是否已安装（共享目录 / 项目根 node_modules / 本目录 node_modules）
     * @return bool
     */
    public static function driverInstalled()
    {
        $home = self::autoTestHome();
        $candidates = [];
        if (!empty($home)) {
            $candidates[] = $home . '/playwright-core/package.json';
        }
        $candidates[] = base_path('node_modules/playwright-core/package.json');
        $candidates[] = __DIR__ . '/browser/node_modules/playwright-core/package.json';
        foreach ($candidates as $file) {
            if (file_exists($file)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 确保 playwright-core 已安装，未安装时自动执行 init.js 初始化（安装到共享目录）
     * @return bool
     */
    public static function ensureDriver()
    {
        if (self::driverInstalled()) {
            return true;
        }
        $initScript = __DIR__ . '/browser/init.js';
        if (!file_exists($initScript)) {
            return false;
        }
        $nodeBin = trim(shell_exec('command -v node 2>/dev/null'));
        if (empty($nodeBin)) {
            return false;
        }
        $cmd = escapeshellarg($nodeBin) . ' ' . escapeshellarg($initScript) . ' 2>&1';
        $output = [];
        $exitCode = 0;
        exec($cmd, $output, $exitCode);
        return $exitCode === 0 && self::driverInstalled();
    }

    /**
     * 是否已启动
     * @return bool
     */
    public static function isRunning()
    {
        if (!self::$process || !self::$started) {
            return false;
        }
        $status = proc_get_status(self::$process);
        return $status['running'];
    }

    /**
     * 启动浏览器服务进程，等待就绪
     * @return bool
     */
    public static function start()
    {
        if (self::isRunning()) {
            return true;
        }
        if (!self::available()) {
            return false;
        }
        // 确保 playwright-core 已安装（自动初始化到共享目录）
        if (!self::ensureDriver()) {
            return false;
        }
        // SHOW_BROWSER=1 时显示浏览器界面（headed），默认 headless 不显示
        $showBrowser = config('env.SHOW_BROWSER', false);
        if (!$showBrowser) {
            $showBrowser = getenv('SHOW_BROWSER');
        }
        putenv('SHOW_BROWSER=' . ($showBrowser ? '1' : '0'));
        $cmd = 'node ' . escapeshellarg(self::scriptPath());
        $descriptors = [
            0 => ['pipe', 'r'],
            1 => ['pipe', 'w'],
            2 => ['pipe', 'w'],
        ];
        self::$process = proc_open($cmd, $descriptors, self::$pipes, base_path());
        if (!is_resource(self::$process)) {
            self::$process = null;
            return false;
        }
        self::$started = true;
        // 等待浏览器就绪：发送 ping 指令（goto about:blank）
        $deadline = time() + 20;
        while (time() < $deadline) {
            if (!self::isRunning()) {
                return false;
            }
            $ret = self::command('goto', ['url' => 'about:blank']);
            if (!empty($ret) && isset($ret['ok'])) {
                return true;
            }
            usleep(300000);
        }
        self::stop();
        return false;
    }

    /**
     * 关闭浏览器服务进程
     */
    public static function stop()
    {
        if (self::processRunning()) {
            try {
                self::writeCommand(['action' => 'close']);
                // 等待进程退出
                $deadline = time() + 5;
                while (time() < $deadline && self::processRunning()) {
                    usleep(100000);
                }
            } catch (\Exception $e) {
                // ignore
            }
        }
        if (is_resource(self::$process)) {
            proc_terminate(self::$process);
            $deadline = time() + 3;
            while (time() < $deadline && self::processRunning()) {
                usleep(100000);
            }
            proc_close(self::$process);
        }
        self::$process = null;
        self::$pipes = null;
        self::$started = false;
    }

    /**
     * 进程是否存活
     * @return bool
     */
    private static function processRunning()
    {
        if (!self::$process) {
            return false;
        }
        $status = proc_get_status(self::$process);
        return $status['running'];
    }

    /**
     * 发送指令并读取结果（串行同步）
     * @param string $action
     * @param array $params
     * @return array|null 结果数组，失败返回 null
     */
    public static function command($action, $params = [])
    {
        if (!self::isRunning()) {
            return null;
        }
        $params['action'] = $action;
        if (!self::writeCommand($params)) {
            return null;
        }
        return self::readResult();
    }

    /**
     * 写入一行 JSON 指令
     * @param array $params
     * @return bool
     */
    private static function writeCommand($params)
    {
        if (empty(self::$pipes) || empty(self::$pipes[0])) {
            return false;
        }
        $line = json_encode($params) . "\n";
        $written = fwrite(self::$pipes[0], $line);
        fflush(self::$pipes[0]);
        return ($written !== false && $written > 0);
    }

    /**
     * 从 stdout 读取一行 JSON 结果（带超时）
     * @return array|null
     */
    private static function readResult()
    {
        if (empty(self::$pipes) || empty(self::$pipes[1])) {
            return null;
        }
        $read = [self::$pipes[1]];
        $write = null;
        $except = null;
        $ready = @stream_select($read, $write, $except, 60, 0);
        if ($ready === false || $ready === 0) {
            return null;
        }
        $line = fgets(self::$pipes[1]);
        if ($line === false) {
            return null;
        }
        $data = json_decode(trim($line), true);
        if (!is_array($data)) {
            return null;
        }
        return $data;
    }

    /**
     * 浏览器登录后台
     * @param string $username
     * @param string $password
     * @param string $loginUrl 登录页完整 URL
     * @return bool
     */
    public static function login($username, $password, $loginUrl)
    {
        $ret = self::command('login', [
            'url' => $loginUrl,
            'username' => $username,
            'password' => $password,
        ]);
        if (empty($ret) || empty($ret['ok'])) {
            return false;
        }
        return !empty($ret['loggedIn']);
    }

    /**
     * 打开页面
     * @param string $url
     * @param bool $withHtml 是否返回 HTML
     * @return array ['ok','status','title','url','html']
     */
    public static function open($url, $withHtml = false)
    {
        $ret = self::command('goto', [
            'url' => $url,
            'withHtml' => $withHtml,
        ]);
        if (empty($ret) || empty($ret['ok'])) {
            return [
                'ok' => false,
                'status' => 0,
                'title' => '',
                'url' => '',
                'html' => '',
                'error' => isset($ret['error']) ? $ret['error'] : 'browser command failed',
            ];
        }
        return $ret;
    }

    /**
     * 填表
     * @param string $selector
     * @param string $value
     * @return bool
     */
    public static function fill($selector, $value)
    {
        $ret = self::command('fill', ['selector' => $selector, 'value' => $value]);
        return !empty($ret) && !empty($ret['ok']);
    }

    /**
     * 点击元素
     * @param string $selector
     * @return bool
     */
    public static function click($selector)
    {
        $ret = self::command('click', ['selector' => $selector]);
        return !empty($ret) && !empty($ret['ok']);
    }

    /**
     * 执行 JS 并返回结果
     * @param string $script
     * @return mixed
     */
    public static function evalJs($script)
    {
        $ret = self::command('eval', ['script' => $script]);
        if (empty($ret) || empty($ret['ok'])) {
            return null;
        }
        return isset($ret['data']) ? $ret['data'] : null;
    }

    /**
     * 获取当前页面 HTML
     * @return string
     */
    public static function html()
    {
        $ret = self::command('html');
        if (empty($ret) || empty($ret['ok'])) {
            return '';
        }
        return isset($ret['html']) ? $ret['html'] : '';
    }

    /**
     * 截图
     * @param string $path 保存路径
     * @param bool $fullPage 是否整页截图（true 时截取整个可滚动页面）
     * @return bool
     */
    /**
     * 切换设备 / 视口（PC 与手机两种预览尺寸）
     * ⚠️ 设备参数变化会重建浏览器 context，登录态（cookie）会丢失，
     *    因此仅适用于前台页面截图；后台截图请在登录前设置。
     * @param int $width CSS 像素宽度，如 1280（PC）/ 390（手机）
     * @param int $height CSS 像素高度，如 800（PC）/ 844（手机）
     * @param bool $mobile 是否模拟手机（移动 UA + isMobile + 触摸）
     * @param float $deviceScaleFactor 设备像素比，默认 2（高清截图）
     * @return bool
     */
    public static function setViewport($width, $height, $mobile = false, $deviceScaleFactor = 2)
    {
        $ret = self::command('viewport', [
            'width' => intval($width),
            'height' => intval($height),
            'mobile' => !!$mobile,
            'deviceScaleFactor' => floatval($deviceScaleFactor),
        ]);
        return !empty($ret) && !empty($ret['ok']);
    }

    /**
     * 浏览器截图
     * @param string $path 保存路径
     * @param bool $fullPage 是否整页截图（true 时截取整个可滚动页面）
     * @param array $option 可选：
     *                      - viewportWidth / viewportHeight / mobile / deviceScaleFactor：截图前切换设备
     *                      - settle：是否执行「滚到底部等 1 秒」稳定流程，默认 true；
     *                                逐帧动画截图传 false（否则每帧都会跳到底部）
     * @return bool
     */
    public static function screenshot($path, $fullPage = false, $option = [])
    {
        if (!empty($option['viewportWidth'])) {
            self::setViewport(
                $option['viewportWidth'],
                isset($option['viewportHeight']) ? $option['viewportHeight'] : 800,
                !empty($option['mobile']),
                isset($option['deviceScaleFactor']) ? $option['deviceScaleFactor'] : 2
            );
        }
        $params = ['path' => $path, 'fullPage' => $fullPage];
        if (array_key_exists('settle', $option)) {
            $params['settle'] = !!$option['settle'];
        }
        if (!empty($option['clipViewport'])) {
            $params['clipViewport'] = true;
        }
        $ret = self::command('screenshot', $params);
        return !empty($ret) && !empty($ret['ok']);
    }

    /**
     * 滚动到指定位置
     * @param int $y
     * @return mixed
     */
    public static function scrollTo($y)
    {
        return self::evalJs('window.scrollTo(0, ' . intval($y) . '); 1');
    }

    /**
     * 当前页面可滚动总高度（文档高度）
     * @return int
     */
    public static function pageScrollHeight()
    {
        $h = self::evalJs('Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)');
        return intval($h);
    }

    /**
     * 等待页面资源（图片）加载完成 + 绘制完成（不滚动）
     * @param int $timeoutMs
     * @return void
     */
    public static function waitAssets($timeoutMs = 3000)
    {
        $script = '(function(){var t=' . intval($timeoutMs) . ';'
            . 'var imgs=Array.prototype.slice.call(document.images||[]).filter(function(i){return !i.complete;});'
            . 'if(!imgs.length){return 1;}'
            . 'return new Promise(function(resolve){var left=imgs.length;var timer=setTimeout(function(){resolve(1);},t);'
            . 'function done(){left--;if(left<=0){clearTimeout(timer);resolve(1);}}'
            . 'imgs.forEach(function(i){i.addEventListener("load",done,{once:true});i.addEventListener("error",done,{once:true});});});'
            . '})()';
        self::evalJs($script);
    }

    /**
     * 截图并自动压缩
     * @param string $path 保存路径
     * @param bool $fullPage 是否整页截图
     * @param array $option 截图/压缩选项，见 screenshot 与 compressImage
     * @return bool
     */
    public static function screenshotCompressed($path, $fullPage = false, $option = [])
    {
        if (!self::screenshot($path, $fullPage, $option)) {
            return false;
        }
        if (!file_exists($path)) {
            return false;
        }
        return self::compressImage($path, $option);
    }

    /**
     * 压缩图片（原地）
     *
     * 优先调用系统命令 ss-image-compress（无损缩放 + 质量优化，体积更小），
     * 命令不存在或执行失败时回退框架的 ImageUtil::compress。
     * 仅在显式传入 maxWidth / maxHeight 时才会等比缩放，否则只做质量压缩，不改变像素尺寸。
     *
     * @param string $path 图片路径
     * @param array $option ['quality'=>85, 'maxWidth'=>0, 'maxHeight'=>0]
     * @return bool
     */
    public static function compressImage($path, $option = [])
    {
        if (!file_exists($path)) {
            return false;
        }
        $quality = isset($option['quality']) ? intval($option['quality']) : 85;
        $maxWidth = isset($option['maxWidth']) ? intval($option['maxWidth']) : 0;
        $maxHeight = isset($option['maxHeight']) ? intval($option['maxHeight']) : 0;
        $max = max($maxWidth, $maxHeight);

        $cmd = self::commandPath('ss-image-compress');
        if ($cmd !== '') {
            $before = @filesize($path);
            $args = escapeshellarg($cmd) . ' ' . escapeshellarg($path)
                . ' --overwrite -q ' . $quality;
            if ($max > 0) {
                $args .= ' --max ' . $max;
            }
            $output = [];
            $code = 1;
            @exec($args . ' 2>&1', $output, $code);
            $after = @filesize($path);
            if ($code === 0 && $after > 0 && ($before === false || $after <= $before)) {
                return true;
            }
        }

        // 回退：ImageUtil::compress（未指定尺寸时按原图尺寸，避免被默认值缩小）
        $fallback = ['quality' => $quality];
        if ($max > 0) {
            $fallback['maxWidth'] = $maxWidth > 0 ? $maxWidth : $max;
            $fallback['maxHeight'] = $maxHeight > 0 ? $maxHeight : $max;
        } else {
            $size = @getimagesize($path);
            if ($size) {
                $fallback['maxWidth'] = $size[0];
                $fallback['maxHeight'] = $size[1];
            }
        }
        return ImageUtil::compress($path, $fallback);
    }

    /**
     * 检测系统命令是否存在，返回命令绝对路径（不存在返回空字符串）
     * @param string $name
     * @return string
     */
    public static function commandPath($name)
    {
        if (!function_exists('exec')) {
            return '';
        }
        $output = [];
        $code = 1;
        @exec('command -v ' . escapeshellarg($name) . ' 2>/dev/null', $output, $code);
        if ($code === 0 && !empty($output[0])) {
            return trim($output[0]);
        }
        return '';
    }
}