import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hero from "../components/Hero";
import Orders from "../pages/Orders";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AdminRegister from "../pages/auth/AdminRegister";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
 
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
    element:<Register />
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/admin-register",
    element:<AdminRegister />
  },
  {
    path: "/admin-login",
    element:<AdminLogin />
  },
  {
    path: "/admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element:<Dashboard />
      }
    ]
  }

]);

export default router;