{{-- 第三方登录（/login/other）：第三方登录方式由各登录模块（如 MemberWechatMpLogin）向
     [data-member-login-other] 注入；未开启任何第三方登录时该容器保持为空，
     这里给出空态提示与「使用账号密码登录」入口，避免出现一张空白卡片。 --}}
<div class="box" data-member-login-box>

    <div class="nav">
        <span class="active" aria-current="page">第三方登录</span>
        ·
        <a href="{{modstart_web_url('login',['redirect'=>empty($redirect)?null:$redirect])}}">账号密码登录</a>
    </div>

    <div style="min-height:18.75rem;" data-member-login-other></div>

    <div class="member-login-other-empty">
        <div class="member-login-other-empty-text">当前未开启第三方登录方式</div>
        <a class="btn btn-round btn-lg btn-block btn-primary"
           href="{{modstart_web_url('login',['redirect'=>empty($redirect)?null:$redirect])}}">使用账号密码登录</a>
    </div>

    @include('module::Member.View.pc.oauthButtons')

    @if(!modstart_config('retrieveDisable',false))
        <div class="retrieve">
            <a target="_parent" href="{{modstart_web_url('retrieve',['redirect'=>empty($redirect)?null:$redirect])}}">忘记密码？</a>
        </div>
    @endif

</div>
