<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'banner/index', 'BannerCliController@index');
$router->match(['post'], 'banner/add', 'BannerCliController@add');
$router->match(['post'], 'banner/edit', 'BannerCliController@edit');
$router->match(['post'], 'banner/delete', 'BannerCliController@delete');
$router->match(['post'], 'banner/sort', 'BannerCliController@sort');
