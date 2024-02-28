import React from 'react';

// Import các section khác như Banner, Products, etc.
import BillingDetail from "./BillingDetail";
import AdditionalInformation from "./AdditionalInformation";

function Checkout() {
    return (
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
    );
}

export default Checkout;
