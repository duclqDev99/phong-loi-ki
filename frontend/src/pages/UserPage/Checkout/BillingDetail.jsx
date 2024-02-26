import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import CartTotal from "../Cart/CartTotal";

function BillingDetail() {
    const breadcrumbItems = ["Home", "Checkout"];

    return (

        <div className="col-lg-6">
            <h3 className="pb-4">Billing Details</h3>
            <div className="billing-details">
                <div className="py-3">
                    <label htmlFor="fname">First Name*</label>
                    <input type="text" id="fname" name="firstname" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="lname">Last Name*</label>
                    <input type="text" id="lname" name="lastname" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="address">Street Address*</label>
                    <input type="text" id="adr" name="address"
                           placeholder="House number and street name, district, ward and city"
                           className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="city">Town / City *</label>
                    <input type="text" id="city" name="city" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="email">Phone *</label>
                    <input type="text" id="phone" name="phone" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="email">Email address *</label>
                    <input type="text" id="email" name="email" className="w-100"/>
                </div>
            </div>
        </div>
    );
}

export default BillingDetail;