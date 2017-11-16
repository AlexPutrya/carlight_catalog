<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 16.11.17
 * Time: 10:01
 */

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    public function create(Request $request) {
        $cat_name = $request->input('name');
        if($cat_name){
            try{
                $category = new Category();
                $category->name = $cat_name;
                $category->save();
            }catch(\Exception $e){
                return response()->json([
                    'message' => 'Database saving error',
                    'data' => $e->getMessage()],
                    501);
            }
            return response()->json(['message' => 'Category create'],200);
        }
        return response()->json(['message' => 'Empty or invalid category name'], 404);
    }

    public function edit(Request $request, $id) {
        $new_cat_name = $request->input('name');
        if($new_cat_name){
            try{
                $category = Category::find($id);
                if(!$category){
                    return response()->json(['message' => 'Category not found'], 404);
                }
                $category->name = $new_cat_name;
                $category->save();
                return response()->json(['message' => 'Category name changed'], 200);
            }catch(\Exception $e){
                return response()->json([
                    'message' => 'Database edit error',
                    'data'=> $e->getMessage()],
                    501);
            }
        }
        return response()->json(['message' => 'Empty or invalid category name'], 404);
    }

    public function delete($id) {
        try {
            $category = Category::find($id);
            if (!$category) {
                return response()->json(['message' => 'Category not found'], 404);
            }
            $category->delete();
            return response()->json(['message' => 'Category deleting'], 200);
        }catch(\Exception $e){
            return response()->json([
                'message' => 'Database deleting error',
                'data'=>$e->getMessage()],
                501);
        }
    }
}