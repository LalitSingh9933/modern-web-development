import React from "react";
import LogoImg from "../assets/lion.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur border-b shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo Section */}
                    <Link to='/'>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img
                                src={LogoImg}
                                alt="Logo"
                                className="w-9 h-9 object-contain"
                            />
                            <h1 className="text-xl font-bold text-gray-800">
                                Hello<span className="text-blue-600">Blog</span>
                            </h1>
                        </div>
                    </Link>
                    {/* Desktop Search */}
                    <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="bg-transparent w-full outline-none text-sm"
                        />
                        <FaSearch className="text-gray-500 cursor-pointer hover:text-blue-600 transition" />
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                        <Link to="/blog/add">
                            <li className="hover:text-blue-600 cursor-pointer transition">Create Blog</li>
                        </Link>
                        <li className="hover:text-blue-600 cursor-pointer transition">Profile</li>
                        <Link to="/login">
                            <li className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                                Login
                            </li>
                        </Link>

                    </ul>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden text-2xl cursor-pointer">
                        ☰
                    </div>
                </div>
            </div>

            {/* Mobile Menu (UI Only) */}
            <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 shadow-sm">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="bg-transparent w-full outline-none text-sm"
                    />
                    <FaSearch className="text-gray-500" />
                </div>

                <p className="hover:text-blue-600 cursor-pointer">Home</p>
                <p className="hover:text-blue-600 cursor-pointer">Blogs</p>
                <p className="hover:text-blue-600 cursor-pointer">About</p>
                <p className="font-semibold text-blue-600 cursor-pointer">Login</p>
            </div>
        </nav>
    );
}

export default NavBar;
