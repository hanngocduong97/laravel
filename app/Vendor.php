<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $table = 'products';
    protected $fillable = ['name_vender','color','add','phone'];

   
    public function productdetail(){
    	return $this->hasOne('App\ProductDetail');
    }
}
