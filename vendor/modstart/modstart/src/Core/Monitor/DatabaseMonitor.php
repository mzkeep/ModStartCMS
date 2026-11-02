<?php


namespace ModStart\Core\Monitor;


use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use ModStart\Core\Util\ArrayUtil;

class DatabaseMonitor
{
    private static $queryCountPerRequest = 0;
    private static $queryCountPerRequestSqls = [];

    public static function init()
    {
        if (!config('modstart.trackPerformance', false)) {
            return;
        }
        self::$queryCountPerRequest = 0;
        self::$queryCountPerRequestSqls = [];
        try {
            DB::listen(function ($query, $bindings = null, $time = null, $connectionName = null) {
                self::$queryCountPerRequest++;
                if ($query instanceof QueryExecuted) {
                    // Laravel 5.2+ 传入 QueryExecuted 对象（laravel9 及之后的 10/11/12/13 同样如此）
                    $sql = $query->sql;
                    $bindings = $query->bindings;
                    $time = $query->time;
                } else {
                    // Laravel 5.1 传入原始 SQL 字符串
                    $sql = $query;
                }
                self::$queryCountPerRequestSqls[] = [
                    'sql' => $sql,
                    'bindings' => $bindings,
                ];
                // Log::info("SQL $sql, " . json_encode($bindings));
                if ($time > config('modstart.trackLongSqlThreshold', 5000)) {
                    Log::warning("LONG_SQL {$time}ms, $sql, " . ArrayUtil::serializeForLog($bindings));
                }
            });
        } catch (\Exception $e) {
        }
    }

    public static function getQueryCountPerRequest()
    {
        return self::$queryCountPerRequest;
    }

    public static function getQueryCountPerRequestSqls()
    {
        foreach (self::$queryCountPerRequestSqls as $i => $v) {
            if (is_array($v)) {
                $bindings = ArrayUtil::serializeForLog($v['bindings']);
                self::$queryCountPerRequestSqls[$i] = $v['sql'] . ', ' . $bindings;
            }
        }
        return self::$queryCountPerRequestSqls;
    }

}
