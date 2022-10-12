<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShiftAndSalaryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shift_and_salaries', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("time");
            $table->integer("price");
            $table->bigInteger('job_id')->unsigned()->nullable();
            $table->foreign('job_id')
                ->references('id')
                ->on('jobs')
                ->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shift_and_salary');
    }
}
