import React from 'react';

// Import các section khác như Banner, Products, etc.
import TabsListing from "../../../components/user/TabsListing";
import TabNav from "../../../components/user/TabNav";
import TabContent from "../../../components/user/TabContent";
import FormLogin from "../../../components/user/Form/FormLogin";

function Login({isLogged, setIsLogged, isAdmin, setIsAdmin}) {
    const tabNavs = [
        <TabNav id="nav-sign-in-tab"
                ariaControls="nav-sign-in"
                dataBsTarget="#nav-sign-in"
                isActive={true}
                label="Sign In" />,
    ];

    const tabContents = [
        <TabContent id="nav-sign-in"
                    ariaLabelledby="nav-sign-in-tab"
                    isActive={true}
                    form={
            <FormLogin isLogged={isLogged}
                       setIsLogged={setIsLogged}
                       isAdmin={isAdmin}
                       setIsAdmin={setIsAdmin}/>
        }/>,
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
