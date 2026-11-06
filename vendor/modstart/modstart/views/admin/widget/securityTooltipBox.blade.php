<?php
// Collect every security warning first, so they can be rendered as one
// collapsible bar instead of stacking several full-height alerts on the page.
$securityItems = array();
if (!file_exists(storage_path('install.lock'))) {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('SystemInstallLockMissing'),
        'mode' => 'ajax',
        'url' => action('\ModStart\Admin\Controller\SystemController@securityFix', array('type' => 'installLock')),
        'label' => L('ProcessNow'),
    );
}
if (file_exists(public_path('install.php'))) {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('InstallPhpNotDeleted'),
        'mode' => 'ajax',
        'url' => action('\ModStart\Admin\Controller\SystemController@securityFix', array('type' => 'installScript')),
        'label' => L('ProcessNow'),
    );
}
if (config('env.APP_DEBUG', false)) {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('SystemInDebugMode'),
        'mode' => 'ajax',
        'url' => action('\ModStart\Admin\Controller\SystemController@securityFix', array('type' => 'appDebug')),
        'label' => L('ProcessNow'),
    );
}
if (in_array(config('env.ADMIN_PATH'), array('/admin/'))) {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('AdminUrlEasyToAttack'),
        'mode' => 'dialog',
        'url' => action('\ModStart\Admin\Controller\SystemController@securityFix', array('type' => 'adminPath')),
        'label' => L('ProcessNow'),
    );
}
if (\Illuminate\Support\Facades\Session::get('_adminUserPasswordWeak', false)) {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('PasswordIsWeak'),
        'mode' => 'link',
        'url' => action('\ModStart\Admin\Controller\ProfileController@changePassword'),
        'label' => L('ProcessNow'),
    );
}
if (config('env.APP_KEY') == 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('IsDefault', 'APP_KEY'),
    );
}
if (config('env.ENCRYPT_KEY') == 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') {
    $securityItems[] = array(
        'text' => L('SecurityWarning') . ': ' . L('IsDefault', 'ENCRYPT_KEY'),
    );
}
$securityItemCount = count($securityItems);
?>
<div {!! $attributes !!}>
    <div class="ub-alert danger tw-hidden" data-system-notice></div>
    @if($queueDelaySize>0)
        <div class="ub-alert danger" style="padding:.5rem .75rem;">
            <i class="iconfont icon-warning"></i>
            {{L('SystemWarning')}}: {{ L('QueuePendingJobs',$queueDelaySize) }}
            <a href="https://modstart.com/doc" target="_blank" rel="noreferrer">{{L('ViewNow')}}</a>
        </div>
    @endif
    @if($scheduleRunLastRun < time() - 24*3600)
        <div class="ub-alert danger" style="padding:.5rem .75rem;">
            <i class="iconfont icon-warning"></i>
            {{L('SystemWarning')}}: {{ L('ScheduleTasksNotRun') }}
            ( {{date('Y-m-d H:i:s',$scheduleRunLastRun)}} )
            <a href="https://modstart.com/doc" target="_blank" rel="noreferrer">{{L('ViewNow')}}</a>
        </div>
    @endif
    @if (\ModStart\Admin\Auth\AdminPermission::isDemo())
        <div class="ub-alert danger" style="padding:.5rem .75rem;">
            <i class="iconfont icon-warning"></i>
            {{ L('DemoUserForbidden') }}
        </div>
    @endif
    @if($securityItemCount == 1)
        <div class="ub-alert warning" style="padding:.5rem .75rem;">
            <i class="iconfont icon-warning"></i>
            {{ $securityItems[0]['text'] }}
            @if(!empty($securityItems[0]['mode']))
                @if($securityItems[0]['mode'] == 'ajax')
                    <a href="javascript:;" data-ajax-request-loading
                       data-ajax-request="{{ $securityItems[0]['url'] }}">{{ $securityItems[0]['label'] }}</a>
                @elseif($securityItems[0]['mode'] == 'dialog')
                    <a href="javascript:;" data-dialog-request="{{ $securityItems[0]['url'] }}">{{ $securityItems[0]['label'] }}</a>
                @else
                    <a href="{{ $securityItems[0]['url'] }}">{{ $securityItems[0]['label'] }}</a>
                @endif
            @endif
        </div>
    @elseif($securityItemCount > 1)
        <details class="ub-alert warning ub-security-notice" style="padding:.5rem .75rem;">
            <summary class="tw-flex tw-items-center tw-cursor-pointer"
                     style="gap:.375rem;list-style:none;">
                <i class="iconfont icon-warning"></i>
                <span class="tw-flex-grow">
                    {{ L('SecurityWarning') }}: {{ $securityItemCount }} 项待处理
                </span>
                <i class="iconfont icon-angle-down ub-security-notice-arrow"></i>
            </summary>
            <div class="tw-mt-2" style="border-top:1px solid var(--color-warning);">
                @foreach($securityItems as $securityItem)
                    <div class="tw-flex tw-items-start tw-py-1" style="gap:.5rem;">
                        <span class="tw-flex-shrink-0" style="line-height:1.5;">·</span>
                        <span class="tw-flex-grow tw-min-w-0">{{ $securityItem['text'] }}</span>
                        @if(!empty($securityItem['mode']))
                            @if($securityItem['mode'] == 'ajax')
                                <a class="tw-flex-shrink-0" href="javascript:;" data-ajax-request-loading
                                   data-ajax-request="{{ $securityItem['url'] }}">{{ $securityItem['label'] }}</a>
                            @elseif($securityItem['mode'] == 'dialog')
                                <a class="tw-flex-shrink-0" href="javascript:;" data-dialog-request="{{ $securityItem['url'] }}">{{ $securityItem['label'] }}</a>
                            @else
                                <a class="tw-flex-shrink-0" href="{{ $securityItem['url'] }}">{{ $securityItem['label'] }}</a>
                            @endif
                        @endif
                    </div>
                @endforeach
            </div>
        </details>
    @endif
</div>
<style>
    .ub-security-notice > summary::-webkit-details-marker {
        display: none;
    }

    .ub-security-notice-arrow {
        transition: transform 0.2s var(--ease-out, ease);
    }

    .ub-security-notice[open] .ub-security-notice-arrow {
        transform: rotate(180deg);
    }

    @media (prefers-reduced-motion: reduce) {
        .ub-security-notice-arrow {
            transition: none;
        }
    }
</style>
