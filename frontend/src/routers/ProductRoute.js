import UserLayout from "../layouts/UserLayout";
import Product from "../pages/UserPage/Product";
import React from "react";

const ProductRoute = (isLogged, setIsLogged, cartItems, setCartItems) => ({
    path: "/product",
    element: <UserLayout breadcrumbItems={["Home", "Product"]} isLogged={isLogged} cartItems={cartItems} setCartItems={setCartItems}/>,
    children: [
        {
            path: ":id",
            element: <Product cartItems={cartItems} setCartItems={setCartItems}/>
        }
    ]
})

export default ProductRoute;
