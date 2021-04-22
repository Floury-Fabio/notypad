import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, CLEAN_ERROR, CLEAN_NOTICE,
} from '../types/requestTypes';

const request = () => (
  {
    type: REQUEST,
  }
);

const requestSuccess = (notice = null) => (
  {
    type: REQUEST_SUCCESS,
    notice,
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

const cleanNotice = () => (
  {
    type: CLEAN_NOTICE,
  }
);

export {
  request, requestSuccess, requestFailure, cleanError, cleanNotice,
};
