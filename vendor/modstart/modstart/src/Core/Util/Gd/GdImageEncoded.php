<?php

namespace ModStart\Core\Util\Gd;

/**
 * 图片编码结果
 *
 * 兼容 intervention/image 的返回对象用法：
 *   $image->encode('png')->encoded
 *   $image->encode('png')->getEncoded()
 *   (string)$image->encode('png')
 */
class GdImageEncoded
{
    /** @var string 编码后的二进制内容 */
    public $encoded;

    /** @var string mime 类型 */
    public $mime;

    /** @var string 图片格式 */
    public $format;

    /**
     * @param string $encoded
     * @param string $mime
     * @param string $format
     */
    public function __construct($encoded, $mime, $format)
    {
        $this->encoded = $encoded;
        $this->mime = $mime;
        $this->format = $format;
    }

    /**
     * @return string
     */
    public function getEncoded()
    {
        return $this->encoded;
    }

    /**
     * @return string
     */
    public function getMimeType()
    {
        return $this->mime;
    }

    /**
     * @return string
     */
    public function getFormat()
    {
        return $this->format;
    }

    /**
     * @return string
     */
    public function mime()
    {
        return $this->mime;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return strval($this->encoded);
    }
}
