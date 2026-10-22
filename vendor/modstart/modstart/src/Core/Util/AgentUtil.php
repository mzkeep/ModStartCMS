<?php

namespace ModStart\Core\Util;

use Illuminate\Support\Facades\Request;

/**
 * @Util 客户端
 */
class AgentUtil
{
    /**
     * @Util 获取浏览器UserAgent
     * @return string
     */
    public static function getUserAgent()
    {
        static $userAgent = null;
        if (null === $userAgent) {
            $userAgent = Request::header('User-Agent');
        }
        return $userAgent;
    }

    /**
     * @Util 判断浏览器类型
     * @return string pc, mobile
     */
    public static function device()
    {
        if (self::isMobile()) {
            return 'mobile';
        }
        return 'pc';
    }

    /**
     * @Util 判断是否是微信浏览器
     * @return bool
     */
    public static function isWechat()
    {
        static $isWechat = null;
        if (null === $isWechat) {
            $isWechat = false;
            if (strpos(self::getUserAgent(), 'MicroMessenger') !== false) {
                $isWechat = true;
            }
        }
        return $isWechat;
    }

    /**
     * @Util 判断是否是微信手机浏览器
     * @return bool
     */
    public static function isWechatMobile()
    {
        return self::isWechat() && !self::isWechatPC();
    }

    /**
     * @Util 判断是否是微信PC浏览器
     * @return bool
     */
    public static function isWechatPC()
    {
        static $isWechatPC = null;
        if (null === $isWechatPC) {
            $isWechatPC = false;
            if (self::isWechat()) {
                $ua = self::getUserAgent();
                if (
                    strpos($ua, 'WindowsWechat') !== false
                    ||
                    strpos($ua, 'MacWechat') !== false
                ) {
                    $isWechatPC = true;
                }
            }
        }
        return $isWechatPC;
    }

    /**
     * 平板设备 UA 特征（平板按 PC 处理）
     * @var string
     */
    private static $tabletRegex = '/(ipad|tablet|playbook|silk|kindle|nexus 7|nexus 9|nexus 10|sm-t\d|gt-p\d|android(?!.*mobile))/i';

    /**
     * 手机设备 UA 特征
     * @var string
     */
    private static $phoneRegex = '/(iphone|ipod|android.*mobile|windows phone|iemobile|wpdesktop|blackberry|bb10|opera mini|opera mobi|harmonyos|openharmony|mobile)/i';

    /**
     * @Util 判断是否是手机浏览器
     * @param $userAgent string|null 浏览器UserAgent，为空时自动获取
     * @return bool
     */
    public static function isMobile($userAgent = null)
    {
        if (null === $userAgent) {
            $userAgent = self::getUserAgent();
        }
        if (empty($userAgent)) {
            return false;
        }
        // 平板按 PC 处理
        if (preg_match(self::$tabletRegex, $userAgent)) {
            return false;
        }
        return preg_match(self::$phoneRegex, $userAgent) ? true : false;
    }

    /**
     * @Util 获取操作系统类型
     * @param $userAgent string|null 浏览器UserAgent，为空时自动获取
     * @return string iOS|Android|HarmonyOS|Windows|MacOS|Linux|Other
     */
    public static function platform($userAgent = null)
    {
        if (null === $userAgent) {
            $userAgent = self::getUserAgent();
        }
        $userAgent = strval($userAgent);
        if (preg_match('/iphone|ipad|ipod|ios/i', $userAgent)) {
            return 'iOS';
        }
        if (preg_match('/harmonyos|openharmony/i', $userAgent)) {
            return 'HarmonyOS';
        }
        if (preg_match('/android/i', $userAgent)) {
            return 'Android';
        }
        if (preg_match('/windows/i', $userAgent)) {
            return 'Windows';
        }
        if (preg_match('/macintosh|mac os x/i', $userAgent)) {
            return 'MacOS';
        }
        if (preg_match('/linux|x11/i', $userAgent)) {
            return 'Linux';
        }
        return 'Other';
    }

    /**
     * @Util 获取浏览器类型
     * @param $userAgent string|null 浏览器UserAgent，为空时自动获取
     * @return string 浏览器名称
     */
    public static function browser($userAgent = null)
    {
        if (null === $userAgent) {
            $userAgent = self::getUserAgent();
        }
        $userAgent = strval($userAgent);
        $map = [
            '/MicroMessenger/i' => 'WeChat',
            '/QQBrowser|QQ\//i' => 'QQBrowser',
            '/UCBrowser|UCWEB/i' => 'UCBrowser',
            '/Edg(e|A|iOS)?\//i' => 'Edge',
            '/OPR\/|Opera/i' => 'Opera',
            '/Firefox|FxiOS/i' => 'Firefox',
            '/CriOS|Chrome\//i' => 'Chrome',
            '/Safari\//i' => 'Safari',
            '/MSIE|Trident/i' => 'IE',
        ];
        foreach ($map as $regex => $name) {
            if (preg_match($regex, $userAgent)) {
                return $name;
            }
        }
        return 'Other';
    }

    /**
     * @Util 判断是否是电脑浏览器
     * @return bool
     */
    public static function isPC()
    {
        return !self::isMobile();
    }

    private static $robots = [

        '/(googlebot|googleother)/i' => 'Google',
        '/baiduspider/i' => 'Baidu',
        '/360spider/i' => '360',
        '/sogou/i' => 'Sogou',
        '/bingbot/i' => 'Bing',
        '/bytespider/i' => 'TouTiao',

        '/crawler/i' => 'Other',
        '/spider/i' => 'Other',
        // xxxbot
        '/(?:^|[\\W])\\w*bot([\\W\\s]|$)/i' => 'Other',
        '/detector/i' => 'Other',

        // 其他一些库
        '/(curl|python|java|node-fetch|http-client|msray-plus|guzzlehttp|wget|okhttp|scrapy|panelstart|node-superagent|go-camo|cpp-httplib|axios|fasthttp|fetcher|https?:\\/\\/)/i' => 'Other',
        '/^(node)$/i' => 'Other',
        // 其他一些爬虫
        '/(ows.eu|researchscan|github|LogStatistic|Dataprovider|facebook|YandexImages|Iframely|panscient|netcraft|yahoo|censys|Turnitin|Dormouse|Langchain|DeepSeek)/i' => 'Other',
    ];

    /**
     * @Util 获取机器人类型
     * @param $userAgent string|null 浏览器UserAgent，为空时自动获取
     * @return string|null 机器人名称，非机器人时返回null
     */
    public static function detectRobot($userAgent = null)
    {
        if (null === $userAgent) {
            $userAgent = AgentUtil::getUserAgent();
        }
        foreach (self::$robots as $regex => $robot) {
            if (preg_match($regex, $userAgent)) {
                return $robot;
            }
        }
        return null;
    }

    /**
     * @param $name string safari
     * @param $version string >=17.0, <=17.0
     * @return bool
     */
    public static function isBrowser($name, $version = null)
    {
        $ua = self::getUserAgent();
        switch ($name) {
            case 'safari':
                if (strpos($ua, 'Safari') !== false) {
                    if (is_null($version)) {
                        return true;
                    }
                    if (preg_match('/Version\/(.*?)\\s/', $ua, $matches)) {
                        $currentVersion = $matches[1];
                        return VersionUtil::match($currentVersion, $version);
                    }
                }
                break;
        }
        return false;
    }

}
