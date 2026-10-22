<?php

/**
 * 内置 Markdown 转换测试（module/Vendor/Markdown/Markdown）
 *
 * 覆盖：标题、段落与换行、粗体/斜体/删除线、行内代码、代码块、链接、图片、
 *      引用、有序/无序列表、表格、分割线，以及 HTML→Markdown 的既有能力。
 */

use ModStart\Test\TestCase;
use Module\Vendor\Markdown\MarkdownUtil;

TestCase::describe('Markdown 内置实现', function () {

    TestCase::test('标题与段落', function () {
        TestCase::assertEquals('<h1>标题一</h1>', MarkdownUtil::convertToHtml('# 标题一'), '一级标题');
        TestCase::assertEquals('<h3>标题三</h3>', MarkdownUtil::convertToHtml('### 标题三'), '三级标题');
        TestCase::assertEquals('<p>第一行</p>', MarkdownUtil::convertToHtml('第一行'), '段落');
        TestCase::assertEquals('<p>第一行<br />第二行</p>', MarkdownUtil::convertToHtml("第一行\n第二行"), '软换行转 br');
    });

    TestCase::test('行内样式与代码', function () {
        TestCase::assertContains('<strong>粗体</strong>', MarkdownUtil::convertToHtml('**粗体**'), '粗体');
        TestCase::assertContains('<em>斜体</em>', MarkdownUtil::convertToHtml('*斜体*'), '斜体');
        TestCase::assertContains('<del>删除</del>', MarkdownUtil::convertToHtml('~~删除~~'), '删除线');
        TestCase::assertContains('<code>code()</code>', MarkdownUtil::convertToHtml('`code()`'), '行内代码');
    });

    TestCase::test('代码块保留原始内容且转义', function () {
        $html = MarkdownUtil::convertToHtml("```php\n<?php echo 1 < 2;\n```");
        TestCase::assertContains('<pre><code class="language-php">', $html, '代码块带语言标识');
        TestCase::assertContains('&lt;?php', $html, '代码内容被转义');
        TestCase::assertFalse(false !== strpos($html, '<strong>'), '代码块内不做行内解析');
    });

    TestCase::test('链接与图片', function () {
        TestCase::assertContains('<a href="https://example.com" target="_blank" rel="noopener">示例</a>', MarkdownUtil::convertToHtml('[示例](https://example.com)'), '链接');
        TestCase::assertContains('<img src="https://example.com/a.png" alt="图" />', MarkdownUtil::convertToHtml('![图](https://example.com/a.png)'), '图片');
    });

    TestCase::test('引用、列表与分割线', function () {
        TestCase::assertEquals('<blockquote>引用内容</blockquote>', MarkdownUtil::convertToHtml('> 引用内容'), '引用');
        TestCase::assertEquals('<ul><li>条目一</li><li>条目二</li></ul>', MarkdownUtil::convertToHtml("- 条目一\n- 条目二"), '无序列表');
        TestCase::assertEquals('<ol><li>第一</li><li>第二</li></ol>', MarkdownUtil::convertToHtml("1. 第一\n2. 第二"), '有序列表');
        TestCase::assertEquals('<hr />', MarkdownUtil::convertToHtml('---'), '分割线');
    });

    TestCase::test('表格渲染', function () {
        $markdown = "| 名称 | 数量 |\n| --- | --- |\n| A | 1 |\n| B | 2 |";
        $html = MarkdownUtil::convertToHtml($markdown);
        TestCase::assertContains('<table class="ub-table">', $html, '表格容器');
        TestCase::assertContains('<th>名称</th><th>数量</th>', $html, '表头');
        TestCase::assertContains('<td>A</td><td>1</td>', $html, '表体第一行');
        TestCase::assertContains('<td>B</td><td>2</td>', $html, '表体第二行');
    });

    TestCase::test('HTML 转 Markdown（既有能力）', function () {
        $markdown = MarkdownUtil::convertToMarkdown('<h2>标题</h2><p><strong>加粗</strong>文本</p>');
        TestCase::assertContains('## 标题', $markdown, '标题转换');
        TestCase::assertContains('**加粗**', $markdown, '粗体转换');
        TestCase::assertContains('文本', $markdown, '正文保留');
    });

});
