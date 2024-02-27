import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import CartTotal from "../Cart/CartTotal";
import BillingDetail from "./BillingDetail";
import AdditionalInformation from "./AdditionalInformation";

function Checkout() {
    const breadcrumbItems = ["Home", "Checkout"];

    return (
        <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
            <section className="shopify-cart checkout-wrap padding-medium">
                <div className="container">
                    <form className="form-group">
                        <div className="row d-flex flex-wrap">
                            <BillingDetail/>
                            <AdditionalInformation/>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Checkout;
