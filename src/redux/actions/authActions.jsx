import {
  REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
} from '../types/authTypes';

const request = () => (
  {
    type: REQUEST,
  }
);

const loginSuccess = (decodedToken) => (
  {
    type: LOGIN_SUCCESS,
    userType: decodedToken.scp,
  }
);

const loginFailure = (error) => (
  {
    type: LOGIN_FAILURE,
    error,
  }
);

const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

export {
  request, loginSuccess, loginFailure, logoutSuccess,
};
