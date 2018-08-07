@extends('layouts.masteradmin')

@section('content')
	 <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Product</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">ADD Product</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>
	<div class="content">
		<form action="{{asset('')}}admin/products/{{$product->id}}" method="POST" role="form" enctype="multipart/form-data">
			@csrf
			<input type="hidden" name="_method" value="put">
			<div class="row">
			<div class="col-md-8">  
				
			         
	            <div class="box box-primary">
	            	<div class="box-body">
			              		<div class="form-group">
									<label for="">Name</label>
									<input type="text" class="form-control" id="" placeholder="Input field" name="name" value="{{$product->name}}">
									
								</div>
			              	</div>
	            	<div class="row">
						
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Cost</label>
									<input type="number" class="form-control" id="" placeholder="Input field" name="cost" value="{{$product->cost}}">
									
								</div>
			              	</div>
						</div>
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Price</label>
									<input type="number" class="form-control" id="" placeholder="Input field" name="price" value="{{$product->price}}">
									
								</div>
			              	</div>
						</div>
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Size</label>
									<input type="text" class="form-control" id="" placeholder="Input field" name="size" value="{{$product->size}}">
									
								</div>
			              	</div>
						</div>
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Color</label>
									<input type="text" class="form-control" id="" placeholder="Input field" name="color" value="{{$product->color}}">
									
								</div>
			              	</div>
						</div>
					</div>
	              	           	
	              	<div class="box-body">
	              		<div class="form-group">
							<label for="">Description</label>
							<textarea id="editor1" class="form-control" name="description" placeholder="Input field" rows="2" >{{$product->description}}</textarea>
							
						</div>
	              	</div>

	              	
	              	
		        </div>           
          	</div>
          	<div class="col-md-4">
          		
          		<div class="box box-primary">
	          		<div class="box-body">
	              		<div class="form-group">
							<label for="">Quantity</label>
							<input type="number" class="form-control" id="" placeholder="Input field" name="quantity" value="{{$product->quantity}}">
							
						</div>
	              	</div>
	              	<div class="box-body">
	              		<div class="form-group">
		                    <label for="exampleInputFile">Image</label>
		                    <div class="input-group">
		                      	<div class="custom-file">
			                        <input type="file"  class=" form-control" id="thumbnail" name="image" value="{{$product->image}}" >			                        
		                      	</div>
		                    </div>
		                </div>
	              	</div>
              	</div> 
              	<div class="box box-primary">
	       
	              	<div class="box-body">



	              		<div class="form-group">
							<label for="">Category</label>
							<select name="category_id" id="input" size="3" class="form-control" required="required" >
								@foreach($categories as $category)
									<option value="{{$category->id}}"
									@if($category->id == $product->category_id) 
									 		selected
									@endif
									> {{$category->name}}</option>
								@endforeach
							</select>

						</div>
	              	</div>
	              	<button type="submit" class="btn btn-primary form-control">Update</button>
              	</div>              	
          	</div>
          	</div>

		</form>		
	</div>
@endsection

@section('footer')
	<script src="https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js"></script>
	<script>
	  	$(function () {
	    	CKEDITOR.replace('editor1')
	    	CKEDITOR.replace('editor2')
	    	//bootstrap WYSIHTML5 - text editor
	    	$('.textarea').wysihtml5()
		 })
	</script>
@endsection