import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import TabsListing from "../Components/TabsListing";
import TabNav from "../Components/TabNav";
import TabContent from "../Components/TabContent";
import FormRegister from "../Components/Form/FormRegister";
import FormLogin from "../Components/Form/FormLogin";

function Login() {
    const breadcrumbItems = ["Home", "Account"];

    const tabNavs = [
        <TabNav id="nav-sign-in-tab"
                ariaControls="nav-sign-in"
                dataBsTarget="#nav-sign-in"
                isActive={true}
                label="Sign In" />,
        <TabNav id="nav-register-tab"
                ariaControls="nav-register"
                dataBsTarget="#nav-register"
                isActive={false}
                label="Register" />
    ];

    const tabContents = [
        <TabContent id="nav-sign-in" ariaLabelledby="nav-sign-in-tab" isActive={true} form={<FormLogin/>}/>,
        <TabContent id="nav-register" ariaLabelledby="nav-register-tab" isActive={false} form={<FormRegister/>}/>
    ];

    return (
        <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
            <section className="login-tabs padding-small">
                <div className="container">
                    <div className="row">
                        <TabsListing tabNav={tabNavs} tabContent={tabContents}/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Login;
