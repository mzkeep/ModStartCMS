<?php

namespace Module\Vendor\QuickRun\Wechat\Api;

use ModStart\Core\Exception\BizException;
use Module\Vendor\QuickRun\Wechat\Application;

/**
 * 用户管理接口（/cgi-bin/user/info、/cgi-bin/user/info/batchget）
 */
class UserApi
{
    /** @var Application */
    private $app;

    /**
     * @param Application $app
     */
    public function __construct($app)
    {
        $this->app = $app;
    }

    /**
     * 获取用户基本信息
     * @param string $openId
     * @param string $lang 返回国家地区语言版本，zh_CN / zh_TW / en
     * @return array ['openid' => ..., 'subscribe' => 1, 'nickname' => ..., 'headimgurl' => ..., ...]
     */
    public function get($openId, $lang = 'zh_CN')
    {
        BizException::throwsIfEmpty('用户 OpenId 不能为空', $openId);
        $ret = $this->app->apiGet('/cgi-bin/user/info', [
            'openid' => strval($openId),
            'lang' => $lang,
        ]);
        if (empty($ret['openid'])) {
            $ret['openid'] = strval($openId);
        }
        return $ret;
    }

    /**
     * 批量获取用户基本信息
     * @param array $openIds
     * @param string $lang 返回国家地区语言版本，zh_CN / zh_TW / en
     * @return array 用户信息列表
     */
    public function batchGet($openIds, $lang = 'zh_CN')
    {
        $userList = [];
        foreach ((array)$openIds as $openId) {
            if (empty($openId)) {
                continue;
            }
            $userList[] = [
                'openid' => strval($openId),
                'lang' => $lang,
            ];
        }
        BizException::throwsIfEmpty('用户 OpenId 不能为空', $userList);
        $ret = $this->app->apiPost('/cgi-bin/user/info/batchget', [
            'user_list' => $userList,
        ]);
        return isset($ret['user_info_list']) ? $ret['user_info_list'] : [];
    }
}
