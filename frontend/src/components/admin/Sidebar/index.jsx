import React from 'react'
import
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import {NavLink} from "react-router-dom";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>


        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <NavLink to="/admin" >
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="/admin-product" >
                    <BsFillArchiveFill className='icon'/> Products
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="/admin-category" >
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </NavLink>
            </li>
            <li className='sidebar-list-item'>
                <NavLink to="/admin-customer" >
                    <BsPeopleFill className='icon'/> Customers
                </NavLink>
            </li>
            {/*<li className='sidebar-list-item'>
                <a href="/admin/order">
                    <BsFillGearFill className='icon'/> Orders
                </a>
            </li>*/}
        </ul>
    </aside>
  )
}

export default Sidebar
