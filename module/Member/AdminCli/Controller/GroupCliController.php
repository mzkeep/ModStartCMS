<?php

namespace Module\Member\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class GroupCliController extends Controller
{
    use CliCrud;

    /**
     * @Api 用户系统 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\Member\Model\MemberGroup::class, 'title');
    }

    /**
     * @Api 用户系统 新增
     * @ApiMethod post
     * @ApiBodyParam title string title
     * @ApiBodyParam description string description
     * @ApiBodyParam isDefault string isDefault
     * @ApiBodyParam showFront string showFront
     */
    public function add()
    {
        $data = $this->modelInput(\Module\Member\Model\MemberGroup::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\Member\Model\MemberGroup::class, $this->withRequiredDefaults(\Module\Member\Model\MemberGroup::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 用户系统 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam title string title
     * @ApiBodyParam description string description
     * @ApiBodyParam isDefault string isDefault
     * @ApiBodyParam showFront string showFront
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\Member\Model\MemberGroup::class, $id));
        $data = $this->modelInput(\Module\Member\Model\MemberGroup::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\Member\Model\MemberGroup::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api 用户系统 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\Member\Model\MemberGroup::class, $ids);
        return Response::generateSuccess();
    }
}
