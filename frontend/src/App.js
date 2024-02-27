import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from "./pages/UserPage/UserPage";
import HomePage from './pages/UserPage/HomePage';
import Shop from "./pages/UserPage/Shop";
import Login from "./pages/UserPage/Login";
import Cart from "./pages/UserPage/Cart";
import Checkout from "./pages/UserPage/Checkout";
import Product from "./pages/UserPage/Product";

import Admin from "./pages/AdminPage/Admin";
import AdminHome from "./pages/AdminPage/Home";
import AdminProduct from "./pages/AdminPage/Product";
import AdminCategory from "./pages/AdminPage/Category";
import AdminCustomer from "./pages/AdminPage/Customer";

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<UserPage page={<HomePage/>}/>}/>
                    <Route path="/shop" element={<UserPage page={<Shop/>}/>}/>
                    <Route path="/login" element={<UserPage page={<Login/>}/>}/>
                    <Route path="/cart" element={<UserPage page={<Cart/>}/>}/>
                    <Route path="/checkout" element={<UserPage page={<Checkout/>}/>}/>
                    <Route path="/product" element={<UserPage page={<Product/>}/>}/>

                    {/*<Route path="/admin/login" element={<AdminLogin/>}/>
                    <Route path="/admin/dashboard" element={<Dashboard/>}/>
                    <Route path="/admin/category" element={<Category/>}/>*/}
                    <Route path="/admin" element={<Admin page={<AdminHome />}/>}/>
                    <Route path="/admin-product" element={<Admin page={<AdminProduct />}/>}/>
                    <Route path="/admin-category" element={<Admin page={<AdminCategory />}/>}/>
                    <Route path="/admin-customer" element={<Admin page={<AdminCustomer />}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
