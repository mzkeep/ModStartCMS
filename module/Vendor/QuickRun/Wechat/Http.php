<?php

namespace Module\Vendor\QuickRun\Wechat;

use ModStart\Core\Exception\BizException;

/**
 * 微信接口 HTTP 工具（不依赖任何第三方 HTTP / 微信 SDK）
 */
class Http
{
    /**
     * 发起请求
     * @param string $method GET|POST
     * @param string $url
     * @param string|null $body
     * @param array $headers
     * @param int $timeout
     * @return array ['httpCode' => int, 'body' => string, 'headers' => array]
     */
    public static function request($method, $url, $body = null, $headers = [], $timeout = 30)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        if ('POST' === strtoupper($method)) {
            curl_setopt($ch, CURLOPT_POST, true);
            if (null !== $body) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
            }
        }
        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }
        $responseBody = curl_exec($ch);
        $httpCode = intval(curl_getinfo($ch, CURLINFO_HTTP_CODE));
        $error = curl_error($ch);
        \ModStart\Core\Compat\Curl::close($ch);
        if (false === $responseBody) {
            BizException::throws('微信接口请求失败: ' . $error);
        }
        return [
            'httpCode' => $httpCode,
            'body' => strval($responseBody),
        ];
    }

    /**
     * GET 请求（自动拼接查询参数）
     * @param string $url
     * @param array $query
     * @return array
     */
    public static function get($url, $query = [])
    {
        if (!empty($query)) {
            $url .= (false === strpos($url, '?') ? '?' : '&') . http_build_query($query);
        }
        return self::request('GET', $url);
    }

    /**
     * POST JSON
     * @param string $url
     * @param array $data
     * @return array
     */
    public static function postJson($url, $data)
    {
        return self::request('POST', $url, self::jsonEncode($data), [
            'Content-Type: application/json; charset=utf-8',
        ]);
    }

    /**
     * POST XML（微信支付 V2 接口）
     * @param string $url
     * @param array $data
     * @return array
     */
    public static function postXml($url, $data)
    {
        $ret = self::request('POST', $url, self::arrayToXml($data), [
            'Content-Type: text/xml; charset=utf-8',
        ]);
        return self::xmlToArray($ret['body']);
    }

    /**
     * 上传文件（multipart/form-data）
     * @param string $url
     * @param string $filePath
     * @param string $field
     * @return array
     */
    public static function upload($url, $filePath, $field = 'media')
    {
        if (!file_exists($filePath)) {
            BizException::throws('上传文件不存在: ' . $filePath);
        }
        if (class_exists('CURLFile')) {
            $post = [$field => new \CURLFile($filePath)];
        } else {
            $post = [$field => '@' . $filePath];
        }
        return self::request('POST', $url, $post);
    }

    /**
     * 解析 JSON 响应
     * @param array $ret
     * @return array
     */
    public static function jsonData($ret)
    {
        $data = @json_decode($ret['body'], true);
        if (!is_array($data)) {
            BizException::throws('微信接口返回格式错误: ' . mb_substr($ret['body'], 0, 200));
        }
        if (isset($data['errcode']) && intval($data['errcode']) > 0) {
            BizException::throws('微信接口错误(' . $data['errcode'] . '): ' . (isset($data['errmsg']) ? $data['errmsg'] : ''));
        }
        return $data;
    }

    /**
     * XML 转数组
     * @param string $xml
     * @return array
     */
    public static function xmlToArray($xml)
    {
        if ('' === trim(strval($xml))) {
            return [];
        }
        $document = @simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA | LIBXML_NOERROR);
        if (false === $document) {
            return [];
        }
        return self::xmlNodeToArray($document);
    }

    /**
     * @param \SimpleXMLElement $node
     * @return array
     */
    private static function xmlNodeToArray($node)
    {
        $result = [];
        foreach ($node->children() as $child) {
            $name = $child->getName();
            if (count($child->children()) > 0) {
                $result[$name] = self::xmlNodeToArray($child);
            } else {
                $result[$name] = strval($child);
            }
        }
        return $result;
    }

    /**
     * 数组转 XML
     * @param array $data
     * @return string
     */
    public static function arrayToXml($data)
    {
        $xml = '<xml>';
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                continue;
            }
            if (is_numeric($value)) {
                $xml .= '<' . $key . '>' . $value . '</' . $key . '>';
            } else {
                $xml .= '<' . $key . '><![CDATA[' . $value . ']]></' . $key . '>';
            }
        }
        $xml .= '</xml>';
        return $xml;
    }

    /**
     * @param array $data
     * @return string
     */
    public static function jsonEncode($data)
    {
        return json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    /**
     * 随机字符串
     * @param int $length
     * @return string
     */
    public static function randomString($length = 32)
    {
        $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        $max = strlen($chars) - 1;
        $result = '';
        for ($i = 0; $i < $length; $i++) {
            $result .= $chars[mt_rand(0, $max)];
        }
        return $result;
    }

    /**
     * 微信 V2 签名（MD5，key 排序）
     * @param array $data
     * @param string $key
     * @return string
     */
    public static function md5Sign($data, $key)
    {
        ksort($data);
        $pairs = [];
        foreach ($data as $k => $v) {
            if ('' === strval($v) || 'sign' === $k) {
                continue;
            }
            $pairs[] = $k . '=' . $v;
        }
        $pairs[] = 'key=' . $key;
        return strtoupper(md5(implode('&', $pairs)));
    }

    /**
     * 校验 V2 签名
     * @param array $data
     * @param string $key
     * @return bool
     */
    public static function verifyMd5Sign($data, $key)
    {
        if (empty($data['sign'])) {
            return false;
        }
        $sign = $data['sign'];
        $calc = self::md5Sign($data, $key);
        return strtoupper($sign) === $calc;
    }
}
