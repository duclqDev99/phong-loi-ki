import UserLayout from "../layouts/UserLayout";
import HomePage from '../pages/UserPage/HomePage';
import Shop from "../pages/UserPage/Shop";
import Login from "../pages/UserPage/Login";
import Cart from "../pages/UserPage/Cart";
import Checkout from "../pages/UserPage/Checkout";
import Product from "../pages/UserPage/Product";
import React from "react";

const MainRoute = (isLogged, setIsLogged, cartItems, setCartItems) => ({
    path: "/shop",
    element: <UserLayout breadcrumbItems={["Home", "Shop"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <Shop />
        },
        {
            path: "cat/:id",
            element: <Shop />
        },
        {
            path: "search/:search",
            element: <Shop />
        },
    ]
})

export default MainRoute;
