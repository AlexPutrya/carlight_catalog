<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use App\User;
use JWTAuthException;

class AuthController extends Controller {
    
    private $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function login(Request $request) {
        $credentials = $request->only('email', 'password');
        $token = null;

        try {
            if(!$token = JWTAuth::attempt($credentials)){
                return response()->json(['invalid email or password'], 422);
            }
        } catch(JWTAuthException $e) {
            return response()->json(['failde to create token', 500]);
        }
        return response()->json(compact('token'));
    }

    public function register(Request $request) {
        $user = $this->user->create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password'))
        ]);

        return response()->json(['error' =>'false', 'message'=>'Registration succes']);

    }
}