//import React
import React from "react";

export default function Testimonial({ testimonial }) {

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
        <div className="col-md-4 mb-4">
            <div className="card border-0 h-100 shadow-sm rounded-3">
                <div className="card-body text-center">
                    {/* Testimonial Image */}
                    {/* <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle mb-3"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    /> */}
                    {/* Testimonial Text */}
                    <p className="card-text">"{testimonial.message}"</p>
                    {/* Testimonial Name */}
                    <h6 className="card-title mt-3">
                        <strong>{testimonial.name}</strong>
                    </h6>
                    {/* Testimonial Job Title */}
                    <p className="text-muted mb-0">{testimonial.job_title}</p>
                </div>
            </div>
        </div>
    );
}
