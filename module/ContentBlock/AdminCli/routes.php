<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'content_block/index', 'ContentBlockCliController@index');
$router->match(['post'], 'content_block/add', 'ContentBlockCliController@add');
$router->match(['post'], 'content_block/edit', 'ContentBlockCliController@edit');
$router->match(['post'], 'content_block/delete', 'ContentBlockCliController@delete');
$router->match(['post'], 'content_block/sort', 'ContentBlockCliController@sort');
