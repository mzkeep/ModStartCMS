<?php

namespace Module\Cms\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class CatCliController extends Controller
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
        return $this->paginateModel(\Module\Cms\Model\CmsCat::class, 'title');
    }

    /**
     * @Api CMS系统 新增
     * @ApiMethod post
     * @ApiBodyParam pid string pid
     * @ApiBodyParam sort string sort
     * @ApiBodyParam title string title
     * @ApiBodyParam subTitle string subTitle
     * @ApiBodyParam bannerBg string bannerBg
     * @ApiBodyParam url string url
     * @ApiBodyParam modelId string modelId
     * @ApiBodyParam listTemplate string listTemplate
     * @ApiBodyParam detailTemplate string detailTemplate
     * @ApiBodyParam seoTitle string seoTitle
     * @ApiBodyParam seoDescription string seoDescription
     * @ApiBodyParam seoKeywords string seoKeywords
     * @ApiBodyParam icon string icon
     * @ApiBodyParam cover string cover
     * @ApiBodyParam visitMemberGroupEnable string visitMemberGroupEnable
     * @ApiBodyParam visitMemberGroups string visitMemberGroups
     * @ApiBodyParam visitMemberVipEnable string visitMemberVipEnable
     * @ApiBodyParam visitMemberVips string visitMemberVips
     * @ApiBodyParam pageTemplate string pageTemplate
     * @ApiBodyParam formTemplate string formTemplate
     * @ApiBodyParam memberUserPostEnable string memberUserPostEnable
     * @ApiBodyParam postMemberGroupEnable string postMemberGroupEnable
     * @ApiBodyParam postMemberGroups string postMemberGroups
     * @ApiBodyParam postMemberVipEnable string postMemberVipEnable
     * @ApiBodyParam postMemberVips string postMemberVips
     * @ApiBodyParam pageSize string pageSize
     * @ApiBodyParam enable string enable
     * @ApiBodyParam captchaProvider string captchaProvider
     */
    public function add()
    {
        $data = $this->modelInput(\Module\Cms\Model\CmsCat::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\Cms\Model\CmsCat::class, $this->withRequiredDefaults(\Module\Cms\Model\CmsCat::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api CMS系统 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam pid string pid
     * @ApiBodyParam sort string sort
     * @ApiBodyParam title string title
     * @ApiBodyParam subTitle string subTitle
     * @ApiBodyParam bannerBg string bannerBg
     * @ApiBodyParam url string url
     * @ApiBodyParam modelId string modelId
     * @ApiBodyParam listTemplate string listTemplate
     * @ApiBodyParam detailTemplate string detailTemplate
     * @ApiBodyParam seoTitle string seoTitle
     * @ApiBodyParam seoDescription string seoDescription
     * @ApiBodyParam seoKeywords string seoKeywords
     * @ApiBodyParam icon string icon
     * @ApiBodyParam cover string cover
     * @ApiBodyParam visitMemberGroupEnable string visitMemberGroupEnable
     * @ApiBodyParam visitMemberGroups string visitMemberGroups
     * @ApiBodyParam visitMemberVipEnable string visitMemberVipEnable
     * @ApiBodyParam visitMemberVips string visitMemberVips
     * @ApiBodyParam pageTemplate string pageTemplate
     * @ApiBodyParam formTemplate string formTemplate
     * @ApiBodyParam memberUserPostEnable string memberUserPostEnable
     * @ApiBodyParam postMemberGroupEnable string postMemberGroupEnable
     * @ApiBodyParam postMemberGroups string postMemberGroups
     * @ApiBodyParam postMemberVipEnable string postMemberVipEnable
     * @ApiBodyParam postMemberVips string postMemberVips
     * @ApiBodyParam pageSize string pageSize
     * @ApiBodyParam enable string enable
     * @ApiBodyParam captchaProvider string captchaProvider
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\Cms\Model\CmsCat::class, $id));
        $data = $this->modelInput(\Module\Cms\Model\CmsCat::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\Cms\Model\CmsCat::class, $id, $data);
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
        ModelUtil::deleteIn(\Module\Cms\Model\CmsCat::class, $ids);
        return Response::generateSuccess();
    }

    /**
     * @Api CMS系统 排序
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，按目标顺序用逗号分隔
     */
    public function sort()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        foreach ($ids as $index => $id) {
            ModelUtil::update(\Module\Cms\Model\CmsCat::class, $id, ['sort' => $index + 1]);
        }
        return Response::generateSuccess();
    }
}
