import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, CLEAN_ERROR,
} from '../types/requestTypes';

const request = () => (
  {
    type: REQUEST,
  }
);

const requestSuccess = () => (
  {
    type: REQUEST_SUCCESS,
  }
);

const requestFailure = (error) => (
  {
    type: REQUEST_FAILURE,
    error,
  }
);

const cleanError = () => (
  {
    type: CLEAN_ERROR,
  }
);

export {
  request, requestSuccess, requestFailure, cleanError,
};
