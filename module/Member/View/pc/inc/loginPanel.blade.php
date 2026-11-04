<div class="ub-account ub-page-fill-main pb-member-login-account">

    <div class="box" data-member-login-box>

        <div class="nav">
            <span class="active" aria-current="page">登录</span>
            @if(!modstart_config('registerDisable',false))
                ·
                <a href="{{$__msRoot}}register?redirect={{!empty($redirect)?urlencode($redirect):''}}">注册</a>
            @endif
        </div>
        <div class="ub-form flat">
            <form action="{{modstart_web_url('login')}}" method="post" data-ajax-form>
                @if(modstart_config('Member_LoginInfoEncrypt',false))
                    <input type="hidden" data-encrypt-data name="ek" value="{{\ModStart\Core\Util\RandomUtil::string(8)}}" />
                @endif
                <div class="line">
                    <div class="field">
                        <input type="text" class="form-lg" name="username" id="memberLoginUsername"
                               placeholder="手机号 / 邮箱 / 用户名" aria-label="手机号 / 邮箱 / 用户名"
                               autocomplete="username" data-member-login-username
                               @if(modstart_config('Member_LoginInfoEncrypt',false)) data-encrypt-field="username" @endif/>
                    </div>
                </div>
                <div class="line">
                    <div class="field">
                        <div class="field-toggle">
                            <input type="password" class="form-lg" name="password" id="memberLoginPassword"
                                   placeholder="输入密码" aria-label="密码" autocomplete="current-password"
                                   @if(modstart_config('Member_LoginInfoEncrypt',false)) data-encrypt-field="password" @endif/>
                            <button type="button" class="field-toggle-btn" data-member-password-toggle
                                    aria-label="显示密码" aria-pressed="false">
                                <i class="iconfont icon-eye"></i>
                            </button>
                        </div>
                    </div>
                </div>
                @if(modstart_config('loginCaptchaEnable',false))
                    @if($provider = \Module\Member\Util\SecurityUtil::loginCaptchaProvider())
                        <div style="padding:0.625rem;">
                            {!! $provider->render() !!}
                        </div>
                    @else
                        <div class="line">
                            <div class="field">
                                <div class="row no-gutters">
                                    <div class="col-6">
                                        <input type="text" class="form-lg" name="captcha" autocomplete="off" placeholder="图片验证码" aria-label="图片验证码" />
                                    </div>
                                    <div class="col-6">
                                        <img class="captcha captcha-lg" title="刷新验证" data-captcha
                                             src="{{modstart_web_url('login/captcha')}}"
                                             onclick="$(this).attr('src','{{modstart_web_url('login/captcha')}}?'+Math.random())" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                @endif
                <div class="line">
                    <div class="field">
                        <button type="submit" class="btn btn-round btn-primary btn-lg btn-block">登录</button>
                        <input type="hidden" name="redirect" value="{{empty($redirect)?'':$redirect}}">
                    </div>
                </div>
            </form>
        </div>

        @include('module::Member.View.pc.oauthButtons')

        @if(!modstart_config('retrieveDisable',false))
            <div class="retrieve">
                <a target="_parent" href="{{modstart_web_url('retrieve',['redirect'=>empty($redirect)?null:$redirect])}}">忘记密码？</a>
            </div>
        @endif

    </div>

</div>

@include('module::Member.View.pc.inc.loginScript')
