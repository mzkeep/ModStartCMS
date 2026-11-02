<?php

namespace ModStart\Test;

use ModStart\Core\Util\FileUtil;

/**
 * 模块自动截图工具 — 封装真实浏览器截图 + 自动压缩
 *
 * 功能：
 *   - 后台页面截图：自动启动 php artisan serve + 真实浏览器（Chrome headless）并登录后台
 *   - 前台主题页面截图：PC（1280x800）与手机（390x844）两种设备 × 视口图 + 全页长图，
 *     用于生成模块市场预览图（preview.md / mobilePreview.md）
 *   - 通过 CDP（Chrome DevTools Protocol）截图，后台页面自动追加 `?_is_tab=1` 仅截取内容区
 *   - 截图后自动压缩：优先系统命令 ss-image-compress，回退 Imagick / GD（ImageUtil::compress）
 *   - 长图自动检测「左右半幅重复」（浏览器长截图偶发缺陷）并重试
 *   - 截图脚本统一位于 module/<Module>/Test/ScreenShot.php
 *   - 静态截图统一存储到 module/<Module>/Temp/ScreenShotImage/<mode>.<name>.png
 *     （<mode> 为设备前缀：pc / pcFull / m / mFull，后台页面默认为 pc）
 *   - 滚动动图统一存储到 module/<Module>/Temp/ScreenShotView/<name>.webp
 *     （Temp 目录随模块一起提交，ModuleDeveloper 打包时自动排除）
 *
 * 用法：
 *   // 前台主题预览图（PC + 手机，4 组共 N 张）
 *   TestScreenShot::captureFrontPages('CmsThemeHuagong1', [
 *       'index' => '/',
 *       'news'  => '/news',
 *   ], ['urlSuffix' => 'msSiteTemplate=huagong1']);
 *
 *   // 批量截取后台页面
 *   TestScreenShot::capturePages('AiAutoArticle', [
 *       'task' => '/admin/ai_auto_article/task',
 *       'config' => '/admin/ai_auto_article/config',
 *   ]);
 *   TestScreenShot::stop();
 *
 *   // 单页截图
 *   $file = TestScreenShot::capturePage('AiAutoArticle', '/admin/ai_auto_article/task', 'task');
 *
 * 前置条件：
 *   - .env 设置 MS_AUTO_TEST=1 忽略后台登录验证码（自动测试模式）
 *   - Node + playwright-core + 系统 Chrome 可用；SHOW_BROWSER=1 时显示浏览器界面
 */
class TestScreenShot
{
    /** @var int 默认截图宽度 */
    const DEFAULT_WIDTH = 1100;

    /** @var int 默认截图高度 */
    const DEFAULT_HEIGHT = 800;

    /** @var string 静态截图输出子目录（模块 Temp 下，随模块提交，打包时排除） */
    const SCREENSHOT_DIR = 'Temp/ScreenShotImage';

    /** @var string 滚动动图输出子目录（模块 Temp 下，随模块提交，打包时排除） */
    const ANIMATION_DIR = 'Temp/ScreenShotView';

    /** @var array 历史目录（仅用于迁移提示，不再读写） */
    const LEGACY_DIRS = [
        'ScreenShot/image' => 'Temp/ScreenShotImage',
        'ScreenShot/animation' => 'Temp/ScreenShotView',
        'Temp/ScreenShot-View' => 'Temp/ScreenShotImage',
        'Temp/ScreenShot-Full' => 'Temp/ScreenShotView',
    ];

    /**
     * 前台预览截图模式：前缀 => [宽度, 高度, 是否手机]
     * 与 ss-html-screenshot 的 desktop/phone 尺寸保持一致（DPR 2）
     */
    const THEME_MODES = [
        'pc' => [1280, 800, false],
        'pcFull' => [1280, 800, false],
        'm' => [390, 844, true],
        'mFull' => [390, 844, true],
    ];

    /** @var bool 是否已启动 server + 浏览器 + 登录 */
    private static $started = false;

    /** @var array 已截图文件列表 */
    private static $screenshots = [];

    /**
     * 启动 HTTP Server + 浏览器并登录后台
     * @param string $username
     * @param string $password
     * @return bool
     */
    public static function start($username = 'admin', $password = '123456')
    {
        if (self::$started) {
            return true;
        }
        TestUi::startServer();
        if (!TestUi::startBrowser()) {
            echo "ERROR: 浏览器启动失败（需 Node + playwright-core + 系统 Chrome）\n";
            TestUi::stopServer();
            return false;
        }
        if (!TestUi::browserLogin($username, $password)) {
            echo "ERROR: 后台登录失败（请确认 .env 已设置 MS_AUTO_TEST=1 且 $username/$password 账号存在）\n";
            TestUi::stopBrowser();
            TestUi::stopServer();
            return false;
        }
        self::$started = true;
        return true;
    }

    /**
     * 关闭 Server + 浏览器，输出截图汇总
     */
    public static function stop()
    {
        TestUi::stopBrowser();
        TestUi::stopServer();
        self::$started = false;
        $list = self::$screenshots;
        self::$screenshots = [];
        echo "截图完成，共 " . count($list) . " 张：\n";
        foreach ($list as $file) {
            echo "  $file\n";
        }
        return $list;
    }

    /**
     * 模块静态截图目录（绝对路径）
     * @param string $module 模块标识，如 CmsThemeHuagong1
     * @return string
     */
    public static function screenShotDir($module)
    {
        return base_path('module/' . $module . '/' . self::SCREENSHOT_DIR);
    }

    /**
     * 模块滚动动图目录（绝对路径）
     * @param string $module 模块标识，如 CmsThemeHuagong1
     * @return string
     */
    public static function animationDir($module)
    {
        return base_path('module/' . $module . '/' . self::ANIMATION_DIR);
    }

    /**
     * 检出模块内仍在使用历史截图目录（ScreenShot/image、ScreenShot/animation）的文件
     * @param string $module 模块标识
     * @return array 形如 ['ScreenShot/image' => [文件名...]]
     */
    public static function legacyFiles($module)
    {
        $result = [];
        foreach (self::LEGACY_DIRS as $legacy => $target) {
            $dir = base_path('module/' . $module . '/' . $legacy);
            if (is_dir($dir)) {
                $files = array_values(array_diff(scandir($dir), ['.', '..']));
                $result[$legacy] = $files;
                echo "⚠️  {$module} 存在历史目录 {$legacy}（{$target} 为当前目录），请迁移后删除\n";
            }
        }
        return $result;
    }

    /**
     * 压缩图片（优先 ss-image-compress，回退 ImageUtil::compress）
     * @param string $path
     * @param array $option ['quality'=>85, 'maxWidth'=>0, 'maxHeight'=>0]
     * @return bool
     */
    public static function compressImage($path, $option = [])
    {
        return TestBrowser::compressImage($path, $option);
    }

    /**
     * 截取前台主题页面，生成模块预览图
     *
     * 每个页面产出 4 张：pc（PC 视口）/ pcFull（PC 全页）/ m（手机视口）/ mFull（手机全页），
     * 文件名形如 `pc.index.png`，与 Docs/module/preview.md、mobilePreview.md 的引用一致。
     *
     * @param string $module 模块标识，如 CmsThemeHuagong1
     * @param array $pages 页面列表 [ 名称 => 前台路径 ]，如 ['index' => '/', 'news' => '/news']
     * @param array $option [
     *     'urlSuffix'      => URL 追加的查询串（如 msSiteTemplate=xxx，可为空）,
     *     'baseUrl'        => 站点地址（为空时自动启动本地 server，用随机端口）,
     *     'duplicateRetry' => 长图重复检测重试次数（默认 3）,
     *     'compress'       => 是否自动压缩（默认 true）,
     *     'quality'        => 压缩质量（默认 85）,
     *     'clear'          => 截图前是否清空目录（默认 true）,
     * ]
     * @return array 截图文件列表
     */
    public static function captureFrontPages($module, $pages, $option = [])
    {
        $option = array_merge([
            'urlSuffix' => null,
            'baseUrl' => null,
            'duplicateRetry' => 3,
            'compress' => true,
            'quality' => 85,
            'clear' => true,
            // null = 默认四组（pc / pcFull / m / mFull）；传 ['pc','m'] 只截视口图（快速自检用）
            'modes' => null,
            // 是否删除目录里「本次未生成」的旧文件；快速模式（只截部分页面 / 部分模式）必须传 false
            'prune' => true,
        ], $option);

        /* 允许只截部分模式：开发期快速自检（改一处 CSS 后看单页效果）不必等整页长图 */
        $modeMap = self::THEME_MODES;
        if (!empty($option['modes'])) {
            $modeMap = array_intersect_key(self::THEME_MODES, array_flip((array)$option['modes']));
            if (!$modeMap) {
                echo "ERROR: modes 参数无有效值（可用 " . implode(' / ', array_keys(self::THEME_MODES)) . "）\n";
                return [];
            }
        }

        $ownServer = false;
        $baseUrl = $option['baseUrl'];
        if (empty($baseUrl)) {
            if (!TestServer::isRunning() && !TestServer::start()) {
                echo "ERROR: 无法启动本地 server（php artisan serve）\n";
                return [];
            }
            $baseUrl = TestServer::baseUrl();
            $ownServer = true;
        }
        if (!TestBrowser::isRunning() && !TestBrowser::start()) {
            echo "ERROR: 浏览器启动失败（需 Node + playwright-core + 系统 Chrome）\n";
            if ($ownServer) {
                TestServer::stop();
            }
            return [];
        }

        $outDir = self::screenShotDir($module);
        if ($option['clear'] && is_dir($outDir)) {
            foreach (glob($outDir . '/*') as $f) {
                @unlink($f);
            }
        }
        if (!is_dir($outDir)) {
            @mkdir($outDir, 0755, true);
        }
        if (!is_dir($outDir)) {
            echo "ERROR: 无法创建截图目录 $outDir\n";
            if ($ownServer) {
                TestServer::stop();
            }
            return [];
        }

        $expected = [];
        foreach ($modeMap as $prefix => $device) {
            foreach ($pages as $name => $path) {
                $expected[] = $prefix . '.' . $name . '.png';
            }
        }

        foreach ($modeMap as $prefix => $device) {
            $fullPage = strpos($prefix, 'Full') !== false;
            echo "\n📷 {$prefix} ({$device[0]}x{$device[1]}" . ($device[2] ? ' 手机' : '') . ")\n";
            foreach ($pages as $name => $path) {
                $url = rtrim($baseUrl, '/') . $path;
                if (!empty($option['urlSuffix'])) {
                    $suffix = ltrim($option['urlSuffix'], '?&');
                    $url .= (strpos($path, '?') === false ? '?' : '&') . $suffix;
                }
                $file = $outDir . '/' . $prefix . '.' . $name . '.png';
                self::captureFrontOne($url, $file, $device, $fullPage, $option);
                self::$screenshots[] = $file;
            }
        }

        // 清理非标准文件：目录里只保留本次生成的标准文件（避免调试残留被提交）
        // ⚠️ 只截部分页面 / 部分模式（快速自检）时必须传 prune=false，否则会把其它页面的截图删掉
        foreach ($option['prune'] ? glob($outDir . '/*') : array() as $f) {
            if (!in_array(basename($f), $expected, true)) {
                @unlink($f);
                echo "  🧹 清理多余文件: " . basename($f) . "\n";
            }
        }

        echo "\n✅ 截图完成，共 " . count($expected) . " 张，保存在 {$outDir}/\n";

        TestBrowser::stop();
        if ($ownServer) {
            TestServer::stop();
        }
        return self::$screenshots;
    }

    /**
     * 生成前台主题页面的「滚动动图」（体现滚动入场动画效果）
     *
     * 每个页面 × 每种设备生成一张动图，内容为从页面顶部滚动到底部，
     * 可直观看到滚动入场（`.reveal`）等动效。默认低帧率 + 有损压缩，体积小。
     *
     * @param string $module 模块标识，如 CmsThemeHuagong1
     * @param array $pages 页面列表 [ 名称 => 前台路径 ]
     * @param array $option [
     *     'urlSuffix'   => URL 追加的查询串（如 msSiteTemplate=xxx）,
     *     'baseUrl'     => 站点地址（为空时自动启动本地 server）,
     *     'modes'       => [ 前缀 => [宽, 高, 是否手机, 动图最大宽度] ]，默认 PC + 手机,
     *     'frames'      => 帧数（默认 0 = 按滚动距离自动计算，12~26 帧）,
     *     'pxPerFrame'  => 自动帧数时每帧滚动的像素（默认 260，越小滚动越慢越细腻）,
     *     'delay'       => 每帧时长（1/100 秒，默认 22 ≈ 4.5fps，越大播放越慢）,
     *     'scrollWait'  => 每帧滚动后等待毫秒（默认 200）,
     *     'initialWait' => 打开页面后等待毫秒（等首屏入场动画，默认 900）,
     *     'quality'     => 动图质量（默认 55）,
     *     'format'      => 'webp'（默认，体积最小）| 'gif',
     *     'clear'       => 是否先清空动图目录（默认 true）,
     * ]
     * @return array 生成的动图文件列表
     */
    public static function captureFrontAnimation($module, $pages, $option = [])
    {
        $option = array_merge([
            'urlSuffix' => null,
            'baseUrl' => null,
            'modes' => [
                'pc' => [1280, 800, false, 760],
                'm' => [390, 844, true, 0],
            ],
            'frames' => 0,
            'pxPerFrame' => 200,
            'scrollWait' => 200,
            'initialWait' => 900,
            'delay' => 28,
            'quality' => 52,
            'format' => 'webp',
            'clear' => true,
        ], $option);

        $ownServer = false;
        $baseUrl = $option['baseUrl'];
        if (empty($baseUrl)) {
            if (!TestServer::isRunning() && !TestServer::start()) {
                echo "ERROR: 无法启动本地 server（php artisan serve）\n";
                return [];
            }
            $baseUrl = TestServer::baseUrl();
            $ownServer = true;
        }
        if (!TestBrowser::isRunning() && !TestBrowser::start()) {
            echo "ERROR: 浏览器启动失败（需 Node + playwright-core + 系统 Chrome）\n";
            if ($ownServer) {
                TestServer::stop();
            }
            return [];
        }

        $outDir = self::animationDir($module);
        if ($option['clear'] && is_dir($outDir)) {
            foreach (glob($outDir . '/*') as $f) {
                @unlink($f);
            }
        }
        if (!is_dir($outDir)) {
            @mkdir($outDir, 0755, true);
        }
        $frameDir = sys_get_temp_dir() . '/modstart-anim-' . $module . '-' . getmypid();
        if (!is_dir($frameDir)) {
            @mkdir($frameDir, 0755, true);
        }

        $ext = $option['format'] === 'gif' ? 'gif' : 'webp';
        $files = array();
        $fixedFrames = intval($option['frames']);
        $delay = max(4, intval($option['delay']));

        foreach ($option['modes'] as $prefix => $device) {
            echo "\n🎞  {$prefix} 动图\n";
            foreach ($pages as $name => $path) {
                $url = rtrim($baseUrl, '/') . $path;
                if (!empty($option['urlSuffix'])) {
                    $suffix = ltrim($option['urlSuffix'], '?&');
                    $url .= (strpos($path, '?') === false ? '?' : '&') . $suffix;
                }
                // ⚠️ 先切视口再导航
                TestBrowser::setViewport($device[0], $device[1], $device[2], 2);
                $ret = TestBrowser::open($url, false);
                if (empty($ret['ok'])) {
                    echo "  [跳过] {$name} 页面访问失败\n";
                    continue;
                }
                TestBrowser::waitAssets(3000);
                // 等首屏入场动画播完，避免第一帧发糊
                usleep(max(0, intval($option['initialWait'])) * 1000);

                $maxScroll = TestBrowser::pageScrollHeight() - $device[1];
                if ($maxScroll < 40) {
                    $maxScroll = 0;
                }
                // 帧数：默认按滚动距离自动计算（页越长帧越多），保证滚动速度均匀、播放不过快
                $frames = $fixedFrames;
                if ($frames <= 0) {
                    $frames = (int)round($maxScroll / max(50, intval($option['pxPerFrame'])));
                    if ($frames < 12) {
                        $frames = 12;
                    }
                    if ($frames > 28) {
                        $frames = 26;
                    }
                }
                $frames = max(4, $frames);
                $durationMs = $frames * $delay * 10;
                echo "  {$name}: {$frames} 帧 / 约 " . round($durationMs / 1000, 1) . "s 播完"
                    . "（" . round($maxScroll / max(0.1, $durationMs / 1000)) . " px/s）\n";
                $frameFiles = array();
                for ($i = 0; $i <= $frames; $i++) {
                    $y = (int)round($maxScroll * $i / $frames);
                    TestBrowser::scrollTo($y);
                    usleep(max(0, intval($option['scrollWait'])) * 1000);
                    $frameFile = $frameDir . '/f-' . sprintf('%03d', $i) . '.png';
                    if (TestBrowser::screenshot($frameFile, false, array('settle' => false, 'clipViewport' => true))) {
                        $frameFiles[] = $frameFile;
                    }
                }
                if (count($frameFiles) < 4) {
                    echo "  [跳过] {$name} 有效帧不足\n";
                    continue;
                }
                $out = $outDir . '/' . $prefix . '.' . $name . '.' . $ext;
                if (self::buildAnimation($frameFiles, $out, array(
                    'delay' => $option['delay'],
                    'quality' => $option['quality'],
                    'maxWidth' => $device[3],
                ))) {
                    $files[] = $out;
                    echo "  OK " . basename($out) . " (" . FileUtil::formatByte(filesize($out)) . ")\n";
                } else {
                    echo "  [跳过] {$name} 动图生成失败\n";
                }
                foreach ($frameFiles as $f) {
                    @unlink($f);
                }
            }
        }
        @rmdir($frameDir);

        TestBrowser::stop();
        if ($ownServer) {
            TestServer::stop();
        }
        echo "\n✅ 动图完成，共 " . count($files) . " 张，保存在 {$outDir}/\n";
        return $files;
    }

    /**
     * 把一组帧合成为动图（默认 webp，体积远小于 gif）
     * @param array $frames 帧图片路径（顺序即播放顺序）
     * @param string $outFile 输出文件（.webp / .gif）
     * @param array $option ['delay'=>12, 'quality'=>65, 'maxWidth'=>0, 'loop'=>0]
     * @return bool
     */
    public static function buildAnimation($frames, $outFile, $option = [])
    {
        if (count($frames) < 2) {
            return false;
        }
        $option = array_merge([
            'delay' => 12,
            'quality' => 65,
            'maxWidth' => 0,
            'loop' => 0,
        ], $option);
        $dir = dirname($outFile);
        if (!is_dir($dir)) {
            @mkdir($dir, 0755, true);
        }

        // 优先 ImageMagick（统一缩放 + 合成，一条命令搞定）
        $magick = TestBrowser::commandPath('magick');
        if ($magick !== '') {
            $args = $magick . ' -delay ' . intval($option['delay']) . ' -loop ' . intval($option['loop']);
            foreach ($frames as $f) {
                $args .= ' ' . escapeshellarg($f);
            }
            if (intval($option['maxWidth']) > 0) {
                $args .= ' -resize ' . intval($option['maxWidth']) . 'x';
            }
            $args .= ' -quality ' . intval($option['quality']) . ' ' . escapeshellarg($outFile);
            $output = array();
            $code = 1;
            @exec($args . ' 2>&1', $output, $code);
            if ($code === 0 && file_exists($outFile) && filesize($outFile) > 0) {
                return true;
            }
        }

        // 回退 img2webp（libwebp 官方工具）
        if (substr($outFile, -5) === '.webp') {
            $img2webp = TestBrowser::commandPath('img2webp');
            if ($img2webp !== '') {
                $args = $img2webp . ' -loop ' . intval($option['loop'])
                    . ' -lossy -q ' . intval($option['quality'])
                    . ' -d ' . (intval($option['delay']) * 10);
                foreach ($frames as $f) {
                    $args .= ' ' . escapeshellarg($f);
                }
                $args .= ' -o ' . escapeshellarg($outFile);
                $output = array();
                $code = 1;
                @exec($args . ' 2>&1', $output, $code);
                if ($code === 0 && file_exists($outFile) && filesize($outFile) > 0) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 截取单张前台预览图（长图自动检测重复并重试）
     * @param string $url
     * @param string $file
     * @param array $device [宽度, 高度, 是否手机]
     * @param bool $fullPage
     * @param array $option
     * @return bool
     */
    private static function captureFrontOne($url, $file, $device, $fullPage, $option)
    {
        // ⚠️ 必须先切换视口再导航：设备变化会重建浏览器 context（页面回到空白页）
        TestBrowser::setViewport($device[0], $device[1], $device[2], 2);
        $maxTries = $fullPage ? max(1, intval($option['duplicateRetry'])) : 1;
        for ($i = 1; $i <= $maxTries; $i++) {
            $ret = TestBrowser::open($url, false);
            if (empty($ret['ok'])) {
                echo "  [跳过] 页面访问失败: " . (isset($ret['error']) ? $ret['error'] : 'unknown') . "\n";
                return false;
            }
            if (!TestBrowser::screenshot($file, $fullPage)) {
                echo "  [跳过] 截图失败\n";
                return false;
            }
            if ($option['compress']) {
                TestBrowser::compressImage($file, ['quality' => $option['quality']]);
            }
            if ($maxTries === 1 || !self::isDuplicated($file)) {
                echo "  OK " . basename($file) . " (" . FileUtil::formatByte(filesize($file)) . ")\n";
                return true;
            }
            echo "  ↻ 检测到长图重复（第 {$i} 次），重试: " . basename($file) . "\n";
        }
        echo "  ⚠️ 长图仍疑似重复: " . basename($file) . "\n";
        return true;
    }

    /**
     * 检测长图是否出现「左右半幅重复」（浏览器全页截图的偶发缺陷）
     * 用 ImageMagick 比较左右两半的归一化 RMSE，< 1% 视为重复；magick 不可用时返回 false
     * @param string $file
     * @return bool
     */
    public static function isDuplicated($file)
    {
        if (!function_exists('exec')) {
            return false;
        }
        $output = [];
        $code = 1;
        @exec('command -v magick 2>/dev/null', $output, $code);
        if ($code !== 0 || empty($output[0])) {
            return false;
        }
        $magick = trim($output[0]);
        $size = @getimagesize($file);
        if (!$size) {
            return false;
        }
        $w = $size[0];
        $h = $size[1];
        if ($w < 200 || $h < 200) {
            return false;
        }
        $half = (int)($w / 2);
        $band = $h < 400 ? $h : 400;
        $left = tempnam(sys_get_temp_dir(), 'sshot') . '.png';
        $right = tempnam(sys_get_temp_dir(), 'sshot') . '.png';
        @exec($magick . ' ' . escapeshellarg($file) . ' -crop ' . $half . 'x' . $band . '+0+0 +repage '
            . escapeshellarg($left) . ' 2>/dev/null');
        @exec($magick . ' ' . escapeshellarg($file) . ' -crop ' . $half . 'x' . $band . '+' . $half . '+0 +repage '
            . escapeshellarg($right) . ' 2>/dev/null');
        $metric = [];
        @exec($magick . ' compare -metric RMSE ' . escapeshellarg($left) . ' ' . escapeshellarg($right)
            . ' null: 2>&1', $metric);
        @unlink($left);
        @unlink($right);
        $text = implode("\n", $metric);
        // ImageMagick 输出形如 "30.1 (0.00046)"，可能是科学计数法 "5.5 (8.4e-05)"
        if (preg_match('/\(([0-9.eE+\-]+)\)/', $text, $mat)) {
            return (float)$mat[1] < 0.01;
        }
        return false;
    }

    /**
     * 批量截取后台页面（自动压缩），存储到 module/<Module>/Temp/ScreenShotImage/<mode>.<name>.png
     * @param string $module 模块标识，如 AiAutoArticle
     * @param array $pages 页面列表 [ name => 后台路由路径 ]
     * @param array $option 截图/压缩选项，见 capturePage
     * @return array 已截图文件列表
     */
    public static function capturePages($module, $pages, $option = [])
    {
        if (!self::$started && !self::start()) {
            return [];
        }
        foreach ($pages as $name => $path) {
            self::capturePage($module, $path, $name, $option);
        }
        return self::$screenshots;
    }

    /**
     * 截取后台页面（自动压缩）
     * 后台页面自动追加 `?_is_tab=1`，仅截图 iframe 内的内容区（不包含后台框架外壳）
     * 截图文件统一使用设备前缀命名（默认 pc），即 `<mode>.<name>.png`
     * @param string $module 模块标识，如 AiAutoArticle
     * @param string $path 后台路由路径，如 /admin/ai_auto_article/task
     * @param string $name 截图文件名（不含设备前缀与扩展名），如 task
     * @param array $option [ 'mode'=>'pc', 'fullPage'=>true, 'maxWidth'=>1100, 'maxHeight'=>800, 'quality'=>85, 'tab'=>true ]
     * @return string|bool 截图文件绝对路径，失败返回 false
     */
    public static function capturePage($module, $path, $name, $option = [])
    {
        if (!self::$started && !self::start()) {
            return false;
        }
        $option = array_merge([
            'mode' => 'pc',
            'fullPage' => true,
            'maxWidth' => self::DEFAULT_WIDTH,
            'maxHeight' => self::DEFAULT_HEIGHT,
            'quality' => 85,
            'tab' => true,
        ], $option);
        $option['mode'] = trim($option['mode'], '.');
        if ($option['tab']) {
            // 后台页面仅截图 iframe 内容区：追加 _is_tab=1
            $path = self::withTabQuery($path);
        }
        $filename = $option['mode'] . '.' . $name . '.png';
        echo "截图 $path → $filename ...\n";
        $ret = TestUi::browserGet($path, false);
        if (empty($ret['ok'])) {
            echo "  [跳过] 页面访问失败: " . (isset($ret['error']) ? $ret['error'] : 'unknown') . "\n";
            return false;
        }
        $outDir = self::screenShotDir($module);
        if (!is_dir($outDir)) {
            @mkdir($outDir, 0755, true);
        }
        if (!is_dir($outDir)) {
            echo "  [跳过] 无法创建截图目录 $outDir\n";
            return false;
        }
        $file = $outDir . '/' . $filename;
        if (!TestUi::browserScreenshotCompressed($file, $option['fullPage'], $option)) {
            echo "  [跳过] 截图失败\n";
            return false;
        }
        self::$screenshots[] = $file;
        echo "  OK $file (" . FileUtil::formatByte(filesize($file)) . ")\n";
        return $file;
    }

    /**
     * 为后台页面路径追加 _is_tab=1 查询参数（仅截图 iframe 内容区）
     * @param string $path
     * @return string
     */
    private static function withTabQuery($path)
    {
        if (strpos($path, '?') === false) {
            return $path . '?_is_tab=1';
        }
        return $path . '&_is_tab=1';
    }
}
