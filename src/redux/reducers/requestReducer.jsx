import { requestRefresher } from 'helpers/reducersHelpers';
import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE,
} from '../types/requestTypes';

const initialState = requestRefresher();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
