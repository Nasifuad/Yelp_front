import { createBrowserRouter, Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Journal from "../pages/Journal";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Link to="/home">404</Link>,
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
    ],
  },
]);

export default router;
