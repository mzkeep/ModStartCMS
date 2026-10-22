<?php

namespace Module\Member\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class VipSetCliController extends Controller
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
        return $this->paginateModel(\Module\Member\Model\MemberVipSet::class, 'title');
    }

    /**
     * @Api 用户系统 新增
     * @ApiMethod post
     * @ApiBodyParam title string title
     * @ApiBodyParam flag string flag
     * @ApiBodyParam pid string pid
     * @ApiBodyParam sort string sort
     * @ApiBodyParam isDefault string isDefault
     * @ApiBodyParam icon string icon
     * @ApiBodyParam price string price
     * @ApiBodyParam vipDays string vipDays
     * @ApiBodyParam content string content
     * @ApiBodyParam creditPresentEnable string creditPresentEnable
     * @ApiBodyParam creditPresentValue string creditPresentValue
     * @ApiBodyParam desc string desc
     * @ApiBodyParam visible string visible
     * @ApiBodyParam priceMarket string priceMarket
     * @ApiBodyParam groupName string groupName
     * @ApiBodyParam quotaQuestionViewDaily string quotaQuestionViewDaily
     * @ApiBodyParam wenkuDiscount string wenkuDiscount
     * @ApiBodyParam wenkuMoneyReward string wenkuMoneyReward
     * @ApiBodyParam wenkuUploadCreditReward string wenkuUploadCreditReward
     * @ApiBodyParam wenkuDailyDoc string wenkuDailyDoc
     * @ApiBodyParam wenkuFreeDailyDoc string wenkuFreeDailyDoc
     * @ApiBodyParam wenkuMonthlyDoc string wenkuMonthlyDoc
     * @ApiBodyParam wenkuFreeMonthlyDoc string wenkuFreeMonthlyDoc
     * @ApiBodyParam wenkuYearlyDoc string wenkuYearlyDoc
     * @ApiBodyParam wenkuFreeYearlyDoc string wenkuFreeYearlyDoc
     * @ApiBodyParam paper_FeeDaily string paper_FeeDaily
     * @ApiBodyParam paper_FeeMonthly string paper_FeeMonthly
     * @ApiBodyParam paper_FeeYearly string paper_FeeYearly
     * @ApiBodyParam paper_FreeDaily string paper_FreeDaily
     * @ApiBodyParam paper_FreeMonthly string paper_FreeMonthly
     * @ApiBodyParam paper_FreeYearly string paper_FreeYearly
     * @ApiBodyParam aigcWriteCountDaily string aigcWriteCountDaily
     * @ApiBodyParam aigcMessageCountDaily string aigcMessageCountDaily
     * @ApiBodyParam aigcCountDaily string aigcCountDaily
     * @ApiBodyParam picUploaderSpace string picUploaderSpace
     * @ApiBodyParam quotaCorpWorkCount string quotaCorpWorkCount
     * @ApiBodyParam quotaCorpEmployeeInviteDaily string quotaCorpEmployeeInviteDaily
     * @ApiBodyParam quotaHireResumeViewDaily string quotaHireResumeViewDaily
     * @ApiBodyParam quotaHireResumeInviteDaily string quotaHireResumeInviteDaily
     */
    public function add()
    {
        $data = $this->modelInput(\Module\Member\Model\MemberVipSet::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\Member\Model\MemberVipSet::class, $this->withRequiredDefaults(\Module\Member\Model\MemberVipSet::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 用户系统 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam title string title
     * @ApiBodyParam flag string flag
     * @ApiBodyParam pid string pid
     * @ApiBodyParam sort string sort
     * @ApiBodyParam isDefault string isDefault
     * @ApiBodyParam icon string icon
     * @ApiBodyParam price string price
     * @ApiBodyParam vipDays string vipDays
     * @ApiBodyParam content string content
     * @ApiBodyParam creditPresentEnable string creditPresentEnable
     * @ApiBodyParam creditPresentValue string creditPresentValue
     * @ApiBodyParam desc string desc
     * @ApiBodyParam visible string visible
     * @ApiBodyParam priceMarket string priceMarket
     * @ApiBodyParam groupName string groupName
     * @ApiBodyParam quotaQuestionViewDaily string quotaQuestionViewDaily
     * @ApiBodyParam wenkuDiscount string wenkuDiscount
     * @ApiBodyParam wenkuMoneyReward string wenkuMoneyReward
     * @ApiBodyParam wenkuUploadCreditReward string wenkuUploadCreditReward
     * @ApiBodyParam wenkuDailyDoc string wenkuDailyDoc
     * @ApiBodyParam wenkuFreeDailyDoc string wenkuFreeDailyDoc
     * @ApiBodyParam wenkuMonthlyDoc string wenkuMonthlyDoc
     * @ApiBodyParam wenkuFreeMonthlyDoc string wenkuFreeMonthlyDoc
     * @ApiBodyParam wenkuYearlyDoc string wenkuYearlyDoc
     * @ApiBodyParam wenkuFreeYearlyDoc string wenkuFreeYearlyDoc
     * @ApiBodyParam paper_FeeDaily string paper_FeeDaily
     * @ApiBodyParam paper_FeeMonthly string paper_FeeMonthly
     * @ApiBodyParam paper_FeeYearly string paper_FeeYearly
     * @ApiBodyParam paper_FreeDaily string paper_FreeDaily
     * @ApiBodyParam paper_FreeMonthly string paper_FreeMonthly
     * @ApiBodyParam paper_FreeYearly string paper_FreeYearly
     * @ApiBodyParam aigcWriteCountDaily string aigcWriteCountDaily
     * @ApiBodyParam aigcMessageCountDaily string aigcMessageCountDaily
     * @ApiBodyParam aigcCountDaily string aigcCountDaily
     * @ApiBodyParam picUploaderSpace string picUploaderSpace
     * @ApiBodyParam quotaCorpWorkCount string quotaCorpWorkCount
     * @ApiBodyParam quotaCorpEmployeeInviteDaily string quotaCorpEmployeeInviteDaily
     * @ApiBodyParam quotaHireResumeViewDaily string quotaHireResumeViewDaily
     * @ApiBodyParam quotaHireResumeInviteDaily string quotaHireResumeInviteDaily
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\Member\Model\MemberVipSet::class, $id));
        $data = $this->modelInput(\Module\Member\Model\MemberVipSet::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\Member\Model\MemberVipSet::class, $id, $data);
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
        ModelUtil::deleteIn(\Module\Member\Model\MemberVipSet::class, $ids);
        return Response::generateSuccess();
    }

    /**
     * @Api 用户系统 排序
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，按目标顺序用逗号分隔
     */
    public function sort()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        foreach ($ids as $index => $id) {
            ModelUtil::update(\Module\Member\Model\MemberVipSet::class, $id, ['sort' => $index + 1]);
        }
        return Response::generateSuccess();
    }
}
