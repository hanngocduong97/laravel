<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Product;
use Yajra\Datatables\Datatables;
use App\Category;
use App\User;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::All();

        // $posts = Product::orderBy('id', 'DESC')->get();

        return view('admin.category',['categories'=> $categories]);
    }

     

    public function anyData()
    {
        return Datatables::of(Category::query())->make(true);
    }
    public function getList()
    {
        $categories= Category::query();
        return datatables()->eloquent($categories)
            ->addColumn('action', function($category){
                return '<button categoryId="'.$category->id.'" class="btn btn-sm btn-success" data-title="show" data-toggle="modal" data-target="#show" id="categorydetail"><i class="fa fa-eye"></i></button>
                        <button categoryId="'. $category->id .'" class="btn btn-sm btn-warning" data-title="show" data-toggle="modal" data-target="#edit" id="categoryedit" ><i class="fa fa-edit"></i></button>
                        <button categoryId="'. $category->id .'" class="btn btn-sm btn-danger" id="categorydelete" ><i class="fa fa-trash"></i></button>';
            })
        // ->addColumn('photo', function($user){
        //     return '<img class="img-fluid" src="'. $user->avatar .'">';
        // })
        ->rawColumns(['action'])
        ->toJson();
    }
    
    public function create()
    {
        // $categories = Category::all();
        // $users = User::all();
        // // $sanpham = Product::find($id);
        
        // return view('admin.category.create',['categories'=> $categories]);
    }

    public function store(Request $request)
    {
        $data = $request->all();  

        Category::create($data);

        return redirect('admin/categories')->with('flag','Thêm thành công!');
    }

    
    public function show($id)
    {
        $categories = Category::find($id);
         return response()->json($categories);
    }

  
    public function edit($id)
    {
        // $categories = Category::all();
        // $users = User::all();
        $categories = Category::find($id);
       
         return view('admin.category.edit',['categories'=>$categories,'product'=> $product]);
           
       
        
    }

   
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $data = $request->all();
        $category->update($data);

        return response()->json([$category]);
    }

   
    public function destroy($id)
    {
        Category::where('id',$id)->first()->delete();
        return response()->json(['eror'=>false]);
    }
}
