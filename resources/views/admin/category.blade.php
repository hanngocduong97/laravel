@extends('layouts.masteradmin')


@section('content')
 <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Category</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Category</li>
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
            <button  class="btn btn-primary" data-title="create" data-toggle="modal" data-target="#create"  style="margin-top:15px;"></i>Thêm mới</button>
          </div>
        

          <div class="card-body table-responsive">
              <table id="dataTableCategory" class="table table-bordered table-striped">
               <thead>
                            <tr>
                                <th style="text-align: center;border-bottom:none">ID</th>
                                <th style="text-align: center;border-bottom:none">NAME</th>
                                <th style="text-align: center;border-bottom:none">Action</th>
                            </tr>
                        </thead>   
                
              </table>
            </div>
         
          <!-- /.card-footer-->
        </div>
        
        <div class="row modal fade" id="show" style="left: 29rem; " >
          <div class="modal-dialog" style="width: 100%">
            <div class="modal-content"  >
              <div class="modal-header">
            
                <h4 class="modal-title">Detail</h4>
              </div>
              <div class="modal-body" >
                <b id="name" ></b>
                <br>
                <img id="img" width="80%" height="350" style="margin-left: 10px" src="">
                <table class="table table-params table-responsive">
                      <tbody>
                       
                        <tr>
                          <th class="text-right"><span class="color">Descreption :</span></th>
                          <td id="desception"></td>
                        </tr>
                      </tbody>
                    </table>
               
              
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
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

                 


                  <div class="box-body">
                    <div class="form-group">
                        <label for="exampleInputFile">Image</label>
                        <div class="input-group">
                            <div class="custom-file">
                              <input type="file"  class=" form-control" id="image" name="image">                              
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="box-body">
                    <div class="form-group">
                        <label for="">Description</label>
                        <textarea id="editor1" class="form-control" name="description" placeholder="Input field" rows="2">
                          
                        </textarea>
                        
                      </div>
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
       
        <div class="modal fade" id="edit" style="left: 29rem">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                
                <h4 class="modal-title">Edit User</h4>
              </div>
              <div class="modal-body">
                <form role="form">
                  @csrf
                  <!-- <input type="hidden" name="_method" value="put"> -->
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" class="form-control" id="editName" placeholder="Input field" name="name">
                  </div>

                 


                  <div class="box-body">
                    <div class="form-group">
                        <label for="exampleInputFile">Image</label>
                        <div class="input-group">
                            <div class="custom-file">
                              <input type="file"  class=" form-control" id="image" name="image">                              
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="box-body">
                    <div class="form-group">
                        <label for="">Description</label>
                       <!--  <input id="editor2" class="form-control edit" name="description" placeholder="Input field" rows="2"> -->
                         <input class="form-control " id="editDes" name="description" placeholder="Input field" rows="2">
                        
                      </div>
                  </div>
                
                  
                
                  
                
                  <button type="submit" class="btn btn-primary" class="update">Update</button>
                </form>
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
    <script src="https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js"></script>
    <script src="{{asset('admin/js/jquery.dataTable.js')}}"></script>
    <script src="{{asset('admin/js/jquery.dataTable.bootstrap4.js')}}"></script>
    
    
    <script >
	    $(document).ready(function () {  

	        var categoryTable = $('#dataTableCategory').DataTable({
	          processing: true,
	          serverSide: true,
	          ajax: 'categories/list',
	          columns: [{ data: 'id', name: 'id' }, { data: 'name', name: 'name' }, { data: 'action', name: 'action' }]
	        });

          $(function () {
              CKEDITOR.replace('editor1')
              CKEDITOR.replace('editor2')

              
              //bootstrap WYSIHTML5 - text editor
              $('.textarea').wysihtml5()
           })

          $(document).on('click','#categorydetail',function(){
              var category_id= $(this).attr('categoryId');
              $.ajax({

                type: 'GET',
                url: 'categories/'+ category_id,
                success: function(response){
                  console.log(response);
                  $('#name').text(response.name);
                  $('#editor1').text(response.name);


                  
                }
              })
          });
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
              $(document).on('click','#categorydetail',function(){
                var category_id= $(this).attr('categoryId')

                $.ajax({
                  type: 'GET',
                  url: 'categories/'+category_id,
                  success: function(response){
                    $('#name').text(response.name);
                    document.getElementById("img").src = response.image;     
                    $('#desception').text(response.description);
                     
                  }
                })
            })

                $(document).on('click','#categorydelete',function(){
                  var category_id= $(this).attr('categoryId');
                 
                  
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
                      url: 'categories/' + category_id,
                      success:function(response){
                           categoryTable.ajax.reload();

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

           $(document).on('click','#categoryedit',function(){
                var category_id= $(this).attr('categoryId');
                $.ajax({
                  type: 'GET',
                  url: 'categories/'+category_id,
                  success: function(response){
                    console.log(response);
                    $('#editName').val(response.name);
                  
                    $('#editDes').val(response.description);
                  }
                })
          });
           $(document).on('click','.update',function(){
              var category_id= $(this).attr('categoryId');
                  $.ajax({
                      type: 'PUT',
                      url: 'categories/'+ category_id ,
                      success:function(response){
                          categoryTable.ajax.reload();
                      }
                  
                })
            });
        
    });
  </script>
@endsection
