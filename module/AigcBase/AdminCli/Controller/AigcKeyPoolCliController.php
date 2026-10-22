<?php

namespace Module\AigcBase\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class AigcKeyPoolCliController extends Controller
{
    use CliCrud;

    /**
     * @Api AI平台对接 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\AigcBase\Model\AigcKeyPool::class, '');
    }

    /**
     * @Api AI平台对接 新增
     * @ApiMethod post
     * @ApiBodyParam type string type
     * @ApiBodyParam status string status
     * @ApiBodyParam priority string priority
     * @ApiBodyParam param string param
     * @ApiBodyParam remark string remark
     * @ApiBodyParam lastCallTime string lastCallTime
     * @ApiBodyParam callCount string callCount
     * @ApiBodyParam successCount string successCount
     * @ApiBodyParam failCount string failCount
     */
    public function add()
    {
        $data = $this->modelInput(\Module\AigcBase\Model\AigcKeyPool::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\AigcBase\Model\AigcKeyPool::class, $this->withRequiredDefaults(\Module\AigcBase\Model\AigcKeyPool::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api AI平台对接 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam type string type
     * @ApiBodyParam status string status
     * @ApiBodyParam priority string priority
     * @ApiBodyParam param string param
     * @ApiBodyParam remark string remark
     * @ApiBodyParam lastCallTime string lastCallTime
     * @ApiBodyParam callCount string callCount
     * @ApiBodyParam successCount string successCount
     * @ApiBodyParam failCount string failCount
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\AigcBase\Model\AigcKeyPool::class, $id));
        $data = $this->modelInput(\Module\AigcBase\Model\AigcKeyPool::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\AigcBase\Model\AigcKeyPool::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api AI平台对接 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\AigcBase\Model\AigcKeyPool::class, $ids);
        return Response::generateSuccess();
    }
}
