<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();
        Category::create([
            'name' => 'Áo nam',
            'description'=> 'Áo cọc nam ',
            'image'=> 'img1.jpg'
        ]);
        Category::create([
           'name' => 'Áo nữ',
            'description'=> 'Áo cọc nữa ',
            'image'=> 'img2.jpg'
        ]);
          Category::create([
            'name' => 'Áo sơ mi',
            'description'=> 'Áo sơ mi nam nữ ',
            'image'=> 'img3.jpg'
        ]);
    }
}
