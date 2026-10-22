<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'admin_manager/version', 'AdminManagerCliController@index');
