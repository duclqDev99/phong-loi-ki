import React from 'react';
import {NavLink} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>


            <ul className='sidebar-list'>
                {
                    openSidebarToggle &&
                    <li className='sidebar-list-item' style={{color: 'white'}}>
                        <button style={{
                            top: 10,
                            right: 10,
                            background: 'none',
                            color: 'white',
                            border: 'none',
                            position: 'absolute'
                        }}>
                            <CloseIcon className='icon' style={{top: 10, right: 10}}
                                       onClick={() => OpenSidebar(false)}/>
                        </button>
                    </li>
                }
                <NavLink to="/admin">
                    <li className='sidebar-list-item' style={{color: 'white'}}>
                        <DashboardIcon className='icon'/> Bảng Điều Khiển
                    </li>
                </NavLink>
                <NavLink to="/admin/category">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <CategoryIcon className='icon'/> Danh Mục
                    </li>
                </NavLink>
                <NavLink to="/admin/product">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <MenuBookIcon className='icon'/> Sản Phẩm
                    </li>
                </NavLink>
                <NavLink to="/admin/customer">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <SupervisedUserCircleIcon className='icon'/> Người Dùng
                    </li>
                </NavLink>
                <NavLink to="/admin/order">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <ReceiptIcon className='icon'/> Đơn Hàng
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <ShoppingCartIcon className='icon'/> Đến Cửa Hàng
                    </li>
                </NavLink>
                <NavLink to="/logout">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <LogoutIcon className='icon'/> Đăng Xuất
                    </li>
                </NavLink>
            </ul>
        </aside>
    )
}

export default Sidebar
