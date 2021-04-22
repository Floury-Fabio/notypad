import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanError } from 'redux/actions/requestActions';
import Alert from 'react-bootstrap/Alert';

const ErrorMessage = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.requestReducer.error);

  return (
    error
    && (
    <>
      <Alert variant="success" onClose={() => dispatch(cleanError())} dismissible>
        <p>
          {error}
        </p>
      </Alert>
    </>
    )
  );
};

export default ErrorMessage;
