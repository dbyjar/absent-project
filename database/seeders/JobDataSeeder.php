<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Job;

class JobDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = ["admin", "packer"];

        foreach ($data as $value) {
            Job::create([
                'name' => $value
            ]);
        }
    }
}
