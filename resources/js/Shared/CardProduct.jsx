//import React
import React from "react";

//import Link
import { Link } from '@inertiajs/inertia-react';

//import formatPrice
import FormatPrice from '../Utils/FormatPrice';

export default function CardProduct({ product }) {
    return (
        <>
            <div className="col-md-4 mb-4 col-6">
                <Link href={`/products/${product.slug}`} className="text-dark text-decoration-none">
                    <div className="card border-0 h-100 rounded-3 shadow-sm position-relative">
                        {/* Discount Badge */}
                        {product.discount && (
                            <div className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                                -{product.discount}%
                            </div>
                        )}
                        <div className="card-image">
                            {product.product_images.length > 0
                                ? <img src={product.product_images[0].image} className="w-100 rounded-top" style={{ height: '200px', objectFit: 'cover' }} alt={product.title} />
                                : <img src="/assets/images/image.png" className="w-100 rounded-top" style={{ height: '200px', objectFit: 'cover' }} alt="Default" />
                            }
                        </div>
                        <div className="card-body h-100 d-flex flex-column justify-content-between">
                            <h6 className="card-title text-center title-book">{product.title}</h6>
                            <div className="colors mt-3 text-center">
                                <i>Available Colors</i>
                                <div className="mt-2 d-flex justify-content-center">
                                    {product.product_images.map((color, index) => (
                                        <img src={color.color.image} key={index} width={'20'} className="rounded-circle me-2 shadow-sm" alt={`Color ${index + 1}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-white border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-start final-price"><strong>Rp. {FormatPrice(product.product_sizes[0].price)}</strong></div>
                                {product.old_price && (
                                    <div className="text-end text-muted">
                                        <small><del>Rp. {FormatPrice(product.old_price)}</del></small>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
