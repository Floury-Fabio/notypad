import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signOut } from 'redux/middlewares/authMiddlewares';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const logout = async () => {
    const code = await dispatch(signOut());
    if (code === 204) {
      history.push('/home');
    }
  };

  return (
    <>
      <h1 className="bg-secondary mb-0 text-center"> Notypad </h1>
      <nav className="navbar navbar-expand-sm bg-secondary justify-content-center">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item">
            <Link to="/home" className="nav-link"> Home </Link>
          </li>
          { isAuth && (
          <>
            <li className="nav-item">
              <Link to="/notepads" className="nav-link"> Notepads </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary" onClick={logout}> Logout </button>
            </li>
          </>
          )}
          { !isAuth && (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link"> Login </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link"> Register </Link>
            </li>
          </>
          )}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
