import React from 'react';

// Import các section khác như Banner, Products, etc.
import CartTotal from "../Cart/CartTotal";

function AdditionalInformation() {

    return (
        <div className="col-lg-6">
            <CartTotal isCheckoutStep={true}/>
            <div className="your-order mt-5">
                <div className="total-price">
                    <button type="submit" name="submit" className="btn btn-dark w-100">Đặt hàng</button>
                </div>
            </div>
        </div>
    );
}

export default AdditionalInformation;
