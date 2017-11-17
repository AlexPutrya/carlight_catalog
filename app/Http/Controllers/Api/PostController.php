<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 16.11.17
 * Time: 10:05
 */

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create() {
        try{
            $post = new Post();
            $post->save();
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Databse creation error',
                'data' => $e->getMessage()],
                501);
        }
        return response()->json(['message' => 'Post created', 'post_id' => $post->id], 200);
    }

    public function edit(Request $request, $id){
        $input = $request->all();
        try {
            $post = Post::find($id);
            $post->title = $input['title'];
            $post->text = $input['text'];
            $post->category_id = $input['category_id'];
            $post->save();
        } catch(\Exception $e) {
            return response()->json([
                'message' => 'Databse edit error, data can\'t be saved',
                'data' => $e->getMessage()],
                501);
        }
        return response()->json(['message' => 'Post is updating succes'], 200);

    }

    public function delete($id) {
        try {
            $post = Post::find($id);
            $post->delete();
        } catch(\Exception $e){
            return response()->json([
                'message' => 'Databse deleted error, post can\'t be deleted',
                'data' => $e->getMessage()],
                501);
        }
        return response()->json(['message' => 'post is deleting'], 200);
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'title' => 'required',
            'text' => 'required',
            'category_id' => 'required|numeric'
        ]);
    }
}