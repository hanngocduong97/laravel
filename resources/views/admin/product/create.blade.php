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
		<form method="POST" role="form" enctype="multipart/form-data">
			@csrf
			<div class="row">
				<div class="col-md-8">  
				
			         
	            <div class="box box-primary">
	            	<div class="box-body">
			              		<div class="form-group">
									<label for="">Name</label>
									<input type="text" class="form-control" id="" placeholder="Input field" name="name">
									
								</div>
			              	</div>
	            	<div class="row">
						
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Cost</label>
									<input type="number" class="form-control" id="" placeholder="Input field" name="cost">
									
								</div>
			              	</div>
						</div>
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Price</label>
									<input type="number" class="form-control" id="" placeholder="Input field" name="price">
									
								</div>
			              	</div>
						</div>
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Size</label>
									<input type="text" class="form-control" id="" placeholder="Input field" name="size">
									
								</div>
			              	</div>
						</div>
						<div class="col-md-6">
							<div class="box-body">
			              		<div class="form-group">
									<label for="">Color</label>
									<input type="text" class="form-control" id="" placeholder="Input field" name="color">
									
								</div>
			              	</div>
						</div>
					</div>
	              	           	
	              	<div class="box-body">
	              		<div class="form-group">
							<label for="">Description</label>
							<textarea id="editor1" class="form-control" name="description" placeholder="Input field" rows="2"></textarea>
							
						</div>
	              	</div>

	              	
	              	
		        </div>           
          	</div>
          	<div class="col-md-4">
          		
          		<div class="box box-primary">
	          		<div class="box-body">
	              		<div class="form-group">
							<label for="">Quantity</label>
							<input type="number" class="form-control" id="" placeholder="Input field" name="quantity">
							
						</div>
	              	</div>
	              	<div class="box-body">
	              		<div class="form-group">
		                    <label for="exampleInputFile">Image</label>
		                    <div class="input-group">
		                      	<div class="custom-file">
			                        <input type="file"  class=" form-control" id="thumbnail" name="image">		
			                      	                  
		                      	</div>
		                    </div>
		                </div>
	              	</div>
              	</div> 
              	<div class="box box-primary">

	          
	              	<div class="box-body">
	              		<div class="form-group">
							<label for="">Category</label>
								<select name="category_id" id="input" size="3" multiple class="form-control" required="required" >
									@foreach($categories as $category)
										<option value="{{$category->id}}">{{$category->name}}</option>
									@endforeach
								</select>
							<a href="" class="btn btn-sm btn-default"  data-title="create" data-toggle="modal" data-target="#create" ><i class="fa fa-plus"></i>Add New Category</a>

							


						</div>
						<!-- <button id="addcate" class="form-group"><i class="fa fa-plus"></i>Add New Category</button> -->
	              	</div>
	           
	              	<button type="submit" class="btn btn-primary form-control">Create</button>
              	</div>              	
          	</div>
          	</div>

		</form>	
		<div class="modal fade" id="create" style="left: 29rem">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                
                <h4 class="modal-title">New Category</h4>
              </div>
              <div class="modal-body">
                <form  method="POST" role="form">
                  @csrf
                  <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Input field" name="name">
                  </div>
                  <button type="submit" class="btn btn-primary" class="create">Create</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>	
	</div>
@endsection

@section('footer')
	<!-- <script src="https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js"></script> -->
	<script src="https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js"></script>
	<script>
		$(document).ready(function () {  
			 $(document).on('click','.create',function(e){
              e.preventDefault();
                  $.ajax({
                      type: 'POST',
                      url: 'categories' ,
                      success:function(response){
                          // userTable.ajax.reload();
                          location.reload();
                      }
                  
                })
            });
		  	$(function () {
		    	CKEDITOR.replace('editor1')
		    	CKEDITOR.replace('editor2')
		    	//bootstrap WYSIHTML5 - text editor
		    	$('.textarea').wysihtml5()
			 })
	  	});

	</script>
	
@endsection