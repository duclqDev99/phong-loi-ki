import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function CartTotal({ isCheckoutStep = false, cartItems }) {
    function formatVND(value) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        });

        return formatter.format(value).replace('₫', 'VNĐ');
    }
    return (
        <div >
            <h3 className="pb-4">TỔNG GIỎ HÀNG</h3>
            <div className="total-price pb-5">
                <table cellSpacing="0" className="table text-uppercase">
                    <tbody>
                    <tr className="order-total pt-2 pb-2 border-bottom border-gray">
                        <th className="fw-light">TỔNG CỘNG:</th>
                        <td className="align-middle border-0" data-title="Total">
                                        <span className="price-amount amount text-primary">
                                            <bdi>
                                                {
                                                    (() => {
                                                        if (Array.isArray(cartItems) && cartItems.length > 0) {
                                                            let temp_total = 0;
                                                            cartItems.forEach(item => {
                                                                temp_total += item.price * item.quantity;
                                                            });
                                                            return formatVND(temp_total);
                                                        } else {
                                                            return formatVND(0);
                                                        }
                                                    })()
                                                }
                                            </bdi>
                                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            { !isCheckoutStep && (
                <div className="button-wrap">
                    <NavLink to={`/shop`} className="btn btn-dark me-2 mb-2">
                        Tiếp tục mua sắm
                    </NavLink>
                    <NavLink to={`/checkout`} className="btn btn-primary me-2 mb-2">
                        Thanh toán
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default CartTotal;
