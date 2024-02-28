import React from "react";

function FormLogin() {
    return (
        <form>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Username or email address *</label>
                <input type="text" minLength="2" name="username" placeholder="Your Username"
                       className="w-100" required=""/>
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Password *</label>
                <input type="password" minLength="2" name="password" placeholder="Your Password"
                       className="w-100" required=""/>
            </div>
            <label className="py-3">
                <input type="checkbox" required="" className="d-inline"/>
                <span className="label-body">Remember Me</span>
            </label>
            <button type="submit" name="submit" className="btn btn-dark w-100 my-3">Login</button>
        </form>
    );
}

export default FormLogin;