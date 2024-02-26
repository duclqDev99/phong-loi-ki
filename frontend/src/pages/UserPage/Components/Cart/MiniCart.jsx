import React from "react";
import MiniCartItem from "./MiniCartItem";

function MiniCart() {
    return (
        <li className="cart-dropdown nav-item dropdown">
            <a className="nav-link text-uppercase dropdown-toggle me-0"
               data-bs-toggle="dropdown" href="#" role="button"
               aria-expanded="false">Cart(2)</a>
            <div className="dropdown-menu dropdown-menu-end p-3">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">2</span>
                </h4>
                <ul className="list-group mb-3">
                    <MiniCartItem/>
                    <MiniCartItem/>
                    <MiniCartItem/>
                    <li className="list-group-item bg-transparent border-gray d-flex justify-content-between">
                        <span className="text-uppercase"><b>Total (USD)</b></span>
                        <strong>$270</strong>
                    </li>
                </ul>
                <div className="d-flex flex-wrap justify-content-center">
                    <a href="cart.html" className="w-100 btn btn-dark mb-1" type="submit">View Cart</a>
                    <a href="checkout.html" className="w-100 btn btn-primary" type="submit">Go to checkout</a>
                </div>
            </div>
        </li>
    );
}

export default MiniCart;