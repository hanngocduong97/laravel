<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Color extends Model
{ 
    protected $table = 'colors';
    protected $fillable = ['color_name','color'];

   
     public function productdetail(){
    	return $this->hasOne('App\ProductDetail');
    }
}
