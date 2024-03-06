import React, {useEffect} from "react";
import "../../assets/user/styles/vendor.css";
import "../../assets/user/styles/bootstrap.min.css";
import "../../assets/user/styles/style.css";

import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import Breadcrumb from "../../components/user/Breadcrumb";
import {Outlet} from "react-router-dom";

function Index({breadcrumbItems, isLogged = 0, cartItems, setCartItems}) {

    return (
        <div>
            <Header isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>
            {breadcrumbItems && breadcrumbItems.length > 0 && (
                <Breadcrumb items={breadcrumbItems}/>
            )}
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Index;
