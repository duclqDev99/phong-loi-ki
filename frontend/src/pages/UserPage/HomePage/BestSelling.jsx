import React from "react";
import ProductItem from "../Components/Product/ProductItem";
import Swiper from 'react-id-swiper';

function BestSelling() {
    const params = {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-carousel-next',
            prevEl: '.product-carousel-prev',
        },
    };

    return (
        <section id="products" className="product-store position-relative padding-xlarge pb-0">
            <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
                <h3 className="mt-3">Best selling Items</h3>
                <div className="btn-right d-flex flex-wrap align-items-center">
                    <a href="shop.html" className="btn me-5">View all items →</a>
                    <div className="swiper-buttons">
                        <button className="swiper-prev product-carousel-prev me-2">
                            <svg width="41" height="41">
                                <use xlinkHref="#angle-left"></use>
                            </svg>
                        </button>
                        <button className="swiper-next product-carousel-next">
                            <svg width="41" height="41">
                                <use xlinkHref="#angle-right"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Swiper {...params}>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
                <div className="swiper-slide">
                    <ProductItem classItem={"product-card"}/>
                </div>
            </Swiper>
        </section>
    );
}

export default BestSelling;
