import React from "react";
import image from "../../../assets/user/images/cart-img2.jpg";

function CartItem() {
    return (
        <tr className="border-bottom border-gray">
            <td className="align-middle border-0" scope="row">
                <div className="cart-product-detail d-flex align-items-center">
                    <div className="card-image">
                        <img src={image} alt="cloth"
                             className="img-fluid"/>
                    </div>
                    <div className="card-detail ps-3">
                        <h5 className="card-title fs-4 text-uppercase">
                            <a href="/product">Scarlet
                                Secrets</a>
                        </h5>
                        <span className="item-price text-primary fs-4">$870</span>
                    </div>
                </div>
            </td>
            <td className="align-middle border-0">
                <div className="input-group product-qty" style={{maxWidth: 150}}>
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus" datatype="minus"
                                                        data-field="">
                                                    <svg width="16" height="16">
                                                        <use xlinkHref="#minus"></use>
                                                    </svg>
                                                </button>
                                            </span>
                    <input type="text" id="quantity" name="quantity"
                           className="form-control input-number text-center" value="1" min="1"
                           max="100"
                           required=""/>
                    <span className="input-group-btn">
                                                <button type="button" className="quantity-right-plus" data-type="plus"
                                                        data-field="">
                                                    <svg width="16" height="16">
                                                        <use xlinkHref="#plus"></use>
                                                    </svg>
                                                </button>
                                            </span>
                </div>
            </td>
            <td className="align-middle border-0"><span
                className="item-price text-primary fs-3 fw-medium">$750</span></td>
            <td className="align-middle border-0 cart-remove">
                <a href="/cart">
                    <svg width="32px" height="32px">
                        <use xlinkHref="#baseline-clear"></use>
                    </svg>
                </a>
            </td>
        </tr>
    );
}

export default CartItem;
