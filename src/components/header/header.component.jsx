import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import Logo from '../../assets/logo/e-school-logo.jpg'

import "./header.styles.css";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className=" bg-slate-900">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="flex-1">
          <img className="h-11 mr-3 rounded-md" src={Logo} alt="e-school-logo" />
          <span className="normal-case text-xl">E-SCHOOL</span>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered h-9"
            />
          </div>
        </div>
      </div>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start lg:hidden">
          <div className="dropdown bg-slate-900">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/courses"
                  className={`${(isActive) => (isActive ? "active" : null)}`}
                >
                  Courses
                </NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to="/faq"
                  className={`${(isActive) => (isActive ? "active" : null)}`}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={`${(isActive) => (isActive ? "active" : null)}`}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/courses"
                className={`${(isActive) => (isActive ? "active" : null)}`}
              >
                Courses
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/faq"
                className={`${(isActive) => (isActive ? "active" : null)}`}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={`${(isActive) => (isActive ? "active" : null)}`}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-900 rounded-box w-52"
              >
                <li>
                  <span className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </span>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/sign-up">Sign up</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
