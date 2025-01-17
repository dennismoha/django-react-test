import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logout } from "../../features/auth/auth-slice";

export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <nav className="bg-blue-600 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Left Side: Menu Title */}
          <div className="text-white text-2xl font-bold">
            <Link to="/">MyApp</Link>
            {isAuthenticated ? (
              <>
              
              <Link
                to="/new-details"
                className="text-white hover:text-blue-300 transition duration-200 p-3"
              >
                new patient record
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-300 transition duration-200 p-3"
              >
                About
              </Link>
              </>
             
            ) : null}
          </div>

          {/* Right Side: Sign up / Sign out Menu */}
          {isAuthenticated ? (
            <div className="hidden md:flex space-x-4">
              <Link
                to="/details"
                className="text-white hover:text-blue-300 transition duration-200"
              >
                Details
              </Link>
              <button
                onClick={logoutHandler}
                className="text-white hover:text-blue-300 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <Link
                to="/signup"
                className="text-white hover:text-blue-300 transition duration-200"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="text-white hover:text-blue-300 transition duration-200"
              >
                Sign In
              </Link>
            </div>
          )}
   

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-600 p-4">
            <Link
              to="/signup"
              className="block text-white hover:text-blue-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="block text-white hover:text-blue-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
}


