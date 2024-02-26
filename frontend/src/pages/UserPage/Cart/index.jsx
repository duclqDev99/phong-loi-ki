import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import CartTotal from "./CartTotal";
import CartTable from "./CartTable";

function Cart() {
    const breadcrumbItems = ["Home", "Cart"];

    return (
        <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
            <section className="shopify-cart padding-large">
                <div className="container">
                    <div className="row">
                        <CartTable/>
                        <CartTotal/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Cart;
