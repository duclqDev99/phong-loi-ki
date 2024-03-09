import UserLayout from "../layouts/UserLayout";
import React from "react";
import Register from "../pages/UserPage/Register";

const RegisterRoute = (isLogged, setIsLogged, isAdmin, setIsAdmin, cartItems, setCartItems) => ({
    path: "/register",
    element: <UserLayout breadcrumbItems={["Home", "Register"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <Register isLogged={isLogged} setIsLogged={setIsLogged} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
        },
    ]
})

export default RegisterRoute;
