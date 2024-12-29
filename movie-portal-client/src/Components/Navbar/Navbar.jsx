import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';
import { CgProfile } from 'react-icons/cg';
import { ThemeContext } from '../../Provider/ThemeProvider';

const Navbar = () => {
  const { user, logOut, setUser, loading} = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    logOut();
    setUser(null);
  };

    const links = (
        <>
          <li className="text-lg flex items-center gap-2 mr-3">
            <NavLink to={"/"}  className={({ isActive }) =>
          `flex items-center gap-2 ${
            isActive
              ? theme === "light"
                ? "text-blue-600 font-bold"
                : "text-yellow-400 font-bold"
              : theme === "light"
              ? "text-gray-800"
              : "text-gray-400"
          }`
        }>
            Home
            </NavLink>
          </li>
          <li className="text-lg flex items-center gap-2 mr-3">
            <NavLink to={"/movies"}  className={({ isActive }) =>
          `flex items-center gap-2 ${
            isActive
              ? theme === "light"
                ? "text-blue-600 font-bold"
                : "text-yellow-400 font-bold"
              : theme === "light"
              ? "text-gray-800"
              : "text-gray-400"
          }`
        }>
              All Movies
            </NavLink>
          </li>
          <li className="text-lg flex items-center gap-2 mr-3">
            <NavLink to={"/add-movie"} className={({ isActive }) =>
          `flex items-center gap-2 ${
            isActive
              ? theme === "light"
                ? "text-blue-600 font-bold"
                : "text-yellow-400 font-bold"
              : theme === "light"
              ? "text-gray-800"
              : "text-gray-400"
          }`
        }>
              Add Movie
            </NavLink>
          </li>
          <li className="text-lg flex items-center gap-2 mr-3">
            <NavLink to={"/favorites"}className={({ isActive }) =>
          `flex items-center gap-2 ${
            isActive
              ? theme === "light"
                ? "text-blue-600 font-bold"
                : "text-yellow-400 font-bold"
              : theme === "light"
              ? "text-gray-800"
              : "text-gray-400"
          }`
        }>
              Favorites
            </NavLink>
          </li>
          <li className="text-lg flex items-center gap-2 mr-3">
            <NavLink to={"/best-of-2024"} className={({ isActive }) =>
          `flex items-center gap-2 ${
            isActive
              ? theme === "light"
                ? "text-blue-600 font-bold"
                : "text-yellow-400 font-bold"
              : theme === "light"
              ? "text-gray-800"
              : "text-gray-400"
          }`
        }>
            Best of 2024
            </NavLink>
          </li>
        </>
      );
    




    return (
<div className="navbar px-5 py-3 max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown z-30">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl">
            {links}
          </ul>
        </div>
        <Link to={"/"}>
              <button
        className={`btn btn-ghost lg:text-2xl font-bold ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        🎬 Movie Portal
      </button>

        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black">{links}</ul>
      </div>
      <div className="navbar-end">
      <button className="btn mr-2 border-2 border-black hidden lg:block md:block" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
      {
  loading ? (
    <Loading /> 
  ) : (
    <>
      {user && user?.email ? (
        <div className="mr-3 relative group">
          <img
            className="w-12 h-12 border-black border-2 rounded-full group-hover:opacity-75 transition-opacity duration-200"
            src={user.photoURL}
            alt=""
          />
          <span
            className="absolute top-1/2 left-[-150%] transform -translate-y-1/2 -translate-x-0 mt-2 px-2 py-1 text-base text-white bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            {user.displayName}
          </span>
        </div>
      ) : (
        <div className="text-5xl mr-3 text-black">
          <CgProfile />
        </div>
      )}
      {user && user?.email ? (
        <button
          onClick={handleLogOut}
          className="btn btn-neutral text-white transition-transform transform hover:scale-105"
        >
          Log Out
        </button>
      ) : (
        <div>
          <Link to={"/login"}>
          <button className="btn btn-success text-white transition-transform transform hover:scale-105">
            Log In
          </button>
        </Link>
        <span className='text-xl mx-4 font-bold'>Or</span>
          <Link to={"/register"}>
          <button className="btn btn-info text-white transition-transform transform hover:scale-105">
            Register
          </button>
        </Link>
        </div>
      )}
    </>
  )
}
      </div>
    </div>
  );
};

export default Navbar;