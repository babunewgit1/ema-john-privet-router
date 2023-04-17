import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <header className="bg-[#1C2B35] py-5">
      <div className="max-w-7xl m-auto flex items-center justify-between">
        <div className="logo">
          <a href="/index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navlink">
          <ul className="flex text-white gap-5">
            <Link to="/order">Order</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <span>{user?.email}</span>
            <span onClick={handelLogout}>Logout</span>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
