import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.

function Cart() {
    return (
        <div>
            <Header/>
            <section
                className="hero-section bg-gray d-flex align-items-center justify-content-center padding-medium pb-5">
                <div className="hero-content">
                    <div className="container">
                        <div className="row">
                            <div className="text-center padding-medium no-padding-bottom">
                                <h1>Cart</h1>
                                <div className="breadcrumbs">
                            <span className="item">
                                <a href="https://demo.templatesjungle.com/micas/index.html">Home &gt;</a>
                            </span>
                                    <span className="item">Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shopify-cart padding-large">
                <div className="container">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="text-uppercase">
                                <tr>
                                    <th scope="col" className="fw-light">Product</th>
                                    <th scope="col" className="fw-light">Quantity</th>
                                    <th scope="col" className="fw-light">Subtotal</th>
                                    <th scope="col" className="fw-light"></th>
                                </tr>
                                </thead>
                                <tbody className="border-top border-gray">
                                <tr className="border-bottom border-gray">
                                    <td className="align-middle border-0" scope="row">
                                        <div className="cart-product-detail d-flex align-items-center">
                                            <div className="card-image">
                                                <img src="./cart_files/cart-img1.jpg" alt="cloth"
                                                     className="img-fluid"/>
                                            </div>
                                            <div className="card-detail ps-3">
                                                <h5 className="card-title fs-4 text-uppercase">
                                                    <a href="https://demo.templatesjungle.com/micas/single-product.html">Scarlet
                                                        Secrets</a>
                                                </h5>
                                                <span className="item-price text-primary fs-4">$870</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle border-0">
                                        <div className="input-group product-qty" style={{ maxWidth: 150 }}>
                                        <span className="input-group-btn">
                                            <button type="button" className="quantity-left-minus" data-type="minus"
                                                    data-field="">
                                                <svg width="16" height="16">
                                                    {/*<use xlink:href="#minus"></use>*/}
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
                                                    {/*<use xlink:href="#plus"></use>*/}
                                                </svg>
                                            </button>
                                        </span>
                                        </div>
                                    </td>
                                    <td className="align-middle border-0"><span
                                        className="item-price text-primary fs-3 fw-medium">$750</span></td>
                                    <td className="align-middle border-0 cart-remove">
                                        <a href="https://demo.templatesjungle.com/micas/cart.html#">
                                            <svg width="32px" height="32px">
                                                {/*<use xlink:href="#baseline-clear"></use>*/}
                                            </svg>
                                        </a>
                                    </td>
                                </tr>

                                <tr className="border-bottom border-gray">
                                    <td className="align-middle border-0" scope="row">
                                        <div className="cart-product-detail d-flex align-items-center">
                                            <div className="card-image">
                                                <img src="./cart_files/cart-img2.jpg" alt="cloth"
                                                     className="img-fluid"/>
                                            </div>
                                            <div className="card-detail ps-3">
                                                <h5 className="card-title fs-4 text-uppercase">
                                                    <a href="https://demo.templatesjungle.com/micas/single-product.html">Crystal
                                                        Caverns</a>
                                                </h5>
                                                <span className="item-price text-primary fs-4">$870</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle border-0">
                                        <div className="input-group product-qty" style={{ maxWidth: 150 }}>
                                        <span className="input-group-btn">
                                            <button type="button" className="quantity-left-minus" data-type="minus"
                                                    data-field="">
                                                <svg width="16" height="16">
                                                    {/*<use xlink:href="#minus"></use>*/}
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
                                                    {/*<use xlink:href="#plus"></use>*/}
                                                </svg>
                                            </button>
                                        </span>
                                        </div>
                                    </td>
                                    <td className="align-middle border-0"><span
                                        className="item-price text-primary fs-3 fw-medium">$750</span></td>
                                    <td className="align-middle border-0 cart-remove">
                                        <a href="https://demo.templatesjungle.com/micas/cart.html#">
                                            <svg width="32px" height="32px">
                                                {/*<use xlink:href="#baseline-clear"></use>*/}
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div
                                className="cart-bottom d-flex flex-wrap justify-content-between align-items-center pt-2">
                                <form action="https://demo.templatesjungle.com/micas/cart.html#"
                                      className="d-flex flex-wrap justify-content-between">
                                    <input type="text" className="bg-gray border-0 p-2 me-1 mb-2" required=""
                                           placeholder="Coupon Code"/>
                                    <a href="https://demo.templatesjungle.com/micas/cart.html#"
                                       className="btn btn-dark mb-2"
                                       type="submit">Apply Coupon</a>
                                </form>
                                <a href="https://demo.templatesjungle.com/micas/cart.html#"
                                   className="btn btn-dark mb-2">Update
                                    cart</a>
                            </div>
                        </div>
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
                            <div className="button-wrap">
                                <a href="https://demo.templatesjungle.com/micas/cart.html#"
                                   className="btn btn-dark me-2 mb-2">Update Cart</a>
                                <a href="https://demo.templatesjungle.com/micas/shop.html"
                                   className="btn btn-dark me-2 mb-2">Continue Shopping</a>
                                <a href="https://demo.templatesjungle.com/micas/checkout.html"
                                   className="btn btn-primary me-2 mb-2">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Cart;
