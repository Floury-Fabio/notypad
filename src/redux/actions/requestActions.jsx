import {
  REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, CLEAN_ERROR, CLEAN_NOTICE, NOTIFY, DISPLAY_ERROR,
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

const displayError = (error) => (
  {
    type: DISPLAY_ERROR,
    error,
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
  request, requestSuccess, requestFailure, cleanError, cleanNotice, notify, displayError,
};
