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
                <li class="breadcrumb-item active">Product</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

 
       <section class="content">

        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            


            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div>
            @if(session()->has('flag'))
              <div class="alert alert-info">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                 {{session()->get('flag')}}
              </div>
              @endif
           <!--  <a href="{{asset('')}}admin/products/create"> --><button class="btn btn-primary" data-toggle="modal" data-target="#addproduct" style="margin-top:15px;"><i class=" fa fa-plus" style="margin-right:10px"></i>Thêm mới</button><!-- </a> -->
          </div>
        

          <div class="card-body table-responsive">
              <table id="dataTableProduct" class="table table-bordered table-striped ">
               <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>Code</th>  
                                <th>Cost</th>                         
                                <th>Price</th>                         
                                <th>Action</th>
                                
                            </tr>
                        </thead>   
                
              </table>
            </div>
         
       
        </div>

      

        <div class="modal fade" id="addproduct"  >
          <div class="modal-dialog">
            <div class="modal-content" style="width: 750px">
              <div class="modal-header">
                
                <h4 class="modal-title">Modal title</h4>
              </div>
              <div class="modal-body">
                 <!--  <form  method="POST" role="form"  enctype="multipart/form-data" id="form" action="{{asset('admin/products')}}"> -->
                  <form  method="POST" name="form-add" role="form"  enctype="multipart/form-data" id="form">
                    @csrf
                    <div class="form-group">
                      <label for="">Name</label>
                      <input type="text" class="form-control" id="name-add" name="name" value="{{old('name')}}">
                   
                     <div id="name-errors"></div>

                      
                    </div>

                   
                    <div class="form-group">
                      <label for="">Code</label>
                      <input type="text" class="form-control" id="code-add" name="code" value="{{old('code')}}">
                  
                      <div id="code-errors"></div>

                    </div>

                    <div class="form-group">
                      <label for="">Cost</label>
                      <input type="number" class="form-control" id="cost-add" name="cost" value="{{old('cost')}}">
                
                      <div id="cost-errors"></div>
                    </div>

                    <div class="form-group">
                      <label for="">Price</label>
                      <input type="number" class="form-control" id="price-add" name="price" value="{{old('price')}}" >
               
                      <div id="price-errors"></div>
                    </div>


                    <div class="form-group">
                        
            
                         <label for="sel1">Category</label>
                                <select class="form-control" id="category_id_add" name="category_id" >
                                     @foreach($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name}}</option>
                                      @endforeach
                                </select>
                    </div>
                    
                    <div class="box-body">
                      <div class="form-group">
                          <label for="">Description</label>
                          <textarea id="editor1" class="form-control" name="description" placeholder="Input field" rows="2" >
                            {{old('description')}}
                          </textarea>
                       
                            <div id="description-errors"></div>

                            
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Image</label>
                        <br>
                        <input multiple type="file" name="link[]" id="fileToUpload">
                    </div>
                  
                    
                  
                    <button type="submit" class="btn btn-primary" id="createproduct1">Create</button>
                  </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="editproduct" >
            <div class="modal-dialog">
              <div class="modal-content" style="width: 700px">
                <div class="modal-header">
                  
                  <h4 class="modal-title">Edit Product</h4>
                </div>
                <div class="modal-body">
                 <form  role="form"  id="form2" method="POST" >
                    @csrf
                    <!-- <input type="hidden" name="_method" value="put"> -->
                     <div class="form-group">
                          <input type="hidden" class="form-control"  name="id" id="editproductid12">

                      </div>
                    <div class="form-group">
                      <label for="">Name</label>
                      <input type="text" class="form-control" id="editname" name="name" >
                       @if ($errors->has('name'))
                            <p style="color: red;">{{$errors->first('name')}}</p>
                        @endif

                    </div>

                   
                    <div class="form-group">
                      <label for="">Code</label>
                      <input type="text" class="form-control" id="editcode" name="code" 
                      disabled>
                    </div>

                    <div class="form-group">
                      <label for="">Cost</label>
                      <input type="number" class="form-control" id="editcost" name="cost">
                       @if ($errors->has('cost'))
                            <p style="color: red;">{{$errors->first('cost')}}</p>
                        @endif
                    </div>

                    <div class="form-group">
                      <label for="">Price</label>
                      <input type="number" class="form-control" id="editprice" name="price">
                       @if ($errors->has('price'))
                            <p style="color: red;">{{$errors->first('price')}}</p>
                        @endif
                    </div>

                    <div class="form-group">
                        
              
                         <label for="editcategory">Category</label>
                                <select class="form-control" id="editcategory" name="category_id" >
                                     @foreach($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name}}</option>
                                      @endforeach
                                </select>
                    </div>
                    
                    <div class="box-body">
                      <div class="form-group">
                          <label for="">Description</label>
                          <input type="text" class="form-control" id="editdesciptions" name="description" >
                           @if ($errors->has('description'))
                              <p style="color: red;">{{$errors->first('description')}}</p>
                          @endif
                          
                        </div>
                    </div>
                  
                    
                  
                    <button type="submit" class="btn btn-primary " id="updateproduct">Update</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>


        <div class="modal fade" id="addproductdetail">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
               
                <h4 class="modal-title">ADD Product_Detail</h4>
              </div>
              <div class="modal-body">
                     <!-- <form  method="POST" role="form" id="form_add1" action="{{asset('admin/productdetails')}}"> -->
                      <form  method="POST" id="form_add1" role="form" >
                        @csrf
                    
                        <div class="form-group">
                          <label for="">Quantity</label>
                          <input type="text" class="form-control" id="quantity" name="quantity">
                        </div>
                        <div id="quantity-errors"></div> 
                        <div class="form-group">
                          <input type="hidden" class="form-control"  name="product_id" id="editproductid">

                        </div>

                         <div class="form-group">
                      
                             <label for="sel2">Size</label>
                                    <select class="form-control" id="sel2" name="size_id" >
                                         @foreach($sizes as $size)
                                            <option value="{{$size->id}}">{{$size->size}}</option>
                                          @endforeach
                                    </select>
                        </div>
                        <div id="size-errors"></div>
                         <div class="form-group" id="colordetail">
                      
                             <label for="sel3">Color</label>
                                    <select class="form-control" id="sel3" name="color_id" >
                                         @foreach($colors as $color)
                                            <option value="{{$color->id}}">{{$color->color_name}}</option>
                                          @endforeach
                                    </select>
                                   
                        </div>
         
                        <button class="btn btn-primary " id="addproductdetail12" type="submit">CreateProduct</button>
                    </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
                
              </div>
            </div>
          </div>
        </div>


        <div class="modal fade" id="show">
          <div class="modal-dialog">
            <div class="modal-content" style="width: 750px">
              <div class="modal-header">
                
                <h4 class="modal-title">Product Details</h4>
              </div>
              <div class="modal-body">
                  <div class="card-body table-responsive">
                      <table id="dataTableProductdetail" class="table table-bordered table-striped ">
                       <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Quantity</th>
                                        <th>Name</th>
                                        <th>Size</th>                           
                                        <th>Color</th>
                                        <th>Link</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>   
                        
                      </table>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>


       


      
        <!-- /.card -->

      </section>
     
  

@endsection
@section('footer')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min.js"></script>
    <script src="{{asset('admin/js/jquery.dataTable.js')}}"></script>
    <script src="{{asset('admin/js/jquery.dataTable.bootstrap4.js')}}"></script>

    <script src="https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js"></script>

    
    
    <script >
	    $(document).ready(function () {  

	        var productTable = $('#dataTableProduct').DataTable({
	          processing: true,
	          serverSide: true,
	          ajax: 'products/list',
	          columns: [{ data: 'id', name: 'id' }, { data: 'name', name: 'name' },{ data: 'code', name: 'code' }, { data: 'cost', name: 'cost' },{ data: 'price', name: 'price' },{ data: 'action', name: 'action' }]
	        });
       
     

          $(function () {
              CKEDITOR.replace('editor1')        
           })

          $(document).on('click','#createproduct1',function(e){
              e.preventDefault();
              var form = document.forms.namedItem('form-add');
              formData = new FormData(form);

              $.ajax({
                  processData: false,
                  contentType: false,
                  url: 'products',
                  type: 'post',

                  data : formData,
                  success : function(data){
                      if(data.success == "yes"){
                          // $('#addproduct').modal('toggle');
                          location.reload();

                      }
                      
                  },
                  error: function(data){
                    console.log(data);
                  $('#validation-errors').html('');
                     $.each(data.responseJSON.errors, function(key,value) {
                          
                          
                          
                         
                          if(key=='code'){
                            $('#code-errors').html("");
                            $('#code-errors').append('<p style="color: red;">'+value+'</p');
                          }
                          if(key=='name'){
                            $('#name-errors').html("");
                            $('#name-errors').append('<p style="color: red;">'+value+'</p');
                          }
                          if(key=='cost'){
                            $('#cost-errors').html("");
                            $('#cost-errors').append('<p style="color: red;">'+value+'</p');
                          }
                          if(key=='price'){
                            $('#price-errors').html("");
                            $('#price-errors').append('<p style="color: red;">'+value+'</p');
                          }
                          if(key=='description'){
                            $('#description-errors').append('<p style="color: red;">'+value+'</p');
                          }

                      }); 
                  }
              })     
          });

          // $(document).on('click','#createproduct',function(e){
          //     e.preventDefault();
          //         $.ajax({
          //             type: 'POST',
          //             url: 'products' ,
          //             success:function(response){
          //                 productTable.ajax.reload();
          //                 // location.reload();
          //             },
          //             // error: function (xhr, ajaxOptions, thrownError) {
          //             //   console.log(xhr.responseJSON.errors);
          //             //    $('#nameaddproduct').text(xhr.responseJSON.errors.name); 
          //             //    $('#codeaddproduct').text(xhr.responseJSON.errors.code); 
          //             //    $('#costaddproduct').text(xhr.responseJSON.errors.cost); 
          //             //    $('#priceaddproduct').text(xhr.responseJSON.errors.price); 
          //             //    $('#descriptionaddproduct').text(xhr.responseJSON.errors.description); 
                          
          //             // }
          //               error: function (xhr, ajaxOptions, thrownError){
          //                 // $('#validation-errors').html('');
          //                    $.each(xhr.responseJSON.errors, function(key,value){

          //                         if(key=='code'){
          //                             $('#code-errors').append('<p style="color: red;">'+value+'</p');
          //                         }
          //                         if(key=='name'){
          //                             $('#name-errors').append('<p style="color: red;">'+value+'</p');
          //                         }

          //                         if(key=='cost'){
          //                             $('#cost-errors').append('<p style="color: red;">'+value+'</p');
          //                         }
          //                         if(key=='price'){
          //                             $('#price-errors').append('<p style="color: red;">'+value+'</p');
          //                         }
          //                         if(key=='description'){
          //                             $('#description-errors').append('<p style="color: red;">'+value+'</p');
          //                         }

          //                     }); 
          //                 }
                  
          //       })
          //  });
          // $(document).on('submit','#form',function(e){
          //     e.preventDefault();
          //     // $( '#name-errors' ).text( "" );
          //     // $( '#code-errors' ).text( "" );
          //     // $( '#cost-errors' ).text( "" );
          //     // $( '#price-errors' ).text( "" );
          //     // $( '#description-errors' ).text( "" );
             
          //     $.ajax({

          //         url: 'products',
          //         type: 'POST',
              

          //         data : $('#addproduct').find('form').serialize(),


          //        success : function(data){
               
          //                if($.isEmptyObject(data.errors)){
                              
          //                       location.reload();
          //                   }else{
          //                        $.each(data.errors, function(key,value) {

          //                           if(key=='code'){
          //                               $('#code-errors').append('<p style="color: red;">'+value+'</p');
          //                           }
          //                           if(key=='name'){
          //                               $('#name-errors').append('<p style="color: red;">'+value+'</p');
          //                           }

          //                           if(key=='cost'){
          //                               $('#cost-errors').append('<p style="color: red;">'+value+'</p');
          //                           }
          //                           if(key=='price'){
          //                               $('#price-errors').append('<p style="color: red;">'+value+'</p');
          //                           }
          //                           if(key=='description'){
          //                               $('#description-errors').append('<p style="color: red;">'+value+'</p');
          //                           }

          //                       }); 
          //                   }
                     
                      
          //         },
          //         // error: function(data){
          //         //    // $.getJSON("demo_ajax_json.js", function(data){
          //         //    //                console.log(data);
          //         //    //            });
          //         //   $('#validation-errors').html('');
          //         //   // var data = $.parseJSON(data);
          //         //    $.each(data.errors, function(key,value) {

          //         //         if(key=='code'){
          //         //             $('#code-errors').append('<p style="color: red;">'+value+'</p');
          //         //         }
          //         //         if(key=='name'){
          //         //             $('#name-errors').append('<p style="color: red;">'+value+'</p');
          //         //         }

          //         //         if(key=='cost'){
          //         //             $('#cost-errors').append('<p style="color: red;">'+value+'</p');
          //         //         }
          //         //         if(key=='price'){
          //         //             $('#price-errors').append('<p style="color: red;">'+value+'</p');
          //         //         }
          //         //         if(key=='description'){
          //         //             $('#description-errors').append('<p style="color: red;">'+value+'</p');
          //         //         }

          //         //     }); 
          //         // }




          //     })     
          // });


          $('#dataTableProduct').on('click', '#productdelete1', function () {
             var product_id= $(this).attr('productId');
                swal({
                    title: "Bạn có muốn xóa không?",
                    
                    icon: "warning",
                    buttons: true,
                    dangerMode: true
                }).then(function (willDelete) {
                    if (willDelete) {
                        $.ajax({
                            type: 'delete',
                            url: 'products/' + product_id,
                            success: function success(response) {
                                productTable.ajax.reload();
                            }
                        });
                       /* swal("Bạn đã xóa thành công", {
                            icon: "success"
                        });*/
                    } 
                });
             });
          $(document).on('click','#updateproduct',function(e){
          // e.preventDefault();
           var id= $('#form2').find("input[name='id']").val();
            console.log(id);
              $.ajax({
                type:'post',
                url: 'products/update/'+ id,
                data : $('#editproduct').find('form').serialize(),
                    success : function(data){
                        if(data == "yes"){
                            $('#editproduct').modal('toggle');
                            productTable.ajax.reload();
                        }
                    }
               
              })

        });
      });
          $(document).on('click','.editproducts',function(){
            var product_id= $(this).attr('productId');
            // $('#them').val(product_id);
            $.ajax({
              type: 'GET',
              url: 'products/'+product_id,
              success: function(response){
                console.log(response);
                $('#editproductid12').val(response.id);
                $('#editname').val(response.name);
                $('#editcode').val(response.code);
                $('#editcost').val(response.cost);
                $('#editprice').val(response.price);
                $('#editdesciptions').val(response.description);
              }
            })

          });
           $(document).on('click','#addpro',function(){
              var product_id= $(this).attr('productId');
              $('#editproductid').val(product_id);
              console.log(product_id);       
            });
      


    $(document).ready(function () {  
          
        $(document).on('click','#showdetails',function(){
            var product_id= $(this).attr('productId');
            console.log(product_id);
               
            var productdetailTable = $('#dataTableProductdetail').DataTable({
              processing: true,
              serverSide: true,
              destroy:true,
              ajax: 'productdetails/list/' + product_id,
              columns: [{ data: 'id', name: 'id' },
              { data: 'quantity', name: 'quantity' }, 
              { data: 'name', name: 'name' },
              { data: 'size', name: 'size' }, 
              { data: 'color_name', name: 'color_name' }, 
              { data: 'color', name: 'color' }, 
              { data: 'action', name: 'action' }]
            });

        });
       
         
           // $(document).on('click','.addproductdetail',function(){
           //        $.ajax({
           //        url: 'productdetails',
           //        type: 'POST',
           //        processData: false,
           //        success:function(response){
           //          if (response=="yes") {
           //            alert('loi');
           //          }
                    
           //             productdetailTable.ajax.reload();

           //        }
           //      });
           //  });

        $(document).on('click','#productdetaildelete',function(){
            var productdetail_id= $(this).attr('productdetailId');
           
            
            swal({
              title: "Bạn có chắc chắn muốn xóa?",
              text: "Nếu xóa, Bạn sẽ mất dữ liệu này!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                $.ajax({
                type: 'delete',
                url: 'productdetails/' + productdetail_id,
                success:function(response){
                     productdetailTable.ajax.reload();

                }
            })
            swal("Xóa thành công!", {
                  icon: "success",
                });
              } else {
                swal("Xóa không thành công!");
              }
            });
            // })
        });

        
            //  $(document).on('click','#addcolor',function(){
            //     $('#adddcolor').show();
            //     $('#addcolor').hidden();


               
            // });
     

        });
             
          // $(document).on('click','.updatecreateproduct',function(ab){//??
          //     ab.preventDefault();
          //         $.ajax({
          //             type: 'POST',
          //             url: 'productdetails',

          //             success:function(response){
          //                 // userTable.ajax.reload();
          //                 location.reload();
          //             }
                  
          //       })
          // });

          

          // $(document).on('click','#addproductdetail12',function(e){
          //     e.preventDefault();
             
          //      $.ajax({
          //        processData: false,
          //         contentType: false,
          //         type: 'POST',
          //         url: 'productdetails',
                  

          //         data : $('#addproductdetail').find('form').serialize(),
          //         success : function(data){
          //             if(data.success == "yes"){
          //                 $('#addproductdetail').modal('toggle');
          //                 table.ajax.reload();

          //             }
                      
          //         },
          //         error: function(data){
          //         // $('#validation-errors').html('');
          //            $.each(data.responseJSON.errors, function(key,value) {

          //                 if(key=='quantity'){
          //                     $('#quantity-errors').append('<p style="color: red;">'+value+'</p');
          //                 }
                          

          //             }); 
          //         }
          //     })  
                
          // });

                   
        
    </script>
    <script>  
          $(document).on('click','#addproductdetail12',function(e){
              e.preventDefault();
              $.ajax({
                  type: 'post',
                  url: 'productdetails',
                  data : $('#addproductdetail').find('form').serialize(),
                  success : function(data){
                      if(data.success == "yes"){
                          $('#addproductdetail').modal('toggle');
                          location.reload();

                      }
                      
                  },
                  error: function(data){
                     $.each(data.responseJSON.errors, function(key,value) {

                          if(key=='quantity'){
                              $('#quantity-errors').html("");
                              $('#quantity-errors').append('<p style="color: red;">'+value+'</p');
                          }
                           if(key=='size_id'){
                              $('#size-errors').html("");
                              $('#size-errors').append('<p style="color: red;">'+value+'</p');
                          }

                      }); 
                  }
              })     
          });

    </script>
   
   
  
@endsection
