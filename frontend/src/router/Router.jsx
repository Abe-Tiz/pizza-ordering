import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Hero from "../components/Hero";
import Orders from "../pages/Orders";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },


]);

export default router;