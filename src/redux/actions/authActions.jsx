import {
  LOGIN_SUCCESS, LOGOUT_SUCCESS,
} from '../types/authTypes';

const loginSuccess = (decodedToken) => (
  {
    type: LOGIN_SUCCESS,
    userId: decodedToken.sub,
    exp: decodedToken.exp,
  }
);

const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

export {
  loginSuccess, logoutSuccess,
};
