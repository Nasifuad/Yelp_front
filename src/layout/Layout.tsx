import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
