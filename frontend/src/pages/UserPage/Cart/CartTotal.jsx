import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function CartTotal({ isCheckoutStep = false, total }) {

    return (
        <div >
            <h3 className="pb-4">Cart Total</h3>
            <div className="total-price pb-5">
                <table cellSpacing="0" className="table text-uppercase">
                    <tbody>
                    <tr className="order-total pt-2 pb-2 border-bottom border-gray">
                        <th className="fw-light">Total</th>
                        <td className="align-middle border-0" data-title="Total">
                                        <span className="price-amount amount text-primary">
                                            <bdi>
                                                <span className="price-currency-symbol">$</span>{ total }
                                            </bdi>
                                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            { !isCheckoutStep && (
                <div className="button-wrap">
                    <NavLink to={`/shop`} className="btn btn-dark me-2 mb-2">
                        Continue Shopping
                    </NavLink>
                    <NavLink to={`/checkout`} className="btn btn-primary me-2 mb-2">
                        Proceed to checkout
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default CartTotal;
