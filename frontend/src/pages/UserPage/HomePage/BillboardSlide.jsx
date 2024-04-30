import React from 'react';
import {NavLink} from "react-router-dom";

function Billboard({product}) {

    return (
        <div className="swiper-slide">
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <img src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt="product-img" 
                            className="img-fluid mb-3"/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="banner-content">
                            <h2>{product.name}</h2>
                            <p className="fs-3">{product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</p>
                            {/*<a href="single-product.html" className="btn">Shop now →</a>*/}
                            <NavLink to={`/product/${product.id}`} className="btn">
                                Shop now →
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;
