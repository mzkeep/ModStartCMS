<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'cms/config', 'ConfigCliController@index');

$router->match(['post'], 'cms/model/index', 'ModelCliController@index');
$router->match(['post'], 'cms/model/edit', 'ModelCliController@edit');
$router->match(['post'], 'cms/model/delete', 'ModelCliController@delete');

$router->match(['post'], 'cms/cat/index', 'CatCliController@index');
$router->match(['post'], 'cms/cat/add', 'CatCliController@add');
$router->match(['post'], 'cms/cat/edit', 'CatCliController@edit');
$router->match(['post'], 'cms/cat/delete', 'CatCliController@delete');
$router->match(['post'], 'cms/cat/sort', 'CatCliController@sort');
