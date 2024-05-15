import React from 'react';
import { NavLink } from "react-router-dom";

function Billboard({ slider }) {
    const containerStyle = {
        width: '100%', // Chiều rộng của container bằng 100%
        height: '500px', // Đặt chiều cao cố định cho container
        overflow: 'hidden', // Ẩn phần nội dung vượt quá kích thước của container
    };

    const imageStyle = {
        width: '100%', // Hình ảnh sẽ điền toàn bộ container theo chiều rộng
        height: '100%', // Hình ảnh sẽ điền toàn bộ container theo chiều cao
        objectFit: 'fill', // Hiển thị toàn bộ hình ảnh mà không thay đổi tỉ lệ, và cắt bớt phần thừa nếu cần
    };

    return (
        <div className="swiper-slide">
            <div className="container" style={containerStyle}>
                <div className="row" style={{height: "100%"}}>
                    <div className="{/*col-md-5*/}" style={{height: "100%"}}>
                        <img src={`${process.env.PUBLIC_URL}/images/sliders/${slider.image}`} alt="product-img" style={imageStyle} className="img-fluid mb-3" />
                    </div>
                    {/*<div className="col-md-6 d-flex align-items-center">
                        <div className="banner-content">
                            <h2>{product.name}</h2>
                            <p className="fs-3">{product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</p>
                            <a href="single-product.html" className="btn">Shop now →</a>
                            <NavLink to={`/product/${product.id}`} className="btn">
                                Shop now →
                            </NavLink>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}

export default Billboard;
