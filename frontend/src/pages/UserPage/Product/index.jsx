import React, {useEffect, useReducer, useState} from 'react';
import thumbnail1 from "../../../assets/user/images/product-thumbnail-1.png";
import thumbnail2 from "../../../assets/user/images/product-thumbnail-2.png";
import image1 from "../../../assets/user/images/product-large-1.png";
import image2 from "../../../assets/user/images/product-large-2.png";

// Import các section khác như Banner, Products, etc.
import ProductRelated from "../../../components/user/Product/ProductRelated";
import productApi from "../../../apis/productApi";
import {NavLink, useParams} from "react-router-dom";

function Product({cartItems, setCartItems}) {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const fetch = async () => {
        await productApi.getProduct(id).then((response) => {
            setProduct(response);
        }).catch((error) => {
            setProduct([]);
        });
    };

    const plus = () => {
        setQuantity(quantity + 1);
    }

    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        /*const [cartItems, setCartItems] = useState(() => {
            const localCart = JSON.parse(localStorage.getItem('cartItems'));
            return Array.isArray(localCart) ? localCart : [];
        });*/
        if (!Array.isArray(cartItems)) {
            setCartItems([]);
        }

        const existingItem = cartItems && cartItems.length > 0 ? cartItems.find((item) => item.id === product.id) : null;
        // const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            setCartItems((prevCartItems) =>
                prevCartItems.map((item) =>
                    item.id === existingItem.id ? { ...item, quantity: item.quantity + quantity } : item
                )
            );
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: quantity }]);
        }
        setShowSuccessMessage(true);
        setQuantity(1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    function formatVND(value) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        });

        return formatter.format(value).replace('₫', 'VNĐ');
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        let timeout;
        if (showSuccessMessage) {
            timeout = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [showSuccessMessage]);

    return (
        <div>
            <section className="single-product padding-large">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row product-preview">
                                {/*<div
                                    className="swiper thumb-swiper col-3 swiper-initialized swiper-horizontal swiper-backface-hidden swiper-thumbs">
                                    <div className="swiper-wrapper d-flex flex-wrap align-content-start"
                                         id="swiper-wrapper-3fdf9115f8c87405" aria-live="polite"
                                         style={{transform: 'translate3d(0, 0, 0)'}}>
                                        <div
                                            className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                                            style={{width: 141}} role="group" aria-label="1 / 2">
                                            <img src={thumbnail1} alt=""
                                                 className="img-fluid"/>
                                        </div>
                                        <div className="swiper-slide swiper-slide-visible swiper-slide-next"
                                             role="group"
                                             aria-label="2 / 2" style={{width: 141}}>
                                            <img src={thumbnail2} alt=""
                                                 className="img-fluid"/>
                                        </div>
                                    </div>
                                    <span className="swiper-notification" aria-live="assertive"
                                          aria-atomic="true"></span>
                                </div>*/}
                                <div
                                    className="swiper large-swiper overflow-hidden col-9 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                                    <div className="swiper-wrapper" id="swiper-wrapper-dbd43c09e2210cda4"
                                         aria-live="polite">
                                        <div className="swiper-slide swiper-slide-visible swiper-slide-active"
                                             style={{width: 483, opacity: 1, transform: 'translate3d(0, 0, 0)'}}
                                             role="group" aria-label="1 / 2">
                                            <img src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt="single-product"
                                                 className="img-fluid"/>
                                        </div>
                                        {/*<div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2"
                                             style={{width: 483, opacity: 0, transform: 'translate3d(-483, 0, 0)'}}>
                                            <img src={image2} alt="single-product"
                                                 className="img-fluid"/>
                                        </div>*/}
                                    </div>
                                    <span className="swiper-notification" aria-live="assertive"
                                          aria-atomic="true"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-info mt-3">
                                <div className="element-header">
                                    <div className="author">By {product.author}</div>
                                    <h3 className="product-title">{product.name}</h3>
                                    <div className="rating-container d-flex align-items-center">
                                        <span className="rating-count lh-normal">Rating: ({product.rating})</span>
                                    </div>
                                </div>
                                <div className="product-price my-3">
                                    <span className="fs-1 text-primary">{formatVND(product.price)} VNĐ</span>
                                </div>
                                <p>{product.description}</p>
                                <hr></hr>
                                <div className="cart-wrap">
                                    <div className="product-quantity my-3">
                                        <div className="stock-button-wrap d-flex flex-wrap align-items-center">
                                            <div className="product-quantity">
                                                <div className="input-group product-qty" style={{maxWidth: 150}}>
                                            <span className="input-group-btn">
                                                <button type="button" onClick={minus} className="quantity-left-minus"
                                                        data-field="">-</button>
                                            </span>
                                                    <input type="text" id="quantity" name="quantity"
                                                           className="form-control input-number text-center"
                                                           value={quantity}
                                                           min="1"
                                                           max="100" required=""/>
                                                    <span className="input-group-btn">
                                                <button type="button" onClick={plus} className="quantity-right-plus"
                                                        data-field="">+</button>
                                            </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action-buttons my-4 d-flex flex-wrap">
                                        <button className="btn btn-dark" onClick={handleAddToCart}>
                                            Thêm giỏ hàng
                                        </button>
                                    </div>
                                    {showSuccessMessage && (
                                        <div className="alert alert-success" role="alert">
                                            Sản phẩm đã được thêm vào giỏ hàng thành công!
                                        </div>
                                    )}
                                </div>
                                <hr></hr>
                                <div className="meta-product">
                                    <div className="meta-item d-flex mb-1">
                                        <span className="text-uppercase me-2">Loại:</span>
                                        <ul className="select-list list-unstyled d-flex mb-0">
                                            <li data-value="S" className="select-item">
                                                <NavLink to={`/shop/cat/${product.category_id}`} >
                                                    Happy
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<ProductRelated/>*/}
        </div>
    );
}

export default Product;
