<?php

namespace App\Http\Controllers;

use Yajra\Datatables\Datatables;

use Illuminate\Http\Request;
use DB;
use App\Bill;
use App\BillDetail;

class BillController extends Controller
{
	public function index(){
		return view('admin.bill');
	}


     public function getList()
    {
    	
    	$bills = DB::table('bills')
    	->leftJoin('customers','customers.id', '=', 'bills.customer_id')
        // ->join('customers', function ($join) {
        //     $join->on('customers.id', '=', 'bills.customer_id');
                 
        // })
        // ->join('bill_details', function ($join) {
        //     $join->on('bill_details.bill_id', '=', 'bills.id');
                 
        // })
        // ->join('products', function ($join) {
        //     $join->on('products.id', '=', 'bill_details.product_id');
                 
        // })
        ->select('bills.id','customers.name','customers.address','bills.date_order');
        // dd($bills);
       

        return Datatables::of($bills)
            ->addColumn('action', function($bill){
                return '
                        <button  billId="'. $bill->id .'"class="btn btn-sm btn-success showbill" data-title="show" data-toggle="modal" data-target="#show" ><i class="fa fa-eye" ></i></button>
                        <button   billId="'. $bill->id .'" class="btn btn-sm btn-danger" id="deletebill" ><i class="fa fa-trash"></i></button>';
            })
           
        ->rawColumns(['action'])
        ->make(true);

    }
    public function destroy($id){

    	Bill::where('id',$id)->first()->delete();

        BillDetail::where('bill_id',$id)->delete();

        return response()->json(['eror'=>false]);
    }
    public function show($id){
    	$bills = DB::table('bills')->where('bills.id', '=', $id)
    	->leftJoin('customers','customers.id', '=', 'bills.customer_id')
    	->leftJoin('bill_details','bill_details.bill_id', '=', 'bills.id')
    	->leftJoin('products','products.id', '=', 'bill_details.product_id')
    
        ->select('bills.id','customers.name','customers.address','customers.email','customers.number','bills.date_order','bills.total','bill_details.quantity','bill_details.price','products.code')
        ->first();
        // dd($bills);
        return response()->json($bills);

    }
}
