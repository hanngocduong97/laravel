<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
    protected $table = 'sizes';
    protected $fillable = ['size'];

   
     public function productdetail(){
    	return $this->hasOne('App\ProductDetail');
    }
}
