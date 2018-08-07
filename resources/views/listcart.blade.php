@extends('layouts.master')
@section('heder')
	<style>
		.shopping-cart-table th:nth-child(2) {
		  border-right: block;
		}
	</style>
@endsection
@section('content')
<div class="breadcrumbs">
			<div class="container">
				<ol class="breadcrumb breadcrumb--ys pull-left">
					<li class="home-link"><a href="index.html" class="icon icon-home"></a></li>					
					<li><a href="#">Women’s</a></li>
					<li class="active">Dresses</li>
				</ol>
			</div>
		</div>
		<!-- /breadcrumbs --> 
		<!-- CONTENT section -->
		<div id="pageContent">
			<div class="container">				
				<!-- title -->
				<div class="title-box">
					<h1 class="text-center text-uppercase title-under">SHOPPING CART</h1>
				</div>
				<!-- /title -->		
				<!-- Shopping cart table -->
				<div class="container-widget">
					@if(count($content))
					<table class="shopping-cart-table  ">
					 
						<thead>
							<tr>
								<th>Ảnh minh họa</th>
								
								<th>Name</th>
								<th>Quantity</th>
								<th>Unit Price</th>
								
								<th>Thêm Qty</th>
								<th>Subtotal</th>
								<th>&nbsp;</th>
							</tr>
						</thead>
						<tbody>
						@foreach($content as $item)
							<tr>
								<td>
									<div class="shopping-cart-table__product-image">
										<a href="product.html">
											<img class="img-responsive" src="{{asset('') }}storage/{{$item->options->link}}" alt="">
										</a>
									</div>
								</td>
								<td>
									<!-- <h5 class="shopping-cart-table__product-name text-left text-uppercase"> -->
										<a href="product.html">{{ $item->name }}</a>
									<!-- </h5> -->
									<!-- <ul class="shopping-cart-table__list-parameters">
										<li>
											<span>Color:</span> {{$item->options->color}}
										</li>
										<li>
											<span>Quantity:</span>{{$item->qty}}
										</li>
										
										
										<li>
											<span>Size:</span> {{$item->options->size}}
										</li>

										

										<li class="visible-xs">
											<span>Price:</span>
											<span class="price-mobile">{{ number_format($item->price)}} </span>
										</li>
										<li class="visible-xs">
											<span>Qty:</span> -->
											<!-- 
											<div class="number input-counter">
											    <span class="minus-btn"></span>
											    <input type="text" value="1" size="5"/>
											    <span class="plus-btn"></span>
											</div>
											<!-- / -->
										<!-- </li>
									</ul> -->																				
								</td>
								<td>
									<div class="shopping-cart-table__product-price unit-price" style="font-size:21px">
										{{$item->qty}}
									</div>
								</td>
								<td>
									<div class="shopping-cart-table__product-price unit-price" style="font-size:21px">
										{{ number_format($item->price)}} VNĐ
									</div>
								</td>
								<td>
									<div class="shopping-cart-table__input">
										<!--  -->

										<div class="number input-counter">
										   <a href="{{url("cart?product_id=$item->id&increment=1")}}"> <span class="minus-btn"></span></a>
										    <input type="text" value="1" size="5"/>
										    <a href=""><span class="plus-btn"></span></a>
										</div>
										<!-- / -->
									</div>								
								</td>
								<td>
									<div class="shopping-cart-table__product-price subtotal" style="font-size:21px">
										{{ number_format($item->subtotal)}} VNĐ
									</div>
								</td>
								<td>
									<a class="shopping-cart-table__delete icon icon-clear" href="{{asset('')}}clearcart/{{$item->rowId}}"</a>
								</td>
							</tr>								
						
							@endforeach
							@else
		                		<p>You have no items in the shopping cart</p>
		                @endif
						</tbody>
					</table>
				</div>
				<!-- /Shopping cart table -->
				<div class="divider divider--xs"></div>
				<div class="clearfix shopping-cart-btns">
					<!-- <a class="btn btn--ys btn--light pull-right" href="#"><span class="icon icon-autorenew"></span>UPDATE SHOPPING CART</a> -->
					<div class="divider divider--xs visible-xs"></div>
		            <a class="btn btn--ys btn--light" href="{{asset('')}}deletecart"><span class="icon icon-delete"></span>CLEAR SHOPPING CART</a> 
		            <div class="divider divider--xs visible-xs"></div>
		            <a class="btn btn--ys btn--light pull-left btn-right" href="{{asset('')}}"><span class="icon icon-keyboard_arrow_left"></span>CONTINUE SHOPPING </a>         
		            <div class="divider divider--xs visible-xs"></div>   	
		           
		        </div>		        
				<div class="divider--md"></div>
				<div class="row" >
					<div class="col-md-6">
						<div class="card card--padding">
							<h4>ESTIMATE SHIPPING AND TAX</h4>
							<p>Enter your destination to get a shipping estimate.</p>
									<form action="#" onsubmit="showLocation(); return false;">
								      <p>
								        <input type="hidden" name="address1" value="Hà Nội" class="address_input form-control"  size="40" />
								        <input type="text" name="address2" value="Address 2" class="address_input form-control" size="40" />
								        <input type="submit" name="find" value="Search" />
								      </p>
								    </form>
								    <p id="results"></p>
						</div>
					</div>
					<!-- <div class="divider--md visible-sm visible-xs"></div>
					<div class="col-md-4">
						<div class=" card card--padding">
							<h4>DISCOUNT CODES</h4>
							<form>
								<div class="form-group">
							      <label for="inputDiscountCodes">Enter your coupon code if you have one.</label>
							      <input type="text" class="form-control" id="inputDiscountCodes">
							    </div>
								<button type="submit" class="btn btn--ys btn-top btn--light">apply coupon</button>
							</form>	
						</div>
					</div> -->
					<div class="divider--md visible-sm visible-xs"></div>
					<div class="col-md-6">
						<div class="card card--padding">
							<table class="table-total">
								<tbody>
									<tr>
										<th class="text-left">Subtotal:</th>
										<td class="text-right">$28.00</td>
									</tr>
									<tr>
										<th class="text-left">Tax:</th>
										<td class="text-right">$28.00</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<th>GRAND TOTAL:</th>
										<td>$56.00</td>
									</tr>
								</tfoot>
							</table>
							<a href="{{asset('')}}checkout" class="btn btn--ys btn--full btn--xl">PROCEED TO CHECKOUT <span class="icon icon--flippedX icon-reply"></span></a>
							<div class="text-right link-top">
								<a class="link-underline" href="">Checkout with Multiple Addresses</a>
							</div>
						</div>
					</div>
				</div>				
			</div>
		</div>

@endsection

<!-- @section('footer')
	 <script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAA7j_Q-rshuWkc8HyFI4V2HxQYPm-xtd00hTQOC0OXpAMO40FHAxT29dNBGfxqMPq5zwdeiDSHEPL89A" type="text/javascript"></script>
    <script language="javascript">
        var geocoder, location1, location2;
        function initialize() {
        geocoder = new GClientGeocoder();
    }
 
    function showLocation() {
        geocoder.getLocations(document.forms[0].address1.value, function (response) {
            if (!response || response.Status.code != 200)
            {
                alert("Sorry, we were unable to geocode the first address");
            }
            else
            {
                location1 = {lat: response.Placemark[0].Point.coordinates[1], lon: response.Placemark[0].Point.coordinates[0], address: response.Placemark[0].address};
                geocoder.getLocations(document.forms[0].address2.value, function (response) {
                    if (!response || response.Status.code != 200)
                    {
                        alert("Sorry, we were unable to geocode the second address");
                    }
                    else
                    {
                        location2 = {lat: response.Placemark[0].Point.coordinates[1], lon: response.Placemark[0].Point.coordinates[0], address: response.Placemark[0].address};
                        calculateDistance();
                    }
                });
            }
        });
    }
     
    function calculateDistance()
    {
        try
        {
            var glatlng1 = new GLatLng(location1.lat, location1.lon);
            var glatlng2 = new GLatLng(location2.lat, location2.lon);
            var miledistance = glatlng1.distanceFrom(glatlng2, 3959).toFixed(1);
            var kmdistance = (miledistance * 1.609344).toFixed(1);
 
            document.getElementById('results').innerHTML = '<strong>Địa chỉ 1: </strong>' + location1.address + '<br /><strong>Địa chỉ 2: </strong>' + location2.address + '<br /><strong>Khoảng cánh: </strong>' + miledistance + ' miles (or ' + kmdistance + ' km)';
        }
        catch (error)
        {
            alert(error);
        }
    }
 
    </script>
@endsection -->