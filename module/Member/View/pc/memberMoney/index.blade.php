@extends($_viewMemberFrame)

@section('pageTitleMain')我的钱包@endsection
@section('pageKeywords')我的钱包@endsection
@section('pageDescription')我的钱包@endsection

@section('memberBodyContent')

    <div class="ub-panel transparent">
        <div class="body">
            <div class="row">
                <div class="col-md-12">
                    <div class="ub-content-box tw-flex tw-items-center tw-gap-4" style="padding:1rem;">
                        <span class="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10"
                              style="border-radius:var(--size-radius-sm);background:var(--color-primary-light-bg);color:var(--color-primary);">
                            <i class="font iconfont icon-pay" style="font-size:1.375rem;line-height:1;"></i>
                        </span>
                        <span class="tw-min-w-0">
                            <span class="tw-block tw-text-2xl tw-font-bold tw-leading-8 tw-tabular-nums"
                                  style="color:var(--color-heading);">￥{{\Module\Member\Util\MemberMoneyUtil::getTotal(\Module\Member\Auth\MemberUser::id())}}</span>
                            <span class="tw-block tw-text-xs" style="color:var(--color-tertiary);">我的钱包</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ub-panel" style="margin-top:-0.625rem;">
        <div class="head">
            <div class="more">
                @if(modstart_config('Member_MoneyChargeEnable',false))
                    <a class="tw-ml-2" href="{{modstart_web_url('member_money/charge')}}">
                        <i class="iconfont icon-cny"></i>
                        充值
                    </a>
                @endif
                @if(modstart_config('Member_MoneyCashEnable',false))
                    <a class="tw-ml-2" href="{{modstart_web_url('member_money/cash')}}">
                        <i class="iconfont icon-pay"></i>
                        提现
                    </a>
                @endif
            </div>
            <div class="title">
                <i class="iconfont icon-list"></i>
                钱包流水
            </div>
        </div>
        <div class="body">
            {!! $content !!}
        </div>
    </div>
@endsection
