import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';
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
<li className="text-lg flex items-center gap-2 mr-3 text-white">
  <NavLink
    to="/"
  >
    Home
  </NavLink>
</li>

          <li className="text-lg flex items-center gap-2 mr-3 text-white">
            <NavLink to={"/movies"}  
    // className={({ isActive }) => {
    //   const baseClasses = "transition-all duration-200";
    //   const activeClasses = "bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-700";
    //   const inactiveClasses = "text-white hover:bg-slate-200 hover:text-black";
  
    //   return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    // }}
          >
              All Movies
            </NavLink>
          </li>

{
  user && user.email ? <>
            <li className="text-lg flex items-center gap-2 mr-3 text-white">
            <NavLink to={"/add-movie"} 
    // className={({ isActive }) => {
    //   const baseClasses = "transition-all duration-200";
    //   const activeClasses = "bg-teal-700 text-white px-4 py-2 rounded";
    //   const inactiveClasses = "text-white hover:bg-slate-200 hover:text-black";
  
    //   return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    // }}
          >
              Add Movie
            </NavLink>
          </li>
          <li className="text-lg flex items-center gap-2 mr-3 text-white">
            <NavLink to={"/favorites"}
    // className={({ isActive }) => {
    //   const baseClasses = "transition-all duration-200";
    //   const activeClasses = "bg-teal-700 text-white px-4 py-2 rounded";
    //   const inactiveClasses = "text-white hover:bg-slate-200 hover:text-black";
  
    //   return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    // }}
          >
              My Favorites
            </NavLink>
          </li>
  
  </>:""
}

          <li className="text-lg flex items-center gap-2 mr-3 text-white">
            <NavLink to={"/best-of-2024"} 
    // className={({ isActive }) => {
    //   const baseClasses = "transition-all duration-200";
    //   const activeClasses = "bg-teal-700 text-white px-4 py-2 rounded";
    //   const inactiveClasses = "text-white hover:bg-slate-200 hover:text-black";
  
    //   return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    // }}
          >
            Best of 2024
            </NavLink>
          </li>
        </>
      );
    
    return (
<div className="navbar px-5 py-3 max-w-screen-2xl mx-auto w-11/12">
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
        className={`btn btn-ghost lg:text-2xl font-bold text-white`}
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
            className="w-12 h-12 rounded-full group-hover:opacity-75 transition-opacity duration-200"
            src={user.photoURL}
            referrerPolicy="no-referrer"
            alt=""
          />
          <span
            className="absolute top-1/2 left-[-150%] transform -translate-y-1/2 -translate-x-0 mt-2 px-2 py-1 text-base text-white bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            {user.displayName}
          </span>
        </div>
      ) : ''}
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