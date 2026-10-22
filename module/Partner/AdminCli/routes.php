<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'partner/index', 'PartnerCliController@index');
$router->match(['post'], 'partner/add', 'PartnerCliController@add');
$router->match(['post'], 'partner/edit', 'PartnerCliController@edit');
$router->match(['post'], 'partner/delete', 'PartnerCliController@delete');
$router->match(['post'], 'partner/sort', 'PartnerCliController@sort');
