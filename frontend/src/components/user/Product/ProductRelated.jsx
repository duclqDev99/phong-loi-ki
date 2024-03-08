import React from "react";
import ProductItem from "./ProductItem";

function ProductRelated( category_id ) {
    return (
        <section id="products" className="product-store padding-small">
            <div className="container">
                <div className="display-header d-flex flex-wrap justify-content-between align-items-center pb-4">
                    <h3 className="mt-3">Related Products</h3>
                    <a href="/shop" className="btn">Xem tất cả các mục →</a>
                </div>
                <div className="row">
                    <ProductItem classItem={'col-md-3 product-card mb-3'}/>
                    <ProductItem classItem={'col-md-3 product-card mb-3'}/>
                    <ProductItem classItem={'col-md-3 product-card mb-3'}/>
                    <ProductItem classItem={'col-md-3 product-card mb-3'}/>
                </div>
            </div>
        </section>
    );
}

export default ProductRelated;
