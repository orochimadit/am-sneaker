<?php

namespace App\Http\Controllers\Web;

use App\Models\Slider;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //get sliders
        $sliders = Slider::latest()->get();

        //get categories 4 items
        $categories = Category::latest()->take(4)->get();

        //get products
        $products = Product::with('productImages.color', 'productSizes')->latest()->take(8)->get();
        $bestSellers = Product::with('productImages.color', 'productSizes')
        ->select('products.*', DB::raw('MAX(product_sizes.price) as max_price'))
                        ->join('product_sizes', 'product_sizes.product_id', '=', 'products.id')
                        ->groupBy('products.id')
                        ->orderBy('max_price', 'desc')  // Order by the maximum price
                        ->take(8)
                        ->get();
        return inertia('Web/Home/Index', [
            'sliders'       => $sliders,
            'categories'    => $categories,
            'products'      => $products,
            'bestSellers'   => $bestSellers, 
        ]);
    }
}
