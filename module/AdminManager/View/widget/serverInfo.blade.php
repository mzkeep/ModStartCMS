<div class="ub-panel ub-cover">
    <div class="head">
        <div class="title">
            <i class="iconfont icon-desktop"></i>
            服务器信息
        </div>
    </div>
    <div class="body">
<?php
// Friendly names for values that are not readable to end users
$serverInfoOs = PHP_OS;
if ($serverInfoOs == 'Darwin') {
    $serverInfoOs = 'macOS（Darwin）';
} elseif ($serverInfoOs == 'WINNT') {
    $serverInfoOs = 'Windows';
}
$serverInfoRuntime = PHP_SAPI;
if (PHP_SAPI == 'fpm-fcgi') {
    $serverInfoRuntime = 'Nginx（FPM）';
} elseif (PHP_SAPI == 'cgi-fcgi') {
    $serverInfoRuntime = 'Nginx（FastCGI）';
} elseif (PHP_SAPI == 'apache2handler') {
    $serverInfoRuntime = 'Apache';
} elseif (PHP_SAPI == 'cli-server') {
    $serverInfoRuntime = 'PHP 内置服务器';
}
$serverInfoFramework = strtolower(ModStart\ModStart::env());
if (strpos($serverInfoFramework, 'laravel') === 0) {
    $serverInfoFramework = 'Laravel ' . substr($serverInfoFramework, 7);
} else {
    $serverInfoFramework = strtoupper($serverInfoFramework);
}
$serverInfoKernel = 'ModStart v' . ModStart\ModStart::$version;
if (!empty($serverInfoFramework)) {
    $serverInfoKernel .= ' · ' . $serverInfoFramework;
}
// Distribution builds append a long suffix to PHP_VERSION (e.g. 5.6.40-105+0~...),
// keep only the semantic version and leave the full string in the title attribute.
$serverInfoPhpVersion = PHP_VERSION;
$serverInfoPhpVersionFull = PHP_VERSION;
if (($serverInfoPhpVersionPos = strpos($serverInfoPhpVersion, '-')) !== false) {
    $serverInfoPhpVersion = substr($serverInfoPhpVersion, 0, $serverInfoPhpVersionPos);
}
if (($serverInfoPhpVersionPos = strpos($serverInfoPhpVersion, '+')) !== false) {
    $serverInfoPhpVersion = substr($serverInfoPhpVersion, 0, $serverInfoPhpVersionPos);
}
$serverInfoItems = array(
    array('icon' => 'icon-cube', 'label' => '系统内核', 'value' => $serverInfoKernel),
    array('icon' => 'icon-desktop', 'label' => '操作系统', 'value' => $serverInfoOs),
    array('icon' => 'icon-code', 'label' => 'PHP 版本', 'value' => 'v' . $serverInfoPhpVersion . ' · ' . (PHP_INT_SIZE == 8 ? '64' : '32') . ' 位', 'valueTitle' => $serverInfoPhpVersionFull),
    array('icon' => 'icon-pc', 'label' => '运行环境', 'value' => $serverInfoRuntime),
    array('icon' => 'icon-tools', 'label' => '内存限制', 'value' => @ini_get('memory_limit')),
    array('icon' => 'icon-language', 'label' => '服务器时区', 'value' => date_default_timezone_get()),
    array('icon' => 'icon-time', 'label' => '服务器时间', 'value' => date('Y-m-d H:i:s'), 'valueAttr' => 'data-server-time'),
);
// Friendly labels instead of raw php.ini keys
$serverInfoParams = array(
    array('label' => '上传大小', 'key' => 'upload_max_filesize'),
    array('label' => 'POST 大小', 'key' => 'post_max_size'),
    array('label' => '上传文件数', 'key' => 'max_file_uploads'),
);
?>
        <div class="tw-px-2">
            <div class="tw-flex tw-items-start tw-py-2"
                 style="border-bottom:1px solid var(--color-body-line);">
                <div class="tw-w-28 tw-flex-shrink-0 tw-flex tw-items-center tw-font-medium"
                     style="color:var(--color-heading);">
                    <i class="iconfont icon-shield-check ub-text-muted tw-mr-2"></i>
                    安全公告
                </div>
                <div class="tw-flex-1 tw-min-w-0 tw-break-words tw-leading-6" data-system-notice>
                    <span class="tw-inline-flex tw-items-center" style="gap:.25rem;color:var(--color-success);">
                        <i class="iconfont icon-check-simple"></i>
                        无异常
                    </span>
                </div>
            </div>
            <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-x-6 tw-pt-2">
                @foreach($serverInfoItems as $serverInfoItem)
                    <div class="tw-flex tw-items-start tw-py-1">
                        <div class="tw-w-28 tw-flex-shrink-0 tw-flex tw-items-center tw-font-medium"
                             style="color:var(--color-heading);">
                            <i class="iconfont {{$serverInfoItem['icon']}} ub-text-muted tw-mr-2"></i>
                            {{$serverInfoItem['label']}}
                        </div>
                        <div class="tw-flex-1 tw-min-w-0 tw-break-words tw-leading-6 tw-tabular-nums"
                             style="color:var(--color-text);" {{ isset($serverInfoItem['valueAttr']) ? $serverInfoItem['valueAttr'] : '' }} @if(!empty($serverInfoItem['valueTitle'])) title="{{$serverInfoItem['valueTitle']}}" @endif>{{$serverInfoItem['value']}}</div>
                    </div>
                @endforeach
            </div>
            <div class="tw-flex tw-items-start tw-py-1 tw-mt-1">
                <div class="tw-w-28 tw-flex-shrink-0 tw-flex tw-items-center tw-font-medium"
                     style="color:var(--color-heading);">
                    <i class="iconfont icon-list ub-text-muted tw-mr-2"></i>
                    服务器参数
                </div>
                <div class="tw-flex-1 tw-min-w-0 tw-flex tw-flex-wrap" style="gap:.5rem;">
                    @foreach($serverInfoParams as $serverInfoParam)
                        <span class="ub-tag tw-inline-flex tw-items-center tw-tabular-nums">
                            {{$serverInfoParam['label']}}
                            <b class="tw-ml-1" style="color:var(--color-heading);">{{@ini_get($serverInfoParam['key'])}}</b>
                        </span>
                    @endforeach
                </div>
            </div>
        </div>
        <script type="text/javascript">
            // 请勿删除，用于获取最新的安全通告（比如框架、模块有重大缺陷的应急通知等）
            $('body').append('<script src="https://modstart.com/api/modstart/notice?modules={{urlencode($modules)}}&t={{date('YmdH')}}"><' + '/script>');
            $(function(){
                var $serverTime = $('[data-server-time]');
                var timeDiff = {{time()*1000}} - (new Date()).getTime();
                function serverInfoPad(n) {
                    return n < 10 ? '0' + n : '' + n;
                }
                function serverInfoFormat(date) {
                    return date.getFullYear() + '-' + serverInfoPad(date.getMonth() + 1) + '-' + serverInfoPad(date.getDate())
                        + ' ' + serverInfoPad(date.getHours()) + ':' + serverInfoPad(date.getMinutes()) + ':' + serverInfoPad(date.getSeconds());
                }
                function serverInfoTick() {
                    $serverTime.text(serverInfoFormat(new Date((new Date()).getTime() + timeDiff)));
                }
                serverInfoTick();
                setInterval(serverInfoTick, 1000);
            });
        </script>
    </div>
</div>
