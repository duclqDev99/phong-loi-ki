import React from 'react';
// Import các section khác như Banner, Products, etc.
import Categories from "./Categories";
import ProductFilter from "../../../components/user/Product/ProductFilter";
import ProductList from "../../../components/user/Product/ProductList";
import Pagination from "../../../components/user/Pagination";

function Shop() {
    const breadcrumbItems = ["Home", "Shop"];

    return (
        <div className="shopify-grid padding-small">
            <div className="container">
                <div className="row">
                    <main className="col-md-9">
                        <ProductFilter/>
                        <ProductList/>
                        <Pagination/>
                    </main>
                    <Categories/>
                </div>
            </div>
        </div>
    );
}

export default Shop;
