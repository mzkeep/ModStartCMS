<?php


namespace Module\Member\Web\Controller;


use ModStart\Module\ModuleBaseController;
use Module\Member\Util\MemberDocUtil;

class PageController extends ModuleBaseController
{
    public function agreement()
    {
        return $this->docPage('agreement');
    }

    public function privacy()
    {
        return $this->docPage('privacy');
    }

    public function appeal()
    {
        return $this->docPage('appeal');
    }

    public function vip()
    {
        return $this->view('member.page', [
            'pageTitle' => modstart_config('Member_VipTitle', '会员协议'),
            'pageContent' => modstart_config('Member_VipContent'),
        ]);
    }

    private function docPage($type)
    {
        $doc = MemberDocUtil::get($type);
        return $this->view('member.page', [
            'pageTitle' => $doc['title'],
            'pageContent' => $doc['content'],
        ]);
    }
}
