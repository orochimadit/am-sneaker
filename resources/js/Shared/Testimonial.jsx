//import React
import React from "react";

export default function Testimonial({ testimonial }) {
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
