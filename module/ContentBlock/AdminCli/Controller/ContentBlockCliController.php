<?php

namespace Module\ContentBlock\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class ContentBlockCliController extends Controller
{
    use CliCrud;

    /**
     * @Api 内容区块 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\ContentBlock\Model\ContentBlock::class, 'title');
    }

    /**
     * @Api 内容区块 新增
     * @ApiMethod post
     * @ApiBodyParam type string type
     * @ApiBodyParam name string name
     * @ApiBodyParam title string title
     * @ApiBodyParam image string image
     * @ApiBodyParam link string link
     * @ApiBodyParam content string content
     * @ApiBodyParam sort string sort
     * @ApiBodyParam startTime string startTime
     * @ApiBodyParam endTime string endTime
     * @ApiBodyParam enable string enable
     * @ApiBodyParam remark string remark
     * @ApiBodyParam texts string texts
     * @ApiBodyParam images string images
     */
    public function add()
    {
        $data = $this->modelInput(\Module\ContentBlock\Model\ContentBlock::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\ContentBlock\Model\ContentBlock::class, $this->withRequiredDefaults(\Module\ContentBlock\Model\ContentBlock::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 内容区块 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam type string type
     * @ApiBodyParam name string name
     * @ApiBodyParam title string title
     * @ApiBodyParam image string image
     * @ApiBodyParam link string link
     * @ApiBodyParam content string content
     * @ApiBodyParam sort string sort
     * @ApiBodyParam startTime string startTime
     * @ApiBodyParam endTime string endTime
     * @ApiBodyParam enable string enable
     * @ApiBodyParam remark string remark
     * @ApiBodyParam texts string texts
     * @ApiBodyParam images string images
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\ContentBlock\Model\ContentBlock::class, $id));
        $data = $this->modelInput(\Module\ContentBlock\Model\ContentBlock::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\ContentBlock\Model\ContentBlock::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api 内容区块 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\ContentBlock\Model\ContentBlock::class, $ids);
        return Response::generateSuccess();
    }

    /**
     * @Api 内容区块 排序
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，按目标顺序用逗号分隔
     */
    public function sort()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        foreach ($ids as $index => $id) {
            ModelUtil::update(\Module\ContentBlock\Model\ContentBlock::class, $id, ['sort' => $index + 1]);
        }
        return Response::generateSuccess();
    }
}
