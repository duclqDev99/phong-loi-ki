import React, {useEffect, useState} from 'react';
// Import các section khác như Banner, Products, etc.
import Categories from "./Categories";
import Pagination from "../../../components/user/Pagination";
import {useParams} from "react-router-dom";
import productApi from "../../../apis/productApi";
import ProductItem from "../../../components/user/Product/ProductItem";

function Shop() {
    const { id } = useParams();
    const { search } = useParams();
    const [products, setProducts] = useState([]);

    const fetch = async () => {
        if (search) {
            await productApi.searchProduct(search).then((response) => {
                setProducts(response);
            }).catch((error) => {
                setProducts([]);
            });
        }
        else if (id) {
            await productApi.getProductsByCate(id).then((response) => {
                setProducts(response);
            }).catch((error) => {
                setProducts([]);
            });
        } else {
            await productApi.getList().then((response) => {
                setProducts(response);
            }).catch((error) => {
                setProducts([]);
            });
        }

    };

    useEffect(() => {
        fetch();
    }, [id]);

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
                        {/*<Pagination/>*/}
                    </main>
                    <Categories/>
                </div>
            </div>
        </div>
    );
}

export default Shop;
