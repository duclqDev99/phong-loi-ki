import UserLayout from "../layouts/UserLayout";
import HomePage from '../pages/UserPage/HomePage';
import React from "react";

const MainRoute = {
    path: "/",
    element: <UserLayout breadcrumbItems={[]}/>,
    children: [
        {
            path: "",
            element: <HomePage/>
        },
    ]
}

export default MainRoute;
