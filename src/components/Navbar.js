import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavbarStyles.css";
import Cart from "./cart/Cart";
const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink style={NavLinkStyles} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={NavLinkStyles} to="/products">
            Product
          </NavLink>
        </li>
      </ul>
      <Cart />
    </nav>
  );
};

export default Navbar;
