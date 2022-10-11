<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job')->insert([
            'name' => "admin"
        ]);

        DB::table('job')->insert([
            'name' => "packer"
        ]);
    }
}
