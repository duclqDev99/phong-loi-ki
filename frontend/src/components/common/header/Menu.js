export default function Menu() {
  return (
    <div className='header-bottom header-bottom-bg-color sticky-bar'>
      <div className='container'>
        <div className='header-wrap header-space-between position-relative'>
          <div className='logo logo-width-1 d-block d-lg-none'>
            <a href='index.html'>
              <img src='assets/imgs/theme/logo.svg' alt='logo' />
            </a>
          </div>
          <div className='header-nav d-none d-lg-flex'>
            <div className='main-categori-wrap d-none d-lg-block'>
              <a className='categories-button-active' href='#'>
                <span className='fi-rs-apps'></span>{' '}
                <span className='et'>Browse</span> All Categories
                <i className='fi-rs-angle-down'></i>
              </a>
              <div className='categories-dropdown-wrap categories-dropdown-active-large font-heading'>
                <div className='d-flex categori-dropdown-inner'>
                  <ul>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-1.svg'
                          alt=''
                        />
                        Milks and Dairies
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-2.svg'
                          alt=''
                        />
                        Clothing & beauty
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-3.svg'
                          alt=''
                        />
                        Pet Foods & Toy
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-4.svg'
                          alt=''
                        />
                        Baking material
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-5.svg'
                          alt=''
                        />
                        Fresh Fruit
                      </a>
                    </li>
                  </ul>
                  <ul className='end'>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-6.svg'
                          alt=''
                        />
                        Wines & Drinks
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-7.svg'
                          alt=''
                        />
                        Fresh Seafood
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-8.svg'
                          alt=''
                        />
                        Fast food
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-9.svg'
                          alt=''
                        />
                        Vegetables
                      </a>
                    </li>
                    <li>
                      <a href='shop-grid-right.html'>
                        {' '}
                        <img
                          src='assets/imgs/theme/icons/category-10.svg'
                          alt=''
                        />
                        Bread and Juice
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='more_slide_open' style={{ display: 'None' }}>
                  <div className='d-flex categori-dropdown-inner'>
                    <ul>
                      <li>
                        <a href='shop-grid-right.html'>
                          {' '}
                          <img
                            src='assets/imgs/theme/icons/icon-1.svg'
                            alt=''
                          />
                          Milks and Dairies
                        </a>
                      </li>
                      <li>
                        <a href='shop-grid-right.html'>
                          {' '}
                          <img
                            src='assets/imgs/theme/icons/icon-2.svg'
                            alt=''
                          />
                          Clothing & beauty
                        </a>
                      </li>
                    </ul>
                    <ul className='end'>
                      <li>
                        <a href='shop-grid-right.html'>
                          {' '}
                          <img
                            src='assets/imgs/theme/icons/icon-3.svg'
                            alt=''
                          />
                          Wines & Drinks
                        </a>
                      </li>
                      <li>
                        <a href='shop-grid-right.html'>
                          {' '}
                          <img
                            src='assets/imgs/theme/icons/icon-4.svg'
                            alt=''
                          />
                          Fresh Seafood
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='more_categories'>
                  <span className='icon'></span>{' '}
                  <span className='heading-sm-1'>Show more...</span>
                </div>
              </div>
            </div>
            <div className='main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading'>
              <nav>
                <ul>
                  <li className='hot-deals'>
                    <img
                      src='/assets/home/imgs/theme/icons/icon-hot.svg'
                      alt='hot deals'
                    />
                    <a href='shop-grid-right.html'>Deals</a>
                  </li>
                  <li>
                    <a className='active' href='index.html'>
                      Home <i className='fi-rs-angle-down'></i>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='index.html'>Home 1</a>
                      </li>
                      <li>
                        <a href='index-2.html'>Home 2</a>
                      </li>
                      <li>
                        <a href='index-3.html'>Home 3</a>
                      </li>
                      <li>
                        <a href='index-4.html'>Home 4</a>
                      </li>
                      <li>
                        <a href='index-5.html'>Home 5</a>
                      </li>
                      <li>
                        <a href='index-6.html'>Home 6</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='page-about.html'>About</a>
                  </li>
                  <li>
                    <a href='shop-grid-right.html'>
                      Shop <i className='fi-rs-angle-down'></i>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='shop-grid-right.html'>
                          Shop Grid – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href='shop-grid-left.html'>
                          Shop Grid – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href='shop-list-right.html'>
                          Shop List – Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href='shop-list-left.html'>
                          Shop List – Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href='shop-fullwidth.html'>Shop - Wide</a>
                      </li>
                      <li>
                        <a href='#'>
                          Single Product <i className='fi-rs-angle-right'></i>
                        </a>
                        <ul className='level-menu'>
                          <li>
                            <a href='shop-product-right.html'>
                              Product – Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-left.html'>
                              Product – Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-full.html'>
                              Product – No sidebar
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-vendor.html'>
                              Product – Vendor Info
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='shop-filter.html'>Shop – Filter</a>
                      </li>
                      <li>
                        <a href='shop-wishlist.html'>Shop – Wishlist</a>
                      </li>
                      <li>
                        <a href='shop-cart.html'>Shop – Cart</a>
                      </li>
                      <li>
                        <a href='shop-checkout.html'>Shop – Checkout</a>
                      </li>
                      <li>
                        <a href='shop-compare.html'>Shop – Compare</a>
                      </li>
                      <li>
                        <a href='#'>
                          Shop Invoice<i className='fi-rs-angle-right'></i>
                        </a>
                        <ul className='level-menu'>
                          <li>
                            <a href='shop-invoice-1.html'>Shop Invoice 1</a>
                          </li>
                          <li>
                            <a href='shop-invoice-2.html'>Shop Invoice 2</a>
                          </li>
                          <li>
                            <a href='shop-invoice-3.html'>Shop Invoice 3</a>
                          </li>
                          <li>
                            <a href='shop-invoice-4.html'>Shop Invoice 4</a>
                          </li>
                          <li>
                            <a href='shop-invoice-5.html'>Shop Invoice 5</a>
                          </li>
                          <li>
                            <a href='shop-invoice-6.html'>Shop Invoice 6</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      Vendors <i className='fi-rs-angle-down'></i>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='vendors-grid.html'>Vendors Grid</a>
                      </li>
                      <li>
                        <a href='vendors-list.html'>Vendors List</a>
                      </li>
                      <li>
                        <a href='vendor-details-1.html'>Vendor Details 01</a>
                      </li>
                      <li>
                        <a href='vendor-details-2.html'>Vendor Details 02</a>
                      </li>
                      <li>
                        <a href='vendor-dashboard.html'>Vendor Dashboard</a>
                      </li>
                      <li>
                        <a href='vendor-guide.html'>Vendor Guide</a>
                      </li>
                    </ul>
                  </li>
                  <li className='position-static'>
                    <a href='#'>
                      Mega menu <i className='fi-rs-angle-down'></i>
                    </a>
                    <ul className='mega-menu'>
                      <li className='sub-mega-menu sub-mega-menu-width-22'>
                        <a className='menu-title' href='#'>
                          Fruit & Vegetables
                        </a>
                        <ul>
                          <li>
                            <a href='shop-product-right.html'>Meat & Poultry</a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Fresh Vegetables
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Herbs & Seasonings
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>Cuts & Sprouts</a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Exotic Fruits & Veggies
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Packaged Produce
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='sub-mega-menu sub-mega-menu-width-22'>
                        <a className='menu-title' href='#'>
                          Breakfast & Dairy
                        </a>
                        <ul>
                          <li>
                            <a href='shop-product-right.html'>
                              Milk & Flavoured Milk
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Butter and Margarine
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Eggs Substitutes
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>Marmalades</a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>Sour Cream</a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>Cheese</a>
                          </li>
                        </ul>
                      </li>
                      <li className='sub-mega-menu sub-mega-menu-width-22'>
                        <a className='menu-title' href='#'>
                          Meat & Seafood
                        </a>
                        <ul>
                          <li>
                            <a href='shop-product-right.html'>
                              Breakfast Sausage
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>Dinner Sausage</a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>Chicken</a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Sliced Deli Meat
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Wild Caught Fillets
                            </a>
                          </li>
                          <li>
                            <a href='shop-product-right.html'>
                              Crab and Shellfish
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='sub-mega-menu sub-mega-menu-width-34'>
                        <div className='menu-banner-wrap'>
                          <a href='shop-product-right.html'>
                            <img
                              src='assets/imgs/banner/banner-menu.png'
                              alt='Nest'
                            />
                          </a>
                          <div className='menu-banner-content'>
                            <h4>Hot deals</h4>
                            <h3>
                              Don&apos;t miss
                              <br />
                              Trending
                            </h3>
                            <div className='menu-banner-price'>
                              <span className='new-price text-success'>
                                Save to 50%
                              </span>
                            </div>
                            <div className='menu-banner-btn'>
                              <a href='shop-product-right.html'>Shop now</a>
                            </div>
                          </div>
                          <div className='menu-banner-discount'>
                            <h3>
                              <span>25%</span>
                              off
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='blog-category-grid.html'>
                      Blog <i className='fi-rs-angle-down'></i>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='blog-category-grid.html'>Blog Category Grid</a>
                      </li>
                      <li>
                        <a href='blog-category-list.html'>Blog Category List</a>
                      </li>
                      <li>
                        <a href='blog-category-big.html'>Blog Category Big</a>
                      </li>
                      <li>
                        <a href='blog-category-fullwidth.html'>
                          Blog Category Wide
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          Single Post <i className='fi-rs-angle-right'></i>
                        </a>
                        <ul className='level-menu level-menu-modify'>
                          <li>
                            <a href='blog-post-left.html'>Left Sidebar</a>
                          </li>
                          <li>
                            <a href='blog-post-right.html'>Right Sidebar</a>
                          </li>
                          <li>
                            <a href='blog-post-fullwidth.html'>No Sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>
                      Pages <i className='fi-rs-angle-down'></i>
                    </a>
                    <ul className='sub-menu'>
                      <li>
                        <a href='page-about.html'>About Us</a>
                      </li>
                      <li>
                        <a href='page-contact.html'>Contact</a>
                      </li>
                      <li>
                        <a href='page-account.html'>My Account</a>
                      </li>
                      <li>
                        <a href='page-login.html'>Login</a>
                      </li>
                      <li>
                        <a href='page-register.html'>Register</a>
                      </li>
                      <li>
                        <a href='page-forgot-password.html'>Forgot password</a>
                      </li>
                      <li>
                        <a href='page-reset-password.html'>Reset password</a>
                      </li>
                      <li>
                        <a href='page-purchase-guide.html'>Purchase Guide</a>
                      </li>
                      <li>
                        <a href='page-privacy-policy.html'>Privacy Policy</a>
                      </li>
                      <li>
                        <a href='page-terms.html'>Terms of Service</a>
                      </li>
                      <li>
                        <a href='page-404.html'>404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='page-contact.html'>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='hotline d-none d-lg-flex'>
            <img
              src='/assets/home/imgs/theme/icons/icon-headphone.svg'
              alt='hotline'
            />
            <p>
              1900 - 888<span>24/7 Support Center</span>
            </p>
          </div>
          <div className='header-action-icon-2 d-block d-lg-none'>
            <div className='burger-icon burger-icon-white'>
              <span className='burger-icon-top'></span>
              <span className='burger-icon-mid'></span>
              <span className='burger-icon-bottom'></span>
            </div>
          </div>
          <div className='header-action-right d-block d-lg-none'>
            <div className='header-action-2'>
              <div className='header-action-icon-2'>
                <a href='shop-wishlist.html'>
                  <img
                    alt='Nest'
                    src='assets/imgs/theme/icons/icon-heart.svg'
                  />
                  <span className='pro-count white'>4</span>
                </a>
              </div>
              <div className='header-action-icon-2'>
                <a className='mini-cart-icon' href='#'>
                  <img alt='Nest' src='assets/imgs/theme/icons/icon-cart.svg' />
                  <span className='pro-count white'>2</span>
                </a>
                <div className='cart-dropdown-wrap cart-dropdown-hm2'>
                  <ul>
                    <li>
                      <div className='shopping-cart-img'>
                        <a href='shop-product-right.html'>
                          <img
                            alt='Nest'
                            src='assets/imgs/shop/thumbnail-3.jpg'
                          />
                        </a>
                      </div>
                      <div className='shopping-cart-title'>
                        <h4>
                          <a href='shop-product-right.html'>
                            Plain Striola Shirts
                          </a>
                        </h4>
                        <h3>
                          <span>1 × </span>$800.00
                        </h3>
                      </div>
                      <div className='shopping-cart-delete'>
                        <a href='#'>
                          <i className='fi-rs-cross-small'></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className='shopping-cart-img'>
                        <a href='shop-product-right.html'>
                          <img
                            alt='Nest'
                            src='assets/imgs/shop/thumbnail-4.jpg'
                          />
                        </a>
                      </div>
                      <div className='shopping-cart-title'>
                        <h4>
                          <a href='shop-product-right.html'>Macbook Pro 2022</a>
                        </h4>
                        <h3>
                          <span>1 × </span>$3500.00
                        </h3>
                      </div>
                      <div className='shopping-cart-delete'>
                        <a href='#'>
                          <i className='fi-rs-cross-small'></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className='shopping-cart-footer'>
                    <div className='shopping-cart-total'>
                      <h4>
                        Total <span>$383.00</span>
                      </h4>
                    </div>
                    <div className='shopping-cart-button'>
                      <a href='shop-cart.html'>View cart</a>
                      <a href='shop-checkout.html'>Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
