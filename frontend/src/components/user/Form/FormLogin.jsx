import React, {useState} from "react";
import customerApi from "../../../apis/customerApi";
import {useNavigate} from "react-router-dom";

function FormLogin({isLogged, setIsLogged, isAdmin, setIsAdmin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        const formData = {
            username: username,
            password: password,
        }
        fetch(formData);
    }

    const fetch = async (formData) => {
        await customerApi.login(formData).then((response) => {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response));
            setIsLogged(1);
            if (response.is_admin) {
                setIsAdmin(1);
            }
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <form>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Username *</label>
                <input
                    type="text"
                    minLength="2"
                    name="username"
                    placeholder="Your Username"
                    className="w-100"
                    required=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Password *</label>
                <input
                    type="password"
                    minLength="2"
                    name="password"
                    placeholder="Your Password"
                    className="w-100"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                name="submit"
                onClick={handleLogin}
                className="btn btn-dark w-100 my-3"
            >
                Login
            </button>
        </form>
    );
}

export default FormLogin;
