<?php


namespace Module\Member\Api\Controller;


use Illuminate\Routing\Controller;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\InputPackage;
use ModStart\Core\Input\Response;
use Module\Member\Util\MemberDocUtil;


/**
 * @Api 用户账号
 */
class MemberDocController extends Controller
{
    /**
     * @Api 用户协议
     * @ApiMethod post
     * @ApiDesc 获取用户协议、隐私协议或账号申诉内容
     * @ApiBodyParam type string required 协议类型 agreement用户使用协议, privacy用户隐私协议, appeal账号申诉
     * @ApiResponseData {
     *   "code": 0,
     *   "data": {
     *     "title": "协议标题",
     *     "content": "<p>协议内容富文本</p>"
     *   }
     * }
     */
    public function get()
    {
        $input = InputPackage::buildFromInput();
        $type = $input->getTrimString('type');
        BizException::throwsIf('类型错误', !MemberDocUtil::isType($type));
        $doc = MemberDocUtil::get($type);
        return Response::generateSuccessData([
            'title' => $doc['title'],
            'content' => $doc['content'],
        ]);
    }
}
