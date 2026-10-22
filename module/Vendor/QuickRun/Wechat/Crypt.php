<?php

namespace Module\Vendor\QuickRun\Wechat;

/**
 * 微信消息加解密（安全模式，WXBizMsgCrypt 兼容实现）
 */
class Crypt
{
    /** @var string */
    private $appId;
    /** @var string */
    private $token;
    /** @var string */
    private $aesKey;

    /**
     * @param string $appId
     * @param string $token
     * @param string $encodingAesKey
     */
    public function __construct($appId, $token, $encodingAesKey)
    {
        $this->appId = $appId;
        $this->token = $token;
        $this->aesKey = base64_decode($encodingAesKey . '=');
    }

    /**
     * 是否可用（未配置 aes_key 时不可用）
     * @return bool
     */
    public function available()
    {
        return strlen($this->aesKey) === 32;
    }

    /**
     * 校验签名
     * @param string $signature
     * @param string $timestamp
     * @param string $nonce
     * @param string $encrypted
     * @return bool
     */
    public function verifySignature($signature, $timestamp, $nonce, $encrypted = '')
    {
        $array = [$this->token, $timestamp, $nonce];
        if ('' !== $encrypted) {
            $array[] = $encrypted;
        }
        sort($array, SORT_STRING);
        return sha1(implode('', $array)) === $signature;
    }

    /**
     * 解密消息
     * @param string $encrypted
     * @return string
     */
    public function decrypt($encrypted)
    {
        if (!$this->available()) {
            throw new \RuntimeException('微信 aes_key 配置错误');
        }
        $cipherText = base64_decode($encrypted);
        $iv = substr($this->aesKey, 0, 16);
        $plain = openssl_decrypt($cipherText, 'AES-256-CBC', $this->aesKey, OPENSSL_RAW_DATA | OPENSSL_ZERO_PADDING, $iv);
        if (false === $plain) {
            throw new \RuntimeException('微信消息解密失败');
        }
        $plain = $this->pkcs7Decode($plain);
        $contentLength = unpack('N', substr($plain, 16, 4));
        $contentLength = $contentLength[1];
        $content = substr($plain, 20, $contentLength);
        $fromAppId = substr($plain, 20 + $contentLength);
        if ($fromAppId !== $this->appId) {
            throw new \RuntimeException('微信消息 AppId 不匹配');
        }
        return $content;
    }

    /**
     * 加密消息
     * @param string $text
     * @return string
     */
    public function encrypt($text)
    {
        if (!$this->available()) {
            throw new \RuntimeException('微信 aes_key 配置错误');
        }
        $random = Http::randomString(16);
        $text = $random . pack('N', strlen($text)) . $text . $this->appId;
        $text = $this->pkcs7Encode($text);
        $iv = substr($this->aesKey, 0, 16);
        return base64_encode(openssl_encrypt($text, 'AES-256-CBC', $this->aesKey, OPENSSL_RAW_DATA | OPENSSL_ZERO_PADDING, $iv));
    }

    /**
     * 生成消息签名
     * @param string $timestamp
     * @param string $nonce
     * @param string $encrypted
     * @return string
     */
    public function signature($timestamp, $nonce, $encrypted)
    {
        $array = [$this->token, $timestamp, $nonce, $encrypted];
        sort($array, SORT_STRING);
        return sha1(implode('', $array));
    }

    /**
     * @param string $text
     * @return string
     */
    private function pkcs7Encode($text)
    {
        $blockSize = 32;
        $pad = $blockSize - (strlen($text) % $blockSize);
        return $text . str_repeat(chr($pad), $pad);
    }

    /**
     * @param string $text
     * @return string
     */
    private function pkcs7Decode($text)
    {
        $pad = ord(substr($text, -1));
        if ($pad < 1 || $pad > 32) {
            $pad = 0;
        }
        return substr($text, 0, strlen($text) - $pad);
    }
}
