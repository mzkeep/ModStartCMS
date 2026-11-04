@extends($_viewFrame)

@section('pageTitleMain')登录@endsection
@section('pageKeywords')登录@endsection
@section('pageDescription')登录@endsection

{{-- 整页填充布局：主内容区在页头与页脚之间垂直居中（见 bricks/page/account/account.less 的 .ub-page-fill） --}}
@section('bodyProperties') class="ub-page-fill" @endsection

@section('headAppend')
    @parent
    <link rel="canonical" href="{{modstart_web_url('login')}}"/>
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('MemberLoginPageHeadAppend'); !!}
@endsection

@section('bodyAppend')
    @parent
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('MemberLoginPageBodyAppend'); !!}
@endsection

@section('bodyContent')

    @include('module::Member.View.pc.inc.loginPanel')

@endsection
