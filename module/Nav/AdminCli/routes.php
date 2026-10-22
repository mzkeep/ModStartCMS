<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'nav/index', 'NavCliController@index');
$router->match(['post'], 'nav/add', 'NavCliController@add');
$router->match(['post'], 'nav/edit', 'NavCliController@edit');
$router->match(['post'], 'nav/delete', 'NavCliController@delete');
$router->match(['post'], 'nav/sort', 'NavCliController@sort');
