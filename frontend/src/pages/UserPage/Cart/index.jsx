import React, {useEffect, useState} from 'react';

// Import các section khác như Banner, Products, etc.
import CartTotal from "./CartTotal";
import CartTable from "./CartTable";

function Cart({isLogged, setIsLogged, cartItems, setCartItems}) {

    const handleDelete = (id) => {
        console.log(`Deleting item with ID: ${id}`);
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }

    /*useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);*/

    /*useEffect(() => {
        let temp_total = 0;
        cartItems.forEach(item => {
            temp_total += item.price * item.quantity;
        })
        setTotal(temp_total);
    }, [cartItems]);*/

    return (
        <section className="shopify-cart padding-large">
            <div className="container">
                <div className="row">
                    <CartTable cartItems={cartItems} handleDelete={handleDelete}/>
                    <CartTotal cartItems={cartItems}/>
                </div>
            </div>
        </section>
    );
}

export default Cart;
