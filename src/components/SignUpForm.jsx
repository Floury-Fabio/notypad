import React, { useState } from 'react';
import { signUp } from 'redux/middlewares/authMiddlewares'
import { useInputChange } from 'customHooks/useInputChange';

const SignUpForm = () => {
  const [input, handleInputChange] = useInputChange();

  const submit = (e) => {
    e.preventDefault();
    console.log(input)
  };

  return (
    <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="email">
          Email add:
          <input id="email" type="email" className="form-control" placeholder="Enter email" onChange={handleInputChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pwd">
          Password:
          <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={handleInputChange} />
        </label>
      </div>
      <div className="form-group form-check">
        <label htmlFor="rememberMe" className="form-check-label">
          <input id="rememberMe" className="form-check-input" type="checkbox" />
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SignUpForm;
