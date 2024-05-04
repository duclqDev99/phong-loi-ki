import React from 'react';

// Import các section khác như Banner, Products, etc.
import CartTotal from "../Cart/CartTotal";

function AdditionalInformation() {

    return (
        <div className="col-lg-6">
            <CartTotal isCheckoutStep={true}/>
            <div className="your-order mt-5">
                <div className="form-group">
                    <label htmlFor="paymentMethod">Chọn phương thức thanh toán:</label>
                    <select
                        id="paymentMethod"
                        className="form-control"
                        value={paymentMethod}
                        onChange={handlePaymentChange}
                        required
                    >
                        <option value="">Chọn phương thức thanh toán</option>
                        <option value="cash">Thanh toán khi nhận hàng</option>
                        <option value="bankTransfer">Chuyển khoản ngân hàng</option>
                        <option value="momo">Thanh toán Momo</option>
                    </select>
                </div>
                <div className="total-price">
                    <button type="submit" name="submit" className="btn btn-dark w-100">Đặt hàng</button>
                </div>

            </div>
        </div>
    );
}

export default AdditionalInformation;
