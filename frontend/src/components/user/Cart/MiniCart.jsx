import React, {useEffect, useReducer, useState} from "react";
import MiniCartItem from "./MiniCartItem";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import {cartReducer, initialState} from "../../../store/reducer/cart";

function MiniCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    /*useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);*/

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        dispatch({ type: 'INITIALIZE_CART', payload: storedCartItems });
    }, []);

    /*useEffect(() => {
        let temp_total = 0;
        cartItems.forEach(item => {
            temp_total += item.price * item.quantity;
        });
        setTotal(temp_total);
    }, [cartItems]);*/

    return (
        <Dropdown as="li" className="cart-dropdown nav-item">
            <Dropdown.Toggle
                as="a"
                className="nav-link text-uppercase me-0"
                id="cart-dropdown"
            >
                Cart
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-end p-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                </h4>
                <ul className="list-group mb-3">
                    {state.cartItems.map((product, index) => (
                        <MiniCartItem product={product}/>
                    ))}
                    <li className="list-group-item bg-transparent border-gray d-flex justify-content-between">
                        <span className="text-uppercase"><b>Total (USD)</b></span>
                        <strong>${total}</strong>
                    </li>
                </ul>
                <div className="d-flex flex-wrap justify-content-center">
                    <NavLink to="/cart" className="w-100 btn btn-dark mb-1">
                        View Cart
                    </NavLink>
                    <NavLink to="/checkout" className="w-100 btn btn-primary">
                        Go to checkout
                    </NavLink>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default MiniCart;

