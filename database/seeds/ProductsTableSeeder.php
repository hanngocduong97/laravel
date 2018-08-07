<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->truncate();
        Product::create([
            'name' => 'ÁO POLO NAM',
            'quantity'=> '269',
            'cost'=> '80000',
            'price'=> '99000',
            'size'=> 'M',
            'color'=> 'White',
            'image'=> 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5flgS7fxge5q7VxBX6L23v1FJ8C1lwL4HbmwU-tHabHip_AcJw',
            'description'=> 'Đường may tinh tế, cẩn thận, chỉnh chu'
        ]);
        Product::create([
            'name' => 'ĐẦM SUÔNG DÁNG DÀI  ',
            'quantity'=> '851 ',
            'cost'=> '50000',
            'price'=> '70000',
            'size'=> 'L',
            'color'=> 'Black',
            'image'=> 'img2.jpg',
            'description'=> 'Chất thun mềm mịn, thoáng mát, thấm hút mồ hôi tốt'
        ]);
        Product::create([
            'name' => 'Áo Sơ Mi Nam ',
            'quantity'=> '7052',
            'cost'=> '100000',
            'price'=> '140000',
            'size'=> 'L',
            'color'=> 'Blue',
            'image'=> 'img3.jpg',
            'description'=> 'Áo sơ mi là món đồ kinh điển dành cho nam giới, đặc biệt là những quý ông công sở. Những chiếc áo sơ mi nam thiết kế đơn giản nhưng đã định hình nên phong thái, khí chất mạnh mẽ nhất của một đấng mày râu. Chất liệu vải cotton cao cấp, thấm hút mồ hôi cực tốt là sự lựa chọn lí tưởng cho ngày hè nóng bức. Áo sơ mi với những họa tiết đơn giản nhưng vẫn mang đến sự lịch lãm, trẻ trung. Sơ mi nam trắng mix cùng với quần âu chưa bao giờ là lỗi mốt. Sơ mi nam- quần jean là cặp đôi hoàn hảo cùng chàng dạo phố. Đơn giản, vừa người, dễ mặc, dễ phối đồ, áo sơ mi nam họa tiết dài tay sẽ giúp lấy đi những gì từng là thiếu sót trở thành dấu ấn độc đáo, tạo nên triết lý trong cách ăn mặc cho nam giới.'
        ]);
         
    }
}
