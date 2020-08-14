import React from 'react';

const adaptErrorMessage = (errors) => {
  console.log(Object.entries(errors));
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

export { adaptErrorMessage };
