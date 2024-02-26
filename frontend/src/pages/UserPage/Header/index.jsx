import React from 'react';
import logo from '../../../assets/images/main-logo.png';
import MiniCart from "../Components/Cart/MiniCart";

function Header() {
    return (
        <header className="site-header bg-white">
            <nav id="header-nav" className="navbar navbar-expand-lg px-3">
                <div className="container">
                    <a className="navbar-brand d-lg-none" href="index.html">
                        <img src={logo} alt="Logo" className="footer-logo"/>
                    </a>
                    <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button"
                            data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar"
                            aria-expanded="false" aria-label="Toggle navigation">Menu
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar"
                         aria-labelledby="bdNavbarOffcanvasLabel">
                        <div className="offcanvas-header px-4 pb-0">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} alt="Logo" className="footer-logo"/>
                            </a>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"
                                    aria-label="Close" data-bs-target="#bdNavbar"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul id="navbar"
                                className="navbar-nav w-100 d-flex justify-content-between align-items-center">

                                <ul className="list-unstyled d-lg-flex justify-content-md-between align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase ms-0" href="about.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase ms-0" href="about.html">Shop</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                         <a className="nav-link text-uppercase dropdown-toggle ms-0"
                                            data-bs-toggle="dropdown"
                                            href="#"
                                            role="button"
                                            aria-expanded="false">
                                           Category
                                           <svg className="bi" width="18" height="18">
                                             <use xlinkHref="#chevron-down"></use>
                                           </svg>
                                         </a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="index.html"
                                                   className="dropdown-item active fs-5 fw-medium">Category1</a>
                                            </li>
                                            <li>
                                                <a href="about.html"
                                                   className="dropdown-item fs-5 fw-medium">Category1</a>
                                            </li>
                                            <li>
                                                <a href="shop.html" className="dropdown-item fs-5 fw-medium">Category3</a>
                                            </li>
                                            <li>
                                                <a href="single-product.html" className="dropdown-item fs-5 fw-medium">Category4</a>
                                            </li>
                                            <li>
                                                <a href="author.html"
                                                   className="dropdown-item fs-5 fw-medium">Category5</a>
                                            </li>
                                            <li>
                                                <a href="login.html"
                                                   className="dropdown-item fs-5 fw-medium">Category6</a>
                                            </li>
                                            <li>
                                                <a href="cart.html" className="dropdown-item fs-5 fw-medium">Category7</a>
                                            </li>
                                            <li>
                                                <a href="checkout.html"
                                                   className="dropdown-item fs-5 fw-medium">Category8</a>
                                            </li>
                                            <li>
                                                <a href="blog.html" className="dropdown-item fs-5 fw-medium">Category9</a>
                                            </li>
                                            <li>
                                                <a href="single-post.html" className="dropdown-item fs-5 fw-medium">Category10</a>
                                            </li>
                                            <li>
                                                <a href="contact.html"
                                                   className="dropdown-item fs-5 fw-medium">Category11</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <a className="navbar-brand d-none d-lg-block me-0" href="index.html">
                                    <img src={logo} alt="Logo" className="mb-2"/>
                                </a>

                                <ul className="list-unstyled d-lg-flex justify-content-between align-items-center">
                                    <li className="nav-item search-item">
                                        <div id="search-bar" className="border-right d-none d-lg-block">
                                            <form action="" autoComplete="on">
                                                <input id="search" className="text-dark" name="search" type="text"
                                                       placeholder="Search Here..."/>
                                                <a type="submit" className="nav-link text-uppercase me-0"
                                                   href="#">Search</a>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-uppercase me-0" href="login.html">Account</a>
                                    </li>
                                    <MiniCart/>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
