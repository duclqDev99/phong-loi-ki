import UserLayout from "../layouts/UserLayout";
import Cart from "../pages/UserPage/Cart";
import React from "react";

const CartRoute = (isLogged, setIsLogged, cartItems, setCartItems) => ({
    path: "/cart",
    element: <UserLayout breadcrumbItems={["Home", "Cart"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <Cart isLogged={isLogged} setIsLogged={setIsLogged} cartItems={cartItems} setCartItems={setCartItems}/>
        },
    ]
})

export default CartRoute;
