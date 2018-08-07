<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use App\Product;
use Yajra\Datatables\Datatables;
use App\Category;
use App\User;
use App\Size;
use App\Color;
use App\GalleryProduct;
use App\ProductDetail;
use DB;
use Illuminate\Support\Facades\Storage;




class ProductController extends Controller
{
    public function index()
    {

        $products = Product::All();
        $categories = Category::all();
        $sizes = Size::all();
        $colors = Color::all();
        // $posts = Product::orderBy('id', 'DESC')->get();

        return view('admin.list',['products'=> $products,'categories'=> $categories,'sizes'=> $sizes,'colors'=> $colors]);
    }

     

    public function anyData()
    {
        return Datatables::of(User::query())->make(true);
    }
    // public function getList()
    // {
    //     // $products= Product::query();
    //     $products = DB::table('products')
    //     ->leftJoin('gallery_products', 'products.id', '=', 'gallery_products.product_id')
    //     ->select('products.id','products.name','products.code','gallery_products.link')
    //     ->orderBy('products.id','desc');;
    //     // return datatables()->eloquent($products)
    //     return Datatables::of($products)
    //         ->addColumn('action', function($product){
    //             return '<button class="btn btn-sm btn-success" data-title="addproductdetail" data-toggle="modal" data-target="#addproductdetail" productId="'.$product->id.'"  id="addpro"><i class="fa fa-plus"></i></button>

    //                 <button productId="'.$product->id.'" class="btn btn-sm btn-success" data-title="show" data-toggle="modal" data-target="#show" id="showdetails"><i class="fa fa-eye" ></i></button>


    //                    <button productId="'. $product->id .'" class="btn btn-sm btn-warning editproducts" 
    //                    data-title="editproduct" data-toggle="modal" data-target="#editproduct" ><i class="fa fa-edit"></i></button>

    //                     <button productId="'. $product->id .'" class="btn btn-sm btn-danger" id="productdelete1" ><i class="fa fa-trash"></i></button>';
    //         })
    //    ->addColumn('link',function($product){
    //            return '<img style = " width:60px;height:60px" src= "' . \Storage::url($product->link) . '" />';
    //         })
    //     ->rawColumns(['action','link'])
    //     ->make(true);
    // }
      public function getList()
    {
        // $products= Product::query();
        $products = DB::table('products')
        ->leftJoin('gallery_products', 'products.id', '=', 'gallery_products.product_id')
        ->select('products.id','products.name','products.code','products.cost','products.price')
        ->orderBy('products.id','desc');;
        // return datatables()->eloquent($products)
        return Datatables::of($products)
            ->addColumn('action', function($product){
                return '<button class="btn btn-sm btn-primary" data-title="addproductdetail" data-toggle="modal" data-target="#addproductdetail" productId="'.$product->id.'"  id="addpro"><i class="fa fa-plus"></i></button>

                    <button productId="'.$product->id.'" class="btn btn-sm btn-success" data-title="show" data-toggle="modal" data-target="#show" id="showdetails"><i class="fa fa-eye" ></i></button>


                       <button productId="'. $product->id .'" class="btn btn-sm btn-warning editproducts" 
                       data-title="editproduct" data-toggle="modal" data-target="#editproduct" ><i class="fa fa-edit"></i></button>

                        <button productId="'. $product->id .'" class="btn btn-sm btn-danger" id="productdelete1" ><i class="fa fa-trash"></i></button>';
            })
       
        ->rawColumns(['action'])
        ->make(true);
    }


   
    
    public function create()
    {
        $categories = Category::all();
        $users = User::all();
        // $sanpham = Product::find($id);
        
        return view('admin.product.create',['categories'=> $categories]);
    }
    public function store(ProductRequest $request)
    {
        $data= $request->all();
        // return response()->json($request->link);
      
        $product= new Product;
        $product->name= $data['name'];
        $product->code= $data['code'];
        $product->cost= $data['cost'];
        $product->price= $data['price'];
        $product->description= $data['description'];
        $product->category_id= $data['category_id'];
        $product->save();

        $files = $request->file('link');
        foreach ($files as $image) {
                $file =$image->store('images');
                $gallery_product= new GalleryProduct;
                $gallery_product->link=$file;
                $gallery_product->product_id= $product->id;
                $gallery_product->save();
            }
            
        return response()->json(['success'=>'yes']);
        // return redirect('admin/products')->with('flag','Thêm thành công!');
    }


    // public function store(ProductRequest $request)
    // {
    //     // $data= $request->all();
    //     $data = \Validator::make($request->all());
    //     if ($data->fails())
    //     {
    //         return response()->json(['errors'=>$data->errors()]);
    //     }else{
    //     $product= new Product;
    //     $product->name= $data['name'];
    //     $product->code= $data['code'];
    //     $product->cost= $data['cost'];
    //     $product->price= $data['price'];
    //     $product->description= $data['description'];
    //     $product->category_id= $data['category_id'];
    //     $product->save();

    //     foreach ($request->link as $key => $image) {
    //             $file =$image->store('images');
    //             $gallery_product= new GalleryProduct;
    //             $gallery_product->link=$file;
    //             $gallery_product->product_id= $product->id;
    //             $gallery_product->save();
    //         }
            
    //         return redirect('admin/products')->with('flag','Thêm thành công!');
    //     }
    // }
    // public function store(Request $request){

    //          $validation = \Validator::make($request->all(), [
    //             'name' => 'required|min:3',
    //             'code' => 'required|unique:products',
    //             'cost' => 'required',
    //             'price' => 'required',
    //             'description' => 'required',
    //         ]);
            
    //     if ($validation->fails())
    //     {
    //         return response()->json(['errors'=>$validation->errors()]);
    //     }else{
    //     /*dd($request);*/

        
    //         $product = new Product([
    //            'name'  => $request->input('name'),
    //            'code'  => $request->input('code'),
    //            'cost'  => $request->input('cost'),
    //            'price'  => $request->input('price'),
    //            'description'  => $request->input('description'),
    //            'category_id'  => $request->input('category_id')
    //         ]);
    //         // $product= new Product;
    //         // $product->name= $data['name'];
    //         // $product->code= $data['code'];
    //         // $product->cost= $data['cost'];
    //         // $product->price= $data['price'];
    //         // $product->description= $data['description'];
    //         // $product->category_id= $data['category_id'];
    //         $product->save();
             
    //             foreach ($request->link as $key => $image) {
    //                 $file =$image->store('images');
    //                 $gallery_product= new GalleryProduct([
    //                    'link'  => $file,
    //                    'product_id'  => $product->id,
                 
    //             ]);
                    
    //             $gallery_product->save();
    //         }
            
    //         // return redirect('admin/products')->with('flag','Thêm thành công!');
    //         return response()->json(['success'=>'yes']);
    //     }

    // }

    
    public function show($id)
    {
        $products = Product::find($id);
         return response()->json($products);
    }

  
    public function edit($id)
    {
        $categories = Category::all();
        // $users = User::all();
        $product = Product::find($id);

       
         return view(['product'=> $product]);
           
       
        
    }

   
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $product = Product::find($id);
        
        

        $product->update($data);

        // return redirect('admin/products')->with('flag','Sửa thành công!');
          return response()->json(['success'=>'yes']);
    }

   
    public function destroy($id)
    {
        Product::where('id',$id)->first()->delete();
        ProductDetail::where('product_id',$id)->delete();
        GalleryProduct::where('product_id',$id)->delete();
        return response()->json(['eror'=>false]);
    }
}
