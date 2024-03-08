import AdminLayout from "../layouts/AdminLayout"
import AdminHome from "../pages/AdminPage/Home";
import AdminProduct from "../pages/AdminPage/Product";
import AdminCategory from "../pages/AdminPage/Category";
import AdminCustomer from "../pages/AdminPage/Customer";
import AdminOrder from "../pages/AdminPage/Order";

const AdminRoute = ({isLogged, setIsLogged, isAdmin, setIsAdmin}) => ({
    path: '/admin',
    element: <AdminLayout isLogged={isLogged} setIsLogged={setIsLogged} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>,
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
        },{
            path: "order",
            element: <AdminOrder />
        },
    ]
})

export default AdminRoute;
