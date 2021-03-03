import React from 'react';

const adaptErrorMessage = (errors) => {
  if (!(errors instanceof Object)) {
    return errors;
  }

  let message = '';
  Object.entries(errors).forEach(([key, value]) => {
    value.forEach((el) => {
      message = (
        <>
          {message}
          {`${key} ${el}`}
          <br />
        </>
      );
    });
  });
  return message;
};

export default adaptErrorMessage;
