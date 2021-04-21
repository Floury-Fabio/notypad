import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/middlewares/authMiddlewares';
import useInputChange from 'customHooks/useInputChange';

const SignUpForm = () => {
  const [input, handleInputChange] = useInputChange();
  const history = useHistory();
  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    const code = await dispatch(signUp(input));
    if (code === 201) {
      history.push('/home');
    }
  };

  return (
    <form className="form p-4 mt-3 mb-3 rounded" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="email">
          Email address:
          <input id="email" name="email" type="email" data-test="email" className="form-control" placeholder="Enter email" onChange={handleInputChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pwd">
          Password:
          <input id="password" name="password" type="password" data-test="password" className="form-control" placeholder="Enter password" onChange={handleInputChange} />
        </label>
      </div>
      <div className="form-group form-check">
        <label htmlFor="rememberMe" className="form-check-label">
          <input id="rememberMe" className="form-check-input" type="checkbox" />
          Remember me
        </label>
      </div>
      <button type="submit" data-test="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SignUpForm;
