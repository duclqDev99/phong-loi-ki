import React, {useEffect, useState} from 'react';
// Import các section khác như Banner, Products, etc.
import Categories from "./Categories";
import Pagination from "../../../components/user/Pagination";
import {useParams} from "react-router-dom";
import productApi from "../../../apis/productApi";
import ProductItem from "../../../components/user/Product/ProductItem";

function Shop() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    const fetch = async () => {
        if (id) {
            await productApi.getProductsByCate(id).then((response) => {
                console.log(response);
                setProducts(response);
            }).catch((error) => {
                console.log(error);
                setProducts([]);
            });
        } else {
            await productApi.getList().then((response) => {
                console.log(response);
                setProducts(response);
            }).catch((error) => {
                console.log(error);
                setProducts([]);
            });
        }

    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="shopify-grid padding-small">
            <div className="container">
                <div className="row">
                    <main className="col-md-9">
                        {/*<ProductFilter/>*/}
                        <div className="row product-content product-store">
                            {products.map((product, index) => (
                                <ProductItem classItem={"col-lg-4 col-md-6"} product={product}/>
                            ))}
                        </div>
                        <Pagination/>
                    </main>
                    <Categories/>
                </div>
            </div>
        </div>
    );
}

export default Shop;
