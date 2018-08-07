<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');

// });
 

// use Illuminate\Http\Request;

  // Route::middleware('auth')->group(function(){
  //           Route::get('/dashboadh', 'HomeController@index')->name('home');


  //    });

Route::get('/', 'HomeProductController@index');

Route::get('/detail/{id}', 'HomeProductController@listdetail');
Route::get('/productdetail1/{id}', 'HomeProductController@getdetail');
Route::get('/detailsize/{colorid}/{id}','HomeProductController@getsize');

Route::get('/cart','CartController@getcart');
Route::post('/cart','CartController@cart');
Route::get('/cart/{id}','CartController@addcart');
Route::get('/deletecart', 'CartController@deletecart');
Route::get('/clearcart/{rowId}', 'CartController@clearcart');

Route::get('/checkout', 'CartController@checkout');
Route::post('/checkout', 'CartController@postcheckout');


// Route::get('/detailsize/{colorid}/{id}','HomeProductController@getsize');

// 









// Route::prefix('auth')->group(function(){

//         $this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
//         $this->post('login', 'Auth\LoginController@login');
//         $this->post('logout', 'Auth\LoginController@logout')->name('logout');

//         // Registration Routes...
//         $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
//         $this->post('register', 'Auth\RegisterController@register');

//         // Password Reset Routes...
//         $this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
//         $this->post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
//         $this->get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
//         $this->post('password/reset', 'Auth\ResetPasswordController@reset');
        
//         Route::middleware('auth')->group(function(){
//             Route::get('/dashboadh', 'HomeController@list');

//      });
// });


Auth::routes();

Route::prefix('admin')->group(function(){

	  $this->get('login', 'Admin\LoginController@showLoginForm')->name('admin.login');
        $this->post('login', 'Admin\LoginController@login');
        $this->post('logout', 'Admin\LoginController@logout')->name('admin.logout');

        // Registration Routes...
        $this->get('register', 'Admin\RegisterController@showRegistrationForm')->name('admin.register');
        $this->post('register', 'Admin\RegisterController@register');

        // Password Reset Routes...
        $this->get('password/reset', 'Admin\ForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
        $this->post('password/email', 'Admin\ForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
        $this->get('password/reset/{token}', 'Admin\ResetPasswordController@showResetForm')->name('admin.password.reset');
        $this->post('password/reset', 'Admin\ResetPasswordController@reset');
        
        // Route::middleware('auth.admin')->group(function(){
            Route::get('/dashboadh', 'HomeAdminController@list');
           
            Route::get('products/list', 'ProductController@getList')->name('products.list');
            // Route::get('products', 'ProductController@index');

            Route::resource('products','ProductController');

            // Route::get('products','ProductController@index')->name('products.index');

            // // Route::get('products',['use'=> 'ProductController@index' , 'as' => 'products.index']);

            // Route::get('products/create','ProductController@create')->name('products.create');

            // Route::get('products/{id}/edit','ProductController@edit');

            // Route::post('products','ProductController@store');

            Route::post('products/update/{id}','ProductController@update');

            // Route::get('products/{id}','ProductController@show')->name('products.show');

            // Route::delete('products/{id}','ProductController@destroy');

           

            Route::get('categories/list', 'CategoryController@getList')->name('categories.list');


            Route::resource('categories','CategoryController');

            Route::get('productdetails/list/{id}', 'ProductDetailController@getList');

            // Route::get('productdetails', 'ProductDetailController@index');

            Route::post('productdetails','ProductDetailController@store');
            
            Route::delete('productdetails/{id}','ProductDetailController@destroy');

            Route::get('colors', 'ColorController@index');
            // Route::resource('productdetails','ProductDetailController');

            Route::get('bills/list', 'BillController@getList');

            Route::get('bills', 'BillController@index');

            Route::get('bills/{id}', 'BillController@show');

            Route::delete('bills/{id}','BillController@destroy');



       

     // });
});
