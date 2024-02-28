import { useState } from 'react';
import '../../assets/admin/styles/App.css';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';

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
