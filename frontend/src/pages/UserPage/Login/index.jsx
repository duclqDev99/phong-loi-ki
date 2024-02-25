import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.

function Login() {
    return (
        <div>
            <Header/>
            <section
                className="hero-section bg-gray d-flex align-items-center justify-content-center padding-medium pb-5">
                <div className="container">
                    <div className="row">
                        <div className="text-center padding-medium no-padding-bottom">
                            <h1>Account</h1>
                            <div className="breadcrumbs">
                        <span className="item">
                            <a href="https://demo.templatesjungle.com/micas/index.html">Home &gt;</a>
                        </span>
                                <span className="item">Account</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="login-tabs padding-xlarge">
                <div className="container">
                    <div className="row">
                        <div className="tabs-listing">
                            <nav>
                                <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                                    <button className="nav-link fw-light text-uppercase active" id="nav-sign-in-tab"
                                            data-bs-toggle="tab" data-bs-target="#nav-sign-in" type="button" role="tab"
                                            aria-controls="nav-sign-in" aria-selected="true">Sign In
                                    </button>
                                    <button className="nav-link fw-light text-uppercase" id="nav-register-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-register" type="button" role="tab"
                                            aria-controls="nav-register"
                                            aria-selected="false">Register
                                    </button>
                                </div>
                            </nav>
                            <div className="bg-gray tab-content" id="nav-tabContent">
                                <div className="tab-pane fade active show" id="nav-sign-in" role="tabpanel"
                                     aria-labelledby="nav-sign-in-tab">
                                    <div className="form-group py-3">
                                        <label htmlFor="sign-in">Username or email address *</label>
                                        <input type="text" minLength="2" name="username" placeholder="Your Username"
                                               className="w-100" required=""/>
                                    </div>
                                    <div className="form-group py-3">
                                        <label htmlFor="sign-in">Password *</label>
                                        <input type="password" minLength="2" name="password" placeholder="Your Password"
                                               className="w-100" required=""/>
                                    </div>
                                    <label className="py-3">
                                        <input type="checkbox" required="" className="d-inline"/>
                                        <span className="label-body">Remember Me</span>
                                        <span className="label-body"><a
                                            href="https://demo.templatesjungle.com/micas/login.html#"
                                            className="fw-bold">Forgot Password</a></span>
                                    </label>
                                    <button type="submit" name="submit" className="btn btn-dark w-100 my-3">Login
                                    </button>
                                </div>
                                <div className="tab-pane fade" id="nav-register" role="tabpanel"
                                     aria-labelledby="nav-register-tab">
                                    <div className="form-group py-3">
                                        <label htmlFor="register">Your email address *</label>
                                        <input type="text" minLength="2" name="username"
                                               placeholder="Your Email Address"
                                               className="w-100" required=""/>
                                    </div>
                                    <div className="form-group py-3">
                                        <label htmlFor="sign-in">Password *</label>
                                        <input type="password" minLength="2" name="password" placeholder="Your Password"
                                               className="w-100" required=""/>
                                    </div>
                                    <label className="py-3">
                                        <input type="checkbox" required="" className="d-inline"/>
                                        <span className="label-body">I agree to the <a
                                            href="https://demo.templatesjungle.com/micas/login.html#"
                                            className="fw-bold">Privacy Policy</a></span>
                                    </label>
                                    <button type="submit" name="submit" className="btn btn-dark w-100 my-3">Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Login;
