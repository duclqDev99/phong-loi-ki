import React, {useEffect, useReducer, useState} from 'react';
import {useNavigate} from "react-router-dom";
import orderApi from "../../../apis/orderApi";
import OrderSuccessPopup from './OrderSuccessPopup';
import { colors } from '@mui/material';
import OrderFailPopup from "./OrderFailPopup";


function Checkout({isLogged, setIsLogged, cartItems, setCartItems}) {
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [orderFail, setOrderFail] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogged) {
            navigate("/login");
        }
    }, [isLogged, navigate]);

    const [total, setTotal] = useState(() => {
        if (Array.isArray(cartItems) && cartItems.length > 0) {
            let temp_total = 0;
            cartItems.forEach(item => {
                temp_total += item.price * item.quantity;
            });
            return temp_total;
        } else {
            return 0;
        }
    });

    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState("");

        const handleOrder = (event) => {
            event.preventDefault();

            if (!fullname || !address || !phone || !email || !payment) {
                alert('Vui lòng điền vào tất cả các trường bắt buộc.');
                return;
        }

        const user = JSON.parse(localStorage.getItem('user'));

        const customerInfo = {
            id_user: user.id,
            fullname: fullname,
            address: address,
            phone: phone,
            email: email,
            total_amount: total,
            payment: payment
        };

        const products = cartItems.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            subtotal: item.quantity * item.price,
        }));

        const formData = {
            ...customerInfo,
            products: products
        };
        handleCreate(formData);
    };

    const handleCreate = async (formData) => {
        await orderApi.create(formData).then((response) => {
            console.log("Order Success: " + response);
            localStorage.setItem('cartItems', JSON.stringify([]));
            setCartItems([]);
            setOrderSuccess(true);
        }).catch((error) => {
            setOrderFail(true);
            console.log(error);
        });
    };

    const handleClosePopup = () => {
        setOrderSuccess(false);
        setOrderFail(false);
    };

    function formatVND(value) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        });

        return formatter.format(value).replace('₫', 'VNĐ');
    }

    const renderQRCode = () => {
        const qrCodeStyle = {
            maxWidth: '200px',
            height: 'auto'
        };

        if (payment === "bankTransfer") {
            return <img src={`${process.env.PUBLIC_URL}/images/qr/bank.jpg`} alt="QR Code for Bank Transfer" style={qrCodeStyle} />;
        } else if (payment === "momo") {
            return <img src={`${process.env.PUBLIC_URL}/images/qr/momo.jpg`} alt="QR Code for Momo Payment" style={qrCodeStyle} />;
        } else {
            return null;
        }
    };

    return (
        <section className="shopify-cart checkout-wrap padding-medium">
            <div className="container">
                <form className="form-group">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-6">
                            <h3 className="pb-4">CHI TIẾT THANH TOÁN</h3>
                            <div className="billing-details">

                                <div className="py-3">
                                    <label htmlFor="lname">Tên <span style={{color: 'red'}}>*</span></label>
                                    <input type="text"
                                           id="fullname"
                                           name="fullname"
                                           className="w-100"
                                           value={fullname}
                                           onChange={(e) => setFullname(e.target.value)}
                                           required/>
                                </div>

                                <div className="py-3">
                                    <label htmlFor="address">Địa chỉ <span style={{color: 'red'}}>*</span></label>
                                    <input type="text"
                                           id="address"
                                           name="address"
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}
                                           className="w-100"
                                           required/>
                                </div>

                                <div className="py-3">
                                    <label htmlFor="email">Số điện thoại <span style={{color: 'red'}}>*</span></label>
                                    <input type="text"
                                           id="phone"
                                           name="phone"
                                           className="w-100"
                                           value={phone}
                                           onChange={(e) => setPhone(e.target.value)}
                                           required/>
                                </div>

                                <div className="py-3">
                                    <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
                                    <input type="text"
                                           id="email"
                                           name="email"
                                           className="w-100"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           required/>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="payment">Phương thức thanh toán <span
                                        style={{color: 'red'}}>*</span></label>
                                    <select
                                        id="payment"
                                        name="payment"
                                        className="w-100"
                                        onChange={(e) => {
                                            setPayment(e.target.value);
                                            console.log(payment)
                                        }}
                                        required
                                    >
                                        <option value="cash">Thanh toán khi nhận hàng</option>
                                        <option value="bankTransfer">Chuyển khoản ngân hàng</option>
                                        <option value="momo">Thanh toán Momo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h3 className="pb-4">TỔNG GIỎ HÀNG</h3>
                                <div className="total-price pb-5">
                                    <table cellSpacing="0" className="table text-uppercase">
                                        <tbody>
                                        <tr className="order-total pt-2 pb-2 border-bottom border-gray">
                                            <th className="fw-light">TỔNG CỘNG:</th>
                                            <td className="align-middle border-0" data-title="Total">
                                        <span className="price-amount amount text-primary">
                                            <bdi>
                                                {formatVND(total)}
                                            </bdi>
                                        </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-3">
                                {renderQRCode()}
                            </div>
                            <div className="your-order mt-5">
                                <div className="total-price">
                                <button type="submit" name="submit" className="btn btn-dark w-100"
                                            onClick={handleOrder}>
                                        Đặt hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <OrderSuccessPopup open={orderSuccess} onClose={handleClosePopup}/>
            <OrderFailPopup open={orderFail} onClose={handleClosePopup}/>
        </section>
    );
}

export default Checkout;
