<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Controllers\Storage;
use Illuminate\Support\Facades\Storage;
use DB;

class HomeProductController extends Controller
{
     public function index()
    {
    	 $postproducts = DB::table('products')
        ->leftJoin('gallery_products', 'products.id', '=', 'gallery_products.product_id')
        // ->leftJoin('product_details', 'products.id', '=', 'product_details.product_id')
        // ->leftJoin('colors', 'colors.id', '=', 'product_details.color_id')

        // ->select('products.id','products.name','products.code','products.price','products.description','gallery_products.link','product_details.color_id','colors.color')
        ->select('products.id','products.name','products.code','products.price','products.description','gallery_products.link')
        ->orderBy('products.id','desc')
        ->paginate(8);
        // ->get();
        
        
        // dd($postproducts);

        return view('welcome',['postproducts'=> $postproducts]);
    }
    public function listdetail($id)
        {
            $productdetail_id=$id;
            $productdetails1 = DB::table('products')->where('products.id', '=', $productdetail_id)
        
            ->join('gallery_products', function ($join) {
                $join->on('products.id', '=', 'gallery_products.product_id');
                     
            })
             ->join('product_details', function ($join) {
                $join->on('products.id', '=', 'product_details.product_id');
               
                     
            })
            
            ->select('products.id','products.name','products.code','products.price','products.description','gallery_products.link')
            
            // ->groupBy('products.name','products.code','products.price','products.description')
            ->first();

            $productdetails2 = DB::table('products')->where('products.id', '=', $productdetail_id)
            ->join('product_details', function ($join) {
                $join->on('products.id', '=', 'product_details.product_id');
                     
            })
            ->join('sizes', function ($join) {
                $join->on('product_details.size_id', '=', 'sizes.id');
                     
            })
            ->select('sizes.id','sizes.size')
            ->groupBy('sizes.id','sizes.size')
            ->get();

            $productdetails3 = DB::table('products')->where('products.id', '=', $productdetail_id)
            ->join('product_details', function ($join) {
                $join->on('products.id', '=', 'product_details.product_id');
                     
            })
            ->join('colors', function ($join) {
                $join->on('product_details.color_id', '=', 'colors.id');
                     
            })
            ->select('colors.id','colors.color')
            ->groupBy('colors.id','colors.color')
            ->get();

            // dd( $productdetails1);
            $productdetails4 = DB::table('product_details')->where('product_details.product_id', '=', $productdetail_id)
            ->sum('quantity');
            // ->select('SUM(quantity) as quantity');
            // dd( $productdetails4);
            return view('productdetail',['productdetails1'=> $productdetails1,'productdetails2'=> $productdetails2,'productdetails3'=> $productdetails3,'productdetails4'=> $productdetails4]);
            // return view('productdetail',['productdetails1'=> $productdetails1]);
            

        }
    public function getdetail($id){

            $productdetails2 = DB::table('products')->where('products.id', '=', $id)
            ->join('product_details', function ($join) {
                $join->on('products.id', '=', 'product_details.product_id');
                     
            })
            ->join('colors', function ($join) {
                $join->on('product_details.color_id', '=', 'colors.id');
                    // ->where('colors.id','=','$id2');
                     
            })
            ->join('sizes', function ($join) {
                $join->on('product_details.size_id', '=', 'sizes.id');
                     
            })
            ->select('sizes.id','sizes.size')
            ->groupBy('sizes.size')
            ->get();
            dd($productdetails2);
        }
      public function getsize($colorid,$id){
            // $color_id = $colorid;
            // $pro_id = $id;
           

            $productdetails3 = DB::table('product_details')->where('product_details.product_id', '=', $id)
            ->where('product_details.color_id', '=', $colorid)
           
             ->join('sizes', function ($join) {
                $join->on('product_details.size_id', '=', 'sizes.id');
                     
            })
            ->select('sizes.id','sizes.size')
            ->groupBy('sizes.id','sizes.size')
            ->first();
            // ->get();
            // // $product = Product::find($pro_id);
            // dd($productdetails3);
            return response()->json($productdetails3);
        
            // return view(['productdetailssize2'=> $productdetailssize2]);

    }
}
