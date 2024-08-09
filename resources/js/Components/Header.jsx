//import React
import React from "react";

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top shadow">
                <div className="container">
                    <header className="d-flex flex-wrap align-items-center justify-content-center py-2">
                        <div className="bg-green p-2 rounded">
                            <Link href="/" className="d-flex align-items-center text-white text-decoration-none">
                                <img src="/assets/images/logo.png" width="30" alt="Logo" />
                                <h6 className="mb-0 ms-2 fs-6"><strong>Ammshoes</strong> STORE</h6>
                            </Link>
                        </div>
                    </header>
                </div>
            </nav>
        </>
    )
}
