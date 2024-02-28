import React from 'react';
import image1 from "../../../assets/user/images/book1.png";
import image2 from "../../../assets/user/images/book2.png";
import image3 from "../../../assets/user/images/book3.png";
import BillboardSlide from "./BillboardSlide";
import Swiper from 'react-id-swiper';

function Billboard() {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.main-slider-pagination',
            clickable: true,
        },
    };

    return (
        <section id="billboard" className="bg-gray padding-medium">
            <Swiper {...params}>
                <BillboardSlide imageSrc={image1}/>
                <BillboardSlide imageSrc={image2}/>
                <BillboardSlide imageSrc={image3}/>
            </Swiper>
            <div className="main-slider-pagination text-center mt-3"></div>
        </section>
    );
}

export default Billboard;
