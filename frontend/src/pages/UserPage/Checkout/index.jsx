import React, {useEffect, useReducer, useState} from 'react';
import {cartReducer, initialState} from "../../../store/reducer/cart";
import {useNavigate} from "react-router-dom";
import orderApi from "../../../apis/orderApi";

function Checkout({isLogged, setIsLogged, cartItems}) {
    console.log(isLogged);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogged) {
            navigate("/login");
        }
    }, [isLogged, navigate]);

    const [total, setTotal] = useState((() => {
        let temp_total = 0;
        cartItems.forEach(item => {
            temp_total += item.price * item.quantity;
        });
        return temp_total;
    })());
    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleOrder = (event) => {
        event.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));
        /*if (!user) {
            navigate("/login");
        }*/

        const customerInfo = {
            id_user: user.id,
            fullname: fullname,
            address: address,
            phone: phone,
            email: email,
            total_amount: total
        };

        const products = cartItems.map(item => ({
            id: item.id,
            quantity: item.quantity,
            subtotal: item.quantity * item.price,
        }));

        const formData = {
            ...customerInfo,
            products: products
        };

        console.log('Order placed with data:', formData);

        handleCreate(formData);
    };

    const handleCreate = async (formData) => {
        await orderApi.create(formData).then((response) => {
            console.log("Order Success: " + response);
            localStorage.setItem('cartItems', JSON.stringify([]));
        }).catch((error) => {
            console.log(error);
        });
    };


    /*useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        dispatch({ type: 'INITIALIZE_CART', payload: storedCartItems });

        setCartItems(storedCartItems);
        let temp_total = 0;
        storedCartItems.forEach(item => {
            temp_total += item.price * item.quantity;
        });
        setTotal(temp_total);
    }, []);*/

    return (
        <section className="shopify-cart checkout-wrap padding-medium">
            <div className="container">
                <form className="form-group">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-6">
                            <h3 className="pb-4">Billing Details</h3>
                            <div className="billing-details">

                                <div className="py-3">
                                    <label htmlFor="lname">Full Name*</label>
                                    <input type="text"
                                           id="fullname"
                                           name="fullname"
                                           className="w-100"
                                           value={fullname}
                                           onChange={(e) => setFullname(e.target.value)}
                                           required/>
                                </div>

                                <div className="py-3">
                                    <label htmlFor="address">Street Address*</label>
                                    <input type="text"
                                           id="address"
                                           name="address"
                                           placeholder="House number and street name, district, ward and city"
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}
                                           className="w-100"
                                           required/>
                                </div>

                                <div className="py-3">
                                    <label htmlFor="email">Phone *</label>
                                    <input type="text"
                                           id="phone"
                                           name="phone"
                                           className="w-100"
                                           value={phone}
                                           onChange={(e) => setPhone(e.target.value)}
                                           required/>
                                </div>

                                <div className="py-3">
                                    <label htmlFor="email">Email address *</label>
                                    <input type="text"
                                           id="email"
                                           name="email"
                                           className="w-100"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h3 className="pb-4">Cart Total</h3>
                                <div className="total-price pb-5">
                                    <table cellSpacing="0" className="table text-uppercase">
                                        <tbody>
                                        <tr className="order-total pt-2 pb-2 border-bottom border-gray">
                                            <th className="fw-light">Total</th>
                                            <td className="align-middle border-0" data-title="Total">
                                        <span className="price-amount amount text-primary">
                                            <bdi>
                                                <span className="price-currency-symbol">$</span>{total}
                                            </bdi>
                                        </span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="your-order mt-5">
                                <div className="total-price">
                                    <button type="submit" name="submit" className="btn btn-dark w-100" onClick={handleOrder}>
                                        Place an order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Checkout;
