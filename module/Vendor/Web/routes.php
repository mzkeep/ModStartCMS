<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['get', 'post'], 'install/ping', 'InstallController@ping');
$router->match(['get', 'post'], 'install/prepare', 'InstallController@prepare');
$router->match(['get', 'post'], 'install/execute', 'InstallController@execute');
$router->match(['get', 'post'], 'install/lock', 'InstallController@lock');

$router->match(['get'], 'captcha/image', 'CaptchaController@image');

$router->match(['get'], 'placeholder/{width}x{height}', '\Module\Vendor\Web\Controller\PlaceholderController@index');

// /session adopts a client supplied session id, so it must be signed (and short lived),
// otherwise anyone could fixate a known session id and later take over the victim account.
$router->group([
    'middleware' => [
        \Module\Vendor\Middleware\NoneLoginOperateAuthMiddleware::class,
    ],
], function () use ($router) {
    $router->match(['get'], 'session', 'SessionController@index');
    $router->match(['get', 'post'], 'content_verify/{name}', 'ContentVerifyController@index');
});
