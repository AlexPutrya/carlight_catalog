<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ShowCatalog extends Controller {
    
    public function __invoke() {
        $brands = DB::table('brands')
                    ->join('models', 'brands.id', '=', 'models.brand_id')
                    ->join('year_bulb', 'models.id', '=', 'year_bulb.model_id')
                    ->select(
                        'brands.name',
                        'models.name as model_name',
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
                    ->take(20)
                    ->get();

       

        return ['data' => $brands];
    }
}