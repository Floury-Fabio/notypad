import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE,
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

export {
  request, requestSuccess, requestFailure,
};
