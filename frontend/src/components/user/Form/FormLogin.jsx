import React, {useState} from "react";
import customerApi from "../../../apis/customerApi";
import {NavLink, useNavigate} from "react-router-dom";
import CustomerForm from "../../../pages/AdminPage/Customer/CustomerForm";
import DialogWrapper from "../../admin/dialogWapper";

function FormLogin({isLogged, setIsLogged, isAdmin, setIsAdmin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [noti, setNoti] = useState("");

    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();

        if (!username || username === "") {
            setNoti("Tên đăng nhập không được để trống!");
            setShowModal(true);
            return;
        } else if (!password || password === "") {
            setNoti("Mật khẩu không được để trống!");
            setShowModal(true);
            return;
        }

        const formData = {
            username: username,
            password: password,
        }
        fetch(formData);
    }

    const fetch = async (formData) => {
        await customerApi.login(formData).then((response) => {
            localStorage.setItem('user', JSON.stringify(response));
            setIsLogged(1);
            if (response.is_admin) {
                setIsAdmin(1);
            }
            navigate('/');
        }).catch((error) => {
            setNoti(error.response.data);
            setShowModal(true);
        });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Tên đăng nhập *</label>
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
                <label htmlFor="sign-in">Mật khẩu *</label>
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
            <label className="py-3">
                <span className="label-body">
                    <NavLink to={"/register"} className="fw-bold">
                        Đăng ký
                    </NavLink>
                </span>
            </label>
            <button
                type="submit"
                name="submit"
                className="btn btn-dark w-100 my-3"
            >
                Đăng nhập
            </button>
            <DialogWrapper
                title={"Lưu ý"}
                open={showModal}
                onClose={handleClose}
            >
                {noti}
            </DialogWrapper>
        </form>
    );
}

export default FormLogin;
