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
$serverInfoItems = array(
    array('icon' => 'icon-cube', 'label' => '系统内核', 'value' => $serverInfoKernel),
    array('icon' => 'icon-desktop', 'label' => '操作系统', 'value' => $serverInfoOs),
    array('icon' => 'icon-code', 'label' => 'PHP 版本', 'value' => 'v' . PHP_VERSION . ' · ' . (PHP_INT_SIZE == 8 ? '64' : '32') . ' 位'),
    array('icon' => 'icon-pc', 'label' => '运行环境', 'value' => $serverInfoRuntime),
    array('icon' => 'icon-tools', 'label' => '内存限制', 'value' => @ini_get('memory_limit')),
    array('icon' => 'icon-language', 'label' => '服务器时区', 'value' => date_default_timezone_get()),
    array('icon' => 'icon-time', 'label' => '服务器时间', 'value' => date('Y-m-d H:i:s'), 'valueAttr' => 'data-server-time'),
);
?>
        <div class="tw-p-2">
            <div class="tw-flex tw-items-start tw-py-1">
                <div class="tw-w-28 tw-flex-shrink-0 tw-flex tw-items-center tw-font-bold">
                    <i class="iconfont icon-bell ub-text-muted tw-mr-2"></i>
                    安全公告
                </div>
                <div class="tw-flex-1 tw-min-w-0 tw-break-words tw-leading-6" data-system-notice>
                    <span class="ub-text-muted"><i class="iconfont icon-checked"></i> 暂无公告</span>
                </div>
            </div>
            <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-x-6">
                @foreach($serverInfoItems as $serverInfoItem)
                    <div class="tw-flex tw-items-start tw-py-1">
                        <div class="tw-w-28 tw-flex-shrink-0 tw-flex tw-items-center tw-font-bold">
                            <i class="iconfont {{$serverInfoItem['icon']}} ub-text-muted tw-mr-2"></i>
                            {{$serverInfoItem['label']}}
                        </div>
                        <div class="tw-flex-1 tw-min-w-0 tw-break-words tw-leading-6 tw-tabular-nums" {{ isset($serverInfoItem['valueAttr']) ? $serverInfoItem['valueAttr'] : '' }}>{{$serverInfoItem['value']}}</div>
                    </div>
                @endforeach
            </div>
            <div class="tw-flex tw-items-start tw-py-1">
                <div class="tw-w-28 tw-flex-shrink-0 tw-flex tw-items-center tw-font-bold">
                    <i class="iconfont icon-list ub-text-muted tw-mr-2"></i>
                    服务器参数
                </div>
                <div class="tw-flex-1 tw-min-w-0">
                    <span class="ub-tag tw-mr-2 tw-mb-1 tw-tabular-nums">upload_max_filesize <b class="tw-ml-1">{{@ini_get('upload_max_filesize')}}</b></span>
                    <span class="ub-tag tw-mr-2 tw-mb-1 tw-tabular-nums">post_max_size <b class="tw-ml-1">{{@ini_get('post_max_size')}}</b></span>
                    <span class="ub-tag tw-mr-2 tw-mb-1 tw-tabular-nums">max_file_uploads <b class="tw-ml-1">{{@ini_get('max_file_uploads')}}</b></span>
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
