<?php

namespace ModStart\Misc\Captcha;

use Illuminate\Support\ServiceProvider;

/**
 * 验证码服务注册（内置实现，由 ModStart\ModStartServiceProvider 注册）
 */
class CaptchaServiceProvider extends ServiceProvider
{

    /**
     * Boot the service provider.
     *
     * @return null
     */
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../../../config/captcha.php' => config_path('captcha.php')
        ], 'config');
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        // Merge configs
        $this->mergeConfigFrom(
            __DIR__ . '/../../../config/captcha.php', 'captcha'
        );

        $this->app->bind('captcha', function ($app) {
            return new Captcha(
                $app['Illuminate\Filesystem\Filesystem'],
                $app['Illuminate\Config\Repository'],
                $app['Illuminate\Session\Store'],
                $app['Illuminate\Hashing\BcryptHasher'],
                $app['Illuminate\Support\Str']
            );
        });
    }

}
