import React, {useEffect, useState} from "react";
import ProductItem from "../../../components/user/Product/ProductItem";
import Swiper from 'react-id-swiper';
import productApi from "../../../apis/productApi";
import {NavLink} from "react-router-dom";

function BestSelling() {
    const params = {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-carousel-next',
            prevEl: '.product-carousel-prev',
        },
    };

    const [products, setProducts] = useState([]);

    const fetch = async () => {
        await productApi.getList().then((response) => {
            setProducts(response);
        }).catch((error) => {
            setProducts([]);
        });
    };

    useEffect(() => {
        fetch();
    }, [])

    return (
        <section id="products" className="product-store position-relative padding-medium pb-0">
            <div className="container display-header d-flex flex-wrap justify-content-between pb-4">
                <h3 className="mt-3">SÁCH MỚI PHÁT HÀNH</h3>
                <div className="btn-right d-flex flex-wrap align-items-center">
                    <NavLink to={`/shop/`}>
                        Xem tất cả các mục →
                    </NavLink>
                </div>
            </div>
            <Swiper {...params}>
                {products.map((product, index) => (
                    <li className="cat-item">
                        <ProductItem classItem={"product-card"} product={product}/>
                    </li>
                ))}
            </Swiper>
        </section>
    );
}

export default BestSelling;
