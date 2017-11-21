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
use App\Post;

class ImageController extends Controller
{
    protected $path = 'post_images/';

    public function save(Request $request, $id){
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = $image->getClientOriginalName();
            $image->move(public_path($this->path), $filename);
            $img_path = $this->path . $filename;
            $post = Post::find($id);
            $post->img_path = $img_path;
            $post->save();
            return response()->json(['message' => 'Add image to post success'], 200);
        }
    }

    public function delete($id) {
        $post = Post::find($id);
        $post->img_path = "";
        $post->save();
        return response()->json(['message' => 'Deleting image success'], 200);
    }
}