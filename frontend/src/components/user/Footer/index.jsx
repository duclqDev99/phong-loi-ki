import React from 'react';
import logo from '../../../assets/user/images/main-logo.png';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <footer id="footer" className="overflow-hidden padding-medium pb-0">
            <div className="container">
                <div className="row">
                    <div className="footer-top-area pb-5">
                        <div className="row d-flex flex-wrap justify-content-between">
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu">
                                    <img src={logo} alt="Logo" className="mb-2"/>
                                    <p>Nunc tristique facilisis consectetur vivamus ut porta porta aliquam vitae
                                        vehicula
                                        leo nullam urna lectus.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 pb-3">
                                <div className="footer-menu">
                                    <h4 className="widget-title pb-2">Quick Links</h4>
                                    <ul className="menu-list list-unstyled">
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/" >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/shop" >
                                                Shop
                                            </NavLink>
                                        </li>
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/cart" >
                                                Cart
                                            </NavLink>
                                        </li>
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/login" >
                                                Account
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu contact-item">
                                    <h4 className="widget-title pb-2">Contact info</h4>
                                    <ul className="menu-list list-unstyled">
                                        <li className="menu-item pb-2">
                                            <a href="#">Tea Berry, Marinette, USA</a>
                                        </li>
                                        <li className="menu-item pb-2">
                                            <a href="#">+55 111 222 333 44</a>
                                        </li>
                                        <li className="menu-item pb-2">
                                            <a href="mailto:">yourinfo@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu">
                                    <h4 className="widget-title pb-2">Social info</h4>
                                    <p>You can follow us on our social platforms to get updates.</p>
                                    <div className="social-links">
                                        <ul className="d-flex list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <svg className="facebook">
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg className="instagram">
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg className="twitter">
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg className="linkedin">
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg className="youtube">
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </footer>
    );
}

export default Footer;
