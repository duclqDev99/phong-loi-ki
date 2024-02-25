import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.

function HomePage() {
    return (
        <div>
            <Header/>
            <section id="billboard" className="bg-gray padding-large">
                <div className="swiper main-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="row">
                                    <div className="offset-md-1 col-md-5">
                                        <img src="images/book1.png" alt="product-img" className="img-fluid mb-3"/>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="banner-content">
                                            <h2>Once upon a time</h2>
                                            <p className="fs-3">This book is specially designed by concept of
                                                traditional
                                                designs.</p>
                                            <a href="single-product.html" className="btn">Shop now →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="row">
                                    <div className="offset-md-1 col-md-5">
                                        <img src="images/book2.png" alt="product-img" className="img-fluid mb-3"/>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="banner-content">
                                            <h2>Felt from outside</h2>
                                            <p className="fs-3">This book is specially designed by concept of
                                                traditional
                                                designs.</p>
                                            <a href="single-product.html" className="btn">Shop now →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="container">
                                <div className="row">
                                    <div className="offset-md-1 col-md-5">
                                        <img src="images/book3.png" alt="product-img" className="img-fluid mb-3"/>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="banner-content">
                                            <h2>Musical by Karim</h2>
                                            <p className="fs-3">This book is specially designed by concept of
                                                traditional
                                                designs.</p>
                                            <a href="single-product.html" className="btn">Shop now →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-slider-pagination text-center mt-3"></div>
            </section>
            <section id="company-services" className="padding-xlarge">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box text-center">
              <span className="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
                <svg width="30" height="30" className="cart-outline text-primary">
                  {/*<use xlink:href="#cart-outline">*/}
                </svg>
              </span>
                                <div className="icon-box-content">
                                    <h4 className="card-title">Free delivery</h4>
                                    <p>Consectetur adipi elit lorem ipsumcon sectetur dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box text-center">
                                <div
                                    className="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
                                    <svg width="30" height="30" className="quality text-primary">
                                        {/*<use xlink:href="#quality">*/}
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title">Quality guarantee</h4>
                                    <p>Dolor sit amet elit lorem orem ipsu mcons ectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box text-center">
                                <div
                                    className="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
                                    <svg width="30" height="30" className="price-tag text-primary">
                                        {/*<use xlink:href="#price-tag">*/}
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title">Daily offers</h4>
                                    <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box text-center">
                                <div
                                    className="icon-box-icon d-inline-block p-4 border border-accent rounded-circle mb-4">
                                    <svg width="30" height="30" className="shield-plus text-primary">
                                        {/*<use xlink:href="#shield-plus">*/}
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h4 className="card-title">100% secure payment</h4>
                                    <p>Rem adipi elit lopsum dolor sit amet, consectetur adipi elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-lg-8">
                            <div className="image-holder">
                                <img src="images/single-image3.jpg" alt="single" className="single-image img-fluid"/>
                            </div>
                        </div>
                        <div className="about-content bg-gray col-lg-4 m-auto top-0 end-0 bottom-0">
                            <h3 className="py-3">Who are we</h3>
                            <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique facilisis consectetur
                                at vivamus ut porta porta. Ut nisl, tortor, aliquam blandit vitae vehicula vivamus leo
                                nullam urna, scelerisque unc lectus phasellus adipiscing arcu. Tristique facilisis nunc
                                consectetur at tempor.</p>
                            <a href="about.html" className="btn">About us →</a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products" className="product-store position-relative padding-xlarge pb-0">
                <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
                    <h3 className="mt-3">Best selling Items</h3>
                    <div className="btn-right d-flex flex-wrap align-items-center">
                        <a href="shop.html" className="btn me-5">View all items →</a>
                        <div className="swiper-buttons">
                            <button className="swiper-prev product-carousel-prev me-2">
                                <svg width="41" height="41">
                                    {/*<use xlink:href="#angle-left"></use>*/}
                                </svg>
                            </button>
                            <button className="swiper-next product-carousel-next">
                                <svg width="41" height="41">
                                    {/*<use xlink:href="#angle-right"></use>*/}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="swiper product-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item1.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Whispersong</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item2.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Starlight Secrets</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item3.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Shadow Dance</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item4.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Crimson Destiny</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item5.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Enchanted Sands</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item2.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Misty Meadows</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item4.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Whimsical Whispers</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item3.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Twilight Tales</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="position-relative padding-xlarge">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <h3 className="text-center mb-5">What our customers says</h3>
                            <div className="review-content position-relative">
                                <div className="swiper testimonial-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide text-center d-flex justify-content-center">
                                            <div className="review-item">
                                                <blockquote className="fs-1 fw-light">“A pellen tesque pretium feugiat
                                                    vel
                                                    morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim
                                                    pellen tesque este pretium in neque, elit morbi sagittis lorem habi
                                                    mattis.”
                                                </blockquote>
                                                <div className="author-detail">
                                                    <div className="name fw-bold text-uppercase pt-2">Anna garcia</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide text-center d-flex justify-content-center">
                                            <div className="review-item">
                                                <blockquote className="fs-1 fw-light">“A pellen tesque pretium feugiat
                                                    vel
                                                    morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim
                                                    pellen tesque este pretium in neque, elit morbi sagittis lorem habi
                                                    mattis.”
                                                </blockquote>
                                                <div className="author-detail">
                                                    <div className="name fw-bold text-uppercase pt-2">Anna garcia</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide text-center d-flex justify-content-center">
                                            <div className="review-item">
                                                <blockquote className="fs-1 fw-light">“A pellen tesque pretium feugiat
                                                    vel
                                                    morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim
                                                    pellen tesque este pretium in neque, elit morbi sagittis lorem habi
                                                    mattis.”
                                                </blockquote>
                                                <div className="author-detail">
                                                    <div className="name fw-bold text-uppercase pt-2">Anna garcia</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-buttons text-center mt-5">
                                <button className="swiper-prev testimonial-arrow-prev me-2">
                                    <svg width="41" height="41">
                                        {/*<use xlink:href="#arrow-left"></use>*/}
                                    </svg>
                                </button>
                                <span>|</span>
                                <button className="swiper-next testimonial-arrow-next ms-2">
                                    <svg width="41" height="41">
                                        {/*<use xlink:href="#arrow-right"></use>*/}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="our-video">
                <div className="video-section d-flex align-items-center justify-content-center padding-xlarge"
                     style={{ background: "url(images/video-image.jpg) no-repeat center" }}>
                    <div className="video-player text-center">
                        <a type="button" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/W_tIumKa8VY"
                           data-bs-target="#myModal"
                           className="play-btn text-light border border-light rounded-circle p-3">
                            <svg width="41" height="41">
                                {/*<use xlink:href="#play"></use>*/}
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section id="banner" className="padding-xlarge">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div className="flex-column flex-md-row d-flex justify-content-start h-100">
                                <div className="image-holder">
                                    <img src="images/banner-img1.png" alt="product-img" className="img-fluid mb-3"/>
                                </div>
                                <div className="banner-content-text ms-md-4 d-flex align-items-center">
                                    <div className="banner-text">
                                        <h3>Spiritual</h3>
                                        <p>This book is specially designed.</p>
                                        <a href="shop.html" className="btn">Shop collection →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="flex-column flex-md-row d-flex justify-content-start h-100">
                                <div className="image-holder">
                                    <img src="images/banner-img2.png" alt="product-img" className="img-fluid mb-3"/>
                                </div>
                                <div className="banner-content-text ms-md-4 d-flex align-items-center">
                                    <div className="banner-text">
                                        <h3>Life</h3>
                                        <p>This book is specially designed.</p>
                                        <a href="shop.html" className="btn">Shop collection →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div className="flex-column flex-md-row d-flex justify-content-start h-100">
                                <div className="image-holder">
                                    <img src="images/banner-img3.png" alt="product-img" className="img-fluid mb-3"/>
                                </div>
                                <div className="banner-content-text ms-md-4 d-flex align-items-center">
                                    <div className="banner-text">
                                        <h3>Peaceful</h3>
                                        <p>This book is specially designed.</p>
                                        <a href="shop.html" className="btn">Shop collection →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="flex-column flex-md-row d-flex justify-content-start h-100">
                                <div className="image-holder">
                                    <img src="images/banner-img4.png" alt="product-img" className="img-fluid mb-3"/>
                                </div>
                                <div className="banner-content-text ms-md-4 d-flex align-items-center">
                                    <div className="banner-text">
                                        <h3>Nature</h3>
                                        <p>This book is specially designed.</p>
                                        <a href="shop.html" className="btn">Shop collection →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products" className="product-store padding-xlarge pt-0 position-relative">
                <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
                    <h3 className="mt-3">Recommended</h3>
                    <div className="btn-right d-flex flex-wrap align-items-center">
                        <a href="shop.html" className="btn me-5">View all items →</a>
                        <div className="swiper-buttons">
                            <button className="swiper-prev product-carousel-prev2 me-2">
                                <svg width="41" height="41">
                                    {/*<use xlink:href="#angle-left"></use>*/}
                                </svg>
                            </button>
                            <button className="swiper-next product-carousel-next2">
                                <svg width="41" height="41">
                                    {/*<use xlink:href="#angle-right"></use>*/}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="swiper product-swiper2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item6.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Aetherial Alchemy</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item7.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">The Lost Labyrinth</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item8.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Crystal Caverns</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item9.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Scarlet Secrets</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item10.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Starry Horizons</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item2.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Dance of Fireflies</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item4.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Siren's Song</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-card">
                                <div className="image-holder">
                                    <img src="images/product-item3.jpg" alt="product-item" className="img-fluid"/>
                                </div>
                                <div className="card-detail text-center pt-3 pb-2">
                                    <h5 className="card-title fs-4 text-uppercase m-0">
                                        <a href="single-product.html">Misty Mirage</a>
                                    </h5>
                                    <span className="item-price text-primary fs-4">$870</span>
                                    <div className="cart-button mt-1">
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="faqs">
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <h3 className="text-center mb-5">Some FAQs</h3>
                            <div className="accordion accordion-flush" id="accordionFlush">
                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="flush-headingOne3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                aria-expanded="true" aria-controls="flush-collapseOne">
                                            What genres of books can I expect to find in your bookstore?
                                        </button>
                                    </h4>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                         aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
                                                facilisis consectetur at vivamus ut porta porta aliquam blandit vitae
                                                vehicula leo nullam urna, scelerisque unc lectus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="flush-headingTwo3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                aria-expanded="true" aria-controls="flush-collapseTwo">
                                            Do you offer a book ordering service for titles not available in-store?
                                        </button>
                                    </h4>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                         aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
                                                facilisis consectetur at vivamus ut porta porta aliquam blandit vitae
                                                vehicula leo nullam urna, scelerisque unc lectus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="flush-headingThree3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                aria-expanded="true" aria-controls="flush-collapseThree">
                                            Are there any discounts or loyalty programs available for frequent
                                            customers?
                                        </button>
                                    </h4>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                         aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
                                                facilisis consectetur at vivamus ut porta porta aliquam blandit vitae
                                                vehicula leo nullam urna, scelerisque unc lectus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="flush-headingFour3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                                aria-expanded="true" aria-controls="flush-collapseFour">
                                            Can I reserve a book in advance before visiting the store?
                                        </button>
                                    </h4>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                                         aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
                                                facilisis consectetur at vivamus ut porta porta aliquam blandit vitae
                                                vehicula leo nullam urna, scelerisque unc lectus.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h4 className="accordion-header" id="flush-headingFive3">
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                                aria-expanded="true" aria-controls="flush-collapseFive">
                                            Do you host book clubs or author events at your bookstore?
                                        </button>
                                    </h4>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse"
                                         aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
                                                facilisis consectetur at vivamus ut porta porta aliquam blandit vitae
                                                vehicula leo nullam urna, scelerisque unc lectus.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="posts" className="product-store padding-xlarge">
                <div className="container">
                    <div className="display-header d-flex flex-wrap justify-content-between align-items-center pb-4">
                        <h3 className="mt-3">Latest Blog Posts</h3>
                        <a href="blog.html" className="btn">Read Blog →</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 mb-2">
                            <div className="card border-0 rounded-0">
                                <div className="card-image">
                                    <img src="images/post-item1.jpg" alt="blog-img" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-capitalize">
                                <div className="card-meta fs-6">
                                    <span className="meta-date">Feb 22, 2023</span>
                                    <span className="meta-category">/ <a href="blog.html">Tips</a></span>
                                </div>
                                <h4 className="card-title">
                                    <a href="single-post.html">Why Our Bookstore Should Be Your Literary Oasis</a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-2">
                            <div className="card border-0 rounded-0">
                                <div className="card-image">
                                    <img src="images/post-item3.jpg" alt="blog-img" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-capitalize">
                                <div className="card-meta fs-6">
                                    <span className="meta-date">Feb 22, 2023</span>
                                    <span className="meta-category">/ <a href="blog.html">Tips</a></span>
                                </div>
                                <h4 className="card-title">
                                    <a href="single-post.html">Uncover Hidden Gems at Our Bookstore</a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-2">
                            <div className="card border-0 rounded-0">
                                <div className="card-image">
                                    <img src="images/post-item2.jpg" alt="blog-img" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-capitalize">
                                <div className="card-meta fs-6">
                                    <span className="meta-date">Feb 25, 2023</span>
                                    <span className="meta-category">/ <a href="blog.html">Tips</a></span>
                                </div>
                                <h4 className="card-title">
                                    <a href="single-post.html">How Our Store Nurtures the Love for Reading</a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-2">
                            <div className="card border-0 rounded-0">
                                <div className="card-image">
                                    <img src="images/post-item4.jpg" alt="blog-img" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-capitalize">
                                <div className="card-meta fs-6">
                                    <span className="meta-date">Feb 27, 2023</span>
                                    <span className="meta-category">/ <a href="blog.html">Tips</a></span>
                                </div>
                                <h4 className="card-title">
                                    <a href="single-post.html">The Pleasures of Visiting Our Bookstore</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <section id="our-stores" className="padding-xlarge">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="contact-item text-center">
                                <h4 className="widget-title pb-2">Store Main</h4>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item pb-2">
                                        <a href="#">Tea Berry, Marinette, USA</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="#">+55 111 222 333 44</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="mailto:">yourinfo@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item text-center">
                                <h4 className="widget-title pb-2">Store 1</h4>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item pb-2">
                                        <a href="#">Tea Berry, Marinette, USA</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="#">+55 111 222 333 44</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="mailto:">yourinfo@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item text-center">
                                <h4 className="widget-title pb-2">Store 2</h4>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item pb-2">
                                        <a href="#">Tea Berry, Marinette, USA</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="#">+55 111 222 333 44</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="mailto:">yourinfo@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="contact-item text-center">
                                <h4 className="widget-title pb-2">Store 3</h4>
                                <ul className="menu-list list-unstyled">
                                    <li className="menu-item pb-2">
                                        <a href="#">Tea Berry, Marinette, USA</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="#">+55 111 222 333 44</a>
                                    </li>
                                    <li className="menu-item pb-2">
                                        <a href="mailto:">yourinfo@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
);
}

export default HomePage;
