import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/UserPage/HomePage';
import Shop from "./pages/UserPage/Shop";
import Login from "./pages/UserPage/Login";
import Cart from "./pages/UserPage/Cart";
import Checkout from "./pages/UserPage/Checkout";
import Product from "./pages/UserPage/Product";

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
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/product" element={<Product/>}/>

                    {/*<Route path="/admin/login" element={<AdminLogin/>}/>
                    <Route path="/admin/dashboard" element={<Dashboard/>}/>
                    <Route path="/admin/category" element={<Category/>}/>*/}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
