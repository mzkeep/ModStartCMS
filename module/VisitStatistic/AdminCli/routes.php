<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'visit_statistic/config', 'ConfigCliController@index');

$router->match(['post'], 'visit_statistic/item/index', 'ItemCliController@index');
$router->match(['post'], 'visit_statistic/item/add', 'ItemCliController@add');
$router->match(['post'], 'visit_statistic/item/edit', 'ItemCliController@edit');
$router->match(['post'], 'visit_statistic/item/delete', 'ItemCliController@delete');
