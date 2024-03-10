import React from 'react';

// Import các section khác như Banner, Products, etc.

function BillingDetail() {
    return (

        <div className="col-lg-6">
            <h3 className="pb-4">CHI TIẾT THANH TOÁN</h3>
            <div className="billing-details">

                <div className="py-3">
                    <label htmlFor="lname">Tên <span className='required'>*</span></label>
                    <input type="text" id="lname" name="fullname" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="address">Địa chỉ <span style={{color:'red'}}>*</span></label>
                    <input type="text" id="adr" name="address"
                           className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="email">Số điện thoại <span style={{color:'red'}}>*</span></label>
                    <input type="text" id="phone" name="phone" className="w-100"/>
                </div>

                <div className="py-3">
                    <label htmlFor="email">Email <span style={{color:'red'}}>*</span></label>
                    <input type="text" id="email" name="email" className="w-100"/>
                </div>
            </div>
        </div>
    );
}

export default BillingDetail;
