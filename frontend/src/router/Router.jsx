import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AdminRegister from "../pages/auth/AdminRegister";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminLayout from "../layout/AdminLayout";
import AddMenu from "../pages/dashboard/AddMenu";
import OrderedMenu from "../pages/dashboard/OrderedMenu";
import Role from "../pages/dashboard/Role";
import ViewRole from "../pages/role/ViewRole";
import ProtectedRoute from "../private/ProtectedRoute";
import ViewOrder from "../pages/order/ViewOrder";
import AdminProtectedRoute from "../private/AdminProtectedRoute";
import Order from '../pages/order/Order';
import Orders from '../pages/order/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-register",
    element: <AdminRegister />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/customer-order",
    element: <ProtectedRoute element={Order} />,
  },
  {
    path: "admin-dashboard",
    element: <AdminProtectedRoute element={AdminLayout} />,
    children: [
      {
        path: "",
        element: <AddMenu />,
      },
      {
        path: "ordered",
        element: <OrderedMenu />,
      },
      {
        path: "role",
        element: <Role />,
      },
      {
        path: "view-role",
        element: <ViewRole />,
      },
      {
        path: "view-order",
        element: <ViewOrder />,
      },
    ],
  },
]);

export default router;
