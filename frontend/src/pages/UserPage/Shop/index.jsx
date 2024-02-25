import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';
// Import các section khác như Banner, Products, etc.

function Shop() {
  return (
      <div>
          <Header/>
          <section
              className="hero-section bg-gray d-flex align-items-center justify-content-center padding-medium pb-5">
              <div className="hero-content">
                  <div className="container">
                      <div className="row">
                          <div className="text-center padding-medium no-padding-bottom">
                              <h1>Shop</h1>
                              <div className="breadcrumbs">
                            <span className="item">
                                <a href="https://demo.templatesjungle.com/micas/index.html">Home &gt;</a>
                            </span>
                                  <span className="item">Shop</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div className="shopify-grid padding-large">
              <div className="container">
                  <div className="row">
                      <main className="col-md-9">
                          <div className="filter-shop d-flex flex-wrap justify-content-between">
                              <div className="showing-product">
                                  <p>Showing 1-9 of 55 results</p>
                              </div>
                              <div className="sort-by">
                                  <select id="input-sort" className="form-control" data-filter-sort=""
                                          data-filter-order="">
                                      <option value="">Default sorting</option>
                                      <option value="">Name (A - Z)</option>
                                      <option value="">Name (Z - A)</option>
                                      <option value="">Price (Low-High)</option>
                                      <option value="">Price (High-Low)</option>
                                      <option value="">Rating (Highest)</option>
                                      <option value="">Rating (Lowest)</option>
                                      <option value="">Model (A - Z)</option>
                                      <option value="">Model (Z - A)</option>
                                  </select>
                              </div>
                          </div>
                          <div className="row product-content product-store">
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item1.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a
                                                  href="https://demo.templatesjungle.com/micas/single-product.html">Whispersong</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item2.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Starlight
                                                  Secrets</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item3.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Shadow
                                                  Dance</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item4.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Crimson
                                                  Destiny</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item5.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Enchanted
                                                  Sands</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item6.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Aetherial
                                                  Alchemy</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item7.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">The
                                                  Lost
                                                  Labyrinth</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item8.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Crystal
                                                  Caverns</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="product-card mb-4">
                                      <div className="image-holder">
                                          <img src="./shop_files/product-item9.jpg" alt="product-item"
                                               className="img-fluid"/>
                                      </div>
                                      <div className="card-detail text-center pt-3 pb-2">
                                          <h5 className="card-title fs-4 text-uppercase m-0">
                                              <a href="https://demo.templatesjungle.com/micas/single-product.html">Scarlet
                                                  Secrets</a>
                                          </h5>
                                          <span className="item-price text-primary fs-4">$870</span>
                                          <div className="cart-button mt-1">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#"
                                                 className="btn">Add to
                                                  cart</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
                              <div
                                  className="pagination loop-pagination d-flex justify-content-center align-items-center">
                                  <a href="https://demo.templatesjungle.com/micas/shop.html#" className="d-flex pe-2">
                                      <svg width="24" height="24">
                                          {/*<use xlink:href="#angle-left"></use>*/}
                                      </svg>
                                  </a>
                                  <span aria-current="page" className="page-numbers current pe-3">1</span>
                                  <a className="page-numbers pe-3"
                                     href="https://demo.templatesjungle.com/micas/shop.html#">2</a>
                                  <a className="page-numbers pe-3"
                                     href="https://demo.templatesjungle.com/micas/shop.html#">3</a>
                                  <a className="page-numbers pe-3"
                                     href="https://demo.templatesjungle.com/micas/shop.html#">4</a>
                                  <a className="page-numbers"
                                     href="https://demo.templatesjungle.com/micas/shop.html#">5</a>
                                  <a href="https://demo.templatesjungle.com/micas/shop.html#" className="d-flex ps-2">
                                      <svg width="24" height="24">
                                          {/*<use xlink:href="#angle-right"></use>*/}
                                      </svg>
                                  </a>
                              </div>
                          </nav>
                      </main>
                      <aside className="col-md-3">
                          <div className="sidebar">
                              <div className="widget-menu">
                                  <div className="widget-search-bar">
                                      <form role="search" method="get"
                                            className="position-relative d-flex justify-content-between align-items-center border-bottom border-dark py-1">
                                          <input className="search-field" placeholder="Search" type="search"/>
                                          <div className="search-icon position-absolute end-0">
                                              <a href="https://demo.templatesjungle.com/micas/shop.html#">
                                                  <svg width="26" height="26" className="search">
                                                      {/*<use xlink:href="#search"></use>*/}
                                                  </svg>
                                              </a>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                              <div className="widget-product-categories pt-5">
                                  <h5 className="widget-title text-uppercase">Categories</h5>
                                  <ul className="product-categories sidebar-list list-unstyled">
                                      <li className="cat-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">All</a>
                                      </li>
                                      <li className="cat-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Spiritual</a>
                                      </li>
                                      <li className="cat-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Money</a>
                                      </li>
                                      <li className="cat-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Life</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="widget-product-tags pt-3">
                                  <h5 className="widget-title text-uppercase">Tags</h5>
                                  <ul className="product-tags sidebar-list list-unstyled">
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Finance</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Cheap</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Story</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Biography</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="widget-product-brands pt-3">
                                  <h5 className="widget-title text-uppercase">Latest Products</h5>
                                  <ul className="product-tags sidebar-list list-unstyled">
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Dance of
                                              Fireflies</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Starry
                                              Horizons</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Tales of
                                              Tranquility</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="widget-price-filter pt-3">
                                  <h5 className="widget-title text-uppercase">Filter By Price</h5>
                                  <ul className="product-tags sidebar-list list-unstyled">
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">Less than $100</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">$100 - $200</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">$200 - $300</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">$300 - $400</a>
                                      </li>
                                      <li className="tags-item">
                                          <a href="https://demo.templatesjungle.com/micas/shop.html#">$400 - $500</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </aside>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
  );
}

export default Shop;
