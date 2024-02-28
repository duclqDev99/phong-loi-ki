import React from "react";

function Breadcrumb({ items }) {
    return (
        <section
            className="hero-section bg-gray d-flex align-items-center justify-content-center padding-medium pb-5">
            <div className="hero-content">
                <div className="container">
                    <div className="row">
                        <div className="text-center padding-medium no-padding-bottom">
                            <h1>{items.length > 0 && items[items.length - 1]}</h1>
                            <div className="breadcrumbs">
                                {items.map((item, index) => (
                                    <span key={index} className="item">
                                        {index < items.length - 1 ? (
                                            <a href="/">{ item } &gt; </a>
                                        ) : (
                                            item
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Breadcrumb;