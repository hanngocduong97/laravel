@extends('layouts.master')
@section('content')
      <!--   <div class="breadcrumbs">
            <div class="container">
                <ol class="breadcrumb breadcrumb--ys pull-left">
                    <li class="home-link"><a href="index.html" class="icon icon-home"></a></li>                 
                    <li><a href="#">Women’s</a></li>
                    <li class="active">Dresses</li>
                </ol>
            </div>
        </div> -->
        
       

        <section>
        <div class="container">
            <div class="row">
                <form action="{{asset('')}}checkout" method="post">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="col-sm-12 clearfix">
                    <div class="container">
                        <div class="breadcrumbs">
                            <ol class="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li class="active">Shopping Cart</li>
                            </ol>
                        </div>
                        <div class="bill-to">
                            <p>Thông tin khách hàng</p>
                               <!--  @if(count($errors) >0)
                                    <ul>
                                        @foreach($errors->all() as $error)
                                            <li class="text-danger">{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                @endif -->
                                <div class="form-group">
                                     <label for="checkoutFormEmailAddress"> Họ và Tên  <sup>*</sup></label>
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}" >
                                    @if ($errors->has('name'))
                                        <p style="color: red;">{{$errors->first('name')}}</p>
                                    @endif
                                </div>
                                <div class="form-group">
                                     <label for="checkoutFormEmailAddress">Email <sup>*</sup></label>
                                    <input type="email" class="form-control" name="email" value="{{ old('email') }}" >
                                    @if ($errors->has('email'))
                                        <p style="color: red;">{{$errors->first('email')}}</p>
                                    @endif
                                </div>
                                <div class="form-group">
                                     <label for="checkoutFormEmailAddress">Địa Chỉ  <sup>*</sup></label>
                                    <input type="text" class="form-control" name="address" value="{{ old('address') }}" >
                                    @if ($errors->has('address'))
                                        <p style="color: red;">{{$errors->first('address')}}</p>
                                    @endif
                                </div>
                                <div class="form-group">
                                     <label for="checkoutFormEmailAddress"> Số điện thoại <sup>*</sup></label>
                                    <input type="text" class="form-control" name="number" value="{{ old('number') }}">
                                    @if ($errors->has('number'))
                                        <p style="color: red;">{{$errors->first('number')}}</p>
                                    @endif
                                </div>
                                    <p style="color: red; font-size: 14px">(*) Thông tin quý khách phải nhập đầy đủ</p>
                                
                                <div class="form-two">
                                    <textarea name="description" class="form-control" value="{{ old('description') }}"  placeholder="Ghi chú" rows="10"></textarea>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <section id="cart_items">
                        <div class="container">
                            <div class="table-responsive cart_info">
                                <table class="table table-condensed">
                                 <thead>
                                    <tr class="cart_menu">
                                            <th class="image">Ảnh minh họa</th>
                                            <th class="description">Tên sản phẩm</th>
                                            <th class="price">Giá</th>
                                            <th class="quantity">Số lượng</th>
                                            <th class="total">Tổng</th>
                                            <td></td>
                                    </tr>
                                </thead>
                                    <tbody>
                                    @if(count($cart))
                                        @foreach($cart as $item)
                                            <tr>
                                                <td class="cart_product" style="margin: 0px">
                                                    @if($item->options->link)
                                                      
                                                        <img  width="150px" height="120px" src="{{asset('') }}storage/{{$item->options->link}}" alt="">
                                                    @else
                                                        <img width="100px" height="100px" src="{{ asset('layouts/images') }}/home/product1.jpg" alt="" />
                                                    @endif
                                                </td>
                                                <td class="cart_description">
                                                    <h4><a href="">{{ $item->name }}</a></h4>

                                                    <p>Web ID: {{ $item->id }}</p>
                                                </td>
                                                <td class="cart_price">
                                                    <p>{{ number_format($item->price)}} VNĐ</p>
                                                </td>
                                                <td class="cart_quantity">
                                                    {{ $item->qty }}
                                                </td>
                                                <td class="cart_total">
                                                    <p class="cart_total_price">{{ number_format($item->subtotal)}}
                                                        VNĐ</p>
                                                </td>
                                            </tr>
                                        @endforeach
                                        <tr>
                                            <td colspan="3">&nbsp;
                                            <span>
                                            <a class="btn btn-default update" href="{{ url('/cart')}}">Quay về giỏ
                                                hàng</a>
                                            </span>

                                            </td>
                                            <td colspan="3">
                                                <table class="table table-condensed total-result" style="">
                                                    <tbody>
                                                    <tr>
                                                        <td>Tổng :</td>
                                                        <td><span> VNĐ</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                        </td>
                                                        <td>
                                                            <button type="submit" class="btn btn-default check_out"
                                                               href="{{ url('checkout')}}">Gửi đơn hàng</button></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    @else
                                        <tr>
                                            <td>You have no items in the shopping cart</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">&nbsp;
                                                <a class="btn btn-default update" href="{{ url('/')}}">Mua hàng</a>
                                            </td>
                                        </tr>
                                    @endif
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    <!--/#cart_items-->
                </div>
                </form>
            </div>
        </div>
    </section>

@endsection