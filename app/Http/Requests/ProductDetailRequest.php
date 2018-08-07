<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductDetailRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'quantity' => 'required',
           'size_id' => 'unique_with:product_details, color_id,product_id',
        ];

    }

     public function messages(){
        return[
            'quantity.required' => 'Nhập số lượng vào',
            
            'size_id.unique_with'=> 'Đã có size , màu trong database',
             
        ];
    }
}
