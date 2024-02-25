import React from 'react';
import logo from '../../../assets/images/main-logo.png'; // Đảm bảo bạn đã import hình ảnh

function Footer() {
    return (
        <div>
            <section id="newsletter" className="bg-gray padding-medium">
                <div className="container">
                    <div className="newsletter">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 title">
                                <h3>Subscribe to Our Newsletter</h3>
                                <p>Get latest news, updates and deals directly mailed to your inbox.</p>
                            </div>
                            <form className="col-lg-6 col-md-12 d-flex align-items-center">
                                <div className="d-flex w-75 border-bottom border-dark py-2">
                                    <input id="newsletter1" type="text" className="form-control border-0 p-0"
                                           placeholder="Your email address here"/>
                                    <button className="btn border-0 p-0" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="overflow-hidden padding-xlarge pb-0">
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
                                                <a href="about.html">About</a>
                                            </li>
                                            <li className="menu-item text-uppercase pb-2">
                                                <a href="shop.html">Shop</a>
                                            </li>
                                            <li className="menu-item text-uppercase pb-2">
                                                <a href="contact.html">Contact</a>
                                            </li>
                                            <li className="menu-item text-uppercase pb-2">
                                                <a href="login.html">Account</a>
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
            <div id="footer-bottom">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between">
                        <div className="col-12">
                            <div className="copyright">
                                <p>© Copyright 2023 Micas. HTML Template by <a href="https://templatesjungle.com/"
                                                                               target="_blank"><b>TemplatesJungle</b></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Footer;
