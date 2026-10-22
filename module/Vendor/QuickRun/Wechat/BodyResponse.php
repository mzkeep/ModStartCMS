<?php

namespace Module\Vendor\QuickRun\Wechat;

/**
 * 原始响应包装（提供与 PSR-7 兼容的 getBody()->getContents() 用法）
 */
class BodyResponse
{
    /** @var string */
    private $content;

    /**
     * @param string $content
     */
    public function __construct($content)
    {
        $this->content = strval($content);
    }

    /**
     * @return BodyResponse
     */
    public function getBody()
    {
        return $this;
    }

    /**
     * @return string
     */
    public function getContents()
    {
        return $this->content;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->content;
    }
}
