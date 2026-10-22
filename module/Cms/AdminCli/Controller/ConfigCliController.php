<?php

namespace Module\Cms\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api CMS系统 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam Cms_CompanyName string Cms_CompanyName
     * @ApiBodyParam Cms_ContactEmail string Cms_ContactEmail
     * @ApiBodyParam Cms_ContactPhone string Cms_ContactPhone
     * @ApiBodyParam Cms_ContactAddress string Cms_ContactAddress
     * @ApiBodyParam Cms_ContactFax string Cms_ContactFax
     * @ApiBodyParam Cms_ContactContactPerson string Cms_ContactContactPerson
     * @ApiBodyParam Cms_ContactQQ string Cms_ContactQQ
     * @ApiBodyParam Cms_HomeInfoTitle string Cms_HomeInfoTitle
     * @ApiBodyParam Cms_HomeInfoImage string Cms_HomeInfoImage
     * @ApiBodyParam Cms_HomeInfoContent string Cms_HomeInfoContent
     * @ApiBodyParam Cms_ContentUrlMode string Cms_ContentUrlMode
     * @ApiBodyParam Cms_CatAdminTreeMode string Cms_CatAdminTreeMode
     * @ApiBodyParam Cms_LikeAnonymityEnable string Cms_LikeAnonymityEnable
     * @ApiBodyParam Cms_RecommendProvider string Cms_RecommendProvider
     */
    public function index()
    {
        $keys = ['Cms_CompanyName', 'Cms_ContactEmail', 'Cms_ContactPhone', 'Cms_ContactAddress', 'Cms_ContactFax', 'Cms_ContactContactPerson', 'Cms_ContactQQ', 'Cms_HomeInfoTitle', 'Cms_HomeInfoImage', 'Cms_HomeInfoContent', 'Cms_ContentUrlMode', 'Cms_CatAdminTreeMode', 'Cms_LikeAnonymityEnable', 'Cms_RecommendProvider'];
        $data = [];
        foreach ($keys as $key) {
            if (Input::has($key)) {
                modstart_config()->set($key, Input::get($key));
            }
            $data[$key] = modstart_config($key, '');
        }
        return Response::generateSuccessData($data);
    }
}
