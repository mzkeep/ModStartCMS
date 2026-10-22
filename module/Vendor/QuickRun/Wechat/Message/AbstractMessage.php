<?php

namespace Module\Vendor\QuickRun\Wechat\Message;

/**
 * 微信消息基类（客服消息 / 被动回复）
 */
abstract class AbstractMessage
{
    /** @var string */
    protected $type = 'text';

    /** @var array */
    protected $attributes = [];

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * 转换为客服消息请求体
     * @return array
     */
    public function toCustomerServiceData()
    {
        return [
            'msgtype' => $this->type,
            $this->type => $this->attributes,
        ];
    }

    /**
     * 转换为被动回复 XML 数据
     * @return array
     */
    public function toReplyData()
    {
        $data = ['MsgType' => $this->type];
        $map = [
            'text' => ['content' => 'Content'],
            'image' => ['media_id' => 'MediaId'],
        ];
        if (isset($map[$this->type])) {
            foreach ($map[$this->type] as $from => $to) {
                if (isset($this->attributes[$from])) {
                    $data[$to] = $this->attributes[$from];
                }
            }
        }
        return $data;
    }

    /**
     * @return array
     */
    public function getAttributes()
    {
        return $this->attributes;
    }
}
