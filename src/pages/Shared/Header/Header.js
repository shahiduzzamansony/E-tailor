import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authprovider/AuthProvider";
import logo from "../../../images/favicon.jpg";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allservices">Services</Link>
            </li>
            <li>
              <Link to="/addservice">Add Service</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user ? (
              <li>
                <Link to="/myreviews">My Reviews</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <img className="h-16 lg:ml-6" src={logo} alt="logo"></img>
        <Link
          href="/"
          className="btn btn-ghost text-3xl text-blue-500 font-bold pl-0"
        >
          E-Tailor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allservices">Services</Link>
          </li>
          <li>
            <Link to="/addservice">Add Service</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user ? (
            <li>
              <Link to="/myreviews">My Reviews</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center flex-col-reverse md:flex-row gap-2">
            <p className="mr-3">
              {user.displayName ? user.displayName : user.email}
            </p>
            <Link onClick={logout} className="btn btn-primary">
              log Out
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
