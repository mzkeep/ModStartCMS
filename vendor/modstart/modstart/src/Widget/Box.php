<?php

namespace ModStart\Widget;

use Illuminate\Contracts\Support\Renderable;

/**
 * Class Box
 * @package ModStart\Widget
 *
 * @method Box style($value)
 */
class Box extends AbstractWidget
{
    /**
     * @var string
     */
    protected $view = 'modstart::widget.box';

    /**
     * @var string
     */
    protected $title = '';

    /**
     * @var string
     */
    protected $classList = '';

    /**
     * @var string
     */
    protected $content = '';

    /**
     * @var array
     */
    protected $tools = [];

    /**
     * Box constructor.
     *
     * @param string|Renderable $content
     * @param string $title
     * @param string $classList
     */
    public function __construct($content, $title = '', $classList = '')
    {
        parent::__construct();
        if ($content) {
            $this->content($content);
        }
        if ($title) {
            $this->title($title);
        }
        if ($classList) {
            $this->classList($classList);
        }
    }

    /**
     * 说明：Laravel 13 的 Illuminate\Support\Fluent 新增了 `public static function make($attributes = [])`，
     * 而 Box 通过 AbstractWidget 继承 Fluent。子类静态方法签名必须与父类兼容，若这里写成
     * `make($content, $title = '', $classList = '')`，第一个参数是**必需**的，
     * 比父类多出必需参数，PHP 会直接抛
     * `Declaration of Box::make(...) must be compatible with Fluent::make(...)` 的 fatal error。
     * 因此统一改写成 variadic —— 与基础库其他 Widget（TextLink / ButtonLink 等）一致。
     *
     * @param string|Renderable $content
     * @param string $title
     * @param string $classList
     * @return Box|$this
     */
    public static function make(...$arguments)
    {
        $content = isset($arguments[0]) ? $arguments[0] : '';
        $title = isset($arguments[1]) ? $arguments[1] : '';
        $classList = isset($arguments[2]) ? $arguments[2] : '';
        return new Box($content, $title, $classList);
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
     * @param string $title
     *
     * @return $this
     */
    public function title($title)
    {
        $this->title = $title;
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
     * @param string|Renderable|\Closure $tool
     *
     * @return $this
     */
    public function tool($tool)
    {
        $this->tools[] = $this->toString($tool);
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
            'title' => $this->title,
            'classList' => $this->classList,
            'content' => $this->toString($this->content),
            'tools' => $this->tools,
        ];
    }
}
