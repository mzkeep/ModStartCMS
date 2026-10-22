<?php

namespace Module\VisitStatistic\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class ItemCliController extends Controller
{
    use CliCrud;

    /**
     * @Api 网站访问记录 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\VisitStatistic\Model\VisitStatisticItem::class, '');
    }

    /**
     * @Api 网站访问记录 新增
     * @ApiMethod post
     * @ApiBodyParam url string url
     * @ApiBodyParam ip string ip
     * @ApiBodyParam device string device
     * @ApiBodyParam ua string ua
     */
    public function add()
    {
        $data = $this->modelInput(\Module\VisitStatistic\Model\VisitStatisticItem::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\VisitStatistic\Model\VisitStatisticItem::class, $this->withRequiredDefaults(\Module\VisitStatistic\Model\VisitStatisticItem::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 网站访问记录 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam url string url
     * @ApiBodyParam ip string ip
     * @ApiBodyParam device string device
     * @ApiBodyParam ua string ua
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\VisitStatistic\Model\VisitStatisticItem::class, $id));
        $data = $this->modelInput(\Module\VisitStatistic\Model\VisitStatisticItem::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\VisitStatistic\Model\VisitStatisticItem::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api 网站访问记录 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\VisitStatistic\Model\VisitStatisticItem::class, $ids);
        return Response::generateSuccess();
    }
}
