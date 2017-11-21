<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 31.10.17
 * Time: 9:00
 */

namespace App\Http\Middleware;


use Closure;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;

class VerifyJWTToken {

    public function handle(Request $request, Closure $next) {

        try {
            $user = JWTAuth::toUser($request->input('token'));
        } catch(JWTException $e) {
            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return response()->json(['error'=> 'token_expired'], $e->getStatusCode());
            } else if($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                return response()->json(['error' => 'token_invalid'], $e->getStatusCode());
            } else {
                return response()->json(['error' => 'token is required ']);
            }
        }
        return $next($request);
    }
}