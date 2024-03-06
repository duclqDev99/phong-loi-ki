import UserLayout from "../layouts/UserLayout";
import HomePage from '../pages/UserPage/HomePage';
import React from "react";

const MainRoute = (isLogged, setIsLogged, cartItems, setCartItems) => ({
    path: "/",
    element: <UserLayout breadcrumbItems={[]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <HomePage isLogged={isLogged} setIsLogged={setIsLogged}/>
        },
    ]
})

export default MainRoute;
