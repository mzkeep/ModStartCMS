<?php

namespace Module\Article\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Dao\ModelUtil;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\Response;
use Module\AdminCli\AdminCli\CliCrud;

class ArticleCliController extends Controller
{
    use CliCrud;

    /**
     * @Api 通用文章 列表
     * @ApiMethod post
     * @ApiBodyParam page int 页码
     * @ApiBodyParam pageSize int 每页数量
     * @ApiBodyParam keyword string 关键词
     */
    public function index()
    {
        return $this->paginateModel(\Module\Article\Model\Article::class, 'title');
    }

    /**
     * @Api 通用文章 新增
     * @ApiMethod post
     * @ApiBodyParam position string position
     * @ApiBodyParam title string title
     * @ApiBodyParam content string content
     * @ApiBodyParam sort string sort
     * @ApiBodyParam alias string alias
     */
    public function add()
    {
        $data = $this->modelInput(\Module\Article\Model\Article::class);
        BizException::throwsIfEmpty('没有可写入的字段', $data);
        $id = ModelUtil::insert(\Module\Article\Model\Article::class, $this->withRequiredDefaults(\Module\Article\Model\Article::class, $data));
        $id = is_array($id) ? intval($id['id']) : intval($id);
        return Response::generateSuccessData(['id' => $id]);
    }

    /**
     * @Api 通用文章 编辑
     * @ApiMethod post
     * @ApiBodyParam id int required 记录ID
     * @ApiBodyParam position string position
     * @ApiBodyParam title string title
     * @ApiBodyParam content string content
     * @ApiBodyParam sort string sort
     * @ApiBodyParam alias string alias
     */
    public function edit()
    {
        $id = intval(Input::get('id', 0));
        BizException::throwsIfEmpty('id不能为空', $id);
        BizException::throwsIfEmpty('记录不存在', ModelUtil::get(\Module\Article\Model\Article::class, $id));
        $data = $this->modelInput(\Module\Article\Model\Article::class);
        BizException::throwsIfEmpty('没有可更新的字段', $data);
        ModelUtil::update(\Module\Article\Model\Article::class, $id, $data);
        return Response::generateSuccess();
    }

    /**
     * @Api 通用文章 删除
     * @ApiMethod post
     * @ApiBodyParam ids string required 记录ID，多个用逗号分隔
     */
    public function delete()
    {
        $ids = $this->parseIds();
        BizException::throwsIfEmpty('ids不能为空', $ids);
        ModelUtil::deleteIn(\Module\Article\Model\Article::class, $ids);
        return Response::generateSuccess();
    }
}
