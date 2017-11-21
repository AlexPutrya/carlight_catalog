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

    public function save(Request $request){
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = $image->getClientOriginalName();
            $image->move(public_path() . $path, $filename);

        }
    }

    public function delete(Request $request) {

    }
}