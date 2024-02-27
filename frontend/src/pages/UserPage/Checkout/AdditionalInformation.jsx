import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import CartTotal from "../Cart/CartTotal";

function AdditionalInformation() {

    return (
        <div className="col-lg-6">
            <h3 className="pb-4">Additional Information</h3>
            <CartTotal isCheckoutStep={true}/>
            <div className="your-order mt-5">
                <div className="total-price">
                    <button type="submit" name="submit" className="btn btn-dark w-100">Place an
                        order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdditionalInformation;