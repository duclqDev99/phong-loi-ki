import React from "react";
import ProductItem from "./ProductItem";

function ProductList() {
    return (
        <div className="row product-content product-store">
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
            <ProductItem classItem={'col-lg-4 col-md-6'}/>
        </div>
    );
}

export default ProductList;