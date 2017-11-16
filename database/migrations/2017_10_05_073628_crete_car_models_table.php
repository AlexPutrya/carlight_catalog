<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreteCarModelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if( !Schema::hasTable('car_models')) {
            Schema::create('car_models', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name');
                $table->integer('brand_id')->unsigned();

                $table->foreign('brand_id')->references('id')->on('car_brands');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExsists('car_models');
    }
}
