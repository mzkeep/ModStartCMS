#!/usr/bin/env node
/**
 * ModStart UI 测试浏览器服务（常驻进程）
 *
 * 通过 stdin/stdout 以行 JSON 通信，驱动真实 Chrome（headless）完成界面操作。
 * 由 PHP 侧 TestUi 启动/关闭，实现"真实浏览器打开界面自动测试"。
 *
 * 指令（stdin 每行一个 JSON）：
 *   {"action":"goto","url":"http://...","name":"说明"}          打开页面
 *   {"action":"login","url":"http://.../admin/login","username":"admin","password":"123456"}  登录后台（填表提交，等待跳转）
 *   {"action":"fill","selector":"input[name=username]","value":"admin"}  填表
 *   {"action":"click","selector":"button[type=submit]"}          点击元素
 *   {"action":"screenshot","path":"/tmp/xxx.png"}                截图
 *   {"action":"eval","script":"document.title"}                  执行 JS 返回结果
 *   {"action":"html"}                                            返回当前页面 HTML
 *   {"action":"screenshot","path":"/tmp/xxx.png","settle":false}  截图（settle:false 跳过滚动稳定流程，用于逐帧动图）
 *   {"action":"viewport","width":1280,"height":800,"mobile":false,"deviceScaleFactor":2}
 *                                                                切换设备/视口（PC 1280x800 / 手机 390x844）
 *                                                                ⚠️ 设备变化会重建 context（cookie 丢失）
 *   {"action":"close"}                                           关闭浏览器并退出
 *
 * 结果（stdout 每行一个 JSON）：
 *   {"ok":true,"status":200,"title":"...","url":"...","html":"...","data":...}
 *   {"ok":false,"error":"..."}
 */

const { chromium } = require(resolvePlaywrightCore());

/**
 * 解析 playwright-core 加载路径：
 *  1. 环境变量 MODSTART_PLAYWRIGHT_CORE_PATH 指定路径
 *  2. 用户目录共享位置 ~/.modstart/auto-test/node-modules/playwright-core
 *  3. 本目录 node_modules/playwright-core
 *  4. 退回 Node 默认解析（require('playwright-core')）
 */
function resolvePlaywrightCore() {
    const fs = require('fs');
    const os = require('os');
    const path = require('path');
    const candidates = [];
    if (process.env.MODSTART_PLAYWRIGHT_CORE_PATH) {
        candidates.push(process.env.MODSTART_PLAYWRIGHT_CORE_PATH);
    }
    const home = process.env.MODSTART_AUTO_TEST_HOME
        ? path.resolve(process.env.MODSTART_AUTO_TEST_HOME)
        : path.join(os.homedir(), '.modstart', 'auto-test', 'node-modules');
    candidates.push(path.join(home, 'playwright-core'));
    candidates.push(path.join(__dirname, 'node_modules', 'playwright-core'));
    for (let i = 0; i < candidates.length; i++) {
        try {
            if (fs.existsSync(path.join(candidates[i], 'package.json'))) {
                return candidates[i];
            }
        } catch (e) {
            // ignore
        }
    }
    return 'playwright-core';
}

const CHROME_CANDIDATES = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];

let browser = null;
let context = null;
let page = null;
let cdpSession = null;
let busy = false;
let busySince = 0;
let genCounter = 0;
const abandoned = new Set();
// 任何一条指令卡住超过该时长都视为异常（正常指令最长约 30s 超时）
const BUSY_TIMEOUT_MS = 90000;

// 默认浏览器 / 截图尺寸（1100x800）
const DEFAULT_VIEWPORT = { width: 1100, height: 800 };

// 当前设备参数（viewport / 是否手机模拟），由 viewport 指令切换
let currentDevice = null;

// iPhone 14 Pro 移动端 UA（手机模式：390x844 CSS px + 移动 UA）
const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) '
    + 'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1';

function findChrome() {
    for (const c of CHROME_CANDIDATES) {
        try {
            if (require('fs').existsSync(c)) {
                return c;
            }
        } catch (e) { /* ignore */ }
    }
    return null;
}

function send(result) {
    process.stdout.write(JSON.stringify(result) + '\n');
}

async function ensurePage() {
    if (page && !page.isClosed()) {
        return page;
    }
    const viewport = currentDevice
        ? { width: currentDevice.width, height: currentDevice.height }
        : DEFAULT_VIEWPORT;
    const contextOptions = {
        viewport: viewport,
        ignoreHTTPSErrors: true,
    };
    if (currentDevice && currentDevice.mobile) {
        contextOptions.deviceScaleFactor = currentDevice.deviceScaleFactor || 2;
        contextOptions.isMobile = true;
        contextOptions.hasTouch = true;
        contextOptions.userAgent = currentDevice.userAgent || IPHONE_UA;
    } else if (currentDevice && currentDevice.deviceScaleFactor) {
        contextOptions.deviceScaleFactor = currentDevice.deviceScaleFactor;
    }
    context = await browser.newContext(contextOptions);
    page = await context.newPage();
    cdpSession = null;
    return page;
}

/**
 * 切换设备 / 视口（用于 PC 与手机两种预览尺寸）。
 * 设备参数变化时会重建 context（会话 cookie 会丢失，仅适用于前台页面截图）。
 */
async function handleViewport(params) {
    const want = {
        width: parseInt(params.width, 10) || DEFAULT_VIEWPORT.width,
        height: parseInt(params.height, 10) || DEFAULT_VIEWPORT.height,
        mobile: !!params.mobile,
        deviceScaleFactor: params.deviceScaleFactor
            ? parseFloat(params.deviceScaleFactor)
            : (params.mobile ? 2 : 1),
    };
    const same = currentDevice
        && currentDevice.width === want.width
        && currentDevice.height === want.height
        && currentDevice.mobile === want.mobile
        && currentDevice.deviceScaleFactor === want.deviceScaleFactor;
    if (same && page && !page.isClosed()) {
        return { ok: true, viewport: want, reused: true };
    }
    currentDevice = want;
    if (context) {
        try { await context.close(); } catch (e) { /* ignore */ }
        context = null;
        page = null;
        cdpSession = null;
    }
    await ensurePage();
    return { ok: true, viewport: want, reused: false };
}

async function handleGoto(params) {
    await ensurePage();
    const url = params.url;
    let resp = null;
    let status = 0;
    try {
        resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        if (resp) {
            status = resp.status();
        }
    } catch (e) {
        // 部分页面（如 AJAX 跳转）可能导航失败，但页面已加载
    }
    const title = await page.title().catch(() => '');
    const finalUrl = page.url();
    let html = '';
    if (params.withHtml) {
        html = await page.content().catch(() => '');
    }
    return { ok: true, status: status, title: title, url: finalUrl, html: html };
}

async function handleLogin(params) {
    await ensurePage();
    await page.goto(params.url, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => {});
    // 等待登录表单
    await page.waitForSelector('input[name=username]', { timeout: 10000 }).catch(() => {});
    await page.fill('input[name=username]', params.username || 'admin').catch(() => {});
    await page.fill('input[name=password]', params.password || '123456').catch(() => {});
    await page.click('button[type=submit]').catch(() => {});
    // 等待跳转（登录成功后跳转到后台首页，或 AJAX 处理完成）
    await page.waitForLoadState('domcontentloaded', { timeout: 15000 }).catch(() => {});
    await new Promise(r => setTimeout(r, 1500));
    const url = page.url();
    const title = await page.title().catch(() => '');
    // 判断是否登录成功：URL 不再是 login
    const loggedIn = url.indexOf('/login') === -1;
    return { ok: true, loggedIn: loggedIn, url: url, title: title };
}

async function handleFill(params) {
    await ensurePage();
    await page.waitForSelector(params.selector, { timeout: 10000 }).catch(() => {});
    await page.fill(params.selector, String(params.value == null ? '' : params.value));
    return { ok: true };
}

async function handleClick(params) {
    await ensurePage();
    await page.waitForSelector(params.selector, { timeout: 10000 }).catch(() => {});
    await page.click(params.selector);
    await new Promise(r => setTimeout(r, 500));
    return { ok: true, url: page.url() };
}

async function handleEval(params) {
    await ensurePage();
    const data = await page.evaluate(params.script);
    return { ok: true, data: data };
}

async function handleHtml() {
    await ensurePage();
    const html = await page.content().catch(() => '');
    const url = page.url();
    return { ok: true, html: html, url: url };
}

/**
 * 截图前的页面稳定处理（固定流程，不要精简）
 *
 * 页面普遍存在「滚动入场动画」（如 `.reveal` 初始 opacity:0，进入视口后才淡入），
 * 若不滚动直接截图：全页截图会缺内容（未进入视口的元素永远不显示）、
 * 普通截图会截到动画中途的模糊文字。
 *
 * 因此统一执行：分步滚到页面底部（触发全部入场动画）→ 等 1 秒（等动画跑完）
 * → 回到顶部 → 等未完成图片加载 + 双 rAF 确保已绘制。
 */
async function settlePage(timeoutMs = 3000) {
    if (!page || page.isClosed()) {
        return;
    }
    // 0) 等页面脚本初始化完成（关键：否则滚动会跑在主题 JS 注册 IntersectionObserver 之前，
    //    滚过去的 .reveal 元素永远等不到 is-visible，全页截图就会缺内容）
    await page.waitForLoadState('load', { timeout: 15000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 200));

    // 1) 分步滚到底部，触发全部滚动入场动画
    await page.evaluate(async () => {
        const doc = document.documentElement;
        const maxScroll = () => Math.max(document.body.scrollHeight, doc.scrollHeight);
        const step = Math.max(200, Math.floor((window.innerHeight || 800) * 0.8));
        let guard = 0;
        for (let y = 0; y <= maxScroll() && guard < 200; y += step, guard += 1) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, maxScroll());
    }).catch(() => {});
    // 2) 等动画跑完（滚动到底部后固定等待 1 秒）
    await new Promise((r) => setTimeout(r, 1000));
    // 3) 再分步滚回顶部：兜住第 0 步之前/之后才被观察到的元素，同时给视口截图留下顶部画面
    await page.evaluate(async () => {
        const step = Math.max(200, Math.floor((window.innerHeight || 800) * 0.8));
        let guard = 0;
        for (let y = window.scrollY; y > 0 && guard < 200; y -= step, guard += 1) {
            window.scrollTo(0, Math.max(0, y));
            await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
    }).catch(() => {});
    // 4) 等未完成图片加载 + 双 rAF 确保已绘制
    await page.evaluate((timeout) => new Promise((resolve) => {
        const done = () => requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        const images = Array.from(document.images || []).filter((img) => !img.complete);
        if (!images.length) {
            done();
            return;
        }
        let left = images.length;
        const timer = setTimeout(() => resolve(), timeout);
        const finish = () => {
            left -= 1;
            if (left <= 0) {
                clearTimeout(timer);
                done();
            }
        };
        images.forEach((img) => {
            img.addEventListener('load', finish, { once: true });
            img.addEventListener('error', finish, { once: true });
        });
    }), timeoutMs).catch(() => {});
    // 给字体 / CSS 过渡留一点时间
    await new Promise((r) => setTimeout(r, 200));
}

async function handleScreenshot(params) {
    await ensurePage();
    // 逐帧动画截图时传 settle:false，跳过「滚到底部」的稳定流程（否则无法逐帧滚动）
    if (params.settle !== false) {
        await settlePage();
    }
    // 通过 CDP（Chrome DevTools Protocol）原生截图，比 page.screenshot 更高效
    if (!cdpSession) {
        cdpSession = await context.newCDPSession(page);
    }
    const shotOptions = {
        format: 'png',
        captureBeyondViewport: !!params.fullPage,
    };
    if (params.clipViewport && !params.fullPage) {
        // 逐帧动图：用 Playwright 原生视口截图（scale:'css' 固定为 CSS 像素尺寸），
        // 保证每帧尺寸完全一致 —— CDP 会按文档剩余高度裁剪，导致帧高不一致
        try {
            await page.screenshot({ path: params.path, fullPage: false, scale: 'css' });
            return { ok: true, path: params.path };
        } catch (e) {
            // 回退 CDP
        }
    }
    // ⚠️ CDP 的 captureScreenshot 在个别页面上会永久不返回（页面过长 / 渲染进程卡住）。
    // 若不加超时，本函数会一直挂起，busy 标志永久为 true，
    // 导致后续所有指令都只回 {"ok":false,"error":"busy"}，
    // 表现为「整个批次突然全部无法访问」。
    // 这里加超时兜底：超时就丢弃 CDP 会话（下次重建）并报错，让流程继续。
    let result;
    try {
        result = await Promise.race([
            cdpSession.send('Page.captureScreenshot', shotOptions),
            new Promise((resolve, reject) => setTimeout(
                () => reject(new Error('CDP screenshot timeout')), 30000)),
        ]);
    } catch (e) {
        cdpSession = null;
        return { ok: false, error: e.message || String(e) };
    }
    if (!result || !result.data) {
        return { ok: false, error: 'CDP screenshot failed' };
    }
    require('fs').writeFileSync(params.path, Buffer.from(result.data, 'base64'));
    return { ok: true, path: params.path };
}

async function dispatch(action, params) {
    switch (action) {
        case 'goto':
            return await handleGoto(params);
        case 'login':
            return await handleLogin(params);
        case 'fill':
            return await handleFill(params);
        case 'click':
            return await handleClick(params);
        case 'eval':
            return await handleEval(params);
        case 'html':
            return await handleHtml();
        case 'viewport':
            return await handleViewport(params);
        case 'screenshot':
            return await handleScreenshot(params);
        default:
            return { ok: false, error: 'unknown action: ' + action };
    }
}

async function main() {
    const chromePath = findChrome();
    if (!chromePath) {
        send({ ok: false, error: 'Chrome 未找到' });
        process.exit(1);
    }
    // SHOW_BROWSER=1 时显示浏览器界面（headed），默认 headless 不显示
    const showBrowser = process.env.SHOW_BROWSER === '1';
    browser = await chromium.launch({
        executablePath: chromePath,
        headless: !showBrowser,
        args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
    });

    const rl = require('readline').createInterface({
        input: process.stdin,
        crlfDelay: Infinity,
    });

    rl.on('line', async (line) => {
        line = line.trim();
        if (!line) {
            return;
        }
        if (busy) {
            // 兜底：上一条指令卡死超过 BUSY_TIMEOUT_MS，强制作废它并重置页面。
            // 否则 busy 永久为 true，后续所有指令都只会回 {"error":"busy"}，
            // 对外表现为「整个批次突然全部无法访问」。
            if (busySince && Date.now() - busySince > BUSY_TIMEOUT_MS) {
                abandoned.add(genCounter);
                busy = false;
                busySince = 0;
                try {
                    if (context) {
                        await context.close();
                    }
                } catch (e) { /* ignore */ }
                context = null;
                page = null;
                cdpSession = null;
            } else {
                send({ ok: false, error: 'busy' });
                return;
            }
        }
        let params = {};
        try {
            params = JSON.parse(line);
        } catch (e) {
            send({ ok: false, error: 'invalid json: ' + line });
            return;
        }
        const myGen = ++genCounter;
        busy = true;
        busySince = Date.now();
        let response;
        try {
            response = await dispatch(params.action, params);
        } catch (e) {
            response = { ok: false, error: e.message || String(e) };
        }
        if (abandoned.has(myGen)) {
            // 该指令已被看门狗作废：静默丢弃回包，避免与后续指令的回包错位
            abandoned.delete(myGen);
            return;
        }
        if (myGen !== genCounter) {
            // 已有更新的指令在跑，本条的回包不再需要
            return;
        }
        busy = false;
        busySince = 0;
        send(response);
        if (params.action === 'close') {
            try { await browser.close(); } catch (e) { /* ignore */ }
            process.exit(0);
        }
    });

    rl.on('close', async () => {
        try { await browser.close(); } catch (e) { /* ignore */ }
        process.exit(0);
    });
}

main().catch((e) => {
    send({ ok: false, error: e.message || String(e) });
    process.exit(1);
});