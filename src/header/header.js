import React from "react";
import { NavLink } from "react-router-dom";
import './header.scss';

const Header = ({props}) => {
    return (
      <header className="header">
        <div className="container">
          <nav className="d-flex justify-content-end align-items-center nav">
            <NavLink to="/" className="home-link" activeClassName="active">Main</NavLink>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
            <NavLink to="/register" activeClassName="active">Registration</NavLink>
          </nav>
        </div>
      </header>
    )
}

export default Header;
