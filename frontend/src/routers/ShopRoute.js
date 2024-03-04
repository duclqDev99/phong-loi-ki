import UserLayout from "../layouts/UserLayout";
import HomePage from '../pages/UserPage/HomePage';
import Shop from "../pages/UserPage/Shop";
import Login from "../pages/UserPage/Login";
import Cart from "../pages/UserPage/Cart";
import Checkout from "../pages/UserPage/Checkout";
import Product from "../pages/UserPage/Product";
import React from "react";

const MainRoute = {
    path: "/",
    element: <UserLayout breadcrumbItems={[]}/>,
    children: [
        {
            path: "",
            element: <HomePage/>
        },
        {
            path: "/shop",
            element: <Shop breadcrumbItems={["Home", "Shop"]}/>
        },
        {
            path: "/login",
            element: <Login breadcrumbItems={["Home", "Login"]}/>
        },
        {
            path: "/cart",
            element: <Cart breadcrumbItems={["Home", "Cart"]}/>
        },
        {
            path: "/checkout",
            element: <Checkout breadcrumbItems={["Home", "Checkout"]}/>
        },
        {
            path: "/product",
            element: <Product breadcrumbItems={["Home", "Product"]}/>
        }
    ]
}

export default MainRoute;
