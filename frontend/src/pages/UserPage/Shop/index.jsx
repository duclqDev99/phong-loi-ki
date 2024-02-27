import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';
// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import Categories from "./Categories";
import ProductFilter from "../Components/Product/ProductFilter";
import ProductList from "../Components/Product/ProductList";
import Pagination from "../Components/Pagination";

function Shop() {
    const breadcrumbItems = ["Home", "Shop"];

    return (
        <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
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
            <Footer/>
        </div>
    );
}

export default Shop;
