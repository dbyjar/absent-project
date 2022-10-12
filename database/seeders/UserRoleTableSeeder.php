<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserRoles;

class UserRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = ["admin", "user"];

        foreach ($data as $value) {
            UserRoles::create([
                'name' => $value
            ]);
        }
    }
}
