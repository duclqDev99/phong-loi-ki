import React, {useEffect} from "react";
import "../../assets/user/styles/vendor.css";
import "../../assets/user/styles/bootstrap.min.css";
import "../../assets/user/styles/style.css";

import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import Breadcrumb from "../../components/user/Breadcrumb";
import {Outlet} from "react-router-dom";

function Index({breadcrumbItems}) {

    return (
        <div>
            <Header/>
            {breadcrumbItems && breadcrumbItems.length > 0 && (
                <Breadcrumb items={breadcrumbItems}/>
            )}
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Index;
