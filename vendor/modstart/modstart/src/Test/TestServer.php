<?php

namespace ModStart\Test;

/**
 * 测试 HTTP Server 管理工具 — 统一启动 / 关闭 php artisan serve
 *
 * UI 测试需要真实 HTTP 服务时使用：
 *   TestServer::start();
 *   $url = TestServer::url('/admin/login');
 *   ...
 *   TestServer::stop();   // 测试结束必须关闭，避免内存泄露 / 端口占用
 *
 * server 进程由 TestUi::startServer() 或 seed-test 的 UI 阶段自动管理，
 * 也可在 describe 中手动调用。
 */
class TestServer
{
    /** @var resource|null proc_open 进程句柄 */
    private static $process = null;

    /** @var array|null proc_get_status 信息 */
    private static $status = null;

    /** @var string|null 随机端口 */
    private static $port = null;

    /** @var int 随机端口探测范围起始 */
    private static $portRangeStart = 20000;

    /** @var int 随机端口探测范围结束 */
    private static $portRangeEnd = 60000;

    /** @var string|null 启动命令输出管道 */
    private static $pipes = null;

    /**
     * 当前 server 是否已启动
     * @return bool
     */
    public static function isRunning()
    {
        if (empty(self::$process)) {
            return false;
        }
        $status = proc_get_status(self::$process);
        return $status['running'];
    }

    /**
     * 获取当前端口
     * @return int
     */
    public static function port()
    {
        return intval(self::$port);
    }

    /**
     * 获取基础地址
     * @return string
     */
    public static function baseUrl()
    {
        return 'http://127.0.0.1:' . self::$port;
    }

    /**
     * 拼接完整 URL
     * @param string $path 以 / 开头的路径
     * @return string
     */
    public static function url($path)
    {
        if (empty($path)) {
            $path = '/';
        }
        if ($path[0] !== '/') {
            $path = '/' . $path;
        }
        return self::baseUrl() . $path;
    }

    /**
     * 启动 php artisan serve（后台进程），等待端口就绪
     *
     * 端口策略（避免多项目并行测试 / 截图时端口冲突）：
     *   1. 显式传入 $port 时优先使用（仅尝试一次）
     *   2. 环境变量 MS_TEST_SERVER_PORT 可显式指定端口
     *   3. 默认在 [20000, 60000] 范围内随机探测一个真正空闲的端口
     * 端口被占用（如其它项目的 server 正在运行）或启动失败时自动换端口重试。
     *
     * @param int $port 指定端口，默认随机空闲端口
     * @return bool 启动成功返回 true
     */
    public static function start($port = 0)
    {
        if (self::isRunning()) {
            return true;
        }
        if ($port <= 0) {
            $env = getenv('MS_TEST_SERVER_PORT');
            if (!empty($env) && intval($env) > 0) {
                $port = intval($env);
            }
        }
        // 显式指定端口只尝试一次，随机端口失败时换端口重试
        $tries = $port > 0 ? 1 : 5;
        for ($i = 0; $i < $tries; $i++) {
            $tryPort = $port > 0 ? $port : self::randomFreePort();
            if ($tryPort <= 0) {
                break;
            }
            if (self::startOnPort($tryPort)) {
                return true;
            }
        }
        self::$port = null;
        return false;
    }

    /**
     * 在指定端口启动 serve 并等待就绪
     * @param int $port
     * @return bool
     */
    private static function startOnPort($port)
    {
        // 端口已被其它进程监听时直接放弃，避免误连到其它项目的 server
        if (!self::portFree($port)) {
            return false;
        }
        self::$port = $port;
        $base = base_path();
        $phpBin = defined('PHP_BINARY') ? PHP_BINARY : 'php';
        $cmd = $phpBin . ' ' . escapeshellarg($base . '/artisan') . ' serve --host=127.0.0.1 --port=' . $port;
        $descriptors = [
            0 => ['pipe', 'r'],  // stdin
            1 => ['pipe', 'w'],  // stdout
            2 => ['pipe', 'w'],  // stderr
        ];
        self::$process = proc_open($cmd, $descriptors, self::$pipes, $base);
        if (!is_resource(self::$process)) {
            self::$process = null;
            self::$port = null;
            return false;
        }
        // 等待 serve 完成端口绑定，再判断进程是否存活（端口占用时 serve 会立即退出）
        usleep(300000);
        $deadline = time() + 10;
        while (time() < $deadline) {
            $status = proc_get_status(self::$process);
            if (empty($status['running'])) {
                break;
            }
            if (self::portReady($port)) {
                return true;
            }
            usleep(200000);
        }
        self::stop();
        return false;
    }

    /**
     * 随机探测一个空闲端口
     * @return int 探测失败返回 0
     */
    private static function randomFreePort()
    {
        for ($i = 0; $i < 50; $i++) {
            $port = mt_rand(self::$portRangeStart, self::$portRangeEnd);
            if (self::portFree($port)) {
                return $port;
            }
        }
        return 0;
    }

    /**
     * 检测端口是否空闲（可被监听）
     * @param int $port
     * @return bool
     */
    private static function portFree($port)
    {
        $sock = @stream_socket_server('tcp://127.0.0.1:' . $port, $errno, $errstr);
        if ($sock) {
            fclose($sock);
            return true;
        }
        return false;
    }

    /**
     * 关闭 server 进程
     */
    public static function stop()
    {
        if (self::$process) {
            $status = proc_get_status(self::$process);
            if ($status['running']) {
                proc_terminate(self::$process);
                // 等待进程退出
                $deadline = time() + 3;
                while (time() < $deadline) {
                    $s = proc_get_status(self::$process);
                    if (!$s['running']) {
                        break;
                    }
                    usleep(100000);
                }
            }
            if (is_resource(self::$process)) {
                proc_close(self::$process);
            }
        }
        self::$process = null;
        self::$pipes = null;
        self::$status = null;
        self::$port = null;
    }

    /**
     * 检测端口是否已可访问
     * @param int $port
     * @return bool
     */
    private static function portReady($port)
    {
        $sock = @fsockopen('127.0.0.1', $port, $errno, $errstr, 0.5);
        if ($sock) {
            fclose($sock);
            return true;
        }
        return false;
    }
}