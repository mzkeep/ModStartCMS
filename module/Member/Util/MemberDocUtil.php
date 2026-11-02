<?php


namespace Module\Member\Util;


use Module\Vendor\Markdown\MarkdownUtil;

/**
 * 会员相关文档（用户使用协议 / 用户隐私协议 / 账号申诉）
 *
 * 站点可以在 public/theme/Member/ 下放置同名 Markdown 文件维护文档内容，
 * 文件存在时优先使用文件内容（便于随版本库管理和发布），否则使用后台配置内容。
 *
 * 文件格式：
 * # 标题
 *
 * ---
 *
 * 正文（Markdown）
 */
class MemberDocUtil
{
    private static $types = ['agreement', 'privacy', 'appeal'];

    private static $defaultTitles = [
        'agreement' => '用户使用协议',
        'privacy' => '用户隐私协议',
        'appeal' => '账号申诉',
    ];

    /**
     * 支持的文档类型
     * @return array
     */
    public static function types()
    {
        return self::$types;
    }

    /**
     * @param string $type
     * @return boolean
     */
    public static function isType($type)
    {
        if (!is_string($type)) {
            return false;
        }
        return in_array($type, self::$types);
    }

    /**
     * 后台配置键名，如 Member_AgreementTitle
     * @param string $type
     * @param string $field Title|Content
     * @return string
     */
    public static function configKey($type, $field)
    {
        return 'Member_' . ucfirst($type) . $field;
    }

    /**
     * 文档 Markdown 文件路径
     * @param string $type
     * @return string
     */
    public static function file($type)
    {
        return public_path('theme/Member/' . ucfirst($type) . '.md');
    }

    /**
     * 读取文档标题与内容，Markdown 文件优先于后台配置
     * @param string $type agreement|privacy|appeal
     * @return array ['title' => string, 'content' => string, 'from' => string]
     */
    public static function get($type)
    {
        if (!self::isType($type)) {
            return ['title' => '', 'content' => '', 'from' => 'empty'];
        }
        $title = trim(strval(modstart_config(self::configKey($type, 'Title'))));
        if ('' === $title) {
            $title = self::$defaultTitles[$type];
        }
        $data = [
            'title' => $title,
            'content' => modstart_config(self::configKey($type, 'Content')),
            'from' => 'config',
        ];
        $file = self::file($type);
        if (file_exists($file)) {
            $doc = self::parse(self::read($file));
            if ('' !== $doc['content']) {
                if ('' !== $doc['title']) {
                    $data['title'] = $doc['title'];
                }
                $data['content'] = $doc['content'];
                $data['from'] = 'file';
            }
        }
        return $data;
    }

    /**
     * 后台配置项的说明文案：站点已放置 Markdown 文件时提示配置不生效
     * @param string $type
     * @param string $default
     * @return string
     */
    public static function configHelp($type, $default = '')
    {
        if (file_exists(self::file($type))) {
            return '当前站点已使用 <code>public/theme/Member/' . ucfirst($type) . '.md</code> 文件，此处配置不生效，请直接修改文件';
        }
        return '' === $default ? '' : '默认为 ' . $default;
    }

    /**
     * 解析 Markdown 文档内容，格式为「# 标题」+「---」+「正文」
     * @param string $markdown
     * @return array ['title' => string, 'content' => string]
     */
    public static function parse($markdown)
    {
        $markdown = str_replace(["\r\n", "\r"], "\n", strval($markdown));
        // 去除 UTF-8 BOM
        if (strpos($markdown, "\xEF\xBB\xBF") === 0) {
            $markdown = substr($markdown, 3);
        }
        $markdown = trim($markdown);
        if ('' === $markdown) {
            return ['title' => '', 'content' => ''];
        }
        // 以独占一行的 --- 分隔标题与正文
        $parts = preg_split('/\n\s*-{3,}\s*(?:\n|$)/', $markdown, 2);
        $title = self::parseTitle($parts[0]);
        if (count($parts) < 2) {
            // 无分隔符时整篇按正文处理
            return ['title' => $title, 'content' => MarkdownUtil::convertToHtml($markdown)];
        }
        $body = trim($parts[1]);
        return [
            'title' => $title,
            'content' => '' === $body ? '' : MarkdownUtil::convertToHtml($body),
        ];
    }

    /**
     * 标题区取第一个非空行，去掉行首的 # 标记
     * @param string $text
     * @return string
     */
    private static function parseTitle($text)
    {
        foreach (explode("\n", strval($text)) as $line) {
            $line = trim($line);
            if ('' !== $line) {
                return trim(preg_replace('/^#{1,6}\s*/', '', $line));
            }
        }
        return '';
    }

    /**
     * @param string $file
     * @return string
     */
    private static function read($file)
    {
        $content = @file_get_contents($file);
        return false === $content ? '' : $content;
    }
}
