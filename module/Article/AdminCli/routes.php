<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'article/index', 'ArticleCliController@index');
$router->match(['post'], 'article/add', 'ArticleCliController@add');
$router->match(['post'], 'article/edit', 'ArticleCliController@edit');
$router->match(['post'], 'article/delete', 'ArticleCliController@delete');
