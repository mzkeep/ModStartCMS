<?php


namespace Module\Vendor\Util;


use Illuminate\Support\Facades\Session;

class SessionUtil
{
    /**
     * Lifetime (seconds) of the signed /session handoff ticket.
     * The ticket carries a session id, so it must stay short lived.
     */
    const TICKET_EXPIRE = 300;

    public static function atomicProduce($name, $value, $expire = 3600)
    {
        AtomicUtil::produce("$name:" . Session::getId(), $value, $expire);
    }

    public static function atomicConsume($name)
    {
        return AtomicUtil::consume("$name:" . Session::getId());
    }

    public static function atomicRemove($name)
    {
        AtomicUtil::remove("$name:" . Session::getId());
    }

    /**
     * Build a signed /session url that hands the current session over to a full url.
     * api_token and redirect are inside the signed payload, so neither can be tampered with.
     * @param $redirect string target url
     * @return string
     */
    public static function startForWebFullUrl($redirect)
    {
        return NoneLoginOperateUtil::generateUrl('session', [
            'api_token' => Session::getId(),
            'redirect' => $redirect,
        ]);
    }
}
