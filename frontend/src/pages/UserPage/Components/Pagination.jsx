import React from "react";

function Pagination() {
    return (
        <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
            <div
                className="pagination loop-pagination d-flex justify-content-center align-items-center">
                <a href="https://demo.templatesjungle.com/micas/shop.html#" className="d-flex pe-2">
                    <svg width="24" height="24">
                        <use xlinkHref="#angle-left"></use>
                    </svg>
                </a>
                <span aria-current="page" className="page-numbers current pe-3">1</span>
                <a className="page-numbers pe-3"
                   href="https://demo.templatesjungle.com/micas/shop.html#">2</a>
                <a className="page-numbers pe-3"
                   href="https://demo.templatesjungle.com/micas/shop.html#">3</a>
                <a className="page-numbers pe-3"
                   href="https://demo.templatesjungle.com/micas/shop.html#">4</a>
                <a className="page-numbers"
                   href="https://demo.templatesjungle.com/micas/shop.html#">5</a>
                <a href="https://demo.templatesjungle.com/micas/shop.html#" className="d-flex ps-2">
                    <svg width="24" height="24">
                        <use xlinkHref="#angle-right"></use>
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Pagination;