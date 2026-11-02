<?php

namespace ModStart\Widget;

use ModStart\Core\Util\RenderUtil;

/**
 * Class Box
 * @package ModStart\Widget
 *
 * @method Box style($value)
 */
class ContentBox extends AbstractWidget
{
    /**
     * @var string
     */
    protected $view = 'modstart::widget.contentBox';

    /**
     * @var string
     */
    protected $classList = '';

    /**
     * @var string
     */
    protected $content = '';


    /**
     * 同 Box::make()：父类 Fluent::make($attributes = []) 在 Laravel 13 起存在，
     * 子类不能新增**必需**参数，否则加载类时就是 fatal error。改用 variadic 保持兼容。
     *
     * @param string $content
     * @param string $classList
     * @return ContentBox|$this
     */
    public static function make(...$arguments)
    {
        $content = isset($arguments[0]) ? $arguments[0] : '';
        $classList = isset($arguments[1]) ? $arguments[1] : 'margin-bottom';
        $ins = new static();
        $ins->content($content);
        $ins->classList($classList);
        return $ins;
    }

    public static function breadcrumb($items, $classList = 'margin-bottom')
    {
        $ins = new static();
        $content = RenderUtil::view('modstart::widget.breadcrumb', ['items' => $items]);
        $ins->content($content);
        $ins->classList($classList);
        return $ins;
    }

    /**
     * Set box content.
     *
     * @param string $content
     *
     * @return $this
     */
    public function content($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * Set box title.
     *
     * @param string $classList
     *
     * @return $this
     */
    public function classList($classList)
    {
        $this->classList = $classList;
        return $this;
    }

    /**
     * Variables in view.
     *
     * @return array
     */
    public function variables()
    {
        return [
            'classList' => $this->classList,
            'content' => $this->toString($this->content),
        ];
    }
}
