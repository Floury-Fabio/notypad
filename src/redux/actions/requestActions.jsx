import {
  REQUEST, REQUEST_FAILURE,
} from '../types/requestTypes';

const request = () => (
  {
    type: REQUEST,
  }
);

const requestFailure = (error) => (
  {
    type: REQUEST_FAILURE,
    error,
  }
);

export {
  request, requestFailure,
};
