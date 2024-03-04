import { useRoutes } from 'react-router-dom';

import MainRoute from './MainRoute';
import AdminRoute from './AdminRoute';
import CartRoute from "./CartRoute";
import CheckoutRoute from "./CheckoutRoute";
import LoginRoute from "./LoginRoute";
import ProductRoute from "./ProductRoute";
import ShopRoute from "./ShopRoute";

export default function ThemeRoutes(){
    return useRoutes([MainRoute, AdminRoute, CartRoute, CheckoutRoute, LoginRoute, ProductRoute, ShopRoute])
}
