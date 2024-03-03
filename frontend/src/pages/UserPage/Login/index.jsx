import React from 'react';

// Import các section khác như Banner, Products, etc.
import TabsListing from "../../../components/user/TabsListing";
import TabNav from "../../../components/user/TabNav";
import TabContent from "../../../components/user/TabContent";
import FormRegister from "../../../components/user/Form/FormRegister";
import FormLogin from "../../../components/user/Form/FormLogin";

function Login() {
    const breadcrumbItems = ["Home", "Account"];

    const tabNavs = [
        <TabNav id="nav-sign-in-tab"
                ariaControls="nav-sign-in"
                dataBsTarget="#nav-sign-in"
                isActive={true}
                label="Sign In" />,
        /*<TabNav id="nav-register-tab"
                ariaControls="nav-register"
                dataBsTarget="#nav-register"
                isActive={false}
                label="Register" />*/
    ];

    const tabContents = [
        <TabContent id="nav-sign-in" ariaLabelledby="nav-sign-in-tab" isActive={true} form={<FormLogin/>}/>,
        /*<TabContent id="nav-register" ariaLabelledby="nav-register-tab" isActive={false} form={<FormRegister/>}/>*/
    ];

    return (
        <section className="login-tabs padding-small">
            <div className="container">
                <div className="row">
                    <TabsListing tabNav={tabNavs} tabContent={tabContents}/>
                </div>
            </div>
        </section>
    );
}

export default Login;
