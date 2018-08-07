@extends('layouts.masteradmin')


@section('content')
 <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Bill</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Bill</li>
              </ol>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

 
      <section class="content">

        <!-- Default box -->
        <div class="card">
          <div class="card-header">
            


         <!--    <div class="card-tools">
              <button type="button" class="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i class="fa fa-times"></i></button>
            </div> -->
           
          </div>
        

          <div class="card-body table-responsive">
              <table id="dataTableBill" class="table table-bordered table-striped">
               <thead>
                            <tr>
                                <th style="text-align: center;border-bottom:none">ID</th>
                                <th style="text-align: center;border-bottom:none">NAME</th>
                                <th style="text-align: center;border-bottom:none">ADRESS</th>
                                <th style="text-align: center;border-bottom:none">DATE</th>
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
            
                <h4 class="modal-title">Detail Bill</h4>
              </div>
              <div class="modal-body" >
                  <!-- <b>Thông tin khách hàng</b> -->
                  <table class="table table-user-information">
                            <tbody>
                              <tr>
                                    <td><b>Tên :</b> </td>
                                    <td id="name"></td>
                                  </tr>
                                <tr>
                                    <td><b>Địa chỉ :</b></td>
                                    <td id="address"></td>
                                  </tr>
                                  <tr>
                                    <td><b>Số điện thoại :</b></td>
                                    <td id="number"></td>
                                  </tr>                      
                                  <tr>
                                    <td><b>Email : </b></td>
                                    <td id="email"></td>
                                  </tr>
                                   <tr>
                                    <td><b>Ngày đặt hàng : </b></td>
                                    <td id="date"></td>
                                  </tr>
                              </tbody>
                          </table>      
                  
                          <table class="table  ">
                              <thead>
                                <tr>
                                   <th>ID</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Số lượng</th>
                                   <th>Giá</th>
                                </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                   <td id="idbill"></td>
                                   <td id="nameproduct"></td>
                                   <td id="quantitypro"></td>
                                   <td id="pricepro"></td>
                                 </tr>
                                  <tr>
                                    <td><b>Tổng số tiền : </b></td>
                                    <td id="total"></td>
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

	        var billTable = $('#dataTableBill').DataTable({
	          processing: true,
	          serverSide: true,
	          ajax: 'bills/list',
	          columns: [{ data: 'id', name: 'id' }, { data: 'name', name: 'name' }, { data: 'address', name: 'address' }, { data: 'date_order', name: 'date_order' }, { data: 'action', name: 'action' }]
	        });

     
        
          

              $(document).on('click','#deletebill',function(){
                  var bill_id= $(this).attr('billId');

                 console.log(bill_id);
                  
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
                      url: 'bills/' + bill_id,
                      success:function(response){
                           billTable.ajax.reload();

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

           

        
           }); 
      $(document).on('click','.showbill',function(){
        var bill_id= $(this).attr('billId');
        console.log(bill_id);

        $.ajax({
          type: 'GET',
          url: '{{asset('')}}admin/bills/'+ bill_id,
          success: function(response){
            console.log(response);
            $('#name').text(response.name);      
            $('#address').text(response.address);      
            $('#number').text(response.number); 
            $('#email').text(response.email);
            $('#date').text(response.date_order);   
            $('#idbill').text(response.id);   
            $('#nameproduct').text(response.code);   
            $('#quantitypro').text(response.quantity);   
            $('#pricepro').text(response.price);   
            $('#total').text(response.total);   
          }
        })
      })
        
    
  </script>
@endsection
