@extends($_viewFrame)

@section('pageTitleMain')登录@endsection
@section('pageKeywords')登录@endsection
@section('pageDescription')登录@endsection

@section('headAppend')
    @parent
    <link rel="canonical" href="{{modstart_web_url('login')}}"/>
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('MemberLoginPageHeadAppend'); !!}
@endsection

@section('bodyAppend')
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('MemberLoginPageBodyAppend'); !!}
@endsection

{!! \ModStart\ModStart::style('html,body{background:var(--color-content-bg);}') !!}
@section('body')

    <div class="ub-account pb-member-login-account">

        @include('module::Member.View.pc.inc.loginOtherPanel')

    </div>

@endsection
