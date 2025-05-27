import { createBrowserRouter, Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Journal from "../pages/Journal";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Link to="/">404</Link>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/journal",
        element: <Journal />,
        children: [
          {
            path: "/journal/:id",
            element: <div>Journal 1 2 3</div>,
          },
        ],
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
