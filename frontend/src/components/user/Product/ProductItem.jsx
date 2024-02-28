import React from "react";
import image from "../../../assets/user/images/product-item1.jpg";

function ProductItem({ classItem }) {
    return (
        <div className={classItem}>
            <div className="image-holder">
                <img src={image} alt="product-item"
                     className="img-fluid"/>
            </div>
            <div className="card-detail text-center pt-3 pb-2">
                <h5 className="card-title fs-4 text-uppercase m-0">
                    <a
                        href="/product">Whispersong</a>
                </h5>
                <span className="item-price text-primary fs-4">$870</span>
                <div className="cart-button mt-1">
                    <a href="/cart"
                       className="btn">Add to cart</a>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
