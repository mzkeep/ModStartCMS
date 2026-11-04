<?php

class MNav
{
    /**
     * Nav records of one position with the derived `_attr` attribute.
     *
     * Themes render links with `{!! $nav['_attr'] !!}` at every level, so `_attr`
     * must exist on child nodes as well: NavUtil only returns raw tree nodes and
     * nested children never pass through this helper otherwise.
     */
    public static function all($position = 'head')
    {
        $records = \Module\Nav\Util\NavUtil::listByPositionWithCache($position);
        return self::decorate($records);
    }

    /**
     * Recursively add `_attr` to every node (and its `_child` nodes).
     */
    private static function decorate($nodes)
    {
        if (empty($nodes) || !is_array($nodes)) {
            return $nodes;
        }
        foreach ($nodes as $i => $node) {
            $nodes[$i]['_attr'] = \Module\Nav\Type\NavOpenType::getBlankAttributeFromValue($node);
            if (!empty($node['_child']) && is_array($node['_child'])) {
                $nodes[$i]['_child'] = self::decorate($node['_child']);
            }
        }
        return $nodes;
    }
}
