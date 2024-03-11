import {useEffect, useState} from 'react';
import '../../assets/admin/styles/App.css';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';
import {Outlet, useNavigate} from "react-router-dom";

function Admin({isLogged, setIsLogged, isAdmin, setIsAdmin}) {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate("/login");
        } else if (!user.is_admin) {
            navigate("/");
        }
    }, []);

    /*useEffect(() => {
        console.log("isLogged:", isLogged);
        console.log("isAdmin:", isAdmin);

        const checkAuthentication = () => {
            if (!isLogged) {
                navigate("/login");
            } else if (!isAdmin) {
                navigate("/");
            }
        };

        checkAuthentication();
    }, [isLogged, isAdmin]);*/

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
