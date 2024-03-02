import React, {useEffect, useState} from 'react';
import thumbnail1 from "../../../assets/user/images/product-thumbnail-1.png";
import thumbnail2 from "../../../assets/user/images/product-thumbnail-2.png";
import image1 from "../../../assets/user/images/product-large-1.png";
import image2 from "../../../assets/user/images/product-large-2.png";

// Import các section khác như Banner, Products, etc.
import ProductRelated from "../../../components/user/Product/ProductRelated";
import productApi from "../../../apis/productApi";

function Product() {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({
        id: 0,
        name: 'Book 01',
        price: 100,
        quantity: 6,
        description: 'Des 01',
        status: '1',
        image: 'none',
        author: "Author 01",
        rating: 4.0
    });

    const fetch = async () => {
        await productApi.getList().then((response) => {
            setProduct(response);
            // setProduct({ id: 0, name: 'Book 01', price: 100, quantity: 6, description: 'Des 01', status: '1', image: 'none', author: "Author 01", rating: 4.0 });
        }).catch((error) => {
            console.log(error);
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

    /*useEffect(() => {
        fetch();
    }, []);*/

    return (
        <div>
            <section className="single-product padding-large">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row product-preview">
                                <div
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
                                </div>
                                <div
                                    className="swiper large-swiper overflow-hidden col-9 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                                    <div className="swiper-wrapper" id="swiper-wrapper-dbd43c09e2210cda4"
                                         aria-live="polite">
                                        <div className="swiper-slide swiper-slide-visible swiper-slide-active"
                                             style={{width: 483, opacity: 1, transform: 'translate3d(0, 0, 0)'}}
                                             role="group" aria-label="1 / 2">
                                            <img src={image1} alt="single-product"
                                                 className="img-fluid"/>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2"
                                             style={{width: 483, opacity: 0, transform: 'translate3d(-483, 0, 0)'}}>
                                            <img src={image2} alt="single-product"
                                                 className="img-fluid"/>
                                        </div>
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
                                    <span className="fs-1 text-primary">${product.price}</span>
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
                                        <a href="/checkout"
                                           className="btn btn-dark me-2 mb-1">Buy now</a>
                                        <a href="/cart"
                                           className="btn btn-dark">Add to cart</a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="meta-product">
                                    <div className="meta-item d-flex mb-1">
                                        <span className="text-uppercase me-2">Category:</span>
                                        <ul className="select-list list-unstyled d-flex mb-0">
                                            <li data-value="S" className="select-item">
                                                <a href="/shop">Happy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductRelated/>
        </div>
    );
}

export default Product;
