import React from 'react';

function Billboard({imageSrc}) {

    return (
        <div className="swiper-slide">
            <div className="container">
                <div className="row">
                    <div className="offset-md-1 col-md-5">
                        <img src={imageSrc} alt="product-img" className="img-fluid mb-3"/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="banner-content">
                            <h2>Once upon a time</h2>
                            <p className="fs-3">This book is specially designed by concept of
                                traditional
                                designs.</p>
                            {/*<a href="single-product.html" className="btn">Shop now →</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;
