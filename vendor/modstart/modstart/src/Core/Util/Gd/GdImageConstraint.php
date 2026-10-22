<?php

namespace ModStart\Core\Util\Gd;

/**
 * 缩放约束
 *
 * 与 intervention/image 的 constraint 用法保持一致：
 *   $image->resize(800, 800, function ($constraint) {
 *       $constraint->aspectRatio();
 *       $constraint->upsize();
 *   });
 */
class GdImageConstraint
{
    /** @var bool 是否保持比例 */
    private $aspectRatio = false;

    /** @var bool 是否禁止放大 */
    private $upsize = false;

    /**
     * 保持宽高比
     * @return $this
     */
    public function aspectRatio()
    {
        $this->aspectRatio = true;
        return $this;
    }

    /**
     * 禁止放大（只缩小）
     * @return $this
     */
    public function upsize()
    {
        $this->upsize = true;
        return $this;
    }

    /**
     * @return bool
     */
    public function isAspectRatio()
    {
        return $this->aspectRatio;
    }

    /**
     * @return bool
     */
    public function isUpsize()
    {
        return $this->upsize;
    }
}
