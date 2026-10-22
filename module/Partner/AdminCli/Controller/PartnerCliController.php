<?php

namespace Module\Partner\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class PartnerCliController extends Controller
{
    use CliCrud;

    /**
     * @Api 友情链接 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\Partner\Model\Partner::class, 'title');
    }

    /**
     * @Api 友情链接 新增
     * @ApiMethod post
     * @ApiBodyParam position string position
     * @ApiBodyParam sort string sort
     * @ApiBodyParam title string title
     * @ApiBodyParam logo string logo
     * @ApiBodyParam link string link
     * @ApiBodyParam enable string enable
     */
    public function add()
    {
        $data = $this->modelInput(\Module\Partner\Model\Partner::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\Partner\Model\Partner::class, $this->withRequiredDefaults(\Module\Partner\Model\Partner::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 友情链接 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam position string position
     * @ApiBodyParam sort string sort
     * @ApiBodyParam title string title
     * @ApiBodyParam logo string logo
     * @ApiBodyParam link string link
     * @ApiBodyParam enable string enable
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\Partner\Model\Partner::class, $id));
        $data = $this->modelInput(\Module\Partner\Model\Partner::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\Partner\Model\Partner::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api 友情链接 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\Partner\Model\Partner::class, $ids);
        return Response::generateSuccess();
    }

    /**
     * @Api 友情链接 排序
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，按目标顺序用逗号分隔
     */
    public function sort()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        foreach ($ids as $index => $id) {
            ModelUtil::update(\Module\Partner\Model\Partner::class, $id, ['sort' => $index + 1]);
        }
        return Response::generateSuccess();
    }
}
