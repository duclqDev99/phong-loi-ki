import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';
import thumbnail1 from "../../../assets/images/product-thumbnail-1.png";
import thumbnail2 from "../../../assets/images/product-thumbnail-2.png";
import image1 from "../../../assets/images/product-large-1.png";
import image2 from "../../../assets/images/product-large-2.png";

// Import các section khác như Banner, Products, etc.
import Breadcrumb from "../Components/Breadcrumb";
import ProductRelated from "../Components/Product/ProductRelated";

function Product() {
    const breadcrumbItems = ["Home", "Single Product"];

    return (
        <div>
            <Header/>
            <Breadcrumb items={breadcrumbItems}/>
            <section className="single-product padding-large">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row product-preview">
                                <div
                                    className="swiper thumb-swiper col-3 swiper-initialized swiper-horizontal swiper-backface-hidden swiper-thumbs">
                                    <div className="swiper-wrapper d-flex flex-wrap align-content-start"
                                         id="swiper-wrapper-3fdf9115f8c87405" aria-live="polite"
                                         style={{ transform: 'translate3d(0, 0, 0)' }}>
                                        <div
                                            className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active"
                                            style={{ width: 141 }} role="group" aria-label="1 / 2">
                                            <img src={thumbnail1} alt=""
                                                 className="img-fluid"/>
                                        </div>
                                        <div className="swiper-slide swiper-slide-visible swiper-slide-next"
                                             role="group"
                                             aria-label="2 / 2" style={{ width: 141 }}>
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
                                             style={{ width: 483, opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                                             role="group" aria-label="1 / 2">
                                            <img src={image1} alt="single-product"
                                                 className="img-fluid" />
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 2"
                                             style={{ width: 483, opacity: 0, transform: 'translate3d(-483, 0, 0)' }}>
                                            <img src={image2} alt="single-product"
                                                 className="img-fluid" />
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
                                    <div className="author">By Karim Archard</div>
                                    <h3 className="product-title">Musical by Karim</h3>
                                    <div className="rating-container d-flex align-items-center">
                                        <div className="rating" data-rating="1" onclick="rate(1)">
                                            <svg className="bi" width="16" height="16">
                                                <use xlinkHref="#star-fill"></use>
                                            </svg>
                                        </div>
                                        <div className="rating" data-rating="1" onclick="rate(1)">
                                            <svg className="bi" width="16" height="16">
                                                <use xlinkHref="#star-fill"></use>
                                            </svg>
                                        </div>
                                        <div className="rating" data-rating="1" onclick="rate(1)">
                                            <svg className="bi" width="16" height="16">
                                                <use xlinkHref="#star-fill"></use>
                                            </svg>
                                        </div>
                                        <div className="rating" data-rating="1" onclick="rate(1)">
                                            <svg className="bi" width="16" height="16">
                                                <use xlinkHref="#star-half"></use>
                                            </svg>
                                        </div>
                                        <div className="rating" data-rating="1" onclick="rate(1)">
                                            <svg className="bi" width="16" height="16">
                                                <use xlinkHref="#star-empty"></use>
                                            </svg>
                                        </div>
                                        <span className="rating-count lh-normal">(3.5)</span>
                                    </div>
                                </div>
                                <div className="product-price my-3">
                                    <span className="fs-1 text-primary">$200.00</span>
                                    <del>$300.00</del>
                                </div>
                                <p>Ullamcorper nunc egestas non. Justo, cum feugiat imperdiet nulla molestie ac
                                    vulputate
                                    scelerisque amet. Bibendum adipiscing platea blandit sit rhoncus.</p>
                                <hr></hr>
                                    <div className="cart-wrap">
                                        <div className="product-quantity my-3">
                                            <div className="item-title">
                                                <l>2 in stock</l>
                                            </div>
                                            <div className="stock-button-wrap d-flex flex-wrap align-items-center">
                                                <div className="product-quantity">
                                                    <div className="input-group product-qty" style={{ maxWidth: 150 }}>
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus" data-type="minus"
                                                        data-field="">
                                                    <svg width="16" height="16">
                                                        <use xlinkHref="#minus"></use>
                                                    </svg>
                                                </button>
                                            </span>
                                                        <input type="text" id="quantity" name="quantity"
                                                               className="form-control input-number text-center"
                                                               value="1"
                                                               min="1"
                                                               max="100" required="" />
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-right-plus" data-type="plus"
                                                        data-field="">
                                                    <svg width="16" height="16">
                                                        <use xlinkHref="#plus"></use>
                                                    </svg>
                                                </button>
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
                                                <span className="text-uppercase me-2">SKU:</span>
                                                <ul className="select-list list-unstyled d-flex mb-0">
                                                    <li data-value="S" className="select-item">1223</li>
                                                </ul>
                                            </div>
                                            <div className="meta-item d-flex mb-1">
                                                <span className="text-uppercase me-2">Category:</span>
                                                <ul className="select-list list-unstyled d-flex mb-0">
                                                    <li data-value="S" className="select-item">
                                                        <a href="/shop">Happy</a>,
                                                    </li>
                                                    <li data-value="S" className="select-item">
                                                        <a
                                                            href="/shop">Tutorial</a>,
                                                    </li>
                                                    <li data-value="S" className="select-item">
                                                        <a href="/shop">Tips</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-tabs">
                <div className="container">
                    <div className="row">
                        <div className="tabs-listing">
                            <nav>
                                <div className="nav nav-tabs d-flex justify-content-center py-3" id="nav-tab"
                                     role="tablist">
                                    <button className="nav-link fw-light text-uppercase active" id="nav-home-tab"
                                            data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab"
                                            aria-controls="nav-home" aria-selected="true">Description
                                    </button>
                                    <button className="nav-link fw-light text-uppercase" id="nav-information-tab"
                                            data-bs-toggle="tab" data-bs-target="#nav-information" type="button"
                                            role="tab"
                                            aria-controls="nav-information" aria-selected="false">Additional information
                                    </button>
                                    <button className="nav-link fw-light text-uppercase" id="nav-shipping-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-shipping" type="button" role="tab"
                                            aria-controls="nav-shipping"
                                            aria-selected="false">Shipping &amp; Return
                                    </button>
                                    <button className="nav-link fw-light text-uppercase" id="nav-review-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-review" type="button" role="tab"
                                            aria-controls="nav-review"
                                            aria-selected="false">Reviews
                                    </button>
                                </div>
                            </nav>
                            <div className="bg-gray tab-content" id="nav-tabContent">
                                <div className="tab-pane fade active show" id="nav-home" role="tabpanel"
                                     aria-labelledby="nav-home-tab">
                                    <p>Product Description</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                                        volutpat
                                        mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non,
                                        semper
                                        suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                        Aliquam
                                        porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
                                        ultrices
                                        nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                                        tristique
                                        cursus.
                                    </p>
                                    <ul className="fw-light">
                                        <li>Donec nec justo eget felis facilisis fermentum.</li>
                                        <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                                        <li>Aliquam porttitor mauris sit amet orci.</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                                        volutpat
                                        mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non,
                                        semper
                                        suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                                        Aliquam
                                        porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus
                                        ultrices
                                        nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                                        tristique
                                        cursus.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-information" role="tabpanel"
                                     aria-labelledby="nav-information-tab">
                                    <p>It is Comfortable and Best</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui
                                        officia deserunt mollit anim id est laborum. Duis aute irure dolor in
                                        reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="nav-shipping" role="tabpanel"
                                     aria-labelledby="nav-shipping-tab">
                                    <p>Returns Policy</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eros justo,
                                        accumsan non
                                        dui sit amet. Phasellus semper volutpat mi sed imperdiet. Ut odio lectus,
                                        vulputate non
                                        ex non, mattis sollicitudin purus. Mauris consequat justo a enim interdum, in
                                        consequat
                                        dolor accumsan. Nulla iaculis diam purus, ut vehicula leo efficitur at.</p>
                                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. In blandit nunc
                                        enim, sit
                                        amet pharetra erat aliquet ac.</p>
                                    <p>Shipping</p>
                                    <p>Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui, ultrices ut turpis
                                        pulvinar.
                                        Sed fringilla ex eget lorem consectetur, consectetur blandit lacus varius. Duis
                                        vel
                                        scelerisque elit, et vestibulum metus. Integer sit amet tincidunt tortor. Ut
                                        lacinia
                                        ullamcorper massa, a fermentum arcu vehicula ut. Ut efficitur faucibus dui
                                        Nullam
                                        tristique dolor eget turpis consequat varius. Quisque a interdum augue. Nam ut
                                        nibh
                                        mauris.</p>
                                </div>
                                <div className="tab-pane fade" id="nav-review" role="tabpanel"
                                     aria-labelledby="nav-review-tab">
                                    <div className="review-box review-style d-flex flex-wrap justify-content-between">
                                        <div className="review-item d-flex">
                                            <div className="image-holder">
                                                <img src="./product_files/review-image1.jpg" alt="review"/>
                                            </div>
                                            <div className="review-content">
                                                <div className="rating-container d-flex align-items-center">
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <span className="rating-count">(5.0)</span>
                                                </div>
                                                <div className="review-header">
                                                    <span className="author-name">Tom Johnson</span>
                                                    <span className="review-date">- 07/05/2022</span>
                                                </div>
                                                <p>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at
                                                    lectus urna
                                                    duis convallis convallis</p>
                                            </div>
                                        </div>
                                        <div className="review-item d-flex">
                                            <div className="image-holder">
                                                <img src="./product_files/review-image2.jpg" alt="review"/>
                                            </div>
                                            <div className="review-content">
                                                <div className="rating-container d-flex align-items-center">
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="rating">
                                                        <svg className="bi" width="16" height="16">
                                                            <use xlinkHref="#star-fill"></use>
                                                        </svg>
                                                    </div>
                                                    <span className="rating-count">(5.0)</span>
                                                </div>
                                                <div className="review-header">
                                                    <span className="author-name">Jenny Willis</span>
                                                    <span className="review-date">- 07/05/2022</span>
                                                </div>
                                                <p>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at
                                                    lectus urna
                                                    duis convallis convallis</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-review margin-small">
                                        <h3>Add a review</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <div className="review-rating py-2">
                                            <span className="my-2">Your rating *</span>
                                            <div className="rating-container d-flex align-items-center">
                                                <div className="rating">
                                                    <svg className="bi" width="16" height="16">
                                                        <use xlinkHref="#star-empty"></use>
                                                    </svg>
                                                </div>
                                                <div className="rating">
                                                    <svg className="bi" width="16" height="16">
                                                        <use xlinkHref="#star-empty"></use>
                                                    </svg>
                                                </div>
                                                <div className="rating">
                                                    <svg className="bi" width="16" height="16">
                                                        <use xlinkHref="#star-empty"></use>
                                                    </svg>
                                                </div>
                                                <div className="rating">
                                                    <svg className="bi" width="16" height="16">
                                                        <use xlinkHref="#star-empty"></use>
                                                    </svg>
                                                </div>
                                                <div className="rating">
                                                    <svg className="bi" width="16" height="16">
                                                        <use xlinkHref="#star-empty"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="file" className="jfilestyle py-2 border-0"
                                               data-text="Choose your file" />
                                            <form id="form">
                                                <div className="py-3">
                                                    <label>Your Name *</label>
                                                    <input type="text" name="name" placeholder="Write your name here"
                                                           className="w-100" />
                                                </div>
                                                <div className="py-3">
                                                    <label>Your Email *</label>
                                                    <input type="text" name="email" placeholder="Write your email here"
                                                           className="w-100" />
                                                </div>
                                                <div className="py-3">
                                                    <label>Your Review *</label>
                                                    <textarea placeholder="Write your review here"
                                                              className="w-100"></textarea>
                                                </div>
                                                <label className="py-3">
                                                    <input type="checkbox" required="" className="d-inline" />
                                                        <span>Save my name, email, and website in this browser for the next time.</span>
                                                </label>
                                                <button type="submit" name="submit"
                                                        className="btn btn-dark w-100 my-3">Submit
                                                </button>
                                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductRelated/>
            <Footer/>
        </div>
);
}

export default Product;
