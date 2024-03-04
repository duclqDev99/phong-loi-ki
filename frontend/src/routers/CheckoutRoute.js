import UserLayout from "../layouts/UserLayout";
import Checkout from "../pages/UserPage/Checkout";
import React from "react";

const CheckoutRoute = {
    path: "/checkout",
    element: <UserLayout breadcrumbItems={["Home", "Checkout"]}/>,
    children: [
        {
            path: "",
            element: <Checkout />
        },
    ]
}

export default CheckoutRoute;
