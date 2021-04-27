import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, CLEAN_ERROR, CLEAN_NOTICE, NOTIFY,
} from '../types/requestTypes';

const request = () => (
  {
    type: REQUEST,
  }
);

const notify = (notice) => (
  {
    type: NOTIFY,
    notice,
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
  request, requestSuccess, requestFailure, cleanError, cleanNotice, notify,
};
