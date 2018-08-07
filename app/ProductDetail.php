<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductDetail extends Model
{
    protected $table = 'product_details';
    protected $fillable = ['quantity', 'product_id', 'size_id','color_id'];

    public function product(){
      return $this->belongsTo('App\Product', 'product_id');
    }
    public function size(){
      return $this->belongsTo('App\Size', 'size_id');
    }
    public function color(){
      return $this->belongsTo('App\Color', 'color_id');
    }

}
