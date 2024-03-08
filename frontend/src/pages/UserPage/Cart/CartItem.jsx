import React from "react";
import image from "../../../assets/user/images/cart-img2.jpg";
import {NavLink} from "react-router-dom";

function CartItem({ product, handleDelete }) {
    function formatVND(value) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0, 
        });
    
        return formatter.format(value).replace('₫', 'VNĐ');
    }

    return (
        <tr className="border-bottom border-gray">
            <td className="align-middle border-0" scope="row">
                <div className="cart-product-detail d-flex align-items-center">
                    <div className="card-image">
                        <img src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt="cloth"
                             className="img-fluid"/>
                    </div>
                    <div className="card-detail ps-3">
                        <h5 className="card-title fs-4 text-uppercase">
                            <NavLink to={`/product/${ product.id }`} >
                                { product.name }
                            </NavLink>
                        </h5>
                        <span className="item-price text-primary fs-4">{ formatVND(product.price) }</span>
                    </div>
                </div>
            </td>
            <td className="align-middle border-0">
                <div className="input-group product-qty" style={{maxWidth: 150}}>
                    <input type="text" id="quantity" name="quantity"
                           className="form-control input-number text-center" value={ product.quantity } min="1"
                           max="100"
                           required="" disabled="true"/>
                </div>
            </td>
            <td className="align-middle border-0"><span
                className="item-price text-primary fs-3 fw-medium">{ formatVND(product.price * product.quantity) }</span></td>
            <td className="align-middle border-0 cart-remove">
                <button onClick={() => handleDelete(product.id)}>X</button>
            </td>
        </tr>
    );
}

export default CartItem;
