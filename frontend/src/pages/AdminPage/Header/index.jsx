import React from 'react'
import {BsJustify, BsCart3} from 'react-icons/bs';
import {NavLink} from "react-router-dom";

function Index({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
            <NavLink to="/admin" >
                <BsCart3 className='icon_header'/> BOOK SHOP
            </NavLink>
        </div>
    </header>
  )
}

export default Index
