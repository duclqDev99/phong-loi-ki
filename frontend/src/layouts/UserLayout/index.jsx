import React from "react";
import "../../assets/user/styles/vendor.css";
import "../../assets/user/styles/bootstrap.min.css";
import "../../assets/user/styles/style.css";

import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import Breadcrumb from "../../components/user/Breadcrumb";

function Index({page, breadcrumbItems}) {
    /*const breadcrumbItems = ["Home", "Cart"];*/

    return (
        <div>
            <Header/>
            {breadcrumbItems && breadcrumbItems.length > 0 && (
                <Breadcrumb items={breadcrumbItems}/>
            )}
            {page}
            <Footer/>
        </div>
    );
}

export default Index;
