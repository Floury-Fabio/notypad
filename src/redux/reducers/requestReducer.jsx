import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, CLEAN_ERROR, CLEAN_NOTICE,
} from '../types/requestTypes';

const initialState = {
  loading: false,
  notice: null,
  error: null,
};

const requestReducer = (state = initialState, action) => {
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
        notice: action.notice,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CLEAN_NOTICE:
      return {
        ...state,
        error: null,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default requestReducer;
