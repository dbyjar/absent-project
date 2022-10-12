<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddShiftAndSalaryToUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string("phone")->nullable();
            $table->longText("address")->nullable();
            $table->bigInteger('job_id')->unsigned()->nullable();
            $table->foreign('job_id')
                ->references('id')
                ->on('jobs')
                ->onDelete('set null');
            $table->bigInteger('shift_and_salary_id')->unsigned()->nullable();
            $table->foreign('shift_and_salary_id')
                ->references('id')
                ->on('shift_and_salaries')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user', function (Blueprint $table) {
            //
        });
    }
}
