import React from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./index.css";
import { NavLink } from 'react-router-dom';
import {Outlet} from "react-router-dom";

const Header = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear the user state
    navigate("/login"); // Redirect to the login page
  };

  return (
      <>
      <header className="bg-white shadow-md py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="logo-box">
            <NavLink to="/">
              <img
                  src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                  alt="logo"
              />
            </NavLink>
          </div>








          <div className="flex items-center space-x-6 text-gray-700">
            <ul className="flex space-x-6">
              {user ? ( // If user is logged in
                  <>
                    <li>
                      <button
                          onClick={handleLogout}
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                      >
                        Logout
                      </button>
                    </li>
                  </>
              ) : ( // If no user is logged in
                  <li>
                    <Link to="/login">LOGIN</Link>
                  </li>
              )}

            </ul>
          </div>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
  </>
  );
};

export default Header;


