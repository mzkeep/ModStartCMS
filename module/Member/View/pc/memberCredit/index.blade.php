@extends($_viewMemberFrame)

@section('pageTitleMain')我的{{\ModStart\Module\ModuleManager::getModuleConfig('Member', 'creditName', '积分')}}@endsection

@section('memberBodyContent')
    <div class="ub-panel transparent">
        <div class="body">
            <div class="ub-content-box tw-flex tw-items-center tw-gap-4" style="padding:1rem;">
                <span class="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10"
                      style="border-radius:var(--size-radius-sm);background:var(--color-primary-light-bg);color:var(--color-primary);">
                    <i class="font iconfont icon-credit" style="font-size:1.375rem;line-height:1;"></i>
                </span>
                <span class="tw-min-w-0">
                    <?php $m = \Module\Member\Util\MemberCreditUtil::get($_memberUserId); ?>
                    <span class="tw-block tw-text-2xl tw-font-bold tw-leading-8 tw-tabular-nums"
                          style="color:var(--color-heading);">{{$m?$m['total']:0}}</span>
                    <span class="tw-block tw-text-xs" style="color:var(--color-tertiary);">
                        我的{{\ModStart\Module\ModuleManager::getModuleConfig('Member', 'creditName', '积分')}}
                        @if(!empty($m['freezeTotal']))
                            <span class="ub-text-muted">
                                （冻结{{$m['freezeTotal']}}）
                            </span>
                        @endif
                    </span>
                </span>
            </div>
        </div>
    </div>
    <div class="ub-panel">
        <div class="head">
            <div class="title">
                <i class="iconfont icon-list"></i>
                {{\ModStart\Module\ModuleManager::getModuleConfig('Member', 'creditName', '积分')}}流水
            </div>
        </div>
        <div class="body">
            {!! $content !!}
        </div>
    </div>
@endsection
