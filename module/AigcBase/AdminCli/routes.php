<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'aigc_base/aigc_key_pool/index', 'AigcKeyPoolCliController@index');
$router->match(['post'], 'aigc_base/aigc_key_pool/add', 'AigcKeyPoolCliController@add');
$router->match(['post'], 'aigc_base/aigc_key_pool/edit', 'AigcKeyPoolCliController@edit');
$router->match(['post'], 'aigc_base/aigc_key_pool/delete', 'AigcKeyPoolCliController@delete');
