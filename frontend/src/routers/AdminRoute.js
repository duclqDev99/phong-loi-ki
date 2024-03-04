/*import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login";*/
import AdminLayout from "../layouts/AdminLayout"
import AdminHome from "../pages/AdminPage/Home";
import AdminProduct from "../pages/AdminPage/Product";
import AdminCategory from "../pages/AdminPage/Category";
import AdminCustomer from "../pages/AdminPage/Customer";

const AdminRoute = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: "",
            element: <AdminHome />
        },{
            path: "category",
            element: <AdminCategory />
        },{
            path: "customer",
            element: <AdminCustomer />
        },{
            path: "product",
            element: <AdminProduct />
        },
    ]
}

export default AdminRoute;
