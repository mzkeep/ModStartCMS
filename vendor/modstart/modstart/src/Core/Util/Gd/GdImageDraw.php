<?php

namespace ModStart\Core\Util\Gd;

/**
 * 绘制属性（线条 / 矩形 / 圆形）
 */
class GdImageDraw
{
    /** @var mixed 线条颜色 */
    private $color = null;

    /** @var mixed 填充色 */
    private $background = null;

    /** @var mixed 边框色 */
    private $border = null;

    /**
     * 线条颜色
     * @param mixed $color
     * @return $this
     */
    public function color($color)
    {
        $this->color = $color;
        return $this;
    }

    /**
     * 填充色
     * @param mixed $color
     * @return $this
     */
    public function background($color)
    {
        $this->background = $color;
        return $this;
    }

    /**
     * 边框色
     * @param mixed $color
     * @return $this
     */
    public function border($color)
    {
        $this->border = $color;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * @return mixed
     */
    public function getBackground()
    {
        return $this->background;
    }

    /**
     * @return mixed
     */
    public function getBorder()
    {
        return $this->border;
    }
}
