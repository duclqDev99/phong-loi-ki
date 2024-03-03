import React from 'react';

// Import các section khác như Banner, Products, etc.

function BillingDetail() {
    return (

        <div className="col-lg-6">
            <h3 className="pb-4">Billing Details</h3>
            <div className="billing-details">

                <div className="py-3">
                    <label htmlFor="lname">Full Name*</label>
                    <input type="text" id="lname" name="fullname" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="address">Street Address*</label>
                    <input type="text" id="adr" name="address"
                           placeholder="House number and street name, district, ward and city"
                           className="w-100"/>
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
