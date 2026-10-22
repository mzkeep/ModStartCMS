<?php

namespace Module\Vendor\QuickRun\Wechat\Message;

/**
 * 图片消息
 */
class Image extends AbstractMessage
{
    /**
     * @param string $mediaId
     */
    public function __construct($mediaId = '')
    {
        $this->type = 'image';
        $this->attributes = ['media_id' => strval($mediaId)];
    }
}
