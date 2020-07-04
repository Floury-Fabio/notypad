import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { signOut } from 'redux/middlewares/authMiddlewares';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = async () => {
    const code = await dispatch(signOut());
    console.log(code)
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link"> Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/notepads" className="nav-link"> Notepads </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link"> Login </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link"> Register </Link>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-primary" onClick={logout}> Logout </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
