//import React
import React from "react";

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function Footer() {
    return (
        <>
            <nav className="navbar-expand-md fixed-bottom navbar-dark bg-dark shadow mt-5">
                <div className="container">
                    <div className="row justify-content-between py-3">
                        {/* Logo and Store Name */}
                        <div className="col-md-4 text-center text-md-start">
                            <Link href="/" className="d-flex align-items-center mb-2 mb-md-0 text-white text-decoration-none">
                                <img src="/assets/images/logo.png" width="50" alt="Logo" className="me-2" />
                                <h5 className="mb-0"><strong>Ammshoes </strong> STORE</h5>
                            </Link>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link href="#" className="nav-link px-2 text-white">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link px-2 text-white">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#" className="nav-link px-2 text-white">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Credit Information */}
                        <div className="col-md-4 text-center text-md-end">
                            <p className="mb-0 text-white">
                                © {new Date().getFullYear()} Ammshoes Store. All rights reserved.
                            </p>
                            <p className="mb-0 text-white">
                                Designed by <a href="https://yourdesignerwebsite.com" className="text-white text-decoration-none"><strong>Your Designer</strong></a>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
