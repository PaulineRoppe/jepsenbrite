<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(EventSeeder::class);
        $this->call(UserSeeder::class);

    }
}
