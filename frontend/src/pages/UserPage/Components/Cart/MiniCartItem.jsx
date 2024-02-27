import React from "react";
import {NavLink} from "react-router-dom";

function MiniCart() {
    return (
        <li className="list-group-item bg-transparent border-gray d-flex justify-content-between lh-sm">
            <div>
                <h5 className="card-title fs-3 text-uppercase mb-0">
                    <NavLink to="/product" >
                        Life lesson
                    </NavLink>
                </h5>
            </div>
            <span className="text-primary">$90</span>
        </li>
    );
}

export default MiniCart;
