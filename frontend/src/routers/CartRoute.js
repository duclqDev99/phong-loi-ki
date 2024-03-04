import UserLayout from "../layouts/UserLayout";
import Cart from "../pages/UserPage/Cart";
import React from "react";

const CartRoute = {
    path: "/cart",
    element: <UserLayout breadcrumbItems={["Home", "Cart"]}/>,
    children: [
        {
            path: "",
            element: <Cart />
        },
    ]
}

export default CartRoute;
