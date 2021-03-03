import { authRefresher } from 'helpers/reducersHelpers';
import {
  LOGIN_SUCCESS, LOGOUT_SUCCESS,
} from '../types/authTypes';

const initialState = authRefresher();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userId: action.userId,
        exp: action.exp,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
