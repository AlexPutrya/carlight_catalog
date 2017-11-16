<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CatalogController extends Controller {
    
    public function __invoke($model = null) {
        if($model) {

            $brands = DB::table('car_brands')
                        ->join('car_models', 'car_brands.id', '=', 'car_models.brand_id')
                        ->join('year_bulb', 'car_models.id', '=', 'year_bulb.model_id')
                        ->select(
                            'year_bulb.id as id',
                            'car_brands.name',
                            'car_models.name as model_name',
                            'year_bulb.year_range',
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.low_beam) as low_beam"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.high_beam) as high_beam"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.fog_light) as fog_light"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.front_indicator) as front_indicator"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.parking_light) as parking_light"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.stop_light) as stop_light"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.tail_light) as tail_light"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.fog_warning_light) as fog_warning_light"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.backup_light) as backup_light"),
                            DB::raw("(SELECT type from bulb_types WHERE id = year_bulb.license_plate_light) as license_plate_light")
                            )
                        ->where('car_models.name', 'like', '%'.$model.'%')
                        ->get();
            
            $catalog = [];
            
            foreach($brands as $row) {
                if(!isset($catalog[$row->name])) {
                    $catalog[$row->name] = [];
                }
                array_push($catalog[$row->name], $row);
            }
        }else {
            $catalog = [];
        }
       
        return response()->json($catalog, 200);
    }
}