import BillboardSlide from "./BillboardSlide";
import Swiper from 'react-id-swiper';
import sliderApi from "../../../apis/sliderApi";
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

    const [sliders, setSliders] = useState([]);

    const fetch = async () => {
        await sliderApi.getList().then((response) => {
            setSliders(response);
        }).catch((error) => {
            setSliders([]);
        });
    };

    useEffect(() => {
        fetch();
    }, [])

    return (
        <section id="billboard" className="bg-gray padding-medium">
            <Swiper {...params}>
                {sliders.map((slider, index) => (
                    <BillboardSlide slider={slider}/>
                ))}
            </Swiper>
            <div className="main-slider-pagination text-center mt-3"></div>
        </section>
    );
}

export default Billboard;
