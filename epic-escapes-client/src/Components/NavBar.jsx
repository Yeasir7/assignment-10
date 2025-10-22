import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // console.log(user.photoURL);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to="/allSpot"
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to="/addSpot"
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
          to="/myList"
        >
          My List
        </NavLink>
      </li>
    </>
  );
  const defaultPhoto =
    "https://i.ibb.co.com/sJgW3Zqf/Gemini-Generated-Image-od6ybmod6ybmod6y.png";
  return (
    <div>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Epic Escapes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || defaultPhoto} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleSignOut}>Sign Out</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login" className="btn btn-outline btn-info">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
