<?php

namespace Module\Cms\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class ModelCliController extends Controller
{
    use CliCrud;

    /**
     * @Api CMS系统 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\Cms\Model\CmsModelField::class, 'title');
    }

    /**
     * @Api CMS系统 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam modelId string modelId
     * @ApiBodyParam sort string sort
     * @ApiBodyParam title string title
     * @ApiBodyParam name string name
     * @ApiBodyParam fieldType string fieldType
     * @ApiBodyParam fieldData string fieldData
     * @ApiBodyParam maxLength string maxLength
     * @ApiBodyParam isRequired string isRequired
     * @ApiBodyParam isSearch string isSearch
     * @ApiBodyParam isList string isList
     * @ApiBodyParam placeholder string placeholder
     * @ApiBodyParam enable string enable
     * @ApiBodyParam guestVisitVisible string guestVisitVisible
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\Cms\Model\CmsModelField::class, $id));
        $data = $this->modelInput(\Module\Cms\Model\CmsModelField::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\Cms\Model\CmsModelField::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api CMS系统 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\Cms\Model\CmsModelField::class, $ids);
        return Response::generateSuccess();
    }
}
