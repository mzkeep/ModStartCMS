<?php


namespace ModStart\Widget\Chart;


class Pie extends Chart
{
    protected $option = [
        'grid' => [
            'top' => '20%',
            'right' => '0',
            'left' => '0',
            'bottom' => '0',
            'containLabel' => true
        ],
        'tooltip' => [
            'trigger' => 'item',
        ],
        'legend' => [
            'orient' => 'vertical',
            'left' => 'left',
        ],
        'series' => [
            [
                'type' => 'pie',
                'radius' => '80%',
                'data' => [],
                'emphasis' => [
                    'itemStyle' => [
                        'shadowBlur' => 10,
                        'shadowOffsetX' => 0,
                        'shadowColor' => 'rgba(0, 0, 0, 0.5)'
                    ]
                ]
            ]
        ]
    ];

    public function random()
    {
        $data = [];
        foreach ([
                     'Android', 'iOS', 'Windows', 'MacOS', 'Linux', 'Other',
                 ] as $k) {
            $data[] = [
                'name' => $k,
                'value' => rand(100, 1000),
            ];
        }
        $this->data($data);
        return $this;
    }

    /**
     * Laravel 13 的 Illuminate\Support\Fluent 新增了 `data($key = null, $default = null)`，
     * 非静态的成员方法同样受签名兼容约束。这里原签名只有一个必需参数，加载类即 fatal，
     * 故改写成 variadic（调用方只会传一个 $data，参见 random() 与上方 usages）。
     *
     * @param array $data
     * @return $this
     */
    public function data(...$arguments)
    {
        $data = isset($arguments[0]) ? $arguments[0] : array();
        $this->option['series'][0]['data'] = $data;
        return $this;
    }

}
