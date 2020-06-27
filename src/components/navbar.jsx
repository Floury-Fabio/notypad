import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm bg-light">

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/notepads" className="nav-link"> Notepads </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link"> Login </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link"> Register </Link>
      </li>
    </ul>

  </nav>
);
export default Navbar;
