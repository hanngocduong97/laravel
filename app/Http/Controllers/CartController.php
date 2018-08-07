<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cart;
use App\Customer;
use App\Bill;
use App\BillDetail;
use DB;
use App\Http\Requests\CheckoutRequest;

class CartController extends Controller
{
    public function cart(Request $request){
        
        $data= $request->all();


        //  $productdetails3 = DB::table('product_details')->where('product_details.product_id', '=', $data['product_id'])
        //  ->where('product_details.color_id', '=', $data['color_id'])
        //  ->where('product_details.size_id', '=', $data['size_id'])
        
        //     ->leftJoin('products', 'products.id', '=', 'product_details.product_id')
        //     ->leftJoin('gallery_products', 'products.id', '=', 'gallery_products.product_id')
        //     ->leftJoin('sizes', 'product_details.size_id', '=', 'sizes.id')
        //     ->leftJoin('colors', 'product_details.color_id', '=', 'colors.id')
        //     ->select('products.*','product_details.quantity','colors.color','sizes.size','gallery_products.link')
        // ->first();
         $productdetails1 = DB::table('product_details')->where('product_details.product_id', '=', $data['product_id'])
          ->where('product_details.color_id', '=', $data['color_id'])
       ->where('product_details.size_id', '=', $data['size_id'])
        
       
        ->leftJoin('products', 'products.id', '=', 'product_details.product_id')
        ->leftJoin('gallery_products', 'products.id', '=', 'gallery_products.product_id')
        ->leftJoin('sizes', 'product_details.size_id', '=', 'sizes.id')
        ->leftJoin('colors', 'product_details.color_id', '=', 'colors.id')
        ->select('products.*','product_details.quantity','colors.color','sizes.size','gallery_products.link')
        ->first();
            // dd($productdetails1);

             Cart::add(array('id' => $productdetails1->id, 'name' => $productdetails1->name, 'price' => $productdetails1->price, 'qty' => $data['quantity'],'options'=> array('color' => $productdetails1->color,'size' => $productdetails1->size,'link' => $productdetails1->link)));

           

             $content = Cart::content();

             // return ($content);
        return view('listcart', compact('content'));
        // return view('listcart');
    } 
    public function addcart($id){
        $productdetails1 = DB::table('products')->where('products.id', '=', $id)
        
       
        ->leftJoin('product_details', 'products.id', '=', 'product_details.product_id')
        ->leftJoin('gallery_products', 'products.id', '=', 'gallery_products.product_id')
        ->leftJoin('sizes', 'product_details.size_id', '=', 'sizes.id')
        ->leftJoin('colors', 'product_details.color_id', '=', 'colors.id')
        ->select('products.*','product_details.quantity','colors.color','sizes.size','gallery_products.link')
        ->first();
         Cart::add(array('id' => $productdetails1->id, 'name' => $productdetails1->name, 'price' => $productdetails1->price, 'qty' => 1,'options'=> array('color' => $productdetails1->color,'size' => $productdetails1->size,'link' => $productdetails1->link)));
         return redirect('/');
    }
    public function getcart()
    {
      
        $content = Cart::content();
        return view('listcart', compact('content'));
    }
    public function deletecart()
    {
      Cart::destroy();
        $content = Cart::content();
        return view('listcart', compact('content'));
    }
    public function clearcart($rowId)
    {
        Cart::remove($rowId);
        
        $content = Cart::content();
        return view('listcart', compact('content'));
        
    }
  
      public function checkout()
    {
        
        
        $cart = Cart::content();
        // return view('listcart', compact('content'));
        return view('checkout', compact('cart'));
        
    }
      public function postcheckout(CheckoutRequest $request)
    {
        $data= $request->all();
        
        $cart = Cart::content();
        


         $customer = new Customer;
            $customer->name = $data['name'];
            $customer->email = $data['email'];
            $customer->address =$data['address'];
            $customer->number = $data['number'];
            $customer->description = $data['description'];
            $customer->save();

            $bill = new Bill;
            $bill->customer_id = $customer->id;
            $bill->date_order = date('Y-m-d H:i:s');
            $bill->total = str_replace(',', '', Cart::total());
            $bill->description = $data['description'];
            $bill->save();

            if (count($cart) >0) {
                foreach ($cart as $key => $item) {
                    $billDetail = new BillDetail;
                    $billDetail->bill_id = $bill->id;
                    $billDetail->product_id = $item->id;
                    $billDetail->quantity = $item->qty;
                    $billDetail->price = $item->price;
                    $billDetail->save();
                }
            }
          // del
           Cart::destroy();
        // return view('welcome', compact('content'));
        // return view('checkout', compact('cart'));
           return redirect('cart')->with('flag','Thêm thành công!');
        
    }
  
}
