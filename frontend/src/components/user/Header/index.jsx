import React, {useEffect, useState} from 'react';
import logo from '../../../assets/user/images/main-logo.jpg';
import {NavLink, useNavigate} from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import MiniCart from "../Cart/MiniCart";
import categoryApi from "../../../apis/categoryApi";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header({ isLogged = 0, cartItems, setCartItems}) {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        navigate(`/shop/search/${searchTerm}`);
    };

    const fetch = async () => {
        await categoryApi.getList().then((response) => {
            setCategories(response);
        }).catch((error) => {
            console.log(error);
            setCategories([]);
        });
    };

    useEffect(() => {
        fetch();
    }, [])

    return (
        <header className="site-header bg-white">
            <nav id="header-nav" className="navbar navbar-expand-lg px-3">
                <div className="container">
                    <NavLink to="/" className="navbar-brand d-lg-none">
                        <img style={{width: '50px'}} src={logo} alt="Logo" className="footer-logo"/>
                    </NavLink>
                    <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button"
                            data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar"
                            aria-expanded="false" aria-label="Toggle navigation">Menu
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar"
                         aria-labelledby="bdNavbarOffcanvasLabel">
                        <div className="offcanvas-header px-4 pb-0">
                            <a className="navbar-brand" href="/">
                                <img style={{width: '50px'}} src={logo} alt="Logo" className="footer-logo"/>
                            </a>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"
                                    aria-label="Close" data-bs-target="#bdNavbar"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul id="navbar"
                                className="navbar-nav w-100 d-flex justify-content-between align-items-center">

                                <ul className="list-unstyled d-lg-flex justify-content-md-between align-items-center">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link text-uppercase ms-0">
                                            Trang Chủ
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/shop" className="nav-link text-uppercase ms-0">
                                            Shop
                                        </NavLink>
                                    </li>
                                    <Dropdown as="li" className="nav-item dropdown">
                                        <Dropdown.Toggle
                                            as="a"
                                            className="nav-link text-uppercase dropdown-toggle ms-0"
                                            id="dropdown-basic"
                                        >
                                            Danh Mục <ArrowDropDownIcon />
                                            {/*<svg className="bi" width="18" height="18">
                                                <use xlinkHref="#chevron-down"></use>
                                            </svg>*/}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {categories.map((category, index) => (
                                                <Dropdown.Item key={index}>
                                                    <NavLink to={`/shop/cat/${category.id}`} >
                                                        {category.title}
                                                    </NavLink>
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ul>

                                <NavLink to="/" className="nav-link text-uppercase ms-0">
                                    <img style={{width: '50px'}} src={logo} alt="Logo" className="mb-2"/>
                                </NavLink>

                                <ul className="list-unstyled d-lg-flex justify-content-between align-items-center">
                                    <li className="nav-item search-item">
                                        <div id="search-bar" className="border-right d-none d-lg-block">
                                            <form onSubmit={handleSearch} autoComplete="on">
                                                <input
                                                    id="search"
                                                    className="text-dark"
                                                    name="search"
                                                    type="text"
                                                    placeholder="..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                />
                                                <a type="submit" className="nav-link text-uppercase me-0"
                                                   href="#">Tìm Kiếm</a>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        {!isLogged ? (
                                            <NavLink to="/login" className="nav-link text-uppercase me-0">
                                                Đăng Nhập
                                            </NavLink>
                                        ) : (
                                            <NavLink to="/logout" className="nav-link text-uppercase me-0">
                                                Đăng Xuất
                                            </NavLink>
                                        )}

                                    </li>
                                    <MiniCart cartItems={cartItems}/>
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
