import React from "react";
import image from "../../../assets/user/images/product-item1.jpg";
import {NavLink} from "react-router-dom";

function ProductItem({ classItem, product = null }) {

    function formatVND(value) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0, 
        });
    
        return formatter.format(value).replace('₫', 'VNĐ');
    }

    return (
        <div className={classItem}>
            <div className="image-holder" style={{ textAlign: 'center' }}>
                <NavLink to={`/product/${product.id}`}>
                    <img src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt="product-item"
                         className="img-fluid product-image"/>
                </NavLink>
            </div>
            <div className="card-detail text-center pt-3 pb-2">
                <h5 className="card-title fs-4 text-uppercase m-0">
                    <NavLink key={product.id} to={`/product/${product.id}`}>
                        {product.name}
                    </NavLink>
                </h5>
                <span className="item-price text-primary fs-4">{ formatVND(product.price) }</span>
                {/*<div className="cart-button mt-1">
                    <a href="/cart"
                       className="btn">Add to cart</a>
                </div>*/}
            </div>
        </div>
    );
}

export default ProductItem;
