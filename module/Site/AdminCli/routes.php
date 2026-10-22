<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'site/config', 'ConfigCliController@index');
