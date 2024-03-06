import {useEffect, useState} from 'react';
import '../../assets/admin/styles/App.css';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import {Outlet, useNavigate} from "react-router-dom";

function Admin({isLogged, setIsLogged, isAdmin, setIsAdmin}) {
    const navigate = useNavigate();
    if (!isLogged) {
        navigate("/login");
    } else if (!isAdmin) {
        navigate("/");
    }
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Outlet/>
        </div>
    )
}

export default Admin;
