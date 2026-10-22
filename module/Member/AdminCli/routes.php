<?php

/* @var \Illuminate\Routing\Router $router */

$router->match(['post'], 'member/config', 'ConfigCliController@index');

$router->match(['post'], 'member/index', 'MemberCliController@index');
$router->match(['post'], 'member/add', 'MemberCliController@add');
$router->match(['post'], 'member/edit', 'MemberCliController@edit');
$router->match(['post'], 'member/delete', 'MemberCliController@delete');

$router->match(['post'], 'member/vip_set/index', 'VipSetCliController@index');
$router->match(['post'], 'member/vip_set/add', 'VipSetCliController@add');
$router->match(['post'], 'member/vip_set/edit', 'VipSetCliController@edit');
$router->match(['post'], 'member/vip_set/delete', 'VipSetCliController@delete');
$router->match(['post'], 'member/vip_set/sort', 'VipSetCliController@sort');

$router->match(['post'], 'member/vip_right/index', 'VipRightCliController@index');
$router->match(['post'], 'member/vip_right/add', 'VipRightCliController@add');
$router->match(['post'], 'member/vip_right/edit', 'VipRightCliController@edit');
$router->match(['post'], 'member/vip_right/delete', 'VipRightCliController@delete');
$router->match(['post'], 'member/vip_right/sort', 'VipRightCliController@sort');

$router->match(['post'], 'member/money_charge_order/index', 'MoneyChargeOrderCliController@index');
$router->match(['post'], 'member/money_charge_order/add', 'MoneyChargeOrderCliController@add');
$router->match(['post'], 'member/money_charge_order/edit', 'MoneyChargeOrderCliController@edit');
$router->match(['post'], 'member/money_charge_order/delete', 'MoneyChargeOrderCliController@delete');

$router->match(['post'], 'member/money_log/index', 'MoneyLogCliController@index');
$router->match(['post'], 'member/money_log/add', 'MoneyLogCliController@add');
$router->match(['post'], 'member/money_log/edit', 'MoneyLogCliController@edit');
$router->match(['post'], 'member/money_log/delete', 'MoneyLogCliController@delete');

$router->match(['post'], 'member/credit_log/index', 'CreditLogCliController@index');
$router->match(['post'], 'member/credit_log/add', 'CreditLogCliController@add');
$router->match(['post'], 'member/credit_log/edit', 'CreditLogCliController@edit');
$router->match(['post'], 'member/credit_log/delete', 'CreditLogCliController@delete');

$router->match(['post'], 'member/money_cash/index', 'MoneyCashCliController@index');
$router->match(['post'], 'member/money_cash/add', 'MoneyCashCliController@add');
$router->match(['post'], 'member/money_cash/edit', 'MoneyCashCliController@edit');
$router->match(['post'], 'member/money_cash/delete', 'MoneyCashCliController@delete');

$router->match(['post'], 'member/group/index', 'GroupCliController@index');
$router->match(['post'], 'member/group/add', 'GroupCliController@add');
$router->match(['post'], 'member/group/edit', 'GroupCliController@edit');
$router->match(['post'], 'member/group/delete', 'GroupCliController@delete');
