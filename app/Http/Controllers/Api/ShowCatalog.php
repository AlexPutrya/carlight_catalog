<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ShowCatalog extends Controller {
    
    public function __invoke() {
        // $data = [na]
        return ['name'=>'hello'];
    }
}