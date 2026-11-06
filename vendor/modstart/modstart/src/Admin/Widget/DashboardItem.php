<?php

namespace ModStart\Admin\Widget;

use ModStart\Core\Util\RenderUtil;
use ModStart\ModStart;
use ModStart\Widget\AbstractWidget;

class DashboardItem extends AbstractWidget
{
    private $type = 1;
    private $color;
    private $icon;
    private $title;
    private $value;
    private $param;


    public static function makeTitleDataList($icon, $title, $dataList, $color = null, $param = [])
    {
        // Keep $color optional and null by default: the view falls back to the
        // theme primary accent, so all dashboard cards stay visually consistent
        // instead of each one picking a random saturated color.
        $item = new DashboardItem();
        $item->icon = $icon;
        $item->title = $title;
        $item->value = $dataList;
        $item->color = $color;
        $item->param = $param;
        $item->type = 1;
        return $item;
    }

    /**
     * Numbers get thousands separators; other values (e.g. "50M") stay untouched.
     *
     * @param mixed $value
     * @param string|null $format int: thousands separators, money: "¥1,097.76"
     * @return string
     */
    public static function formatValue($value, $format = null)
    {
        if ('money' === $format) {
            return '¥' . number_format((float)$value, 2, '.', ',');
        }
        if ('int' === $format) {
            return number_format((float)$value);
        }
        if (is_float($value)) {
            // number_format() defaults to zero decimals, which silently turned
            // amounts like 19.99 into "20"; keep up to two decimals instead.
            $rounded = round($value, 2);
            if ($rounded == floor($rounded)) {
                return number_format($rounded);
            }
            return number_format($rounded, 2, '.', ',');
        }
        if (is_int($value)) {
            return number_format((float)$value);
        }
        if (is_string($value) && preg_match('/^\d+$/', $value)) {
            return number_format((float)$value);
        }
        return $value;
    }

    /**
     * Percentage deltas: negative values are shown as a downward (danger) change.
     * @param string $delta
     * @return string
     */
    public static function deltaTone($delta)
    {
        if (strlen($delta) > 0 && substr($delta, 0, 1) === '-') {
            return 'var(--color-danger)';
        }
        return 'var(--color-success)';
    }

    /**
     * Direction of a delta value ("-98.2%" is down, "+12.0%" is up).
     * @param string $delta
     * @return string up|down
     */
    public static function deltaDirection($delta)
    {
        if (strlen($delta) > 0 && substr($delta, 0, 1) === '-') {
            return 'down';
        }
        return 'up';
    }

    /**
     * Compare two periods as a signed percentage ("+12.0%" / "-98.2%").
     * Returns an empty string when there is no baseline, so cards can skip the
     * delta instead of showing a meaningless "+100%" from zero.
     *
     * @param mixed $current
     * @param mixed $previous
     * @return string
     */
    public static function deltaText($current, $previous)
    {
        $current = (float)$current;
        $previous = (float)$previous;
        if ($previous <= 0) {
            return '';
        }
        $rate = ($current - $previous) / $previous * 100;
        return ($rate >= 0 ? '+' : '') . number_format($rate, 1, '.', '') . '%';
    }

    public function render()
    {
        ModStart::js('asset/common/countUp.js');
        $viewData = [
            'icon' => $this->icon,
            'title' => $this->title,
            'value' => $this->value,
            'color' => $this->color,
            'param' => $this->param,
        ];
        switch ($this->type) {
            case 1:
                return RenderUtil::view('modstart::admin.widget.dashboardItem', $viewData);
        }
        return 'Unknown type';
    }

}
