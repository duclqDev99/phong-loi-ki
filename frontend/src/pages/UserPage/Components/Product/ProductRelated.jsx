import React from "react";
import ProductItem from "./ProductItem";

function ProductRelated() {
    return (
        <section id="products" className="product-store padding-xlarge">
            <div className="container">
                <div className="display-header d-flex flex-wrap justify-content-between align-items-center pb-4">
                    <h3 className="mt-3">Related Products</h3>
                    <a href="https://demo.templatesjungle.com/micas/shop.html" className="btn">View all items →</a>
                </div>
                <div className="row">
                    <ProductItem class_item={'col-md-3 product-card mb-3'}/>
                    <ProductItem class_item={'col-md-3 product-card mb-3'}/>
                    <ProductItem class_item={'col-md-3 product-card mb-3'}/>
                    <ProductItem class_item={'col-md-3 product-card mb-3'}/>
                </div>
            </div>
        </section>
    );
}

export default ProductRelated;