<?php

namespace ModStart\Admin\Widget;

use ModStart\Core\Util\ColorUtil;
use ModStart\ModStart;
use ModStart\Widget\AbstractWidget;

class DashboardItemA extends AbstractWidget
{
    private $type = 1;
    private $link;
    private $title;
    private $desc;
    private $icon;
    private $color;
    private $number;
    private $value;
    private $param;

    public static function makeIconTitleDesc($icon, $title, $desc, $link = 'javascript:;', $color = '#999', $param = [])
    {
        $item = new DashboardItemA();
        $item->icon = $icon;
        $item->title = $title;
        $item->desc = $desc;
        $item->link = $link;
        $item->color = $color;
        $item->param = $param;
        $item->type = 1;
        return $item;
    }

    public static function makeIconNumberTitle($icon, $number, $title, $link = 'javascript:;', $color = null, $param = [])
    {
        if (null === $color) {
            $color = ColorUtil::randomColor();
        }
        $item = new DashboardItemA();
        $item->icon = $icon;
        $item->number = $number;
        $item->title = $title;
        $item->link = $link;
        $item->color = $color;
        $item->param = $param;
        $item->type = 2;
        return $item;
    }

    public static function makeTitleLink($title, $link, $param = [])
    {
        $item = new DashboardItemA();
        $item->title = $title;
        $item->link = $link;
        $item->param = $param;
        $item->type = 3;
        return $item;
    }

    public static function makeIconNumberTitleDark($icon, $number, $title, $link = 'javascript:;', $color = null, $param = [])
    {
        if (null === $color) {
            $color = ColorUtil::randomColor();
        }
        $item = new DashboardItemA();
        $item->icon = $icon;
        $item->number = $number;
        $item->title = $title;
        $item->link = $link;
        $item->color = $color;
        $item->param = $param;
        $item->type = 4;
        return $item;
    }

    /**
     * @param $icon
     * @param $title
     * @param $link
     * @param null $color
     * @return DashboardItemA
     * @since 1.5.0
     */
    public static function makeIconTitleLink($icon, $title, $link, $color = null, $param = [])
    {
        if (null === $color) {
            $color = ColorUtil::randomColor();
        }
        $item = new DashboardItemA();
        $item->icon = $icon;
        $item->title = $title;
        $item->link = $link;
        $item->color = $color;
        $item->param = $param;
        $item->type = 5;
        return $item;
    }

    /**
     * @param $icon
     * @param $title
     * @param $link
     * @param null $color
     * @return DashboardItemA
     * @since 1.5.0
     */
    public static function makeIconTitleValueLink($icon, $title, $value, $link, $color = null, $param = [])
    {
        if (null === $color) {
            $color = ColorUtil::randomColor();
        }
        $item = new DashboardItemA();
        $item->icon = $icon;
        $item->title = $title;
        $item->value = $value;
        $item->link = $link;
        $item->color = $color;
        $item->param = $param;
        $item->type = 6;
        return $item;
    }

    public function render()
    {
        ModStart::js('asset/common/countUp.js');
        $tabTitle = $this->title;
        if (isset($this->param['tabTitle'])) {
            $tabTitle = $this->param['tabTitle'];
        }
        switch ($this->type) {
            case 1:
                // Styling comes from ub-content-box (card shell) + tailwind utility
                // classes; dashboard.less no longer exists.
                return <<<HTML
<a href="{$this->link}" class="ub-content-box margin-bottom tw-flex tw-items-start tw-gap-4" style="padding:1rem;" data-tab-open data-tab-title="{$tabTitle}" {$this->formatAttributes()}>
    <span class="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10" style="border-radius:var(--size-radius-sm);background:var(--color-primary-light-bg);color:{$this->color};">
        <i class="font {$this->icon}" style="font-size:1.375rem;line-height:1;"></i>
    </span>
    <span class="tw-flex-1 tw-min-w-0">
        <span class="tw-block tw-font-semibold tw-truncate" style="color:{$this->color};">{$this->title}</span>
        <span class="tw-block tw-text-xs tw-mt-1" style="color:var(--color-muted);">{$this->desc}</span>
    </span>
</a>
HTML;
            case 2:
                $numberValue = intval($this->number);
                if (!is_string($this->number)) {
                    $numberValue = number_format($this->number);
                } else {
                    $numberValue = $this->number;
                }
                return <<<HTML
<a href="{$this->link}" class="ub-content-box margin-bottom tw-flex tw-items-center tw-gap-4" style="padding:1rem;" data-tab-open data-tab-title="{$tabTitle}" {$this->formatAttributes()}>
    <span class="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10" style="border-radius:var(--size-radius-sm);background:var(--color-primary-light-bg);color:{$this->color};">
        <i class="font {$this->icon}" style="font-size:1.375rem;line-height:1;"></i>
    </span>
    <span class="tw-min-w-0">
        <span class="tw-block tw-text-2xl tw-font-bold tw-leading-8 tw-tabular-nums" style="color:var(--color-heading);" data-count-up-number="$numberValue">-</span>
        <span class="tw-block tw-text-xs tw-truncate" style="color:var(--color-tertiary);">{$this->title}</span>
    </span>
</a>
HTML;
            case 3:
                return <<<HTML
<a href="{$this->link}" target="_blank" class="btn btn-block ub-text-left margin-bottom" style="color:{$this->color}" {$this->formatAttributes()}>
    {$this->title}
</a>
HTML;
            case 4:
                $numberValue = intval($this->number);
                return <<<HTML
<a href="{$this->link}" class="ub-content-box margin-bottom tw-block tw-text-center" data-tab-open data-tab-title="{$tabTitle}" style="padding:1rem;background:{$this->color};border-color:{$this->color};" {$this->formatAttributes()}>
    <span class="tw-block" style="color:var(--color-text-reverse);">
        <i class="font {$this->icon}" style="font-size:1.5rem;line-height:1;"></i>
    </span>
    <span class="tw-block tw-text-2xl tw-font-bold tw-leading-8 tw-mt-2 tw-tabular-nums" style="color:var(--color-text-reverse);" data-count-up-number="$numberValue">{$this->number}</span>
    <span class="tw-block tw-text-xs" style="color:var(--color-text-reverse);opacity:.85;">{$this->title}</span>
</a>
HTML;
            case 5:
                return <<<HTML
<a href="{$this->link}" class="tw-block tw-bg-white tw-text-center tw-rounded tw-py-4 margin-bottom tw-transform tw-duration-300 hover:tw--translate-y-1" data-tab-open data-tab-title="{$tabTitle}" {$this->formatAttributes()}>
    <div style="height:2.5rem;">
        <i class="{$this->icon}" style="font-size:1.875rem;line-height:2.5rem;color:{$this->color};"></i>
    </div>
    <div class="tw-text-gray-400">{$this->title}</div>
</a>
HTML;
            case 6:
                if (null === $this->value) {
                    $this->value = '&nbsp;';
                }
                return <<<HTML
<a href="{$this->link}" class="tw-block tw-bg-white tw-text-center tw-rounded tw-pt-4 margin-bottom tw-transform tw-duration-300 hover:tw--translate-y-1 tw-transition" data-tab-open data-tab-title="{$tabTitle}" {$this->formatAttributes()}>
    <div style="height:2.5rem;">
        <i class="{$this->icon}" style="font-size:1.875rem;line-height:2.5rem;color:{$this->color};"></i>
    </div>
    <div class="ub-text-tertiary">{$this->title}</div>
    <div class="ub-text-tertiary tw-font-bold">{$this->value}</div>
</a>
HTML;


        }

    }

}
