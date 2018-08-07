<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'name' => 'required|min:3',
            'code' => 'required|unique:products',
            'cost' => 'required',
            'price' => 'required',
            
        ];
    }
    public function messages(){
        return[
            'name.required' => 'Nhập name vào',
            'code.required' => 'Nhập code vào',
            'cost.required' => 'Nhập cost vào',
            'price.required' => 'Nhập price vào',
            
             
        ];
    }
}
