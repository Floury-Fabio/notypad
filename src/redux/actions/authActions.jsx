import {
  REQUEST, LOGIN_SUCCESS, REQUEST_FAILURE, LOGOUT_SUCCESS,
} from '../types/authTypes';

const request = () => (
  {
    type: REQUEST,
  }
);

const loginSuccess = (decodedToken) => (
  {
    type: LOGIN_SUCCESS,
    userId: decodedToken.sub,
  }
);

const requestFailure = (error) => (
  {
    type: REQUEST_FAILURE,
    error,
  }
);

const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

export {
  request, loginSuccess, requestFailure, logoutSuccess,
};
