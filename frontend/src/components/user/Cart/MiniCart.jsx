import React, {useEffect, useReducer, useState} from "react";
import MiniCartItem from "./MiniCartItem";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {cartReducer, initialState} from "../../../store/reducer/cart";

function MiniCart({cartItems = []}) {
    if (!cartItems) {
        cartItems = [];
    }
    function formatVND(value) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        });

        return formatter.format(value).replace('₫', 'VNĐ');
    }

    return (
        <Dropdown as="li" className="cart-dropdown nav-item">
            <Dropdown.Toggle
                as="a"
                className="nav-link text-uppercase me-0"
                id="cart-dropdown"
            >
                Giỏ Hàng
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-end p-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">GIỎ HÀNG CỦA BẠN</span>
                </h4>
                <ul className="list-group mb-3">
                    {cartItems && cartItems.length > 0 ? cartItems.map((product, index) => (
                        <MiniCartItem product={product} />
                    )) : null}
                    <li className="list-group-item bg-transparent border-gray d-flex justify-content-between">
                        <span className="text-uppercase"><b>TỔNG: </b></span>
                        {/*<strong>{(() => {
                            let temp_total = 0;
                            cartItems.forEach(item => {
                                temp_total += item.price * item.quantity;
                            });
                            return temp_total;
                        })()} VNĐ</strong>*/}
                        <strong>
                            {Array.isArray(cartItems) && cartItems.length > 0
                                ? cartItems.map(item => item.price * item.quantity).reduce((total, subtotal) => total + subtotal, 0) + ' VNĐ'
                                : '0 VNĐ'}
                        </strong>
                    </li>
                </ul>
                <div className="d-flex flex-wrap justify-content-center">
                    <NavLink to="/cart" className="w-100 btn btn-dark mb-1">
                        Xem giỏ hàng
                    </NavLink>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MiniCart;

