import BillboardSlide from "./BillboardSlide";
import Swiper from 'react-id-swiper';
import productApi from "../../../apis/productApi";
import React, {useEffect, useState} from "react";

function Billboard() {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.main-slider-pagination',
            clickable: true,
        },
    };

    const [products, setProducts] = useState([]);

    const fetch = async () => {
        await productApi.getSlider().then((response) => {
            setProducts(response);
        }).catch((error) => {
            setProducts([]);
        });
    };

    useEffect(() => {
        fetch();
    }, [])

    return (
        <section id="billboard" className="bg-gray padding-medium">
            <Swiper {...params}>
                {products.map((product, index) => (
                    <BillboardSlide product={product}/>
                ))}
            </Swiper>
            <div className="main-slider-pagination text-center mt-3"></div>
        </section>
    );
}

export default Billboard;
