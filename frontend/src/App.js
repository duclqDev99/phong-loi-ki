import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserLayout from "./layouts/UserLayout";
import HomePage from './pages/UserPage/HomePage';
import Shop from "./pages/UserPage/Shop";
import Login from "./pages/UserPage/Login";
import Cart from "./pages/UserPage/Cart";
import Checkout from "./pages/UserPage/Checkout";
import Product from "./pages/UserPage/Product";

import AdminLayout from "./layouts/AdminLayout"
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
                    <Route path="/" element={<UserLayout page={<HomePage/>} breadcrumbItems={[]}/>}/>
                    <Route path="/shop" element={<UserLayout page={<Shop/>} breadcrumbItems={["Home", "Shop"]}/>}/>
                    <Route path="/login" element={<UserLayout page={<Login/>} breadcrumbItems={["Home", "Login"]}/>}/>
                    <Route path="/cart" element={<UserLayout page={<Cart/>} breadcrumbItems={["Home", "Cart"]}/>}/>
                    <Route path="/checkout" element={<UserLayout page={<Checkout/>} breadcrumbItems={["Home", "Checkout"]}/>}/>
                    <Route path="/product" element={<UserLayout page={<Product/>} breadcrumbItems={["Home", "Product"]}/>}/>

                    <Route path="/admin" element={<AdminLayout page={<AdminHome />}/>}/>
                    <Route path="/admin-product" element={<AdminLayout page={<AdminProduct />}/>}/>
                    <Route path="/admin-category" element={<AdminLayout page={<AdminCategory />}/>}/>
                    <Route path="/admin-customer" element={<AdminLayout page={<AdminCustomer />}/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
