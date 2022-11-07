import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/favicon.jpg";

const Header = () => {
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
              <Link to="/">
                <a href>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <a href>Services</a>
              </Link>
            </li>
          </ul>
        </div>
        <img className="h-16 ml-6" src={logo} alt="logo"></img>
        <a href className="btn btn-ghost text-3xl text-blue-500 font-bold pl-0">
          E-Tailor
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">
              <a href>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <a href>Services</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <a href className="btn">
            Log in
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;