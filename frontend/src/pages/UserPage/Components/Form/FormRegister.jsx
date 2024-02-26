import React from "react";

function FormRegister() {
    return (
        <form>
            <div className="form-group py-3">
                <label htmlFor="register">Your email address *</label>
                <input type="text" minLength="2" name="username"
                       placeholder="Your Email Address"
                       className="w-100" required=""/>
            </div>
            <div className="form-group py-3">
                <label htmlFor="sign-in">Password *</label>
                <input type="password" minLength="2" name="password" placeholder="Your Password"
                       className="w-100" required=""/>
            </div>
            <label className="py-3">
                <input type="checkbox" required="" className="d-inline"/>
                <span className="label-body">I agree to the <a
                    href="https://demo.templatesjungle.com/micas/login.html#"
                    className="fw-bold">Privacy Policy</a></span>
            </label>
            <button type="submit" name="submit" className="btn btn-dark w-100 my-3">Register
            </button>
        </form>
    );
}

export default FormRegister;