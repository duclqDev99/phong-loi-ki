import UserLayout from "../layouts/UserLayout";
import Logout from "../pages/UserPage/Logout";
import React from "react";

const LogoutRoute = (isLogged, setIsLogged, cartItems, setCartItems) => ({
    path: "/logout",
    element: <UserLayout breadcrumbItems={["Home", "Login"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: "",
            element: <Logout isLogged={isLogged} setIsLogged={setIsLogged}/>
        },
    ]
})

export default LogoutRoute;
