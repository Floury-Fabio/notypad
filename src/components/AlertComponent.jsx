import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanError } from 'redux/actions/requestActions';
import Alert from 'react-bootstrap/Alert';

const AlertComponent = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.requestReducer.error);

  const errorMessage = () => {
    let content;
    if (error !== null) {
      content = (
        <Alert variant="danger" onClose={() => dispatch(cleanError())} dismissible>
          <p>
            {error.message}
          </p>
        </Alert>
      );
    }
    return content;
  };

  return (
    <>
      {errorMessage()}
    </>
  );
};

export default AlertComponent;
