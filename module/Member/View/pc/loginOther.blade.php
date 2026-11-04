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
    @parent
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('MemberLoginPageBodyAppend'); !!}
@endsection

{{-- 与 /login 一致：整页填充布局，卡片在页头与页脚之间垂直居中 --}}
@section('bodyProperties') class="ub-page-fill" @endsection

@section('bodyContent')

    <div class="ub-account ub-page-fill-main pb-member-login-account">

        @include('module::Member.View.pc.inc.loginOtherPanel')

    </div>

@endsection
