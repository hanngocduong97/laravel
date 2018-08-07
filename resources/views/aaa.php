 // $(document).on('click','#createproduct',function(e){
          //     e.preventDefault();
          //     $.ajax({
          //         type: 'POST',
          //         url: 'products',
                

          //         data : $('#addproduct').find('form').serialize(),

          //         success : function(data){
          //             if(data.success == "yes"){
          //                 $('#addproduct').modal('toggle');
          //                 table.ajax.reload();

          //             }
                      
          //         },
          //         error: function(data){
          //           $('#validation-errors').html('');
          //            $.each(data.responseJSON.errors, function(key,value) {

          //                 if(key=='code'){
          //                     $('#code-errors').append('<p style="color: red;">'+value+'</p');
          //                 }
          //                 if(key=='name'){
          //                     $('#name-errors').append('<p style="color: red;">'+value+'</p');
          //                 }

          //                 if(key=='cost'){
          //                     $('#cost-errors').append('<p style="color: red;">'+value+'</p');
          //                 }
          //                 if(key=='price'){
          //                     $('#price-errors').append('<p style="color: red;">'+value+'</p');
          //                 }
          //                 if(key=='description'){
          //                     $('#description-errors').append('<p style="color: red;">'+value+'</p');
          //                 }

          //             }); 
          //         }



          //     })     
          // });



           // foreach ($request->link as $key => $image) {
            //     $file =$image->store('images');
            //     $gallery_product= new GalleryProduct;
            //     $gallery_product->link=$file;
            //     $gallery_product->product_id= $product->id;
            //     $gallery_product->save();
            // }

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="" method="POST" role="form">
		<legend>Form title</legend>
	
		<div class="form-group">
			<label for="">label</label>
			<input type="text" class="form-control" id="" placeholder="Input field">
		</div>
	
		
	
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</body>
</html>