//import React
import React from "react";

//import header component
import Header from '../Components/Header';

//import menu component
import Menu from '../Components/Menu';
import Footer from "../Components/Footer";

export default function LayoutWeb({children}) {

    return(
        <>
            <Menu />
        <Header/>
            <div className="main">
                {children}

                
               
            </div>
            <Footer/>
        </>
    )

}
