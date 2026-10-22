<?php

namespace Module\Vendor\QuickRun\Wechat\Message;

/**
 * 原始 XML 消息（直接作为被动回复内容返回）
 */
class Raw extends AbstractMessage
{
    /** @var string */
    private $raw;

    /**
     * @param string $raw
     */
    public function __construct($raw = '')
    {
        $this->type = 'raw';
        $this->raw = strval($raw);
    }

    /**
     * @return string
     */
    public function getRaw()
    {
        return $this->raw;
    }
}
