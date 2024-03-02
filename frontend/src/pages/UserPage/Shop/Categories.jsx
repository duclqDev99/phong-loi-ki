import React, {useEffect, useState} from "react";
import categoryApi from "../../../apis/categoryApi";
import {NavLink} from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([]);

    const fetch = async () => {
        await categoryApi.getList().then((response) => {
            setCategories(response);
        }).catch((error) => {
            console.log(error);
            setCategories([]);
        });
    };

    useEffect(() => {
        fetch();
    }, [])

    return (
        <aside className="col-md-3">
            <div className="sidebar">
                <div className="widget-product-categories pt-5">
                    <h5 className="widget-title text-uppercase">Categories</h5>
                    <ul className="product-categories sidebar-list list-unstyled">
                        <li className="cat-item">
                            <NavLink to={`/shop`}>
                                All
                            </NavLink>
                        </li>
                        {categories.map((category, index) => (
                            <li className="cat-item">
                                <NavLink key={index} to={`/shop/${category.id}`}>
                                    {category.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Categories;
