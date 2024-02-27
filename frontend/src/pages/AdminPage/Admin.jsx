import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function Admin({page}) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        {page}
    </div>
  )
}

export default Admin;
