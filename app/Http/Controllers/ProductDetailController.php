<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Yajra\Datatables\Datatables;
use App\Category;
use App\User;
use App\Size;
use App\Color;
use App\ProductDetail;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ProductDetailRequest;

class ProductDetailController extends Controller
{
     public function index()
    {
        dd('aaaa');
    }
      public function store(ProductDetailRequest $request)
    {
        $data = $request->all();  

        $productdetail= new ProductDetail;
        $productdetail->quantity= $data['quantity'];
        $productdetail->product_id= $data['product_id'];
        $productdetail->size_id= $data['size_id'];
        $productdetail->color_id= $data['color_id'];
        
        $productdetail->save();
        
        return response()->json(['success'=>'yes']);

        // return redirect('admin/products')->with('flag','Thêm thành công!');
    }
//
     public function getList($id)
    {
    	$productdetail_id=$id;
    	$productdetails = DB::table('product_details')->where('product_details.product_id', '=', $productdetail_id)
        ->join('products', function ($join) {
            $join->on('product_details.product_id', '=', 'products.id');
                 
        })
        ->join('sizes', function ($join) {
            $join->on('product_details.size_id', '=', 'sizes.id');
                 
        })
         ->join('colors', function ($join) {
            $join->on('product_details.color_id', '=', 'colors.id');
                 
        })
        ->select('product_details.id','product_details.quantity','products.name','sizes.size','colors.color_name','colors.color');
       
        //@@ lỗi thì ô làm theo kiểu khác phải có id mới xác định đc lấy details của product nào chứ?? tôi đang mặc đinh cho id =1 kìa :)))
        
         

        return Datatables::of($productdetails)
            ->addColumn('action', function($productdetail){
                return '
                        <button productdetailId="'. $productdetail->id .'" class="btn btn-sm btn-success" ><i class="fa fa-eye" ></i></button>
                        <button productdetailId="'. $productdetail->id .'" class="btn btn-sm btn-danger" id="productdetaildelete" ><i class="fa fa-trash"></i></button>';
            })
            ->addColumn('color', function($productdetail){
              /*  return '<img class="img-fluid" src="'. $user->avatar .'">';*/
                return '<div style="width: 50px;border-radius: 30%;height: 50px;background:'.$productdetail->color.';"></div>';
                
             })
        ->rawColumns(['action','color'])
        ->make(true);

    }
    public function destroy($id)
    {
        ProductDetail::where('id',$id)->first()->delete();
        return response()->json(['eror'=>false]);
    }
}
