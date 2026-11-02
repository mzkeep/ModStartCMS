<?php


namespace Module\Vendor\Provider;

use Module\Vendor\Provider\Recommend\RecommendBiz;

trait ProviderTrait
{
    /**
     * @var array
     */
    private static $list = [];

    /**
     * 注册
     * @param $provider
     */
    public static function register($provider)
    {
        self::$list[] = $provider;
    }

    /**
     * 列出全部
     * @return array
     */
    public static function listAll()
    {
        // 只缓存“是否已按 order 排序”，不缓存“是否已把闭包 / 类名解析为实例”：
        // 后注册的提供者如果跳过解析，会残留字符串，调用 $provider->title() 直接报错。
        static $sorted = false;
        $hasOrder = false;
        foreach (self::$list as $k => $v) {
            if ($v instanceof \Closure) {
                self::$list[$k] = call_user_func($v);
            } else if (is_string($v)) {
                self::$list[$k] = app($v);
            }
            if (!$hasOrder && is_object(self::$list[$k]) && method_exists(self::$list[$k], 'order')) {
                $hasOrder = true;
            }
        }
        if ($hasOrder && !$sorted) {
            @usort(self::$list, function ($o1, $o2) {
                if ($o1->order() == $o2->order()) {
                    return 0;
                }
                return $o1->order() > $o2->order() ? 1 : -1;
            });
            $sorted = true;
        }
        return self::$list;
    }

    public static function listAllEnabled()
    {
        $records = [];
        foreach (static::listAll() as $provider) {
            if (!$provider->enable()) {
                continue;
            }
            $records[] = $provider;
        }
        return $records;
    }

    /**
     * 列出全部Map name->title
     * @return array
     */
    public static function allMap()
    {
        return array_build(self::listAll(), function ($k, $v) {
            return [
                $v->name(), $v->title()
            ];
        });
    }

    /**
     * 列出全部Map（包含一个空）name->title
     * @return array|string[]
     */
    public static function allDefaultMap()
    {
        return array_merge(
            ['' => L('None')],
            array_build(self::listAll(), function ($k, $v) {
                return [
                    $v->name(), $v->title()
                ];
            })
        );
    }

    /**
     * 判断是否为空
     * @return bool
     */
    public static function isEmpty()
    {
        return empty(self::$list);
    }

    public static function getByName($name)
    {
        foreach (self::listAll() as $item) {
            if ($item->name() == $name) {
                return $item;
            }
        }
        return null;
    }

    public static function getEnabledByName($name)
    {
        $item = self::getByName($name);
        return $item && $item->enable() ? $item : null;
    }

    public static function first()
    {
        foreach (self::listAll() as $item) {
            return $item;
        }
        return null;
    }

    public static function titleByName($name)
    {
        $item = self::getByName($name);
        return $item ? $item->title() : $name;
    }
}
