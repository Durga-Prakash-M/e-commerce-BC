import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavbarStyles.css";
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
          <NavLink style={NavLinkStyles} to="/products/:id">
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
