import React from "react";
import MiniCartItem from "./MiniCartItem";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function MiniCart() {
    return (
        <Dropdown as="li" className="cart-dropdown nav-item">
            <Dropdown.Toggle
                as="a"
                className="nav-link text-uppercase me-0"
                id="cart-dropdown"
            >
                Cart(2)
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-end p-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                    <MiniCartItem />
                    <MiniCartItem />
                    <MiniCartItem />
                    <li className="list-group-item bg-transparent border-gray d-flex justify-content-between">
                        <span className="text-uppercase"><b>Total (USD)</b></span>
                        <strong>$270</strong>
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