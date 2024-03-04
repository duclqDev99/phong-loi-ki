import UserLayout from "../layouts/UserLayout";
import Login from "../pages/UserPage/Login";
import React from "react";

const LoginRoute = {
    path: "/login",
    element: <UserLayout breadcrumbItems={["Home", "Login"]}/>,
    children: [
        {
            path: "",
            element: <Login />
        },
    ]
}

export default LoginRoute;
