import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Component/Provider/AuthProvider";
import './Header.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handalSignout = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/services">Services</NavLink></li>

    {user &&
      <>
        <li><NavLink to="/profile">profile</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      </>
    }
  </>
  return (
    <nav>
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>
            <Link to="/"><p className="font-extrabold normal-case text-2xl">Perfect <span className="text-pink-600">Weddings</span></p></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1">
              {links}
            </ul>
          </div>
          {
            user ?
              <>
                <div className="navbar-end">
                    <div className="px-2 py-2 text-xl font-bold">
                      <h2>{user.displayName}</h2>
                    </div>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li className="py-2">
                      <Link to="/profile">
                      <button className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </button>
                      </Link>
                    </li>
                   
                    <li><button className=" hover:bg-primary text-white bg-pink-600 text-center" onClick={handalSignout}>Sign out</button></li>
                  </ul>
                </div>
                </div>
              </>
              :
              <div className="navbar-end">
              <Link to="/login">
                <button className="btn btn-sm">Login/Register</button>
              </Link>
              </div>
          }

        </div>
      </div>
    </nav>

  );
};

export default Navbar;