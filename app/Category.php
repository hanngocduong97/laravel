<?php

namespace App;

use Product;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = ['name', 'description','image'];

    public function products(){
    	return $this->hasMany('App\Product');
    }
}
