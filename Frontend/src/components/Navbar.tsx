import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { CiLogout } from "react-icons/ci";
import { toast } from "react-toastify";
import { apiUrl } from "@/pages/Login";
import axios from "axios";
import { logout } from "@/redux/userSlice";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    // /log-out
    try {
      const res = await axios.post(
        `${apiUrl}/api/auth/log-out`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("RES :", res);
      if (res.data.status === "success") {
        toast.success(`${res?.data?.message}`);
        navigate("/");
        dispatch(logout());
      }
    } catch (error: any) {
      console.log("ERROR :", error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.message;
        toast.error(`❌ ${errMessage}`);
      } else {
        toast.error("❌ An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }

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
              to="/create"
              className="bg-stone-800 py-1 px-2 rounded text-white text-sm"
            >
              Upload
            </Link>
          )}
          <p>{user?.username}</p>
          <button onClick={handleLogout} disabled={isLoading}>
            <CiLogout size={19} />
          </button>
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
    </header>
  );
}
