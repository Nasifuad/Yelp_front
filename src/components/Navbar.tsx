import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-indigo-600">MyBrand</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/journal"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Journal
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/profile"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
