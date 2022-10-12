<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table
                ->bigInteger('user_id')
                ->unsigned()
                ->nullable();

            $table
                ->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('set null');

            $table
                ->bigInteger('shift_and_salary_id')
                ->unsigned()
                ->nullable();

            $table
                ->foreign('shift_and_salary_id')
                ->references('id')
                ->on('shift_and_salaries')
                ->onDelete('set null');

            $table->dateTime("punch_in");
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
        Schema::dropIfExists('attendances');
    }
}
