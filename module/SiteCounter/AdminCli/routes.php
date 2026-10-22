<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'site_counter/config', 'ConfigCliController@index');
