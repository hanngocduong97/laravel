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
            <button  class="btn btn-primary" style="margin-top:15px;"></i>Thêm mới</button>
          </div>
        

          <div class="card-body table-responsive">
             <table class="table table-striped">
               <thead>
                 <tr>
                   <th>ID</th>
                   <th>Name_Color</th>
                   <th>Ma_Color</th>
                   <th>Color</th>
                 </tr>
               </thead>
               <tbody>
                @foreach($colors as $color)
                 <tr>
                   <td>{{$color->id}}</td>
                   <td>{{$color->color_name}}</td>
                   <td>{{$color->color}}</td>
                   <td><div style="width: 50px;border-radius: 30%;height: 50px;background:{{$color->color}}"></div></td>
                 </tr>
                 @endforeach
               </tbody>
             </table>
            </div>
         
          <!-- /.card-footer-->
        </div>
        
        
        
       
        

      
        <!-- /.card -->

      </section>
     
  

@endsection
@section('footer')
    

@endsection
