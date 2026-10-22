<?php

namespace Module\Member\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Str;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use ModStart\Core\Util\EncodeUtil;
use ModStart\Core\Util\EventUtil;
use Module\AdminCli\AdminCli\CliCrud;
use Module\Member\Events\MemberUserRegisteredEvent;
use Module\Member\Model\MemberUser;
use Module\Member\Type\MemberStatus;
use Module\Member\Util\MemberGroupUtil;
use Module\Member\Util\MemberUtil;
use Module\Member\Util\MemberVipUtil;

/**
 * 会员 CLI 接口
 *
 * 会员属于敏感数据：列表不返回密码、盐、第三方标识等字段；
 * 新增/编辑走 MemberUtil，保证密码加密与唯一性校验与后台一致。
 */
class MemberCliController extends Controller
{
    use CliCrud;

    /**
     * @return array
     */

    /**
     * @Api 用户系统 列表
     * @ApiDesc 分页查询会员，不返回密码、盐、第三方标识等敏感字段
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 用户名关键词
     */
    public function index()
    {
        return $this->paginateModel(MemberUser::class, 'username', [], [
            'id', 'username', 'nickname', 'phone', 'email', 'avatar', 'gender', 'status',
            'groupId', 'vipId', 'vipExpire', 'created_at', 'lastLoginTime', 'lastLoginIp',
        ]);
    }

    /**
     * @Api 用户系统 新增
     * @ApiDesc 创建会员，用户名/手机/邮箱至少填写一个，密码由服务端加盐加密
     * @ApiMethod post
     * @ApiBodyParam username string 用户名
     * @ApiBodyParam phone string 手机号
     * @ApiBodyParam email string 邮箱
     * @ApiBodyParam password string required 登录密码（6-64 位）
     * @ApiBodyParam nickname string 昵称
     * @ApiBodyParam status int 状态
     * @ApiBodyParam groupId int 分组ID
     * @ApiBodyParam vipId int VIP ID
     * @ApiBodyParam vipExpire string VIP 过期时间
     */
    public function add()
    {
        $username = trim((string)Input::get('username', ''));
        $phone = trim((string)Input::get('phone', ''));
        $email = trim((string)Input::get('email', ''));
        $password = (string)Input::get('password', '');
        BizException::throwsIf('用户名、手机、邮箱不能同时为空', '' === $username && '' === $phone && '' === $email);
        BizException::throwsIfEmpty('密码不能为空', $password);
        $length = strlen($password);
        BizException::throwsIf('密码长度需在 6-64 位之间', $length < 6 || $length > 64);

        foreach (['username' => $username, 'phone' => $phone, 'email' => $email] as $field => $value) {
            if ('' === $value) {
                continue;
            }
            $ret = MemberUtil::uniqueCheck($field, $value);
            BizException::throwsIfResponseError($ret);
        }
        if ('' !== $username) {
            BizException::throwsIf('用户名不能包含 @', false !== strpos($username, '@'));
            BizException::throwsIf('用户名不能为 11 位手机号', 1 === preg_match('/^[0-9]{11}$/', $username));
        }

        $passwordSalt = Str::random(16);
        $nickname = trim((string)Input::get('nickname', $username));
        $data = array_merge([
            'status' => MemberStatus::NORMAL,
            'username' => '' === $username ? null : $username,
            'email' => '' === $email ? null : $email,
            'phone' => '' === $phone ? null : $phone,
            'nickname' => '' === $nickname ? null : $nickname,
            'password' => EncodeUtil::md5WithSalt($password, $passwordSalt),
            'passwordSalt' => $passwordSalt,
            'vipId' => MemberVipUtil::defaultVipId(),
            'groupId' => MemberGroupUtil::defaultGroupId(),
            'isDeleted' => false,
        ], $this->profileInput());
        $created = ModelUtil::insert(\Module\Member\Model\MemberUser::class, $this->withRequiredDefaults(\Module\Member\Model\MemberUser::class, $data));
        $id = is_array($created) ? intval($created['id']) : intval($created);
        EventUtil::fire(new MemberUserRegisteredEvent($id));
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 用户系统 编辑
     * @ApiDesc 修改会员基础信息与状态，用户名/手机/邮箱会做唯一性校验
     * @ApiMethod post
     * @ApiBodyParam id int required 会员ID
     * @ApiBodyParam username string 用户名
     * @ApiBodyParam phone string 手机号
     * @ApiBodyParam email string 邮箱
     * @ApiBodyParam nickname string 昵称
     * @ApiBodyParam status int 状态
     * @ApiBodyParam groupId int 分组ID
     * @ApiBodyParam vipId int VIP ID
     * @ApiBodyParam vipExpire string VIP 过期时间
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('会员不存在', ModelUtil::get(MemberUser::class, $id));
        $basic = [];
        foreach (['username', 'phone', 'email'] as $field) {
            if (Input::has($field)) {
                $basic[$field] = trim((string)Input::get($field));
            }
        }
        if (!empty($basic)) {
            $ret = MemberUtil::updateBasicWithUniqueCheck($id, $basic);
            BizException::throwsIfResponseError($ret);
        }
        $profile = $this->profileInput();
        if (!empty($profile)) {
            MemberUtil::update($id, $profile);
        }
        return Response::generateSuccess();
    }

    /**
     * @Api 用户系统 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 会员ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        foreach ($ids as $id) {
            MemberUtil::delete($id);
        }
        return Response::generateSuccess();
    }

    /**
     * 从请求中提取可写的会员资料字段
     *
     * @return array
     */
    private function profileInput()
    {
        $keys = ['nickname', 'groupId', 'status', 'vipId', 'vipExpire'];
        $data = [];
        foreach ($keys as $key) {
            if (Input::has($key)) {
                $data[$key] = Input::get($key);
            }
        }
        if (array_key_exists('vipExpire', $data) && '' === trim((string)$data['vipExpire'])) {
            $data['vipExpire'] = null;
        }
        return $data;
    }
}
