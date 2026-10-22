<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'module_store/list', 'ModuleStoreCliController@index');
