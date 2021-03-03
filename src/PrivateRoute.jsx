import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect, Route } from 'react-router-dom';
import { logoutSuccess } from 'redux/actions/authActions';

const PrivateRoute = ({ children }) => {
  const exp = useSelector((state) => state.authReducer.exp);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  if (exp * 1000 < Date.now()) {
    Cookies.remove('token');
    dispatch(logoutSuccess());
    history.push('/home');
  }
  return (
    <Route
      render={({ location }) => (isAuth
        ? (children)
        : (<Redirect to={{ pathname: '/login', state: { from: location } }} />))}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
