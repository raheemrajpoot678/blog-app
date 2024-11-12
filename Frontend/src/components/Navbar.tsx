import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <header className="flex fixed left-0 w-full top-0 items-center justify-between h-20 bg-white shadow-sm px-4 sm:px-10 md:px-12 lg:px-16 z-50">
      <div className="flex justify-between gap-16">
        <div className="flex items-center gap-3 text-2xl font-semibol">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-14" />
          </Link>
        </div>

        {/* Desktop Nav NavLinks */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Desktop Action Buttons */}
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          {user?.role === "admin" && (
            <Link
              to="/dashboard"
              className="bg-stone-800 py-1 px-2 rounded text-white text-sm"
            >
              Dashboard
            </Link>
          )}
          <p>{user?.username}</p>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-black font-semibold rounded px-4 py-2 border  transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-black text-white font-semibold px-4 py-2 rounded hover:bg-stone-900 transition"
          >
            Register
          </Link>
        </div>
      )}
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-8 h-8 text-stone-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Nav NavLinks */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 h-full w-[60%] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col items-start p-6 gap-y-4 gap-6 font-medium">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-black text-white font-semibold px-4 py-2 rounded hover:bg-stone-900 transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
