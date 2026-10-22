<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'captcha_tecmz/config', 'ConfigCliController@index');
