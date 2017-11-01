<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api', 'prefix' => 'v1'], function() {
    Route::get('catalog/{model?}', 'Api\ShowCatalog');
    Route::post('login', 'Api\ApiController@login');
    Route::post('register', 'Api\ApiController@register');

    Route::group(['middleware' => 'jwt.auth'], function() {
        Route::post('test', function(){
            return response()->json(['message' => 'ok']);
        });
    });
});