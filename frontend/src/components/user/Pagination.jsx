import React from "react";

function Pagination() {
    return (
        <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
            <div
                className="pagination loop-pagination d-flex justify-content-center align-items-center">
                <a href="/shop" className="d-flex pe-2">
                    <svg width="24" height="24">
                        <use xlinkHref="#angle-left"></use>
                    </svg>
                </a>
                <span aria-current="page" className="page-numbers current pe-3">1</span>
                <a className="page-numbers pe-3"
                   href="/shop">2</a>
                <a className="page-numbers pe-3"
                   href="/shop">3</a>
                <a className="page-numbers pe-3"
                   href="/shop">4</a>
                <a className="page-numbers"
                   href="/shop">5</a>
                <a href="/shop" className="d-flex ps-2">
                    <svg width="24" height="24">
                        <use xlinkHref="#angle-right"></use>
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Pagination;