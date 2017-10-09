<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateYaerBulbTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('year_bulb')) {
            Schema::create('year_bulb', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('model_id')->unsigned()->nullable();
                $table->string('year_range')->nullable();
                $table->integer('low_beam')->nullable();
                $table->integer('high_beam')->nullable();
                $table->integer('fog_light')->nullable();
                $table->integer('front_indicator')->nullable();
                $table->integer('parking_light')->nullable();
                $table->integer('stop_light')->nullable();
                $table->integer('tail_light')->nullable();
                $table->integer('fog_warning_light')->nullable();
                $table->integer('backup_light')->nullable();
                $table->integer('license_plate_light')->nullable();

                $table->foreign('model_id')->references('id')->on('models');
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
        Schema::dropIfExists('year_bulb');
    }
}
