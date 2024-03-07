import UserLayout from "../layouts/UserLayout";
import Checkout from "../pages/UserPage/Checkout";
import React from "react";

const CheckoutRoute = (isLogged, setIsLogged, cartItems, setCartItems) => ({
    path: "/checkout",
    element: <UserLayout breadcrumbItems={["Home", "Checkout"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <Checkout isLogged={isLogged} setIsLogged={setIsLogged} cartItems={cartItems} setCartItems={setCartItems}/>
        },
    ]
});

export default CheckoutRoute;
