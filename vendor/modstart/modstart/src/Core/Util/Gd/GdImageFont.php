<?php

namespace ModStart\Core\Util\Gd;

/**
 * 字体属性与文字绘制
 *
 * 与 intervention/image 的字体回调用法保持一致：
 *   $image->text('文字', $x, $y, function ($font) {
 *       $font->file($ttf);
 *       $font->size(30);
 *       $font->color('#ffffff');
 *       $font->align('center');
 *       $font->valign('middle');
 *       $font->angle(45);
 *   });
 */
class GdImageFont
{
    /** @var string 文字内容 */
    private $text;

    /** @var string|null 字体文件（为空时使用 GD 内置字体） */
    private $file = null;

    /** @var int 字体大小（像素） */
    private $size = 12;

    /** @var mixed 文字颜色 */
    private $color = '#000000';

    /** @var string 水平对齐 left|center|right */
    private $align = 'left';

    /** @var string 垂直对齐 top|middle|center|bottom */
    private $valign = 'bottom';

    /** @var int 旋转角度（逆时针） */
    private $angle = 0;

    /**
     * @param string $text
     */
    public function __construct($text = '')
    {
        $this->text = $text;
    }

    /**
     * 设置字体文件
     * @param string $file
     * @return $this
     */
    public function file($file)
    {
        $this->file = $file;
        return $this;
    }

    /**
     * 设置字体大小
     * @param int $size
     * @return $this
     */
    public function size($size)
    {
        $this->size = intval($size);
        return $this;
    }

    /**
     * 设置颜色
     * @param mixed $color
     * @return $this
     */
    public function color($color)
    {
        $this->color = $color;
        return $this;
    }

    /**
     * 水平对齐
     * @param string $align
     * @return $this
     */
    public function align($align)
    {
        $this->align = strtolower(strval($align));
        return $this;
    }

    /**
     * 垂直对齐
     * @param string $valign
     * @return $this
     */
    public function valign($valign)
    {
        $this->valign = strtolower(strval($valign));
        return $this;
    }

    /**
     * 旋转角度
     * @param int $angle
     * @return $this
     */
    public function angle($angle)
    {
        $this->angle = intval($angle);
        return $this;
    }

    /**
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @return string|null
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * GD 使用的磅值
     * @return int
     */
    public function getPointSize()
    {
        return intval(ceil($this->size * 0.75));
    }

    /**
     * @return mixed
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * @return int
     */
    public function getAngle()
    {
        return $this->angle;
    }

    /**
     * 绘制到图片
     * @param GdImage $image
     * @param int $posX
     * @param int $posY
     * @return void
     */
    public function applyTo(GdImage $image, $posX = 0, $posY = 0)
    {
        $core = $image->getCore();
        $color = GdImage::allocate($core, GdImage::parseColor($this->color));
        imagealphablending($core, true);
        if (!empty($this->file) && file_exists($this->file) && function_exists('imagettftext')) {
            $text = $this->prepareText($this->text);
            $pointSize = $this->getPointSize();
            $box = @imagettfbbox($pointSize, 0, $this->file, $text);
            if ($box) {
                if (0 != $this->angle) {
                    $angle = pi() * 2 - $this->angle * pi() * 2 / 360;
                    for ($i = 0; $i < 4; $i++) {
                        $x = $box[$i * 2];
                        $y = $box[$i * 2 + 1];
                        $box[$i * 2] = cos($angle) * $x - sin($angle) * $y;
                        $box[$i * 2 + 1] = sin($angle) * $x + cos($angle) * $y;
                    }
                }
                list($posX, $posY) = $this->alignPosition($box, $posX, $posY);
            }
            @imagettftext($core, $pointSize, $this->angle, intval($posX), intval($posY), $color, $this->file, $text);
            return;
        }
        $this->applyInternalFont($core, $color, $posX, $posY);
    }

    /**
     * 内置字体绘制（无字体文件时的降级方案）
     * @param mixed $core
     * @param int $color
     * @param int $posX
     * @param int $posY
     * @return void
     */
    private function applyInternalFont($core, $color, $posX, $posY)
    {
        $font = 5;
        $width = imagefontwidth($font);
        $height = imagefontheight($font);
        $text = $this->text;
        $textWidth = strlen($text) * $width;
        switch ($this->align) {
            case 'center':
                $posX = $posX - intval($textWidth / 2);
                break;
            case 'right':
                $posX = $posX - $textWidth;
                break;
        }
        switch ($this->valign) {
            case 'center':
            case 'middle':
                $posY = $posY - intval($height / 2);
                break;
            case 'top':
                break;
            default:
                $posY = $posY - $height;
                break;
        }
        imagestring($core, $font, intval($posX), intval($posY), $text, $color);
    }

    /**
     * 根据对齐方式计算坐标
     * @param array $box imagettfbbox 结果
     * @param int $posX
     * @param int $posY
     * @return array
     */
    private function alignPosition($box, $posX, $posY)
    {
        $align = $this->align;
        $valign = $this->valign;
        switch ($align . '-' . $valign) {
            case 'center-top':
                $posX = $posX - round(($box[6] + $box[4]) / 2);
                $posY = $posY - round(($box[7] + $box[5]) / 2);
                break;
            case 'right-top':
                $posX = $posX - $box[4];
                $posY = $posY - $box[5];
                break;
            case 'left-top':
                $posX = $posX - $box[6];
                $posY = $posY - $box[7];
                break;
            case 'center-center':
            case 'center-middle':
                $posX = $posX - round(($box[0] + $box[4]) / 2);
                $posY = $posY - round(($box[1] + $box[5]) / 2);
                break;
            case 'right-center':
            case 'right-middle':
                $posX = $posX - round(($box[2] + $box[4]) / 2);
                $posY = $posY - round(($box[3] + $box[5]) / 2);
                break;
            case 'left-center':
            case 'left-middle':
                $posX = $posX - round(($box[0] + $box[6]) / 2);
                $posY = $posY - round(($box[1] + $box[7]) / 2);
                break;
            case 'center-bottom':
                $posX = $posX - round(($box[0] + $box[2]) / 2);
                $posY = $posY - round(($box[1] + $box[3]) / 2);
                break;
            case 'right-bottom':
                $posX = $posX - $box[2];
                $posY = $posY - $box[3];
                break;
            case 'left-bottom':
                $posX = $posX - $box[0];
                $posY = $posY - $box[1];
                break;
        }
        return [$posX, $posY];
    }

    /**
     * 预处理文字（保留实体字符，避免被当作 HTML 实体解析）
     * @param string $text
     * @return string
     */
    private function prepareText($text)
    {
        $text = preg_replace('/&(#(?:x[a-fA-F0-9]+|[0-9]+);)/', '&#38;\1', strval($text));
        if (function_exists('mb_encode_numericentity')) {
            $text = @mb_encode_numericentity($text, [0x0080, 0xffff, 0, 0xffff], 'UTF-8');
        }
        return $text;
    }
}
