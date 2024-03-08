import React from 'react';
import logo from '../../../assets/user/images/main-logo.jpg';
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
                                    <img style={{width: '100px'}} src={logo} alt="Logo" className="mb-2"/>
                                    <p>Bây giờ chúng ta hãy sống thoải mái như một cánh cửa dẫn đến từng nhà, một số phương tiện của cuộc sống và không có chiếc giường đựng bình.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 pb-3">
                                <div className="footer-menu">
                                    <h4 className="widget-title pb-2">CHỌN NHANH</h4>
                                    <ul className="menu-list list-unstyled">
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/" >
                                                Trang Chủ
                                            </NavLink>
                                        </li>
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/shop" >
                                                Shop
                                            </NavLink>
                                        </li>
                                        <li className="menu-item text-uppercase pb-2">  
                                            <NavLink to="/cart" >
                                                Giỏ Hàng
                                            </NavLink>
                                        </li>
                                        <li className="menu-item text-uppercase pb-2">
                                            <NavLink to="/login" >
                                                Tài Khoản
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu contact-item">
                                    <h4 className="widget-title pb-2">Thông Tin Liên Lạc</h4>
                                    <ul className="menu-list list-unstyled">
                                        <li className="menu-item pb-2">
                                            <a href="#">Tea Berry, Marinette, USA</a>
                                        </li>
                                        <li className="menu-item pb-2">
                                            <a href="#">+84 78 143 234</a>
                                        </li>
                                        <li className="menu-item pb-2">
                                            <a href="mailto:">yourinfo@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-3">
                                <div className="footer-menu">
                                    <h4 className="widget-title pb-2">THÔNG TIN XÃ HỘI</h4>
                                    <p>Bạn có thể theo dõi chúng tôi trên các nền tảng xã hội của chúng tôi để nhận được thông tin cập nhật.</p>
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
