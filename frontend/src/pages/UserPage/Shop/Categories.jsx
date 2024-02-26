import React from "react";

function Categories() {
    return (
        <aside className="col-md-3">
            <div className="sidebar">
                <div className="widget-product-categories pt-5">
                    <h5 className="widget-title text-uppercase">Categories</h5>
                    <ul className="product-categories sidebar-list list-unstyled">
                        <li className="cat-item">
                            <a href="https://demo.templatesjungle.com/micas/shop.html#">All</a>
                        </li>
                        <li className="cat-item">
                            <a href="https://demo.templatesjungle.com/micas/shop.html#">Spiritual</a>
                        </li>
                        <li className="cat-item">
                            <a href="https://demo.templatesjungle.com/micas/shop.html#">Money</a>
                        </li>
                        <li className="cat-item">
                            <a href="https://demo.templatesjungle.com/micas/shop.html#">Life</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Categories;