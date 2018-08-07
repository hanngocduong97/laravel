<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests;
use Auth;


class HomeAdminController extends Controller
{
	  // public function __construct()
   //  {
   //      $this->middleware('guest:admin');
   //  }
      public function list()
    {

        return view('admin/index');
    }
}
