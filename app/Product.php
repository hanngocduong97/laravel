<?php

namespace App;
use Category;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $fillable = ['name','code', 'cost', 'price','description','category_id'];

    public function category(){
      return $this->belongsTo('App\Category', 'category_id');
    }
     public function productdetail(){
    	return $this->hasMany('App\ProductDetail');
    }
     public function productgallery(){
    	return $this->hasMany('App\ProductDetail');
    }
}
