import React from 'react';

// Import các section khác như Banner, Products, etc.
import TabsListing from "../../../components/user/TabsListing";
import TabNav from "../../../components/user/TabNav";
import TabContent from "../../../components/user/TabContent";
import FormRegister from "../../../components/user/Form/FormRegister";

function Register() {
    const tabNavs = [
        <TabNav id="nav-register-tab"
                ariaControls="nav-register"
                dataBsTarget="#nav-register"
                isActive={true}
                label="Register" />
    ];

    const tabContents = [
        <TabContent id="nav-register" ariaLabelledby="nav-register-tab" isActive={true} form={<FormRegister/>}/>
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

export default Register;
