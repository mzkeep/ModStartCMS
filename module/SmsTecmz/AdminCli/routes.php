<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'sms_tecmz/config', 'ConfigCliController@index');
