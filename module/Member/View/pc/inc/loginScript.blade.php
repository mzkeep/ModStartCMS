<script>
    // 密码可见性切换 + 用户名自动聚焦（登录页 / 登录弹窗共用，重复引入只绑定一次）
    (function () {
        if (window.__msMemberLoginInit) {
            return;
        }
        window.__msMemberLoginInit = true;
        $(document).on('click', '[data-member-password-toggle]', function () {
            var $btn = $(this);
            var $input = $btn.closest('.field-toggle').find('input');
            var show = $input.attr('type') === 'password';
            $input.attr('type', show ? 'text' : 'password');
            $btn.attr('aria-pressed', show ? 'true' : 'false')
                .attr('aria-label', show ? '隐藏密码' : '显示密码')
                .toggleClass('active', show)
                .find('i').attr('class', 'iconfont ' + (show ? 'icon-eye-close' : 'icon-eye'));
            $input.trigger('focus');
        });
        // 只在鼠标/触控板设备上自动聚焦，手机端不自动拉起键盘遮挡卡片
        if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
            var $username = $('[data-member-login-username]');
            if ($username.length && !$username.val()) {
                $username.trigger('focus');
            }
        }
    })();
</script>
