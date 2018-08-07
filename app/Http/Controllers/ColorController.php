<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Color;

class ColorController extends Controller
{
   public function index()
    {

       $colors=Color::all();
       

        return view('admin.color.index',['colors'=> $colors]);
    }
}
