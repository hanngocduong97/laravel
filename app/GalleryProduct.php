<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GalleryProduct extends Model
{
    protected $table = 'gallery_products';
    protected $fillable = ['link', 'product_id'];

    public function product(){
      return $this->belongsTo('App\Product', 'product_id');
    }
 }
