import React from 'react'
import
{
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import {NavLink} from "react-router-dom";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>


            <ul className='sidebar-list'>
                <NavLink to="/admin">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsGrid1X2Fill className='icon'/> Dashboard
                    </li>
                </NavLink>
                <NavLink to="/admin/product">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsFillArchiveFill className='icon'/> Products
                    </li>
                </NavLink>
                <NavLink to="/admin/category">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsFillGrid3X3GapFill className='icon'/> Categories
                    </li>
                </NavLink>
                <NavLink to="/admin/customer">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsPeopleFill className='icon'/> Customers
                    </li>
                </NavLink>
                <NavLink to="/admin/order">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsFillGearFill className='icon'/> Orders
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsGrid1X2Fill className='icon'/> Go to shopping
                    </li>
                </NavLink>
                <NavLink to="/logout">
                    <li className='sidebar-list-item' style={{ color: 'white'}}>
                        <BsGrid1X2Fill className='icon'/> Logout
                    </li>
                </NavLink>
            </ul>
        </aside>
    )
}

export default Sidebar
