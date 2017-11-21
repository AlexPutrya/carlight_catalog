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
    Route::get('catalog/{model?}', 'Api\CatalogController');

    Route::post('login', 'Api\AuthController@login');
    Route::post('register', 'Api\AuthController@register');

    Route::group(['middleware' => 'jwt.auth'], function() {

        Route::get('categories', 'Api\CategoryController@index');
        Route::post('categories', 'Api\CategoryController@create');
        Route::put('categories/{id}', 'Api\CategoryController@edit');
        Route::delete('categories/{id}', 'Api\CategoryController@delete');

        Route::get('posts', 'Api\PostController@index');
        Route::post('posts', 'Api\PostController@create');
        Route::put('posts/{id}', 'Api\PostController@edit');
        Route::delete('posts/{id}', 'Api\PostController@delete');

        Route::post('images/{id}', 'Api\ImageController@save');
        Route::delete('images/{id}', 'Api\ImageController@delete');

    });
});