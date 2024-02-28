import React from 'react';

// Import các section khác như Banner, Products, etc.
import CartTotal from "./CartTotal";
import CartTable from "./CartTable";

function Cart() {
    return (
        <section className="shopify-cart padding-large">
            <div className="container">
                <div className="row">
                    <CartTable/>
                    <CartTotal/>
                </div>
            </div>
        </section>
    );
}

export default Cart;
