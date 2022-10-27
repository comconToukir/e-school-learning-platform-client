import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { ThemeContext } from "../../contexts/theme.context";
import { signOutUser } from "../../utils/firebase.utils";
import Logo from "../../assets/logo/e-school-logo.jpg";

import "./header.styles.css";

const Header = () => {
  const { user, setLoading } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const userLogOut = () => {
    setLoading(true);
    signOutUser();
  };

  const toggleTheme = () => {
    if (theme === "cupcake") {
      setTheme("black");
    } else if (theme === "black") {
      setTheme("cupcake");
    }
  }

  return (
    <nav className="bg-base-300 shadow-sm">
      <div className="navbar max-w-screen-xl mx-auto pt-5">
        <div className="flex-1">
          <Link to="/" className="flex items-center">
            <img
              className="h-11 mr-3 rounded-md"
              src={Logo}
              alt="e-school-logo"
            />
            <span className="normal-case text-xl lg:text-3xl font-semibold">E-SCHOOL</span>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control mr-3">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered h-9 rounded-sm w-40 md:w-56 lg:w-64"
            />
          </div>
          <label className="swap swap-rotate">
            <input type="checkbox" aria-label="toggle-theme" onChange={toggleTheme} />

            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start lg:hidden">
          <div className="dropdown bg-base-300">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
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
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-3">
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
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar tooltip tooltip-left hover:bg-transparent"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full shadow-sm">
                  <img src={user.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <span>Settings</span>
                </li>
                <li>
                  <span onClick={userLogOut}>Logout</span>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="menu menu-horizontal p-0 gap-3">
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
