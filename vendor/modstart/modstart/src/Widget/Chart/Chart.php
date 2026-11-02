<?php


namespace ModStart\Widget\Chart;


use ModStart\Core\Util\ArrayUtil;
use ModStart\Widget\AbstractWidget;

class Chart extends AbstractWidget
{
    /**
     * @var string
     */
    protected $view = 'modstart::widget.chart';
    protected $height = 300;
    protected $option = [];

    /**
     * Chart constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }

    protected function variables()
    {
        $optionString = $this->option;
        if (!is_string($optionString)) {
            $optionString = json_encode($optionString);
        }
        return [
            'option' => $this->option,
            'optionString' => $optionString,
            'height' => $this->height,
        ];
    }

    /**
     * 同 Box::make()：Laravel 13 的 Illuminate\Support\Fluent 自带
     * `public static function make($attributes = [])`，子类参数个数不能少于父类，
     * 否则加载类时就是 fatal error。改用 variadic 承接（调用方本来就都不传参）。
     *
     * @return static
     */
    public static function make(...$arguments)
    {
        return new static();
    }

    public function height($value = null)
    {
        if (is_null($value)) {
            return $this->height;
        }
        $this->height = $value;
        return $this;
    }

    public function option($value = null)
    {
        if (is_null($value)) {
            return $this->option;
        }
        $this->option = $value;
        return $this;
    }

    public function optionSet($key, $value)
    {
        ArrayUtil::updateByDotKey($this->option, $key, $value);
        return $this;
    }
}
