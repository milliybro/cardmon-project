import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css"

const Header = () => {
  return (
    <header className="mb-4">
      <nav className="container">
        <ul className="nav d-flex justify-content-between">
          <li className="nav-item">
            <NavLink className="nav-link"  to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/transaction">
              Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/debts">
              Debts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
