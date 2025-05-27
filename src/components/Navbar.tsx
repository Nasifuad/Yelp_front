import { NavLink } from "react-router-dom";
import useUserStore from "../store/user.store";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar: React.FC = () => {
  const { user } = useUserStore();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/90 backdrop-blur-md border-b border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
            Yelp
          </span>
        </NavLink>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:block relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search journals, tasks..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 text-sm transition-all shadow-sm hover:border-gray-300"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/journal"
            className={({ isActive }) =>
              `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            Journal
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            About
          </NavLink>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-1 focus:outline-none group"
            >
              {user ? (
                <>
                  <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium text-sm">
                    {user?.[0]?.toUpperCase() || (
                      <UserCircleIcon className="h-5 w-5" />
                    )}
                  </div>
                  <ChevronDownIcon className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
                </>
              ) : (
                <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <UserCircleIcon className="h-5 w-5 text-gray-500" />
                </div>
              )}
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 flex flex-col item-center justify-center space-y-1">
                {user ? (
                  <>
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Settings
                    </NavLink>
                    <NavLink
                      to="/logout"
                      className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-50 border-t border-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Logout
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 w-max text-md  text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Create Account
                    </NavLink>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
