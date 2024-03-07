import React from "react";
import {NavLink} from "react-router-dom";

function MiniCart({ product }) {
    return (
        <li className="list-group-item bg-transparent border-gray d-flex justify-content-between lh-sm">
            <div>
                <h5 className="card-title fs-3 text-uppercase mb-0">
                    <NavLink to={`/product/${product.id}`} >
                        {product.name}
                    </NavLink>
                </h5>
            </div>
            <span className="text-primary">{product.price * product.quantity} VNĐ</span>
        </li>
    );
}

export default MiniCart;
