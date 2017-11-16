<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 02.11.17
 * Time: 9:28
 */

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    const IMAGE_CONFIG = [
      'bulb_image' => [
          'model' => 'App\Bulb',
          'path' => '/img/bulbs/'],
      'brand_image' => [
          'model' => 'App\Brand',
          'path' => '/img/brand/']
    ];


    public function getImageConfig($image_type) {

        switch ($image_type) {
            case 'brand':
                return ['err' => false, 'config' => self::IMAGE_CONFIG['brand_image']];
                break;
            case 'bulb':
                return ['err' => false, 'config' => self::IMAGE_CONFIG['bulb_image']];
                break;
            default:
                return ['err' => true, 'message' => 'This image type invalid'];
                break;
        }
    }

    public function save(Request $request) {

            if ($request->input('type')) {
                $image_config = $this->getImageConfig($request->input('type'));

                if (!$image_config['err']) {

                    extract($image_config['config']);
                    if($request->hasFile('image')) {
                        $image = $request->file('image');
                        $filename = $image->getClientOriginalName();
                        $image->move(public_path().$path, $filename);

                    //return response()->json(['path' => $path, 'model' => $model], 200);
                }
                return response()->json(['err' => $image_config['err'], 'message' => $image_config['message']], 401);
            }
            return response()->json(['err' => true, 'message' => 'No type image value'], 200);
    }

    public function delete(Request $request) {

    }
}