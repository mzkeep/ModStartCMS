<?php

namespace Module\Vendor\QuickRun\Wechat\Message;

/**
 * 文本消息
 */
class Text extends AbstractMessage
{
    /**
     * @param string $content
     */
    public function __construct($content = '')
    {
        $this->type = 'text';
        $this->attributes = ['content' => strval($content)];
    }
}
