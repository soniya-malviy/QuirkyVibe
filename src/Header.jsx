import React, { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa"; // Add FaUser for the profile icon
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./index.css";
import { Outlet } from "react-router-dom";

const Header = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menDropdownOpen, setMenDropdownOpen] = useState(false);
    const [womenDropdownOpen, setWomenDropdownOpen] = useState(false);
    const [menItems, setMenItems] = useState([]);
    const [womenItems, setWomenItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    const fetchCategoryItems = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
                {
                    headers: {
                        projectId: "f104bi07c490",
                    },
                }
            );
            const data = await response.json();
            setLoading(false);
            return data.data;
        } catch (error) {
            setLoading(false);
            console.error("Failed to fetch category items:", error);
            return [];
        }
    };

    useEffect(() => {
        if (menDropdownOpen && menItems.length === 0) {
            fetchCategoryItems().then((items) => {
                setMenItems(items);
            });
        }
        if (womenDropdownOpen && womenItems.length === 0) {
            fetchCategoryItems().then((items) => {
                setWomenItems(items);
            });
        }
    }, [menDropdownOpen, womenDropdownOpen]);

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
                    <div className="flex gap-8">
                        <div
                            className="relative group"
                            onMouseEnter={() => setMenDropdownOpen(true)}
                            onMouseLeave={() => setMenDropdownOpen(false)}
                        >
                            <h4 className="cursor-pointer">MEN</h4>
                            {menDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block z-10">
                                    {loading ? (
                                        <p className="px-4 py-2">Loading...</p>
                                    ) : (
                                        <ul>
                                            {menItems.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                        <div
                            className="relative group"
                            onMouseEnter={() => setWomenDropdownOpen(true)}
                            onMouseLeave={() => setWomenDropdownOpen(false)}
                        >
                            <h4 className="cursor-pointer">WOMEN</h4>
                            {womenDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block z-10">
                                    {loading ? (
                                        <p className="px-4 py-2">Loading...</p>
                                    ) : (
                                        <ul>
                                            {womenItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                        <h4 className="cursor-pointer">PLUS SIZE</h4>
                    </div>
                    <div>
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-72 h-8 border rounded-md px-3 py-1 text-sm border-gray-300 focus:outline-none focus:border-yellow-400"
                        />
                    </div>

                    <div className="flex items-center space-x-6 text-gray-700">
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/cart">
                                    <FaShoppingBag className="text-2xl" />
                                </Link>
                            </li>
                            {user ? (
                                // If user is logged in
                                <div
                                    className="relative"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                >
                                    <FaUser className="text-2xl cursor-pointer" /> {/* Profile Icon */}
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                            <ul className="py-1">
                                                <li
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => navigate("/orders")}
                                                >
                                                    My Orders
                                                </li>
                                                <li
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => navigate("/profile")}
                                                >
                                                    My Profile
                                                </li>
                                                <li
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // If no user is logged in
                                <li>
                                    <Link to="/login" className="hover:underline">
                                        LOGIN
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
