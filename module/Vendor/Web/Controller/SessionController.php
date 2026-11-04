<?php


namespace Module\Vendor\Web\Controller;


use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\InputPackage;
use ModStart\Core\Input\Response;
use ModStart\Core\Util\UrlUtil;
use Module\Vendor\Util\AtomicUtil;
use Module\Vendor\Util\SessionUtil;

class SessionController extends Controller
{
    /**
     * One-time ticket marker, so a handoff url can only be used once within its lifetime.
     */
    const TICKET_ATOMIC_PREFIX = 'NoneLoginOperateTicket:session:';

    public function index()
    {
        $input = InputPackage::buildFromInput();
        // api_token / redirect must come from the signed param payload, otherwise the
        // signature does not cover them and an attacker could swap in an arbitrary session id.
        $param = InputPackage::buildFromInputJson('param');
        $apiToken = $param->getTrimString('api_token');
        $redirect = $param->getTrimString('redirect');
        $nonce = $input->getTrimString('nonce');
        BizException::throwsIfEmpty('api_token 为空', $apiToken);
        BizException::throwsIfEmpty('redirect 为空', $redirect);
        BizException::throwsIfEmpty('nonce 为空', $nonce);
        BizException::throwsIf('session 初始化失败', !Session::isValidId($apiToken));
        // The signed ticket is only valid for a short period, so a leaked link cannot be reused later.
        BizException::throwsIf('session 初始化票据已失效', !$this->isValidTicket($input->getInteger('timestamp')));
        // Only allow same-site redirects to avoid open redirect (phishing) abuse.
        BizException::throwsIf('跳转地址不合法', !UrlUtil::isSafeRedirect($redirect));
        // The ticket is one-time usable, so a leaked handoff url cannot be replayed.
        BizException::throwsIf('session 初始化票据已使用', !AtomicUtil::acquire(self::TICKET_ATOMIC_PREFIX . $nonce, SessionUtil::TICKET_EXPIRE));
        // Drop the data of the current browser session first, so the current login state
        // is never merged into (and persisted under) the ticket session id.
        Session::flush();
        // Load the session data referenced by the ticket (the id itself never reaches the browser).
        Session::setId($apiToken);
        Session::start();
        // Rotate to a server generated session id: a session id chosen elsewhere must never
        // be the id the browser finally holds, otherwise session fixation stays possible.
        Session::regenerate();
        return Response::redirect($redirect);
    }

    /**
     * Check whether the signed ticket timestamp is within the allowed window.
     * @param $timestamp integer ticket timestamp
     * @return bool
     */
    private function isValidTicket($timestamp)
    {
        $expire = SessionUtil::TICKET_EXPIRE;
        return $timestamp > 0 && $timestamp <= time() + $expire && $timestamp >= time() - $expire;
    }
}
