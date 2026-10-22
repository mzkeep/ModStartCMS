<?php

namespace Module\Member\AdminCli\Controller;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use ModStart\Core\Input\Response;

class ConfigCliController extends Controller
{

    /**
     * @Api 用户系统 配置
     * @ApiDesc 不传参数时返回当前配置；传参时更新配置
     * @ApiMethod post
     * @ApiBodyParam loginCaptchaEnable string loginCaptchaEnable
     * @ApiBodyParam loginCaptchaProvider string loginCaptchaProvider
     * @ApiBodyParam Member_LoginDefault string Member_LoginDefault
     * @ApiBodyParam Member_LoginPhoneEnable string Member_LoginPhoneEnable
     * @ApiBodyParam Member_LoginPhoneAutoRegister string Member_LoginPhoneAutoRegister
     * @ApiBodyParam Member_LoginPhoneNameSuggest string Member_LoginPhoneNameSuggest
     * @ApiBodyParam Member_RegisterCaptchaProvider string Member_RegisterCaptchaProvider
     * @ApiBodyParam registerDisable string registerDisable
     * @ApiBodyParam Member_RegisterDefault string Member_RegisterDefault
     * @ApiBodyParam Member_RegisterPhoneEnable string Member_RegisterPhoneEnable
     * @ApiBodyParam Member_RegisterPhonePasswordEnable string Member_RegisterPhonePasswordEnable
     * @ApiBodyParam registerEmailEnable string registerEmailEnable
     * @ApiBodyParam registerPhoneEnable string registerPhoneEnable
     * @ApiBodyParam registerOauthEnable string registerOauthEnable
     * @ApiBodyParam Member_OauthBindAuto string Member_OauthBindAuto
     * @ApiBodyParam Member_OauthBindPhoneEnable string Member_OauthBindPhoneEnable
     * @ApiBodyParam Member_OauthBindEmailEnable string Member_OauthBindEmailEnable
     * @ApiBodyParam Member_UsernameMinLength string Member_UsernameMinLength
     * @ApiBodyParam Member_RegisterUsernameSuggest string Member_RegisterUsernameSuggest
     * @ApiBodyParam retrieveDisable string retrieveDisable
     * @ApiBodyParam retrievePhoneEnable string retrievePhoneEnable
     * @ApiBodyParam retrieveEmailEnable string retrieveEmailEnable
     * @ApiBodyParam Member_ProfileEmailEnable string Member_ProfileEmailEnable
     * @ApiBodyParam Member_ProfilePhoneEnable string Member_ProfilePhoneEnable
     * @ApiBodyParam Member_LoginRedirectCheckEnable string Member_LoginRedirectCheckEnable
     * @ApiBodyParam Member_LoginRedirectWhiteList string Member_LoginRedirectWhiteList
     * @ApiBodyParam Member_DeleteEnable string Member_DeleteEnable
     * @ApiBodyParam Member_PasswordStrength string Member_PasswordStrength
     * @ApiBodyParam Member_PasswordLengthMin string Member_PasswordLengthMin
     * @ApiBodyParam Member_LoginInfoEncrypt string Member_LoginInfoEncrypt
     * @ApiBodyParam Member_DataStatisticEnable string Member_DataStatisticEnable
     * @ApiBodyParam Member_DataStatisticDefaultLimit string Member_DataStatisticDefaultLimit
     * @ApiBodyParam Member_GroupShowEnable string Member_GroupShowEnable
     * @ApiBodyParam Member_AgreementEnable string Member_AgreementEnable
     * @ApiBodyParam Member_AgreementTitle string Member_AgreementTitle
     * @ApiBodyParam Member_AgreementContent string Member_AgreementContent
     * @ApiBodyParam Member_PrivacyEnable string Member_PrivacyEnable
     * @ApiBodyParam Member_PrivacyTitle string Member_PrivacyTitle
     * @ApiBodyParam Member_PrivacyContent string Member_PrivacyContent
     * @ApiBodyParam Member_AppealEnable string Member_AppealEnable
     * @ApiBodyParam Member_AppealTitle string Member_AppealTitle
     * @ApiBodyParam Member_AppealContent string Member_AppealContent
     * @ApiBodyParam Member_MoneyCashEnable string Member_MoneyCashEnable
     * @ApiBodyParam Member_MoneyCashMin string Member_MoneyCashMin
     * @ApiBodyParam Member_MoneyCashTaxRate string Member_MoneyCashTaxRate
     * @ApiBodyParam Member_MoneyCashDescription string Member_MoneyCashDescription
     * @ApiBodyParam Member_MoneyChargeEnable string Member_MoneyChargeEnable
     * @ApiBodyParam Member_MoneyChargeDesc string Member_MoneyChargeDesc
     * @ApiBodyParam Member_Registered_Message string Member_Registered_Message
     * @ApiBodyParam Member_Registered_EmailTitle string Member_Registered_EmailTitle
     * @ApiBodyParam Member_Registered_Email string Member_Registered_Email
     */
    public function index()
    {
        $keys = ['loginCaptchaEnable', 'loginCaptchaProvider', 'Member_LoginDefault', 'Member_LoginPhoneEnable', 'Member_LoginPhoneAutoRegister', 'Member_LoginPhoneNameSuggest', 'Member_RegisterCaptchaProvider', 'registerDisable', 'Member_RegisterDefault', 'Member_RegisterPhoneEnable', 'Member_RegisterPhonePasswordEnable', 'registerEmailEnable', 'registerPhoneEnable', 'registerOauthEnable', 'Member_OauthBindAuto', 'Member_OauthBindPhoneEnable', 'Member_OauthBindEmailEnable', 'Member_UsernameMinLength', 'Member_RegisterUsernameSuggest', 'retrieveDisable', 'retrievePhoneEnable', 'retrieveEmailEnable', 'Member_ProfileEmailEnable', 'Member_ProfilePhoneEnable', 'Member_LoginRedirectCheckEnable', 'Member_LoginRedirectWhiteList', 'Member_DeleteEnable', 'Member_PasswordStrength', 'Member_PasswordLengthMin', 'Member_LoginInfoEncrypt', 'Member_DataStatisticEnable', 'Member_DataStatisticDefaultLimit', 'Member_GroupShowEnable', 'Member_AgreementEnable', 'Member_AgreementTitle', 'Member_AgreementContent', 'Member_PrivacyEnable', 'Member_PrivacyTitle', 'Member_PrivacyContent', 'Member_AppealEnable', 'Member_AppealTitle', 'Member_AppealContent', 'Member_MoneyCashEnable', 'Member_MoneyCashMin', 'Member_MoneyCashTaxRate', 'Member_MoneyCashDescription', 'Member_MoneyChargeEnable', 'Member_MoneyChargeDesc', 'Member_Registered_Message', 'Member_Registered_EmailTitle', 'Member_Registered_Email'];
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
