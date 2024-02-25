import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.

function Checkout() {
    return (
        <div>
            <Header/>
            <section
                className="hero-section bg-gray d-flex align-items-center justify-content-center padding-medium pb-5">
                <div className="hero-content">
                    <div className="container">
                        <div className="row">
                            <div className="text-center padding-medium no-padding-bottom">
                                <h1>Checkout</h1>
                                <div className="breadcrumbs">
                            <span className="item">
                                <a href="https://demo.templatesjungle.com/micas/index.html">Home &gt;</a>
                            </span>
                                    <span className="item">Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shopify-cart checkout-wrap padding-large">
                <div className="container">
                    <form className="form-group">
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-6">
                                <h3 className="pb-4">Billing Details</h3>
                                <div className="billing-details">
                                    <div className="py-3">
                                        <label htmlFor="fname">First Name*</label>
                                        <input type="text" id="fname" name="firstname" className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="lname">Last Name*</label>
                                        <input type="text" id="lname" name="lastname" className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="cname">Company Name(optional)*</label>
                                        <input type="text" id="cname" name="companyname" className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="cname">Country / Region*</label>
                                        <select className="w-100" aria-label="Default select example">
                                            <option selected="" hidden="">United States</option>
                                            <option value="1">UK</option>
                                            <option value="2">Australia</option>
                                            <option value="3">Canada</option>
                                        </select>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="address">Street Address*</label>
                                        <input type="text" id="adr" name="address"
                                               placeholder="House number and street name"
                                               className="w-100"/>
                                        <input type="text" id="adr" name="address"
                                               placeholder="Appartments, suite, etc."
                                               className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="city">Town / City *</label>
                                        <input type="text" id="city" name="city" className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="state">State *</label>
                                        <select className="w-100" aria-label="Default select example">
                                            <option selected="" hidden="">Florida</option>
                                            <option value="1">New York</option>
                                            <option value="2">Chicago</option>
                                            <option value="3">Texas</option>
                                            <option value="3">San Jose</option>
                                            <option value="3">Houston</option>
                                        </select>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="zip">Zip Code *</label>
                                        <input type="text" id="zip" name="zip" className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="email">Phone *</label>
                                        <input type="text" id="phone" name="phone" className="w-100"/>
                                    </div>

                                    <div className="py-3">
                                        <label htmlFor="email">Email address *</label>
                                        <input type="text" id="email" name="email" className="w-100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3 className="pb-4">Additional Information</h3>
                                <div className="billing-details">
                                    <label htmlFor="fname">Order notes (optional)</label>
                                    <textarea className="w-100"
                                              placeholder="Notes about your order. Like special notes for delivery."></textarea>
                                </div>
                                <div className="your-order mt-5">
                                    <h3 className="pb-4">Cart Totals</h3>
                                    <div className="total-price">
                                        <table cellSpacing="0" className="table">
                                            <tbody>
                                            <tr
                                                className="subtotal border-top border-bottom border-dark pt-2 pb-2 text-uppercase">
                                                <th className="fw-light">Subtotal</th>
                                                <td data-title="Subtotal">
                                                <span className="price-amount amount text-primary ps-5">
                                                    <bdi>
                                                        <span className="price-currency-symbol">$</span>2,370.00 </bdi>
                                                </span>
                                                </td>
                                            </tr>
                                            <tr className="order-total border-bottom border-dark pt-2 pb-2 text-uppercase">
                                                <th className="fw-light">Total</th>
                                                <td data-title="Total">
                                                <span className="price-amount amount text-primary ps-5">
                                                    <bdi>
                                                        <span className="price-currency-symbol">$</span>2,370.00 </bdi>
                                                </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="list-group mt-5 mb-3">
                                            <label className="list-group-item p-0 bg-transparent d-flex gap-2 border-0">
                                                <input className="form-check-input p-0 flex-shrink-0" type="radio"
                                                       name="listGroupRadios" id="listGroupRadios1" value=""
                                                       checked=""/>
                                                <span>
                                            <div className="fw-300 text-uppercase">Direct bank transfer</div>
                                            <p className="d-block">Make your payment directly into our bank account. Please
                                                use your Order ID. Your order will shipped after funds have cleared in
                                                our account.</p>
                                        </span>
                                            </label>
                                            <label className="list-group-item p-0 bg-transparent d-flex gap-2 border-0">
                                                <input className="form-check-input p-0 flex-shrink-0" type="radio"
                                                       name="listGroupRadios" id="listGroupRadios2" value=""/>
                                                <span>
                                            <div className="fw-300 text-uppercase">Check payments</div>
                                            <p className="d-block">Please send a check to Store Name, Store Street, Store
                                                Town, Store State / County, Store Postcode.</p>
                                        </span>
                                            </label>
                                            <label className="list-group-item p-0 bg-transparent d-flex gap-2 border-0">
                                                <input className="form-check-input p-0 flex-shrink-0" type="radio"
                                                       name="listGroupRadios" id="listGroupRadios3" value=""/>
                                                <span>
                                            <div className="fw-300 text-uppercase">Cash on delivery</div>
                                            <p className="d-block">Pay with cash upon delivery.</p>
                                        </span>
                                            </label>
                                            <label className="list-group-item p-0 bg-transparent d-flex gap-2 border-0">
                                                <input className="form-check-input p-0 flex-shrink-0" type="radio"
                                                       name="listGroupRadios" id="listGroupRadios3" value=""/>
                                                <span>
                                            <div className="fw-300 text-uppercase">Paypal</div>
                                            <p className="d-block">Pay via PayPal; you can pay with your credit card if you
                                                don’t have a PayPal account.</p>
                                        </span>
                                            </label>
                                        </div>
                                        <button type="submit" name="submit" className="btn btn-dark w-100">Place an
                                            order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Checkout;
