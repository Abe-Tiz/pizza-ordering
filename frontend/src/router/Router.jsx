import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hero from "../components/Hero";
import Orders from "../pages/Orders";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
 
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
  }

]);

export default router;