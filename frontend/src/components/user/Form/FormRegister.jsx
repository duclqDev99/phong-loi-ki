import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import customerApi from "../../../apis/customerApi";
import DialogWrapper from "../../admin/dialogWapper";

function FormRegister() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("Male");
    const [birthday, setBirthday] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [noti, setNoti] = useState("");

    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();

        if (!username || username === "") {
            setNoti("Tên đăng nhập không được để trống!");
            setShowModal(true);
            return;
        } else if (!password || password === "") {
            setNoti("Mật khẩu không được để trống!");
            setShowModal(true);
            return;
        } else if (!fullname || fullname === "") {
            setNoti("Họ và tên không được để trống!");
            setShowModal(true);
            return;
        } else if (!email || email === "") {
            setNoti("Email không được để trống!");
            setShowModal(true);
            return;
        } else if (!phone || phone === "") {
            setNoti("Số điện thoại không được để trống!");
            setShowModal(true);
            return;
        } else if (!gender || gender === "") {
            setNoti("Giới tính không được để trống!");
            setShowModal(true);
            return;
        } else if (!birthday || birthday === "") {
            setNoti("Ngày sinh không được để trống!");
            setShowModal(true);
            return;
        }

        const formData = {
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            phone: phone,
            gender: gender,
            birthday: birthday,
        }
        fetch(formData);
    }

    const fetch = async (formData) => {
        await customerApi.create(formData).then((response) => {
            console.log(response);
            navigate('/login');
        }).catch((error) => {
            console.log(error);
        });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <form>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Tên đăng nhập *</label>
                <input
                    type="text"
                    minLength="2"
                    name="username"
                    placeholder="Đặt tên đăng nhập của bạn"
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
                    placeholder="Đặt mật khẩu"
                    className="w-100"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Họ và tên *</label>
                <input
                    type="text"
                    minLength="2"
                    name="fullname"
                    placeholder="Tên đầy đủ của bạn"
                    className="w-100"
                    required=""
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Email *</label>
                <input
                    type="text"
                    minLength="2"
                    name="email"
                    placeholder="Nhập địa chỉ email của bạn"
                    className="w-100"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Số điện thoại *</label>
                <input
                    type="text"
                    minLength="2"
                    name="phone"
                    placeholder="Nhập số điện thoại của bạn"
                    className="w-100"
                    required=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            {/*<div className="form-group py-3">
                <label htmlFor="sign-in">Giới tính *</label>
                <input
                    type="text"
                    minLength="2"
                    name="gender"
                    placeholder="Giới tính"
                    className="w-100"
                    required=""
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>*/}
            <div className="form-group py-3">
                <label htmlFor="gender">Giới tính *</label>
                <select
                    id="gender"
                    name="gender"
                    className="w-100"
                    required=""
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="Male" selected>Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Ngày sinh *</label>
                <input
                    type="date"
                    minLength="2"
                    name="birthday"
                    placeholder="Ngày sinh"
                    className="w-100"
                    required=""
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </div>
            <label className="py-3">
                <span className="label-body">
                    <NavLink to={"/login"} className="fw-bold">
                        Đăng nhập
                    </NavLink>
                </span>
            </label>
            <button
                type="submit"
                name="submit"
                onClick={handleRegister}
                className="btn btn-dark w-100 my-3"
            >
                Đăng ký
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

export default FormRegister;
