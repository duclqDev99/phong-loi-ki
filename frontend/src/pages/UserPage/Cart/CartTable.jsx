import React from "react";
import CartItem from "./CartItem";

function CartTable() {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="text-uppercase">
                <tr>
                    <th scope="col" className="fw-light">Product</th>
                    <th scope="col" className="fw-light">Quantity</th>
                    <th scope="col" className="fw-light">Subtotal</th>
                    <th scope="col" className="fw-light"></th>
                </tr>
                </thead>
                <tbody className="border-top border-gray">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </tbody>
            </table>
            <div
                className="cart-bottom d-flex flex-wrap justify-content-between align-items-center pt-2">
                <a href="https://demo.templatesjungle.com/micas/cart.html#"
                   className="btn btn-dark mb-2">Update
                    cart</a>
            </div>
        </div>
    );
}

export default CartTable;