import { authRefresher } from 'helpers/reducersHelpers'
import {
  REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
} from '../types/authTypes';

const initialState = authRefresher();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        userId: action.userId,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
