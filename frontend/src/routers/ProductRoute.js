import UserLayout from "../layouts/UserLayout";
import Product from "../pages/UserPage/Product";
import React from "react";

const ProductRoute = {
    path: "/product",
    element: <UserLayout breadcrumbItems={["Home", "Product"]}/>,
    children: [
        {
            path: ":id",
            element: <Product />
        }
    ]
}

export default ProductRoute;
