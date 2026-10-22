<?php

namespace Module\Site\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api 基本设置 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam siteLogo string siteLogo
     * @ApiBodyParam siteName string siteName
     * @ApiBodyParam siteSlogan string siteSlogan
     * @ApiBodyParam siteDomain string siteDomain
     * @ApiBodyParam siteUrl string siteUrl
     * @ApiBodyParam siteKeywords string siteKeywords
     * @ApiBodyParam siteDescription string siteDescription
     * @ApiBodyParam siteFavIco string siteFavIco
     * @ApiBodyParam sitePrimaryColor string sitePrimaryColor
     * @ApiBodyParam siteTemplate string siteTemplate
     * @ApiBodyParam siteBeian string siteBeian
     * @ApiBodyParam siteBeianGonganText string siteBeianGonganText
     * @ApiBodyParam siteBeianGonganLink string siteBeianGonganLink
     * @ApiBodyParam Site_CopyrightOthers string Site_CopyrightOthers
     * @ApiBodyParam Site_ContactEmail string Site_ContactEmail
     * @ApiBodyParam Site_ContactPhone string Site_ContactPhone
     * @ApiBodyParam Site_ContactAddress string Site_ContactAddress
     * @ApiBodyParam Site_ContactQrcode string Site_ContactQrcode
     */
    public function index()
    {
        $keys = ['siteLogo', 'siteName', 'siteSlogan', 'siteDomain', 'siteUrl', 'siteKeywords', 'siteDescription', 'siteFavIco', 'sitePrimaryColor', 'siteTemplate', 'siteBeian', 'siteBeianGonganText', 'siteBeianGonganLink', 'Site_CopyrightOthers', 'Site_ContactEmail', 'Site_ContactPhone', 'Site_ContactAddress', 'Site_ContactQrcode'];
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
