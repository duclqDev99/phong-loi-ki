import React from "react";

function CartTotal({isCheckoutStep = false}) {
    return (
        <div className="cart-totals padding-medium">
            <h3 className="pb-4">Cart Total</h3>
            <div className="total-price pb-5">
                <table cellSpacing="0" className="table text-uppercase">
                    <tbody>
                    <tr className="subtotal pt-2 pb-2 border-top border-bottom border-gray">
                        <th className="fw-light">Subtotal</th>
                        <td className="align-middle border-0" data-title="Subtotal">
                                        <span className="price-amount amount text-primary">
                                            <bdi>
                                                <span className="price-currency-symbol">$</span>2,370.00
                                            </bdi>
                                        </span>
                        </td>
                    </tr>
                    <tr className="order-total pt-2 pb-2 border-bottom border-gray">
                        <th className="fw-light">Total</th>
                        <td className="align-middle border-0" data-title="Total">
                                        <span className="price-amount amount text-primary">
                                            <bdi>
                                                <span className="price-currency-symbol">$</span>2,370.00
                                            </bdi>
                                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            { !isCheckoutStep && (
                <div className="button-wrap">
                    <a href="/"
                       className="btn btn-dark me-2 mb-2">Continue Shopping</a>
                    <a href="/checkout"
                       className="btn btn-primary me-2 mb-2">Proceed to checkout</a>
                </div>
            )}
        </div>
    );
}

export default CartTotal;