import React from 'react';
import logo from '../../../assets/images/main-logo.png'; 

function Header() {
  return (
    <header className="site-header bg-white">
       <nav id="header-nav" className="navbar navbar-expand-lg px-3">
        <div className="container">
          <a className="navbar-brand d-lg-none" href="index.html">
            <img src={logo} alt="Logo" className="footer-logo" />
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                    <img src={logo} alt="Logo" className="footer-logo" />
              </a>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav w-100 d-flex justify-content-between align-items-center">
                
                <ul className="list-unstyled d-lg-flex justify-content-md-between align-items-center">
                  <li className="nav-item">
                    <a className="nav-link text-uppercase ms-0" href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-uppercase ms-0" href="about.html">test</a>
                  </li>
                  <li className="nav-item dropdown">
                    {/* <a className="nav-link text-uppercase dropdown-toggle ms-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages<svg className="bi" width="18" height="18"><use xlink:href="#chevron-down"></use></svg></a>
                     */}
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html" className="dropdown-item active fs-5 fw-medium">Home</a>
                      </li>
                      <li>
                        <a href="about.html" className="dropdown-item fs-5 fw-medium">About <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="shop.html" className="dropdown-item fs-5 fw-medium">Shop <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="single-product.html" className="dropdown-item fs-5 fw-medium">Single Product <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="author.html" className="dropdown-item fs-5 fw-medium">Author <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="login.html" className="dropdown-item fs-5 fw-medium">Account <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="cart.html" className="dropdown-item fs-5 fw-medium">Cart <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="checkout.html" className="dropdown-item fs-5 fw-medium">Checkout <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="blog.html" className="dropdown-item fs-5 fw-medium">Blog <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="single-post.html" className="dropdown-item fs-5 fw-medium">Single Post <span className="text-primary">(PRO)</span></a>
                      </li>
                      <li>
                        <a href="contact.html" className="dropdown-item fs-5 fw-medium">Contact <span className="text-primary">(PRO)</span></a>
                      </li>
                    </ul>
                  </li>                  
                </ul>
                
                <a className="navbar-brand d-none d-lg-block me-0" href="index.html">
                  <img src="images/main-logo.png" className="logo"/>
                </a>

                <ul className="list-unstyled d-lg-flex justify-content-between align-items-center">
                  <li className="nav-item search-item">
                    <div id="search-bar" className="border-right d-none d-lg-block">
                      <form action="" autocomplete="on">
                        <input id="search" className="text-dark" name="search" type="text" placeholder="Search Here..."/>
                        <a type="submit" className="nav-link text-uppercase me-0" href="#">Search</a>
                      </form>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-uppercase me-0" href="login.html">Account</a>
                  </li>
                  <li className="cart-dropdown nav-item dropdown">
                    <a className="nav-link text-uppercase dropdown-toggle me-0" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Cart(2)</a>
                    <div className="dropdown-menu dropdown-menu-end p-3">
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">2</span>
                      </h4>
                      <ul className="list-group mb-3">
                        <li className="list-group-item bg-transparent border-gray d-flex justify-content-between lh-sm">
                          <div>
                            <h5 className="card-title fs-3 text-uppercase mb-0">
                              <a href="single-product.html">Life lesson</a>
                            </h5>
                            <small className="text-body-secondary">This book is about life.</small>
                          </div>
                          <span className="text-primary">$90</span>
                        </li>
                        <li className="list-group-item bg-transparent border-gray d-flex justify-content-between lh-sm">
                          <div>
                            <h5 className="card-title fs-3 text-uppercase mb-0">
                              <a href="single-product.html">Money making</a>
                            </h5>
                            <small className="text-body-secondary">It will teach you money making.</small>
                          </div>
                          <span className="text-primary">$60</span>
                        </li>
                        <li className="list-group-item bg-transparent border-gray d-flex justify-content-between">
                          <span className="text-uppercase"><b>Total (USD)</b></span>
                          <strong>$150</strong>
                        </li>
                      </ul>
                      <div className="d-flex flex-wrap justify-content-center">
                        <a href="cart.html" className="w-100 btn btn-dark mb-1" type="submit">View Cart</a>
                        <a href="checkout.html" className="w-100 btn btn-primary" type="submit">Go to checkout</a>
                      </div>
                    </div>
                  </li>
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
