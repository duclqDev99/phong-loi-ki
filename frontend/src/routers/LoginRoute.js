import UserLayout from "../layouts/UserLayout";
import Login from "../pages/UserPage/Login";
import React from "react";

const LoginRoute = (isLogged, setIsLogged, isAdmin, setIsAdmin, cartItems, setCartItems) => ({
    path: "/login",
    element: <UserLayout breadcrumbItems={["Home", "Login"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <Login isLogged={isLogged} setIsLogged={setIsLogged} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
        },
    ]
})

export default LoginRoute;
