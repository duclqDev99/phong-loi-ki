import {useRoutes} from 'react-router-dom';

import MainRoute from './MainRoute';
import AdminRoute from './AdminRoute';
import CartRoute from "./CartRoute";
import CheckoutRoute from "./CheckoutRoute";
import LoginRoute from "./LoginRoute";
import ProductRoute from "./ProductRoute";
import ShopRoute from "./ShopRoute";
import LogoutRoute from "./LogoutRoute";
import RegisterRoute from "./RegisterRoute";
import {useEffect, useState} from "react";

export default function ThemeRoutes() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isLogged, setIsLogged] = useState((() => {
        if (user) {
            return 1;
        } else {
            return 0;
        }
    })());

    const [isAdmin, setIsAdmin] = useState((() => {
        if (!isLogged) {
            return 0;
        } else if (user && user.is_admin){
            return 1;
        }
        return 0;
    })());

    const [cartItems, setCartItems] = useState(() => {
        const localCart = JSON.parse(localStorage.getItem('cartItems'));
        return Array.isArray(localCart) ? localCart : [];
    });

    return useRoutes([
        MainRoute(isLogged, setIsLogged, cartItems, setCartItems),
        AdminRoute(isLogged, setIsLogged, isAdmin, setIsAdmin),
        CartRoute(isLogged, setIsLogged, cartItems, setCartItems),
        CheckoutRoute(isLogged, setIsLogged, cartItems, setCartItems),
        LoginRoute(isLogged, setIsLogged, cartItems, setCartItems),
        RegisterRoute(isLogged, setIsLogged, cartItems, setCartItems),
        LogoutRoute(isLogged, setIsLogged, cartItems, setCartItems),
        ProductRoute(isLogged, setIsLogged, cartItems, setCartItems),
        ShopRoute(isLogged, setIsLogged, cartItems, setCartItems)
    ])
}
