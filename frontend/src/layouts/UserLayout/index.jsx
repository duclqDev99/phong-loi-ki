import React from "react";
import "../../assets/user/styles/vendor.css";
import "../../assets/user/styles/bootstrap.min.css";
import "../../assets/user/styles/style.css";

import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import Breadcrumb from "../../components/user/Breadcrumb";

function Index({page}) {
    const breadcrumbItems = ["Home", "Cart"];

    return (
        <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
            {page}
            {/*<script type="text/jsx" src="../../assets/js/modernizr.js"></script>
                <script type="text/jsx" src="../../assets/js/jquery-1.11.0.min.js"></script>
                <script type="text/jsx" src="../../assets/js/bootstrap.bundle.min.js"></script>
                <script type="text/jsx" src="../../assets/js/plugins.js"></script>
                <script type="text/jsx" src="../../assets/js/script.js"></script>*/}
            <Footer/>
        </div>
    );
}

export default Index;
