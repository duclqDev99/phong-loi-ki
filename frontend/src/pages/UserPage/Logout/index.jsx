import React from 'react';
import {useNavigate} from "react-router-dom";

function Logout({isLogged, setIsLogged}) {
    setIsLogged(0);
    console.log(isLogged);
    const navigate = useNavigate();
    navigate("/login");

    return (
        <></>
    );
}

export default Logout;
