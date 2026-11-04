<?php

//$INSTALL_CONFIG = [
//    'envs' => [
//        [
//            'name' => 'DOMAIN_MAIN',
//            'label' => '主域名',
//            'desc' => '如期望不同城市的访问域名为 bj.example.com, sh.example.com 需要配置主域名为 example.com',
//            'default' => isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '',
//        ],
//    ]
//];

use ModStart\Core\Util\EnvUtil;
use ModStart\Core\Util\FileUtil;

include __DIR__ . '/function.php';

$installLocked = file_exists(INSTALL_LOCK_FILE);
$hasLicense = defined('LICENSE_URL');
$appTitle = INSTALL_APP_NAME . ' V' . INSTALL_APP_VERSION;

/* ---------------------------------------------------------------------------
 * Run every environment check into a buffer before the layout is printed, so
 * that the wizard can render the right step, progress and summary on the first
 * paint (no flash of a wrong step).
 * ------------------------------------------------------------------------- */
ob_start();
?>
<div class="ins-check-wide" data-rewrite-check>
    <div class="status loading">
        <div class="ins-check is-pending">
            <i class="iconfont icon-loading" aria-hidden="true"></i>
            <span class="ins-check-text">Rewrite 规则检测中…</span>
        </div>
    </div>
    <div class="status success" style="display:none;"><?php text_success('Rewrite 规则正确'); ?></div>
    <div class="status error" style="display:none;"><?php text_error('Rewrite 规则错误', 'https://modstart.com/doc/install/qa.html#q-rewrite%E8%A7%84%E5%88%99', false); ?></div>
    <div class="status error" style="display:none;">
        <div class="ins-hint">
            <div>
                配置 Nginx / Apache，保证访问 <a href="/install/ping" target="_blank" rel="noopener">/install/ping</a> 出现
                <code class="ins-code">ok</code> 字样。
            </div>
        </div>
    </div>
</div>
<div class="ins-check-wide" data-public-install-path-warning style="display:none;">
    <?php text_warning('安装路径为 public/install.php ，可能设置错了网站根目录，请仔细检查', 'https://modstart.com/doc/install/start.html#%E5%8F%82%E8%80%83%E9%85%8D%E7%BD%AE', false); ?>
</div>
<script>
    if (window.location.href.indexOf('public/install.php') > 0) {
        document.querySelector('[data-public-install-path-warning]').style.display = 'block';
    }
</script>
<div class="ins-checks">
    <?php text_success('系统：' . PHP_OS); ?>
    <?php php_version_ok() ? text_success('PHP版本 ' . PHP_VERSION) : text_error('PHP版本要求（' . php_version_requires() . '） 当前为 ' . PHP_VERSION); ?>
    <?php PHP_INT_SIZE == 4 ? text_error('PHP编译版本32位，需要64位') : text_success('PHP编译版本满足要求（64位）'); ?>
    <?php text_success('最大上传：' . FileUtil::formatByte(EnvUtil::env('uploadMaxSize'))); ?>
    <?php function_exists('curl_init') ? text_success('PHP curl 扩展') : text_error('缺少 PHP curl 扩展'); ?>
    <?php class_exists('ZipArchive') ? text_success('PHP zip 扩展') : text_error('缺少 PHP zip 扩展'); ?>
    <?php function_exists('openssl_open') ? text_success('PHP openssl 扩展') : text_error('缺少 PHP openssl 扩展'); ?>
    <?php function_exists('exif_read_data') ? text_success('PHP exif 扩展') : text_error('缺少 PHP exif 扩展'); ?>
    <?php function_exists('bcmul') ? text_success('PHP bcmath 扩展') : text_error('缺少 PHP bcmath 扩展'); ?>
    <?php class_exists('pdo') ? text_success('PHP pdo 扩展') : text_error('缺少 PHP pdo 扩展'); ?>
    <?php (class_exists('pdo') && in_array('mysql', PDO::getAvailableDrivers())) ? text_success('PHP PDO mysql 驱动') : text_error('缺少 PHP PDO mysql 驱动'); ?>
    <?php function_exists('mb_internal_encoding') ? text_success('PHP mbstring 扩展') : text_error('缺少 PHP mbstring 扩展'); ?>
    <?php function_exists('token_get_all') ? text_success('PHP tokenizer 扩展') : text_error('缺少 PHP tokenizer 扩展'); ?>
    <?php function_exists('finfo_file') ? text_success('PHP fileinfo 扩展') : text_error('缺少 PHP fileinfo 扩展'); ?>
    <?php function_exists('proc_open') ? text_success('proc_open 函数') : text_error('缺少 proc_open 函数', 'https://modstart.com/doc/install/qa.html'); ?>
    <?php function_exists('putenv') ? text_success('putenv 函数') : text_error('缺少 putenv 函数', 'https://modstart.com/doc/install/qa.html'); ?>
    <?php function_exists('proc_get_status') ? text_success('proc_get_status 函数') : text_error('缺少 proc_get_status 函数', 'https://modstart.com/doc/install/qa.html'); ?>
    <?php if (version_compare(PHP_VERSION, '5.6.0', 'ge') && version_compare(PHP_VERSION, '5.7.0', 'lt')) { ?>
        <?php EnvUtil::iniFileConfig('always_populate_raw_post_data') == '-1' ? text_success('验证 always_populate_raw_post_data=-1') : text_error('请配置 always_populate_raw_post_data=-1', 'https://modstart.com/doc/install/qa.html'); ?>
    <?php } ?>
    <?php is_dir_really_writable(APP_PATH . '/bootstrap/') ? text_success('/bootstrap/目录可写') : text_error('/bootstrap/目录不可写'); ?>
    <?php is_dir_really_writable(APP_PATH . '/storage/') ? text_success('/storage/目录可写') : text_error('/storage/目录不可写'); ?>
    <?php is_dir_really_writable(APP_PATH . '/public/') ? text_success('/public/目录可写') : text_error('/public/目录不可写'); ?>
    <?php is_dir_really_writable(APP_PATH . '/bootstrap/cache/') ? text_success('/bootstrap/cache/目录可写') : text_error('/bootstrap/cache/目录不可写'); ?>
</div>
<?php
$envCheckHtml = ob_get_clean();
$envCheckCount = check_counter(0);
$envErrorCount = error_counter(0);
$envOkCount = $envCheckCount - $envErrorCount;
/* the rewrite check is confirmed by the browser afterwards, so the first paint
   shows the readout without it and JavaScript adds it back once confirmed. */
$envOkPendingCount = $envOkCount - 1;
$envWritable = env_writable();

/* ---------------------------------------------------------------------------
 * Step model (license step exists only when a license url is configured).
 * ------------------------------------------------------------------------- */
$stepList = array();
if ($hasLicense) {
    $stepList[] = array(
        'step' => 'license',
        'title' => '安装协议',
        'desc' => '阅读并同意许可条款',
        'lead' => '请在继续安装前完整阅读并同意软件许可协议',
    );
}
$stepList[] = array(
    'step' => 'env',
    'title' => '环境检查',
    'desc' => '确认服务器运行环境',
    'lead' => '以下为当前服务器环境与目录权限的检测结果',
);
$stepList[] = array(
    'step' => 'form',
    'title' => '配置安装',
    'desc' => '填写数据库与管理员信息',
    'lead' => '填写数据库连接信息并设置后台管理账号',
);

$initialStep = $hasLicense ? 'license' : 'env';
if ($envErrorCount > 0) {
    $initialStep = 'env';
}
$initialIndex = 0;
$stepCount = count($stepList);
foreach ($stepList as $index => $stepItem) {
    if ($stepItem['step'] === $initialStep) {
        $initialIndex = $index;
    }
}
$initialMeta = $stepList[$initialIndex];
$initialProgress = round(($initialIndex + 1) / $stepCount * 100, 3);
?>
<!doctype html>
<html lang="zh-CN" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="renderer" content="webkit">
    <script src="/asset/vendor/jquery.js?<?php echo time(); ?>"></script>
    <script src="/asset/common/base.js?<?php echo time(); ?>"></script>
    <script src="/asset/layui/layui.js?<?php echo time(); ?>"></script>
    <link rel="stylesheet" href="/asset/vendor/iconfont/iconfont.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="/asset/layui/css/layui.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="/asset/theme/default/style.css?<?php echo time(); ?>">
    <title><?php echo $appTitle; ?> 安装向导</title>
    <style type="text/css">
        /* =================================================================
         * Installer console — "ink shell + instrument readout"
         * Every colour/radius/shadow comes from the SUI design tokens.
         * ================================================================= */
        .ins, .ins * {
            box-sizing: border-box;
        }

        html, body {
            min-height: 100%;
            margin: 0;
        }

        body {
            font-family: var(--font-family);
            font-size: 0.875rem;
            line-height: 1.65;
            color: var(--color-text);
            background-color: var(--color-body-bg);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .ins-mono {
            font-family: var(--font-family-mono);
            font-variant-numeric: tabular-nums;
            letter-spacing: 0.02em;
        }

        /* ---------- ambience: paper background, primary glow, blueprint grid ---------- */
        .ins-bg {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 0;
            pointer-events: none;
            background-color: var(--color-body-bg);
        }

        .ins-bg::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image:
                radial-gradient(58rem 30rem at 6% -14%, var(--color-primary-glow), transparent 66%),
                radial-gradient(46rem 26rem at 106% 116%, var(--color-primary-glow), transparent 64%);
            opacity: 0.6;
        }

        .ins-bg::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image:
                linear-gradient(var(--color-body-line) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-body-line) 1px, transparent 1px);
            background-size: 3.5rem 3.5rem;
            opacity: 0.9;
            -webkit-mask-image: radial-gradient(84% 72% at 50% 40%, #000 0%, transparent 82%);
            mask-image: radial-gradient(84% 72% at 50% 40%, #000 0%, transparent 82%);
        }

        /* ---------- shell ---------- */
        .ins {
            position: relative;
            z-index: 1;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1.25rem;
        }

        .ins-shell {
            width: 100%;
            max-width: 68rem;
            height: min(52rem, calc(100vh - 4rem));
            display: grid;
            grid-template-columns: 20rem minmax(0, 1fr);
            grid-template-rows: minmax(0, 1fr);
            border-radius: var(--size-radius-lg);
            overflow: hidden;
            box-shadow: var(--box-shadow-lg), 0 0 0 1px var(--color-body-line);
            animation: insShellIn 0.5s var(--ease-out) both;
        }

        @keyframes insShellIn {
            from { opacity: 0; transform: translateY(0.875rem) scale(0.995); }
            to { opacity: 1; transform: none; }
        }

        /* ---------- left rail (primary tinted paper) ---------- */
        .ins-rail {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            padding: 1.75rem 1.5rem;
            border-right: 1px solid var(--color-body-line);
            background-color: var(--color-primary-light-bg);
            overflow: hidden;
        }

        .ins-rail::before {
            content: "";
            position: absolute;
            top: -30%;
            left: -35%;
            width: 26rem;
            height: 26rem;
            border-radius: 50%;
            background: radial-gradient(closest-side, var(--color-primary-glow), transparent 72%);
            opacity: 0.7;
            pointer-events: none;
        }

        .ins-brand {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            min-width: 0;
        }

        .ins-brand-mark {
            flex: none;
            width: 2.5rem;
            height: 2.5rem;
            display: grid;
            place-items: center;
            border-radius: var(--size-radius-sm);
            background-color: var(--color-content-bg);
            box-shadow: var(--shadow-hairline);
            color: var(--color-primary);
            font-size: 1.25rem;
        }

        .ins-brand-text {
            min-width: 0;
        }

        .ins-brand-name {
            font-size: 1.0625rem;
            font-weight: 600;
            line-height: 1.3;
            color: var(--color-heading);
            overflow-wrap: anywhere;
        }

        .ins-brand-meta {
            font-size: 0.75rem;
            color: var(--color-tertiary);
        }

        /* ---------- vertical stepper ---------- */
        .ins-steps {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            margin: 0;
        }

        .ins-step {
            position: relative;
            display: grid;
            grid-template-columns: 2rem minmax(0, 1fr);
            gap: 0.75rem;
            align-items: start;
            width: 100%;
            padding: 0.5rem 0;
            border: 0;
            background: none;
            font: inherit;
            text-align: left;
            color: inherit;
            -webkit-appearance: none;
            appearance: none;
            cursor: default;
        }

        .ins-step:not(:disabled) {
            cursor: pointer;
        }

        .ins-step::after {
            content: "";
            position: absolute;
            left: calc(1rem - 0.5px);
            top: 2.5rem;
            bottom: -0.5rem;
            width: 1px;
            background-color: var(--color-tertiary-light);
            transition: background-color 0.3s var(--ease-out);
        }

        .ins-step:last-child::after {
            display: none;
        }

        .ins-step.is-done::after {
            background-color: var(--color-primary);
        }

        .ins-step-idx {
            position: relative;
            width: 2rem;
            height: 2rem;
            display: grid;
            place-items: center;
            border-radius: var(--size-radius-xs);
            background-color: var(--color-content-bg);
            box-shadow: inset 0 0 0 1px var(--color-tertiary-light);
            color: var(--color-tertiary);
            font-family: var(--font-family-mono);
            font-size: 0.75rem;
            font-weight: 600;
            transition: color 0.25s var(--ease-out), background-color 0.25s var(--ease-out),
                box-shadow 0.25s var(--ease-out);
        }

        .ins-step-tick {
            display: none;
            font-size: 0.75rem;
        }

        .ins-step.is-active .ins-step-idx {
            background-color: var(--color-primary);
            box-shadow: inset 0 0 0 1px var(--color-primary), 0 0 0 0.25rem var(--color-primary-soft);
            color: var(--color-text-reverse);
        }

        .ins-step.is-done .ins-step-idx {
            background-color: var(--color-content-bg);
            color: var(--color-primary);
            box-shadow: inset 0 0 0 1px var(--color-primary-soft);
        }

        .ins-step.is-done .ins-step-num {
            display: none;
        }

        .ins-step.is-done .ins-step-tick {
            display: block;
        }

        .ins-step-title {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.4;
            color: var(--color-body-block);
            transition: color 0.25s var(--ease-out);
        }

        .ins-step-desc {
            display: block;
            font-size: 0.75rem;
            line-height: 1.5;
            color: var(--color-tertiary);
        }

        .ins-step.is-active .ins-step-title,
        .ins-step:not(:disabled):hover .ins-step-title {
            color: var(--color-heading);
        }

        .ins-step:not(:disabled):hover .ins-step-idx {
            box-shadow: inset 0 0 0 1px var(--color-primary-soft);
            color: var(--color-primary);
        }

        /* ---------- rail footer ---------- */
        .ins-rail-foot {
            position: relative;
            z-index: 1;
            margin-top: auto;
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
            padding-top: 1.25rem;
            border-top: 1px solid var(--color-body-line);
        }

        .ins-rail-note {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            font-size: 0.75rem;
            line-height: 1.55;
            color: var(--color-tertiary);
        }

        .ins-rail-note .iconfont {
            flex: none;
            margin-top: 0.125rem;
            color: var(--color-primary);
        }

        .ins-rail-link {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            align-self: flex-start;
            font-size: 0.75rem;
            color: var(--color-link);
            text-decoration: none;
            transition: color 0.2s var(--ease-out);
        }

        .ins-rail-link:hover {
            color: var(--color-link-hover);
        }

        /* ---------- right pane (content surface) ---------- */
        .ins-main {
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            min-height: 0;
            background-color: var(--color-content-bg);
        }

        .ins-watermark {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;
            color: var(--color-body-line);
            font-family: var(--font-family-mono);
            opacity: 0.5;
            -webkit-mask-image: radial-gradient(120% 100% at 74% 10%, #000 0%, transparent 78%);
            mask-image: radial-gradient(120% 100% at 74% 10%, #000 0%, transparent 78%);
        }

        .ins-watermark svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        .ins-main-head {
            position: relative;
            z-index: 2;
            flex: none;
            padding: 1.5rem 1.75rem 1.25rem;
            border-bottom: 1px solid var(--color-body-line);
            background-color: var(--color-content-bg);
        }

        .ins-eyebrow {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin: 0 0 0.5rem;
            font-size: 0.6875rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--color-tertiary);
        }

        .ins-eyebrow-dot {
            width: 0.375rem;
            height: 0.375rem;
            flex: none;
            border-radius: 50%;
            background-color: var(--color-primary);
            box-shadow: 0 0 0 0.1875rem var(--color-primary-soft);
        }

        .ins-title {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.35;
            font-weight: 600;
            color: var(--color-heading);
        }

        .ins-lead {
            margin: 0.375rem 0 0;
            font-size: 0.8125rem;
            line-height: 1.6;
            color: var(--color-tertiary);
        }

        .ins-progress {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1px;
            height: 2px;
            overflow: hidden;
            background-color: var(--color-body-line);
        }

        .ins-progress-bar {
            display: block;
            height: 100%;
            width: <?php echo $initialProgress; ?>%;
            background-color: var(--color-primary);
            transition: width 0.45s var(--ease-out);
        }

        /* ---------- scrollable content ---------- */
        .ins-content {
            position: relative;
            z-index: 1;
            flex: 1 1 auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .ins-pane {
            display: none;
            flex: 1 1 auto;
            min-height: 0;
            flex-direction: column;
        }

        .ins-pane.is-active {
            display: flex;
            animation: insPaneIn 0.34s var(--ease-out) both;
        }

        @keyframes insPaneIn {
            from { opacity: 0; transform: translateY(0.5rem); }
            to { opacity: 1; transform: none; }
        }

        .ins-pane-body {
            flex: 1 1 auto;
            min-height: 0;
            overflow: auto;
            overscroll-behavior: contain;
            scrollbar-width: thin;
            padding: 1.5rem 1.75rem;
        }

        .ins-pane-body::-webkit-scrollbar {
            width: 0.5rem;
            height: 0.5rem;
        }

        .ins-pane-body::-webkit-scrollbar-thumb {
            background-color: var(--color-scrollbar-thumb);
            border-radius: var(--size-radius-full);
        }

        .ins-pane-foot {
            flex: none;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.75rem;
            padding: 1rem 1.75rem;
            border-top: 1px solid var(--color-body-line);
            background-color: var(--color-content-bg);
        }

        /* ---------- buttons ---------- */
        .ins-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.375rem;
            min-width: 6rem;
            height: 2.5rem;
            padding: 0 1.125rem;
            border: 1px solid var(--color-body-line);
            border-radius: var(--size-radius-sm);
            background-color: var(--color-content-bg);
            color: var(--color-body-block);
            font-family: inherit;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.2s var(--ease-out), border-color 0.2s var(--ease-out),
                color 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
        }

        .ins-btn .iconfont {
            font-size: 0.8125rem;
        }

        .ins-btn:hover {
            border-color: var(--color-tertiary-light);
            background-color: var(--color-body-block-bg);
            color: var(--color-heading);
        }

        .ins-btn.is-primary {
            border-color: var(--color-primary);
            background-color: var(--color-primary);
            color: var(--color-text-reverse);
        }

        .ins-btn.is-primary:hover {
            border-color: var(--color-primary-dark);
            background-color: var(--color-primary-dark);
            color: var(--color-text-reverse);
            box-shadow: 0 0 0 0.25rem var(--color-primary-soft);
        }

        .ins-btn:focus-visible,
        .ins-input:focus-visible {
            outline: none;
            box-shadow: 0 0 0 0.1875rem var(--color-focus-ring);
        }

        .ins-step:focus-visible,
        .ins-rail-link:focus-visible {
            outline: none;
            border-radius: var(--size-radius-xs);
            box-shadow: 0 0 0 0.125rem var(--color-content-bg), 0 0 0 0.25rem var(--color-primary);
        }

        /* ---------- foot groups ---------- */
        .ins-foot-info {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-right: auto;
            min-width: 0;
            font-size: 0.75rem;
            color: var(--color-tertiary);
        }

        .ins-foot-actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.625rem;
            margin-left: auto;
        }

        .ins-foot-msg {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--color-tertiary);
        }

        .ins-foot-msg.is-error {
            color: var(--color-danger-dark);
        }

        .ins-chip {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            height: 1.75rem;
            padding: 0 0.625rem;
            border-radius: var(--size-radius-full);
            font-size: 0.75rem;
            font-weight: 500;
            white-space: nowrap;
        }

        .ins-chip b {
            font-family: var(--font-family-mono);
            font-size: 0.8125rem;
        }

        .ins-chip.is-ok {
            background-color: var(--color-success-light);
            color: var(--color-success-dark);
        }

        .ins-chip.is-error {
            background-color: var(--color-danger-light);
            color: var(--color-danger-dark);
        }

        /* ---------- check readout ---------- */
        .ins-checks {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
            gap: 0.375rem;
        }

        .ins-check-wide {
            grid-column: 1 / -1;
        }

        .ins-checks + .ins-check-wide,
        .ins-check-wide + .ins-check-wide {
            margin-top: 0.375rem;
        }

        .ins-check-wide + .ins-checks {
            margin-top: 0.5rem;
        }

        .ins-check-wide .status + .status {
            margin-top: 0.375rem;
        }

        .ins-check {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-width: 0;
            padding: 0.375rem 0.75rem;
            border: 1px solid var(--color-body-line);
            border-radius: var(--size-radius-sm);
            background-color: var(--color-body-block-bg);
            font-size: 0.8125rem;
            color: var(--color-text);
        }

        .ins-check .iconfont {
            flex: none;
            font-size: 0.9375rem;
            color: var(--color-muted);
        }

        .ins-check-text {
            min-width: 0;
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        .ins-check.is-ok .iconfont {
            color: var(--color-success-dark);
        }

        .ins-check.is-error {
            border-color: var(--color-danger);
            background-color: var(--color-danger-light);
            color: var(--color-danger-dark);
            font-weight: 500;
        }

        .ins-check.is-error .iconfont {
            color: var(--color-danger);
        }

        .ins-check.is-warning {
            border-color: var(--color-warning);
            background-color: var(--color-warning-light);
            color: var(--color-warning-dark);
        }

        .ins-check.is-warning .iconfont {
            color: var(--color-warning);
        }

        .ins-check.is-pending .iconfont {
            color: var(--color-tertiary);
            animation: insSpin 0.9s linear infinite;
        }

        @keyframes insSpin {
            to { transform: rotate(360deg); }
        }

        .ins-check-link {
            flex: none;
            margin-left: auto;
            font-size: 0.75rem;
            color: var(--color-link);
            text-decoration: none;
            white-space: nowrap;
        }

        .ins-check-link:hover {
            color: var(--color-link-hover);
            text-decoration: underline;
        }

        .ins-hint {
            padding: 0.625rem 0.75rem;
            border: 1px solid var(--color-warning);
            border-radius: var(--size-radius-sm);
            background-color: var(--color-warning-light);
            font-size: 0.8125rem;
            line-height: 1.65;
            color: var(--color-warning-dark);
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        .ins-code {
            padding: 0.0625rem 0.3125rem;
            border-radius: var(--size-radius-xs);
            background-color: var(--color-body-block-bg);
            font-family: var(--font-family-mono);
            font-size: 0.75rem;
            color: var(--color-heading);
        }

        /* ---------- license document ---------- */
        .ins-doc {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid var(--color-body-line);
            border-radius: var(--size-radius);
            background-color: var(--color-content-bg);
        }

        .ins-doc-head {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.625rem 0.875rem;
            border-bottom: 1px solid var(--color-body-line);
            background-color: var(--color-body-block-bg);
            font-size: 0.75rem;
            color: var(--color-tertiary);
        }

        .ins-doc-head .iconfont {
            color: var(--color-primary);
        }

        .ins-doc-title {
            font-weight: 600;
            color: var(--color-heading);
        }

        .ins-doc-head .ins-check-link {
            font-size: 0.75rem;
        }

        .ins-doc iframe {
            display: block;
            width: 100%;
            height: clamp(16rem, 40vh, 27rem);
            border: 0;
            background-color: var(--color-content-bg);
        }

        .ins-doc-notice {
            margin-top: 1rem;
        }

        .ins-alert {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            padding: 0.625rem 0.75rem;
            border-radius: var(--size-radius-sm);
            font-size: 0.75rem;
            line-height: 1.65;
        }

        .ins-alert .iconfont {
            flex: none;
            margin-top: 0.125rem;
        }

        .ins-alert.is-danger {
            background-color: var(--color-danger-light);
            color: var(--color-danger-dark);
        }

        .ins-checkbox {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8125rem;
            color: var(--color-text);
            cursor: pointer;
            user-select: none;
        }

        .ins-checkbox input {
            flex: none;
            width: 1rem;
            height: 1rem;
            margin: 0;
            accent-color: var(--color-primary);
            cursor: pointer;
        }

        /* ---------- form ---------- */
        .ins-section {
            overflow: hidden;
            border: 1px solid var(--color-body-line);
            border-radius: var(--size-radius);
            background-color: var(--color-content-bg);
        }

        .ins-section + .ins-section {
            margin-top: 1rem;
        }

        .ins-section-head {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--color-body-line);
            background-color: var(--color-body-block-bg);
            font-size: 0.8125rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .ins-section-head .iconfont {
            font-size: 0.875rem;
            color: var(--color-primary);
        }

        .ins-section-head-note {
            margin-left: auto;
            font-size: 0.75rem;
            font-weight: 400;
            color: var(--color-tertiary);
        }

        .ins-section-body {
            padding: 1rem;
        }

        .ins-fields {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
            gap: 0.875rem 1rem;
        }

        .ins-field {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            min-width: 0;
        }

        .ins-field-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--color-body-block);
        }

        .ins-field-label .ins-req {
            margin-right: 0.125rem;
            color: var(--color-danger);
        }

        .ins-input {
            width: 100%;
            height: 2.5rem;
            padding: 0 0.75rem;
            border: 1px solid var(--color-body-line);
            border-radius: var(--size-radius-sm);
            background-color: var(--color-input-light-bg);
            font-family: inherit;
            font-size: 0.8125rem;
            color: var(--color-text);
            transition: border-color 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
        }

        .ins-input::placeholder {
            color: var(--color-input-placeholder);
        }

        .ins-input:hover {
            border-color: var(--color-tertiary-light);
        }

        .ins-input:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 0.1875rem var(--color-focus-ring);
        }

        .ins-field-help {
            font-size: 0.6875rem;
            line-height: 1.55;
            color: var(--color-tertiary);
            overflow-wrap: anywhere;
            word-break: break-word;
        }

        /* ---------- already installed ---------- */
        .ins-done {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.875rem;
            padding: 3rem 1.75rem;
            text-align: center;
        }

        .ins-done-icon {
            display: grid;
            place-items: center;
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
            background-color: var(--color-primary-light-bg);
            color: var(--color-primary);
            font-size: 2rem;
        }

        .ins-done-title {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--color-heading);
        }

        .ins-done-desc {
            max-width: 26rem;
            margin: 0;
            font-size: 0.8125rem;
            line-height: 1.7;
            color: var(--color-tertiary);
        }

        .ins-done-code {
            font-family: var(--font-family-mono);
            font-size: 0.75rem;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 60rem) {
            .ins {
                padding: 0;
                align-items: stretch;
            }

            .ins-shell {
                max-width: none;
                height: auto;
                min-height: 100vh;
                min-height: 100dvh;
                grid-template-columns: minmax(0, 1fr);
                grid-template-rows: auto 1fr;
                align-content: start;
                border-radius: 0;
                box-shadow: none;
                overflow: visible;
            }

            .ins-rail {
                gap: 0.875rem;
                padding: 1.125rem 1.25rem 0.875rem;
                border-right: 0;
                border-bottom: 1px solid var(--color-body-line);
            }

            .ins-rail::before {
                top: -45%;
                left: -30%;
                width: 18rem;
                height: 18rem;
            }

            .ins-steps {
                flex-direction: row;
                gap: 0.25rem;
                max-width: 34rem;
                border-top: 1px solid var(--color-body-line);
                padding-top: 0.875rem;
            }

            .ins-step {
                flex: 1 1 0;
                min-width: 0;
                min-height: 2.75rem;
                grid-template-columns: 1.75rem minmax(0, 1fr);
                gap: 0.5rem;
                align-items: center;
                padding: 0.25rem 0;
            }

            .ins-step-idx {
                width: 1.75rem;
                height: 1.75rem;
                font-size: 0.6875rem;
            }

            .ins-step::after {
                display: none;
            }

            .ins-step-title {
                font-size: 0.8125rem;
            }

            .ins-step-desc {
                display: none;
            }

            .ins-rail-foot {
                padding-top: 0.875rem;
            }

            .ins-content {
                display: block;
                overflow: visible;
            }

            .ins-pane {
                flex: none;
                min-height: 0;
            }

            .ins-pane-body {
                overflow: visible;
                padding: 1.25rem;
            }

            .ins-main-head {
                padding: 1.125rem 1.25rem 1rem;
            }

            .ins-pane-foot {
                position: sticky;
                bottom: 0;
                padding: 0.875rem 1.25rem;
                padding-bottom: calc(0.875rem + env(safe-area-inset-bottom, 0px));
            }

            .ins-btn {
                height: 2.75rem;
            }

            .ins-checkbox {
                min-height: 2.75rem;
            }

            .ins-check-link {
                padding: 0.5rem 0;
            }

            .ins-doc iframe {
                height: clamp(12rem, 30vh, 18rem);
            }
        }

        /* real narrow phones: single column readout */
        @media (max-width: 34rem) {
            .ins-checks {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        @media (max-width: 30rem) {
            .ins-brand-name {
                font-size: 1rem;
            }

            .ins-pane-foot .ins-btn {
                flex: 1 1 auto;
            }

            .ins-foot-actions {
                width: 100%;
            }
        }

        /* stacked layout on short viewports (phone landscape): compress the rail and keep the console inside the fold */
        @media (max-width: 60rem) and (max-height: 32rem) {
            .ins-shell {
                height: 100vh;
                height: 100dvh;
                min-height: 0;
                overflow: hidden;
            }

            .ins-rail {
                gap: 0.5rem;
                padding: 0.625rem 1rem 0.5rem;
            }

            .ins-brand-mark {
                width: 2rem;
                height: 2rem;
                font-size: 1rem;
            }

            .ins-brand-name {
                font-size: 1rem;
            }

            .ins-brand-meta,
            .ins-rail-note,
            .ins-rail-foot {
                display: none;
            }

            .ins-steps {
                padding-top: 0.5rem;
            }

            .ins-main-head {
                padding: 0.75rem 1rem 0.625rem;
            }

            .ins-eyebrow {
                margin-bottom: 0.25rem;
            }

            .ins-title {
                font-size: 1.125rem;
            }

            .ins-lead {
                display: none;
            }

            .ins-content {
                display: flex;
                overflow: hidden;
            }

            .ins-pane {
                flex: 1 1 auto;
            }

            .ins-pane-body {
                overflow: auto;
                padding: 0.875rem 1rem;
            }

            .ins-pane-foot {
                position: static;
                padding: 0.5rem 1rem;
                padding-bottom: calc(0.5rem + env(safe-area-inset-bottom, 0px));
            }
        }

        /* short viewports (laptops in landscape): keep the console inside the fold */
        @media (min-width: 60.0625rem) and (max-height: 42rem) {
            .ins {
                padding: 0.75rem 1.25rem;
            }

            .ins-shell {
                height: calc(100vh - 1.5rem);
            }

            .ins-main-head {
                padding: 1rem 1.75rem 0.875rem;
            }

            .ins-pane-body {
                padding: 1.125rem 1.75rem;
            }

            .ins-pane-foot {
                padding: 0.75rem 1.75rem;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .ins-shell,
            .ins-pane.is-active,
            .ins-check.is-pending .iconfont {
                animation: none;
            }

            .ins, .ins * {
                transition-duration: 0.001ms !important;
            }
        }
    </style>
</head>
<body>
<div class="ins">
    <div class="ins-bg" aria-hidden="true"></div>

    <?php if ($installLocked) { ?>
        <div class="ins-shell">
            <aside class="ins-rail">
                <div class="ins-brand">
                    <span class="ins-brand-mark"><i class="iconfont icon-cube" aria-hidden="true"></i></span>
                    <div class="ins-brand-text">
                        <div class="ins-brand-name"><?php echo htmlspecialchars(INSTALL_APP_NAME); ?></div>
                        <div class="ins-brand-meta"><span class="ins-mono">V<?php echo htmlspecialchars(INSTALL_APP_VERSION); ?></span> · 安装向导</div>
                    </div>
                </div>
                <div class="ins-rail-foot">
                    <div class="ins-rail-note">
                        <i class="iconfont icon-shield-check" aria-hidden="true"></i>
                        <span>安装已完成，为保证数据安全，请勿重复执行安装程序。</span>
                    </div>
                    <a class="ins-rail-link" href="https://modstart.com/doc/install/start.html" target="_blank" rel="noopener">
                        查看安装文档 <i class="iconfont icon-angle-right" aria-hidden="true"></i>
                    </a>
                </div>
            </aside>
            <main class="ins-main">
                <div class="ins-watermark" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="insWatermark" width="320" height="320" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                                <text x="160" y="160" font-size="13" text-anchor="middle" dominant-baseline="middle" fill="currentColor"><?php echo htmlspecialchars($appTitle, ENT_QUOTES, 'UTF-8'); ?></text>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#insWatermark)"></rect>
                    </svg>
                </div>
                <div class="ins-done">
                    <div class="ins-done-icon"><i class="iconfont icon-shield-check" aria-hidden="true"></i></div>
                    <h1 class="ins-done-title">系统无需重复安装</h1>
                    <p class="ins-done-desc">
                        当前系统已经完成安装。如需重新安装，请先删除服务器上的
                        <span class="ins-mono ins-done-code">storage/install.lock</span> 文件后刷新本页面。
                    </p>
                </div>
            </main>
        </div>
    <?php } else { ?>
        <div class="ins-shell">
            <aside class="ins-rail">
                <div class="ins-brand">
                    <span class="ins-brand-mark"><i class="iconfont icon-cube" aria-hidden="true"></i></span>
                    <div class="ins-brand-text">
                        <div class="ins-brand-name"><?php echo htmlspecialchars(INSTALL_APP_NAME); ?></div>
                        <div class="ins-brand-meta"><span class="ins-mono">V<?php echo htmlspecialchars(INSTALL_APP_VERSION); ?></span> · 安装向导</div>
                    </div>
                </div>

                <nav class="ins-steps" aria-label="安装步骤">
                    <?php foreach ($stepList as $stepIndex => $stepItem) { ?>
                        <?php $isActive = $stepIndex === $initialIndex; ?>
                        <?php $isDone = $stepIndex < $initialIndex; ?>
                        <button type="button"
                                class="ins-step<?php if ($isActive) { echo ' is-active'; } elseif ($isDone) { echo ' is-done'; } ?>"
                                data-goto="<?php echo $stepItem['step']; ?>"
                                data-step="<?php echo $stepItem['step']; ?>"
                                <?php if (!$isDone) { echo 'disabled'; } ?>
                                <?php if ($isActive) { echo 'aria-current="step"'; } ?>>
                            <span class="ins-step-idx">
                                <span class="ins-step-num ins-mono"><?php echo sprintf('%02d', $stepIndex + 1); ?></span>
                                <i class="iconfont icon-check ins-step-tick" aria-hidden="true"></i>
                            </span>
                            <span>
                                <span class="ins-step-title"><?php echo htmlspecialchars($stepItem['title']); ?></span>
                                <span class="ins-step-desc"><?php echo htmlspecialchars($stepItem['desc']); ?></span>
                            </span>
                        </button>
                    <?php } ?>
                </nav>

                <div class="ins-rail-foot">
                    <div class="ins-rail-note">
                        <i class="iconfont icon-shield-check" aria-hidden="true"></i>
                        <span>安装在本机完成，不会上传服务器信息。</span>
                    </div>
                    <a class="ins-rail-link" href="https://modstart.com/doc/install/start.html" target="_blank" rel="noopener">
                        查看安装文档 <i class="iconfont icon-angle-right" aria-hidden="true"></i>
                    </a>
                </div>
            </aside>

            <main class="ins-main">
                <div class="ins-watermark" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="insWatermark" width="320" height="320" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                                <text x="160" y="160" font-size="13" text-anchor="middle" dominant-baseline="middle" fill="currentColor"><?php echo htmlspecialchars($appTitle, ENT_QUOTES, 'UTF-8'); ?></text>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#insWatermark)"></rect>
                    </svg>
                </div>

                <header class="ins-main-head">
                    <p class="ins-eyebrow">
                        <span class="ins-eyebrow-dot" aria-hidden="true"></span>
                        <span>安装向导</span>
                        <span data-step-progress class="ins-mono">STEP <?php echo sprintf('%02d', $initialIndex + 1); ?> / <?php echo sprintf('%02d', $stepCount); ?></span>
                    </p>
                    <h1 class="ins-title" data-step-title tabindex="-1"><?php echo htmlspecialchars($initialMeta['title']); ?></h1>
                    <p class="ins-lead" data-step-lead><?php echo htmlspecialchars($initialMeta['lead']); ?></p>
                    <div class="ins-progress" role="presentation"><span class="ins-progress-bar" data-step-bar></span></div>
                </header>

                <div class="ins-content" data-step-scroll>
                    <?php if ($hasLicense) { ?>
                        <section class="ins-pane<?php if ('license' === $initialStep) { echo ' is-active'; } ?>"
                                 data-step="license"
                                 data-title="<?php echo htmlspecialchars($stepList[0]['title']); ?>"
                                 data-lead="<?php echo htmlspecialchars($stepList[0]['lead']); ?>">
                            <div class="ins-pane-body">
                                <div class="ins-doc">
                                    <div class="ins-doc-head">
                                        <i class="iconfont icon-file" aria-hidden="true"></i>
                                        <span class="ins-doc-title">软件安装许可协议</span>
                                        <a class="ins-check-link" href="<?php echo htmlspecialchars(LICENSE_URL); ?>" target="_blank" rel="noopener">在新窗口打开</a>
                                    </div>
                                    <iframe src="<?php echo htmlspecialchars(LICENSE_URL); ?>" title="软件安装许可协议"></iframe>
                                </div>
                                <div class="ins-alert is-danger ins-doc-notice">
                                    <i class="iconfont icon-warning" aria-hidden="true"></i>
                                    <span>禁止使用本产品进行违法违规业务，我们将对违规使用者停止授权并永久封停账号。</span>
                                </div>
                            </div>
                            <div class="ins-pane-foot">
                                <div class="ins-foot-info">
                                    <label class="ins-checkbox">
                                        <input type="checkbox" name="installLicense" value="1"/>
                                        <span>我已阅读并同意《软件安装许可协议》的全部内容</span>
                                    </label>
                                </div>
                                <div class="ins-foot-actions">
                                    <button type="button" class="ins-btn is-primary" onclick="doStepEnv()">
                                        同意并继续 <i class="iconfont icon-angle-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </section>
                    <?php } ?>

                    <section class="ins-pane<?php if ('env' === $initialStep) { echo ' is-active'; } ?>"
                             data-step="env"
                             data-title="<?php echo htmlspecialchars($stepList[$hasLicense ? 1 : 0]['title']); ?>"
                             data-lead="<?php echo htmlspecialchars($stepList[$hasLicense ? 1 : 0]['lead']); ?>">
                        <div class="ins-pane-body">
                            <?php echo $envCheckHtml; ?>
                        </div>
                        <div class="ins-pane-foot">
                            <div class="ins-foot-info" role="status" aria-live="polite">
                                <span class="ins-chip is-ok" data-check-ok><i class="iconfont icon-check" aria-hidden="true"></i><b data-check-ok-n><?php echo $envOkPendingCount; ?></b> 项通过</span>
                                <span class="ins-chip is-error" data-check-error<?php if ($envErrorCount == 0) { echo ' style="display:none;"'; } ?>><i class="iconfont icon-close" aria-hidden="true"></i><b data-check-error-n><?php echo $envErrorCount; ?></b> 项需处理</span>
                                <?php if ($envErrorCount > 0) { ?>
                                    <span class="ins-foot-msg is-error">请解决以上问题后再进行安装</span>
                                <?php } elseif (!$envWritable) { ?>
                                    <span class="ins-foot-msg is-error">/.env 文件不可写，请手动配置安装</span>
                                <?php } else { ?>
                                    <span class="ins-foot-msg" data-rewrite-pending>
                                        <i class="iconfont icon-loading" aria-hidden="true"></i> 正在检测 Rewrite 规则…
                                    </span>
                                    <span class="ins-foot-msg is-error" data-rewrite-failed style="display:none;">
                                        Rewrite 规则未通过，请按上方提示处理后刷新页面
                                    </span>
                                <?php } ?>
                            </div>
                            <div class="ins-foot-actions">
                                <?php if ($hasLicense) { ?>
                                    <button type="button" class="ins-btn" onclick="switch_step('license')">上一步</button>
                                <?php } ?>
                                <?php if ($envErrorCount == 0 && $envWritable) { ?>
                                    <button type="button" class="ins-btn is-primary" data-step-env-next style="display:none;" onclick="switch_step('form')">
                                        下一步 <i class="iconfont icon-angle-right" aria-hidden="true"></i>
                                    </button>
                                <?php } ?>
                            </div>
                        </div>
                    </section>

                    <section class="ins-pane ub-form<?php if ('form' === $initialStep) { echo ' is-active'; } ?>"
                             data-step="form"
                             data-title="<?php echo htmlspecialchars($stepList[$stepCount - 1]['title']); ?>"
                             data-lead="<?php echo htmlspecialchars($stepList[$stepCount - 1]['lead']); ?>">
                        <div class="ins-pane-body">
                            <div class="ins-section">
                                <div class="ins-section-head">
                                    <i class="iconfont icon-credit" aria-hidden="true"></i>
                                    MySQL 数据库
                                </div>
                                <div class="ins-section-body">
                                    <div class="ins-fields">
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insDbHost"><span class="ins-req">*</span>主机</label>
                                            <input class="ins-input" id="insDbHost" type="text" name="db_host"
                                                   value="<?php echo htmlspecialchars(get_env_config('db_host')); ?>"/>
                                        </div>
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insDbPort"><span class="ins-req">*</span>端口</label>
                                            <input class="ins-input" id="insDbPort" type="text" name="db_port"
                                                   value="<?php echo htmlspecialchars(get_env_config('db_port')); ?>"/>
                                        </div>
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insDbName"><span class="ins-req">*</span>数据库名</label>
                                            <input class="ins-input" id="insDbName" type="text" name="db_database"
                                                   value="<?php echo htmlspecialchars(get_env_config('db_name')); ?>"/>
                                        </div>
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insDbUser"><span class="ins-req">*</span>用户名</label>
                                            <input class="ins-input" id="insDbUser" type="text" name="db_username"
                                                   value="<?php echo htmlspecialchars(get_env_config('db_username')); ?>"/>
                                        </div>
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insDbPassword"><span class="ins-req">*</span>密码</label>
                                            <input class="ins-input" id="insDbPassword" type="text" name="db_password"
                                                   value="<?php echo htmlspecialchars(get_env_config('db_password')); ?>"/>
                                        </div>
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insDbPrefix">数据表前缀</label>
                                            <input class="ins-input" id="insDbPrefix" type="text" name="db_prefix"
                                                   value="<?php echo htmlspecialchars(get_env_config('db_prefix')); ?>"/>
                                            <span class="ins-field-help">留空使用默认前缀，多个站点共用数据库时建议填写</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <?php if (!empty($INSTALL_CONFIG)) { ?>
                                <div class="ins-section">
                                    <div class="ins-section-head">
                                        <i class="iconfont icon-cog" aria-hidden="true"></i>
                                        应用配置信息
                                    </div>
                                    <div class="ins-section-body">
                                        <?php if (!empty($INSTALL_CONFIG['envs'])) { ?>
                                            <div class="ins-fields">
                                                <?php foreach ($INSTALL_CONFIG['envs'] as $envField) { ?>
                                                    <div class="ins-field">
                                                        <label class="ins-field-label" for="insEnv<?php echo htmlspecialchars($envField['name']); ?>"><span class="ins-req">*</span><?php echo htmlspecialchars($envField['label']); ?></label>
                                                        <input class="ins-input" id="insEnv<?php echo htmlspecialchars($envField['name']); ?>" type="text"
                                                               name="<?php echo htmlspecialchars($envField['name']); ?>"
                                                               value="<?php echo htmlspecialchars($envField['default']); ?>"/>
                                                        <span class="ins-field-help"><?php echo $envField['desc']; ?></span>
                                                    </div>
                                                <?php } ?>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            <?php } ?>

                            <div class="ins-section">
                                <div class="ins-section-head">
                                    <i class="iconfont icon-user-o" aria-hidden="true"></i>
                                    后台管理信息
                                    <span class="ins-section-head-note">用于登录后台管理系统</span>
                                </div>
                                <div class="ins-section-body">
                                    <div class="ins-fields">
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insAdminUser"><span class="ins-req">*</span>用户</label>
                                            <input class="ins-input" id="insAdminUser" type="text" name="username"
                                                   value="<?php echo htmlspecialchars(get_env_config('admin_username')); ?>"/>
                                        </div>
                                        <div class="ins-field">
                                            <label class="ins-field-label" for="insAdminPassword"><span class="ins-req">*</span>密码</label>
                                            <input class="ins-input" id="insAdminPassword" type="text" name="password"
                                                   placeholder="<?php echo htmlspecialchars(get_env_config('admin_password')); ?>"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ins-pane-foot">
                            <div class="ins-foot-info">
                                <?php if (defined('DEMO_DATA')) { ?>
                                    <label class="ins-checkbox">
                                        <input type="checkbox" name="installDemo" value="1"/>
                                        <span>初始化安装演示数据</span>
                                    </label>
                                <?php } else { ?>
                                    <span>提交后将自动创建数据表并写入基础配置</span>
                                <?php } ?>
                            </div>
                            <div class="ins-foot-actions">
                                <input type="hidden" name="installLicense" value="1"/>
                                <input type="hidden" name="INSTALL_CONFIG" value="<?php echo htmlspecialchars(json_encode(isset($INSTALL_CONFIG) ? $INSTALL_CONFIG : null)); ?>"/>
                                <button type="button" class="ins-btn" onclick="switch_step('env')">上一步</button>
                                <button type="button" class="ins-btn is-primary" onclick="doSubmit();">
                                    <i class="iconfont icon-check" aria-hidden="true"></i> 确定安装
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    <?php } ?>
</div>
<script>
    var INS_STEP_ORDER = <?php echo json_encode(array_values(array_map(function ($item) {
        return $item['step'];
    }, $stepList))); ?>;

    function switch_step(name, syncOnly) {
        var $pane = $('.ins-pane[data-step=' + name + ']');
        if (!$pane.length) {
            return false;
        }
        $('.ins-pane').removeClass('is-active');
        $pane.addClass('is-active');

        var index = INS_STEP_ORDER.indexOf(name);
        $('.ins-step').each(function (i) {
            var $step = $(this);
            var active = i === index;
            var done = i < index;
            $step.toggleClass('is-active', active);
            $step.toggleClass('is-done', done);
            $step.prop('disabled', !done);
            if (active) {
                $step.attr('aria-current', 'step');
            } else {
                $step.removeAttr('aria-current');
            }
        });

        $('[data-step-title]').text($pane.data('title') || '');
        $('[data-step-lead]').text($pane.data('lead') || '');
        $('[data-step-progress]').text('STEP ' + ('0' + (index + 1)).slice(-2) + ' / ' + ('0' + INS_STEP_ORDER.length).slice(-2));
        $('[data-step-bar]').css('width', ((index + 1) / INS_STEP_ORDER.length * 100) + '%');

        if (!syncOnly) {
            $('.ins-pane-body').scrollTop(0);
            var $title = $('[data-step-title]');
            if ($title.length) {
                $title.trigger('focus');
            }
        }
        return false;
    }

    function doStepEnv() {
        if (!$('[name="installLicense"]').is(':checked')) {
            window.api.dialog.tipError('请先同意协议');
            return false;
        }
        switch_step('env');
        return false;
    }

    $(function () {
        $('.ins-step').on('click', function () {
            var $step = $(this);
            if ($step.prop('disabled')) {
                return;
            }
            switch_step($step.data('goto'));
        });

        var $rewriteCheck = $('[data-rewrite-check]');

        function rewriteCheckFailed() {
            $rewriteCheck.find('.status').hide().filter('.error').show();
            $('[data-rewrite-pending]').hide();
            $('[data-rewrite-failed]').show();
            var ok = parseInt($('[data-check-ok-n]').text(), 10) || 0;
            var error = parseInt($('[data-check-error-n]').text(), 10) || 0;
            $('[data-check-ok-n]').text(Math.max(ok - 1, 0));
            $('[data-check-error-n]').text(error + 1);
            $('[data-check-error]').show();
            if (ok <= 1) {
                $('[data-check-ok]').hide();
            }
        }

        $.ajax({
            url: '/install/ping?' + Math.random(),
            type: 'GET',
            timeout: 8000,
            success: function (data) {
                if ('ok' === data) {
                    $rewriteCheck.find('.status').hide().filter('.success').show();
                    $('[data-rewrite-pending]').hide();
                    $('[data-check-ok-n]').text((parseInt($('[data-check-ok-n]').text(), 10) || 0) + 1);
                    $('[data-step-env-next]').show();
                } else {
                    rewriteCheckFailed();
                }
            },
            error: function (data) {
                rewriteCheckFailed();
            }
        });

        window.doSubmit = function () {
            var data = {};
            var $form = $('.ub-form');
            $form.find('input[type=text],input[type=hidden]').each(function (i, o) {
                data[$(o).attr('name')] = $(o).val();
            });
            $form.find('input[type=checkbox]:checked').each(function (i, o) {
                data[$(o).attr('name')] = $(o).val();
            });
            window.api.dialog.loadingOn('正在提交表单..');
            window.api.base.post('/install/prepare', data, function (res) {
                window.api.dialog.loadingOff();
                window.api.base.defaultFormCallback(res, {
                    success: function (res) {
                        window.api.dialog.loadingOn('正在安装系统，可能需要较长时间，请耐心等待...');
                        window.api.base.post('/install/execute', data, function (res) {
                            window.api.dialog.loadingOff();
                            window.api.base.defaultFormCallback(res);
                        });
                    }
                })
            });
            return false;
        };
    });
</script>
</body>
</html>
