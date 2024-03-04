import {useEffect, useState} from 'react';
import '../../assets/admin/styles/App.css';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import {Outlet, useNavigate} from "react-router-dom";

function Admin() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const navigate = useNavigate();

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const checkLoginStatus = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || user.is_admin != 1) {
            navigate('/login');
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Outlet/>
        </div>
    )
}

export default Admin;
