<?php

namespace ModStart\Core\Util\Gd;

use Illuminate\Http\Response;
use ModStart\Core\Compat\Gd as GdCompat;

/**
 * GD 图像处理（内部实现）
 *
 * 用于替代第三方 intervention/image，只实现 ModStart 代码中实际使用到的 API 子集，
 * 保持与原来一致的链式调用方式（make / canvas / resize / insert / text / encode / save / response）。
 *
 * 句柄统一通过 \ModStart\Core\Compat\Gd 处理，兼容 PHP 5.6 ~ 8.x（resource -> GdImage 对象）。
 */
class GdImage
{
    /** @var mixed GD 句柄 */
    protected $core;

    /** @var string|null 源文件路径 */
    protected $filePath = null;

    /** @var string 图片格式 jpeg|png|gif|webp|bmp */
    protected $format = 'png';

    /**
     * @param mixed $core GD 句柄
     * @param string $format 图片格式
     * @param string|null $filePath 源文件路径
     */
    public function __construct($core = null, $format = 'png', $filePath = null)
    {
        $this->core = $core;
        $this->format = $format;
        $this->filePath = $filePath;
    }

    /**
     * 从文件、二进制内容或已有句柄创建图像
     * @param mixed $source 文件路径 / 二进制内容 / GD 句柄 / GdImage
     * @return GdImage
     */
    public static function make($source)
    {
        if ($source instanceof GdImage) {
            return new GdImage($source->getCore(), $source->getFormat(), $source->getFilePath());
        }
        if (GdCompat::isImage($source)) {
            return new GdImage($source);
        }
        if (!is_string($source) || '' === $source) {
            throw new \RuntimeException('Unable to init image: invalid source');
        }
        $path = null;
        if (strlen($source) < 4096 && @is_file($source)) {
            $path = $source;
            $data = @file_get_contents($source);
        } else {
            $data = $source;
        }
        if (false === $data || '' === $data) {
            throw new \RuntimeException('Unable to read image source');
        }
        $core = @imagecreatefromstring($data);
        if (!$core) {
            throw new \RuntimeException('Unable to decode image data');
        }
        $format = $path ? self::formatOfPath($path) : self::formatOfData($data);
        $image = new GdImage($core, $format, $path);
        $image->normalize();
        return $image;
    }

    /**
     * 创建画布
     * @param int $width
     * @param int $height
     * @param string|array|null $background 背景色，为空时为透明
     * @return GdImage
     */
    public static function canvas($width, $height, $background = null)
    {
        $width = max(1, intval($width));
        $height = max(1, intval($height));
        $core = imagecreatetruecolor($width, $height);
        imagesavealpha($core, true);
        imagealphablending($core, false);
        if (null === $background) {
            $color = imagecolorallocatealpha($core, 0, 0, 0, 127);
        } else {
            $color = self::allocate($core, self::parseColor($background));
        }
        imagefill($core, 0, 0, $color);
        imagealphablending($core, true);
        return new GdImage($core, 'png');
    }

    /**
     * 颜色解析为 GD 的 [r, g, b, alpha(0-127)]
     * @param mixed $color 支持 #RGB / #RRGGBB / #RRGGBBAA / rgb() / rgba() / [r,g,b] / [r,g,b,a]
     * @return array
     */
    public static function parseColor($color)
    {
        $result = ['r' => 0, 'g' => 0, 'b' => 0, 'a' => 0];
        if (is_array($color)) {
            $values = array_values($color);
            $result['r'] = isset($values[0]) ? intval($values[0]) : 0;
            $result['g'] = isset($values[1]) ? intval($values[1]) : 0;
            $result['b'] = isset($values[2]) ? intval($values[2]) : 0;
            if (isset($values[3])) {
                $alpha = floatval($values[3]);
                if ($alpha > 1) {
                    $alpha = $alpha / 127;
                }
                $result['a'] = self::alphaToGd($alpha);
            }
            return $result;
        }
        $color = trim(strval($color));
        if ('' === $color) {
            return $result;
        }
        if ('transparent' === strtolower($color)) {
            $result['a'] = 127;
            return $result;
        }
        if (preg_match('/^#([0-9a-fA-F]{3})$/', $color, $mat)) {
            $result['r'] = hexdec(str_repeat($mat[1][0], 2));
            $result['g'] = hexdec(str_repeat($mat[1][1], 2));
            $result['b'] = hexdec(str_repeat($mat[1][2], 2));
            return $result;
        }
        if (preg_match('/^#([0-9a-fA-F]{6})$/', $color, $mat)) {
            $result['r'] = hexdec(substr($mat[1], 0, 2));
            $result['g'] = hexdec(substr($mat[1], 2, 2));
            $result['b'] = hexdec(substr($mat[1], 4, 2));
            return $result;
        }
        if (preg_match('/^#([0-9a-fA-F]{8})$/', $color, $mat)) {
            $result['r'] = hexdec(substr($mat[1], 0, 2));
            $result['g'] = hexdec(substr($mat[1], 2, 2));
            $result['b'] = hexdec(substr($mat[1], 4, 2));
            $result['a'] = self::alphaToGd(hexdec(substr($mat[1], 6, 2)) / 255);
            return $result;
        }
        if (preg_match('/^rgba?\(([^)]+)\)$/i', $color, $mat)) {
            $parts = preg_split('/\s*,\s*/', trim($mat[1]));
            $result['r'] = isset($parts[0]) ? intval($parts[0]) : 0;
            $result['g'] = isset($parts[1]) ? intval($parts[1]) : 0;
            $result['b'] = isset($parts[2]) ? intval($parts[2]) : 0;
            if (isset($parts[3])) {
                $result['a'] = self::alphaToGd(floatval($parts[3]));
            }
            return $result;
        }
        return $result;
    }

    /**
     * 透明度（0 全透明 ~ 1 不透明）转换为 GD alpha（0 不透明 ~ 127 全透明）
     * @param float $alpha
     * @return int
     */
    public static function alphaToGd($alpha)
    {
        $alpha = max(0, min(1, floatval($alpha)));
        return intval(round(127 - $alpha * 127));
    }

    /**
     * GD alpha 转换为透明度（0 全透明 ~ 1 不透明）
     * @param int $alpha
     * @return float
     */
    public static function gdToAlpha($alpha)
    {
        return 1 - (max(0, min(127, intval($alpha))) / 127);
    }

    /**
     * 分配颜色
     * @param mixed $core
     * @param array $color parseColor 结果
     * @return int
     */
    public static function allocate($core, $color)
    {
        return imagecolorallocatealpha($core, $color['r'], $color['g'], $color['b'], $color['a']);
    }

    /**
     * 按文件后缀识别格式
     * @param string $path
     * @return string
     */
    public static function formatOfPath($path)
    {
        $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        if (in_array($ext, ['jpg', 'jpeg'])) {
            return 'jpeg';
        }
        if (in_array($ext, ['png', 'gif', 'webp', 'bmp'])) {
            return $ext;
        }
        return 'png';
    }

    /**
     * 按二进制内容识别格式
     * @param string $data
     * @return string
     */
    private static function formatOfData($data)
    {
        if (function_exists('getimagesizefromstring')) {
            $info = @getimagesizefromstring($data);
            if (is_array($info) && isset($info[2])) {
                switch ($info[2]) {
                    case IMAGETYPE_JPEG:
                        return 'jpeg';
                    case IMAGETYPE_PNG:
                        return 'png';
                    case IMAGETYPE_GIF:
                        return 'gif';
                    case IMAGETYPE_BMP:
                        return 'bmp';
                    case IMAGETYPE_WEBP:
                        return 'webp';
                }
            }
        }
        return 'png';
    }

    /**
     * 统一为真彩色并保留透明通道
     * @return void
     */
    protected function normalize()
    {
        if (function_exists('imageistruecolor') && !imageistruecolor($this->core)) {
            if (function_exists('imagepalettetotruecolor')) {
                @imagepalettetotruecolor($this->core);
            }
        }
        imagesavealpha($this->core, true);
        imagealphablending($this->core, true);
    }

    /**
     * @return mixed GD 句柄
     */
    public function getCore()
    {
        return $this->core;
    }

    /**
     * @param mixed $core
     * @return $this
     */
    public function setCore($core)
    {
        $this->core = $core;
        return $this;
    }

    /**
     * @return string
     */
    public function getFormat()
    {
        return $this->format;
    }

    /**
     * @return string|null
     */
    public function getFilePath()
    {
        return $this->filePath;
    }

    /**
     * @return int
     */
    public function width()
    {
        return imagesx($this->core);
    }

    /**
     * @return int
     */
    public function height()
    {
        return imagesy($this->core);
    }

    /**
     * @return int
     */
    public function filesize()
    {
        if (!empty($this->filePath) && file_exists($this->filePath)) {
            return intval(filesize($this->filePath));
        }
        return 0;
    }

    /**
     * 等比/指定尺寸缩放
     * @param int|null $width
     * @param int|null $height
     * @param callable|null $callback 用于设置 aspectRatio / upsize 约束
     * @return $this
     */
    public function resize($width = null, $height = null, $callback = null)
    {
        $constraint = new GdImageConstraint();
        if (is_callable($callback)) {
            call_user_func($callback, $constraint);
        }
        $srcWidth = $this->width();
        $srcHeight = $this->height();
        $dstWidth = null === $width ? $srcWidth : intval($width);
        $dstHeight = null === $height ? $srcHeight : intval($height);
        if ($constraint->isAspectRatio()) {
            $ratioWidth = $dstWidth / max(1, $srcWidth);
            $ratioHeight = $dstHeight / max(1, $srcHeight);
            $ratio = min($ratioWidth, $ratioHeight);
            if ($constraint->isUpsize() && $ratio > 1) {
                $ratio = 1;
            }
            $dstWidth = max(1, intval(round($srcWidth * $ratio)));
            $dstHeight = max(1, intval(round($srcHeight * $ratio)));
        }
        $dstWidth = max(1, $dstWidth);
        $dstHeight = max(1, $dstHeight);
        $modified = imagecreatetruecolor($dstWidth, $dstHeight);
        imagesavealpha($modified, true);
        imagealphablending($modified, false);
        $transparent = imagecolorallocatealpha($modified, 0, 0, 0, 127);
        imagefill($modified, 0, 0, $transparent);
        imagealphablending($modified, true);
        imagecopyresampled($modified, $this->core, 0, 0, 0, 0, $dstWidth, $dstHeight, $srcWidth, $srcHeight);
        $oldCore = $this->core;
        $this->core = $modified;
        GdCompat::destroy($oldCore);
        return $this;
    }

    /**
     * 裁剪
     * @param int $width
     * @param int $height
     * @param int $x
     * @param int $y
     * @return $this
     */
    public function crop($width, $height, $x = 0, $y = 0)
    {
        $width = max(1, intval($width));
        $height = max(1, intval($height));
        $modified = imagecreatetruecolor($width, $height);
        imagesavealpha($modified, true);
        imagealphablending($modified, false);
        $transparent = imagecolorallocatealpha($modified, 0, 0, 0, 127);
        imagefill($modified, 0, 0, $transparent);
        imagealphablending($modified, true);
        imagecopy($modified, $this->core, 0, 0, intval($x), intval($y), $width, $height);
        $oldCore = $this->core;
        $this->core = $modified;
        GdCompat::destroy($oldCore);
        return $this;
    }

    /**
     * 旋转（正值为逆时针，与 GD 一致）
     * @param int $angle 角度
     * @param string|array|null $background 旋转后空白的填充色
     * @return $this
     */
    public function rotate($angle, $background = null)
    {
        // 未指定背景时使用全透明填充，保证 PNG 旋转后四角透明
        $color = self::allocate($this->core, self::parseColor(null === $background ? 'rgba(0,0,0,0)' : $background));
        imagealphablending($this->core, false);
        $rotated = imagerotate($this->core, fmod(floatval($angle), 360), $color);
        imagealphablending($this->core, true);
        if (false !== $rotated) {
            $oldCore = $this->core;
            $this->core = $rotated;
            imagesavealpha($this->core, true);
            imagealphablending($this->core, true);
            GdCompat::destroy($oldCore);
        }
        return $this;
    }

    /**
     * 翻转
     * @param string $mode h 水平 / v 垂直
     * @return $this
     */
    public function flip($mode = 'h')
    {
        $horizontal = !in_array(strtolower(strval($mode)), ['v', 'vert', 'vertical']);
        if (function_exists('imageflip')) {
            imageflip($this->core, $horizontal ? IMG_FLIP_HORIZONTAL : IMG_FLIP_VERTICAL);
            return $this;
        }
        $width = $this->width();
        $height = $this->height();
        $modified = imagecreatetruecolor($width, $height);
        imagesavealpha($modified, true);
        imagealphablending($modified, false);
        $transparent = imagecolorallocatealpha($modified, 0, 0, 0, 127);
        imagefill($modified, 0, 0, $transparent);
        imagealphablending($modified, true);
        for ($x = 0; $x < $width; $x++) {
            for ($y = 0; $y < $height; $y++) {
                $dstX = $horizontal ? ($width - 1 - $x) : $x;
                $dstY = $horizontal ? $y : ($height - 1 - $y);
                $color = imagecolorat($this->core, $x, $y);
                imagesetpixel($modified, $dstX, $dstY, $color);
            }
        }
        $oldCore = $this->core;
        $this->core = $modified;
        GdCompat::destroy($oldCore);
        return $this;
    }

    /**
     * 设置整体不透明度
     * @param int $transparency 0-100，100 为不透明
     * @return $this
     */
    public function opacity($transparency)
    {
        $target = max(0, min(1, floatval($transparency) / 100));
        $width = $this->width();
        $height = $this->height();
        $modified = imagecreatetruecolor($width, $height);
        imagesavealpha($modified, true);
        imagealphablending($modified, false);
        for ($x = 0; $x < $width; $x++) {
            for ($y = 0; $y < $height; $y++) {
                $color = imagecolorat($this->core, $x, $y);
                $rgba = imagecolorsforindex($this->core, $color);
                $alpha = min(self::gdToAlpha($rgba['alpha']), $target);
                imagesetpixel($modified, $x, $y, imagecolorallocatealpha($modified, $rgba['red'], $rgba['green'], $rgba['blue'], self::alphaToGd($alpha)));
            }
        }
        $oldCore = $this->core;
        $this->core = $modified;
        GdCompat::destroy($oldCore);
        return $this;
    }

    /**
     * 应用蒙版（蒙版图片透明度或灰度决定镂空程度）
     * @param mixed $maskSource 蒙版图片路径 / 二进制 / GdImage
     * @param bool $maskWithAlpha 是否使用蒙版的透明通道作为蒙版
     * @return $this
     */
    public function mask($maskSource, $maskWithAlpha = false)
    {
        $mask = self::make($maskSource);
        $width = $this->width();
        $height = $this->height();
        if ($mask->width() != $width || $mask->height() != $height) {
            $mask->resize($width, $height);
        }
        $maskCore = $mask->getCore();
        if (!$maskWithAlpha) {
            @imagefilter($maskCore, IMG_FILTER_GRAYSCALE);
        }
        $modified = imagecreatetruecolor($width, $height);
        imagesavealpha($modified, true);
        imagealphablending($modified, false);
        for ($x = 0; $x < $width; $x++) {
            for ($y = 0; $y < $height; $y++) {
                $color = imagecolorat($this->core, $x, $y);
                $rgba = imagecolorsforindex($this->core, $color);
                $maskColor = imagecolorat($maskCore, $x, $y);
                $maskRgba = imagecolorsforindex($maskCore, $maskColor);
                if ($maskWithAlpha) {
                    $maskAlpha = self::gdToAlpha($maskRgba['alpha']);
                } else {
                    if (127 == $maskRgba['alpha']) {
                        $maskAlpha = 0;
                    } else {
                        $maskAlpha = round($maskRgba['red'] / 255, 2);
                    }
                }
                $alpha = min(self::gdToAlpha($rgba['alpha']), $maskAlpha);
                imagesetpixel($modified, $x, $y, imagecolorallocatealpha($modified, $rgba['red'], $rgba['green'], $rgba['blue'], self::alphaToGd($alpha)));
            }
        }
        $oldCore = $this->core;
        $this->core = $modified;
        GdCompat::destroy($oldCore);
        return $this;
    }

    /**
     * 粘贴图片
     * @param mixed $source 图片路径 / 二进制 / GdImage
     * @param string $position top-left|top|top-right|left|center|right|bottom-left|bottom|bottom-right
     * @param int $x
     * @param int $y
     * @return $this
     */
    public function insert($source, $position = 'top-left', $x = 0, $y = 0)
    {
        $watermark = ($source instanceof GdImage) ? $source : self::make($source);
        $width = $this->width();
        $height = $this->height();
        $watermarkWidth = $watermark->width();
        $watermarkHeight = $watermark->height();
        $position = strtolower(strval($position));
        $x = intval($x);
        $y = intval($y);
        switch ($position) {
            case 'top':
                $x = intval(($width - $watermarkWidth) / 2) + $x;
                break;
            case 'top-right':
                $x = $width - $watermarkWidth + $x;
                break;
            case 'left':
                $y = intval(($height - $watermarkHeight) / 2) + $y;
                break;
            case 'center':
                $x = intval(($width - $watermarkWidth) / 2) + $x;
                $y = intval(($height - $watermarkHeight) / 2) + $y;
                break;
            case 'right':
                $x = $width - $watermarkWidth + $x;
                $y = intval(($height - $watermarkHeight) / 2) + $y;
                break;
            case 'bottom-left':
                $y = $height - $watermarkHeight + $y;
                break;
            case 'bottom':
                $x = intval(($width - $watermarkWidth) / 2) + $x;
                $y = $height - $watermarkHeight + $y;
                break;
            case 'bottom-right':
                $x = $width - $watermarkWidth + $x;
                $y = $height - $watermarkHeight + $y;
                break;
        }
        imagealphablending($this->core, true);
        imagecopy($this->core, $watermark->getCore(), $x, $y, 0, 0, $watermarkWidth, $watermarkHeight);
        return $this;
    }

    /**
     * 绘制文字
     * @param string $text 文字内容
     * @param int $x
     * @param int $y
     * @param callable|null $callback 用于设置字体文件、大小、颜色、对齐、角度
     * @param int $angle 旋转角度（覆盖 callback 中设置的角度）
     * @return $this
     */
    public function text($text, $x = 0, $y = 0, $callback = null, $angle = null)
    {
        $font = new GdImageFont(strval($text));
        if (is_callable($callback)) {
            call_user_func($callback, $font);
        }
        if (null !== $angle) {
            $font->angle($angle);
        }
        $font->applyTo($this, intval($x), intval($y));
        return $this;
    }

    /**
     * 绘制线条
     * @param int $x1
     * @param int $y1
     * @param int $x2
     * @param int $y2
     * @param callable|null $callback 通过 $draw->color() 设置颜色
     * @return $this
     */
    public function line($x1, $y1, $x2, $y2, $callback = null)
    {
        $draw = new GdImageDraw();
        if (is_callable($callback)) {
            call_user_func($callback, $draw);
        }
        $color = $draw->getColor();
        if (null === $color) {
            $color = '#000000';
        }
        imagealphablending($this->core, true);
        imageline($this->core, intval($x1), intval($y1), intval($x2), intval($y2), self::allocate($this->core, self::parseColor($color)));
        return $this;
    }

    /**
     * 绘制矩形
     * @param int $x1
     * @param int $y1
     * @param int $x2
     * @param int $y2
     * @param callable|null $callback 通过 $draw->background() / $draw->border() 设置填充与边框
     * @return $this
     */
    public function rectangle($x1, $y1, $x2, $y2, $callback = null)
    {
        $draw = new GdImageDraw();
        if (is_callable($callback)) {
            call_user_func($callback, $draw);
        }
        imagealphablending($this->core, true);
        $background = $draw->getBackground();
        if (null !== $background) {
            imagefilledrectangle($this->core, intval($x1), intval($y1), intval($x2), intval($y2), self::allocate($this->core, self::parseColor($background)));
        }
        $border = $draw->getBorder();
        if (null !== $border) {
            imagerectangle($this->core, intval($x1), intval($y1), intval($x2), intval($y2), self::allocate($this->core, self::parseColor($border)));
        }
        return $this;
    }

    /**
     * 画圆
     * @param int $x
     * @param int $y
     * @param int $radius
     * @param callable|null $callback
     * @return $this
     */
    public function circle($x, $y, $radius, $callback = null)
    {
        $draw = new GdImageDraw();
        if (is_callable($callback)) {
            call_user_func($callback, $draw);
        }
        imagealphablending($this->core, true);
        $radius = intval($radius);
        $background = $draw->getBackground();
        if (null !== $background) {
            imagefilledellipse($this->core, intval($x), intval($y), $radius * 2, $radius * 2, self::allocate($this->core, self::parseColor($background)));
        }
        $border = $draw->getBorder();
        if (null !== $border) {
            imageellipse($this->core, intval($x), intval($y), $radius * 2, $radius * 2, self::allocate($this->core, self::parseColor($border)));
        }
        return $this;
    }

    /**
     * 对比度
     * @param int $level -100 ~ 100
     * @return $this
     */
    public function contrast($level)
    {
        imagefilter($this->core, IMG_FILTER_CONTRAST, intval($level) * -1);
        return $this;
    }

    /**
     * 锐化
     * @param int $amount 0 ~ 100
     * @return $this
     */
    public function sharpen($amount = 10)
    {
        $amount = max(0, min(100, intval($amount)));
        $min = $amount >= 10 ? $amount * -0.01 : 0;
        $max = $amount * -0.025;
        $abs = ((4 * $min + 4 * $max) * -1) + 1;
        $matrix = [
            [$min, $max, $min],
            [$max, $abs, $max],
            [$min, $max, $min],
        ];
        @imageconvolution($this->core, $matrix, 1, 0);
        return $this;
    }

    /**
     * 高斯模糊
     * @param int $amount
     * @return $this
     */
    public function blur($amount = 1)
    {
        $amount = intval($amount);
        for ($i = 0; $i < $amount; $i++) {
            imagefilter($this->core, IMG_FILTER_GAUSSIAN_BLUR);
        }
        return $this;
    }

    /**
     * 反色
     * @return $this
     */
    public function invert()
    {
        imagefilter($this->core, IMG_FILTER_NEGATE);
        return $this;
    }

    /**
     * 编码图片内容
     * @param string|null $format 格式，或 data-url
     * @param int|null $quality 质量（0-100）
     * @return GdImageEncoded
     */
    public function encode($format = null, $quality = null)
    {
        $dataUrl = false;
        if (null === $format || '' === $format) {
            $format = !empty($this->filePath) ? $this->format : 'png';
        }
        if ('data-url' === strtolower($format)) {
            $dataUrl = true;
            $format = 'png';
        }
        list($encoded, $mime) = $this->encodeRaw($format, $quality);
        if ($dataUrl) {
            $encoded = 'data:' . $mime . ';base64,' . base64_encode($encoded);
        }
        return new GdImageEncoded($encoded, $mime, $format);
    }

    /**
     * 保存图片
     * @param string|null $path
     * @param int|null $quality
     * @param string|null $format
     * @return $this
     */
    public function save($path = null, $quality = null, $format = null)
    {
        if (null === $path) {
            $path = $this->filePath;
        }
        if (empty($path)) {
            throw new \RuntimeException('Unable to save image: path is empty');
        }
        if (null === $format) {
            $format = self::formatOfPath($path);
        }
        list($encoded) = $this->encodeRaw($format, $quality);
        file_put_contents($path, $encoded);
        $this->filePath = $path;
        $this->format = $format;
        return $this;
    }

    /**
     * 输出为 HTTP 响应
     * @param string|null $format
     * @param int|null $quality
     * @return Response
     */
    public function response($format = null, $quality = null)
    {
        $encoded = $this->encode($format, $quality);
        return new Response($encoded->getEncoded(), 200, [
            'Content-Type' => $encoded->getMimeType(),
        ]);
    }

    /**
     * 释放图像资源
     * @return void
     */
    public function destroy()
    {
        GdCompat::destroy($this->core);
        $this->core = null;
    }

    /**
     * 编码为二进制
     * @param string $format
     * @param int|null $quality
     * @return array [二进制内容, mime]
     */
    private function encodeRaw($format, $quality = null)
    {
        if (null === $quality) {
            $quality = 90;
        }
        $quality = max(0, min(100, intval($quality)));
        $format = strtolower(strval($format));
        if (in_array($format, ['jpg', 'jpeg'])) {
            $format = 'jpeg';
            $mime = 'image/jpeg';
        } else if ('gif' === $format) {
            $mime = 'image/gif';
        } else if ('webp' === $format) {
            $mime = 'image/webp';
        } else if ('bmp' === $format) {
            $mime = 'image/bmp';
        } else {
            $format = 'png';
            $mime = 'image/png';
        }
        $core = $this->core;
        $release = false;
        if ('jpeg' === $format) {
            $core = $this->flattenToWhite();
            $release = true;
        }
        ob_start();
        switch ($format) {
            case 'jpeg':
                imagejpeg($core, null, $quality);
                break;
            case 'gif':
                imagegif($core);
                break;
            case 'webp':
                if (function_exists('imagewebp')) {
                    imagewebp($core, null, $quality);
                } else {
                    imagepng($core);
                    $mime = 'image/png';
                }
                break;
            case 'bmp':
                if (function_exists('imagebmp')) {
                    imagebmp($core);
                } else {
                    imagepng($core);
                    $mime = 'image/png';
                }
                break;
            default:
                $level = intval(round((100 - $quality) / 10));
                imagepng($core, null, max(0, min(9, $level)));
                break;
        }
        $encoded = ob_get_clean();
        if ($release) {
            GdCompat::destroy($core);
        }
        return [$encoded, $mime];
    }

    /**
     * 复制到白色背景（用于 JPEG 输出，避免透明区域变黑）
     * @return mixed
     */
    private function flattenToWhite()
    {
        $width = $this->width();
        $height = $this->height();
        $flatten = imagecreatetruecolor($width, $height);
        imagealphablending($flatten, false);
        $white = imagecolorallocate($flatten, 255, 255, 255);
        imagefill($flatten, 0, 0, $white);
        imagealphablending($flatten, true);
        imagecopy($flatten, $this->core, 0, 0, 0, 0, $width, $height);
        return $flatten;
    }
}
