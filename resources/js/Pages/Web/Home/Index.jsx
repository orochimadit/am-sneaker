//import React
import React from "react";

//import layout web
import LayoutWeb from '../../../Layouts/Web';

//import Head, usePage, Link
import { Head, usePage, Link } from '@inertiajs/inertia-react';

//import component slider
import Slider from '../../../Components/Slider';

//import component card category
import CardCategory from '../../../Shared/CardCategory';

//import component card product
import CardProduct from '../../../Shared/CardProduct';

//import component testimonial
import Testimonial from '../../../Shared/Testimonial';

//import component footer
import Footer from '../../../Components/Footer';

export default function HomeIndex() {

    //destruct props "sliders", "categories", "products", "bestSellers", "testimonials"
    const { sliders, categories, products, bestSellers, } = usePage().props;

    const testimonials = [
        {
            name: "John Doe",
            message: "Produk ini sangat bagus dan sangat membantu dalam pekerjaan sehari-hari saya. Saya sangat merekomendasikannya!",
            job_title: "Software Engineer"
        },
        {
            name: "Jane Smith",
            message: "Layanan pelanggan yang sangat responsif dan produk berkualitas tinggi. Sangat puas dengan pembelian saya.",
            job_title: "Product Manager"
        },
        {
            name: "Alice Johnson",
            message: "Pengalaman belanja yang sangat menyenangkan. Produk dikirim dengan cepat dan sesuai deskripsi.",
            job_title: "UI/UX Designer"
        }
    ];
    return (
        <>
            <Head>
                <title>Geek Store - Where Developer Shopping</title>
            </Head>
            <LayoutWeb>
                <div className="content-wrapper">
                    <div className="container mt-5 mb-5 pt-5">
                        <div className="fade-in">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    {/* Categories */}
                                    <div className="row justify-content-between mb-3">
                                        <div className="col-md-6 col-6 text-start">
                                            <h4><strong>Kategori</strong></h4>
                                        </div>
                                        <div className="col-md-6 col-6 text-end">
                                            <Link href="/categories" className="text-dark">
                                                <strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center mb-4">
                                        {categories.map((category, index) => (
                                            <CardCategory category={category} key={index} />
                                        ))}
                                    </div>

                                    {/* Slider */}
                                    <div className="row justify-content-center mb-4">
                                        <Slider sliders={sliders} />
                                    </div>

                                    {/* Latest Products */}
                                    <div className="row justify-content-between mb-3">
                                        <div className="col-md-6 col-6 text-start">
                                            <h4><strong>Produk Terakhir</strong></h4>
                                        </div>
                                        <div className="col-md-6 col-6 text-end">
                                            <Link href="/products" className="text-dark">
                                                <strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        {products.map((product, index) => (
                                            <CardProduct product={product} key={index} />
                                        ))}
                                    </div>

                                    {/* Best Sellers */}
                                    <div className="row justify-content-between mb-3">
                                        <div className="col-md-6 col-6 text-start">
                                            <h4><strong>Best Sellers</strong></h4>
                                        </div>
                                        <div className="col-md-6 col-6 text-end">
                                            <Link href="/best-sellers" className="text-dark">
                                                <strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        {bestSellers.map((product, index) => (
                                            <CardProduct product={product} key={index} />
                                        ))}
                                    </div>

                                    {/* Testimonials */}
                                    <div className="row justify-content-center mb-5">
                                        <div className="col-md-12">
                                            <h4 className="text-center"><strong>What Our Customers Say</strong></h4>
                                            <div className="row justify-content-center mt-4">
                                                {testimonials.length > 0 ? (
                                                    testimonials.map((testimonial, index) => (
                                                        <Testimonial testimonial={testimonial} key={index} />
                                                    ))
                                                ) : (
                                                    <p className="text-center text-muted">No testimonials available at the moment.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                {/* <Footer /> */}
            </LayoutWeb>
        </>
    )
}
