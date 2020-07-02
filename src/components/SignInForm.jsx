import React from 'react';

const SignInForm = () => {
  const submit = () => {

  };

  return (
    <form className="form p-4 mt-3 mb-3 rounded" action="/action_page.php" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="email">
          Email address:
          <input id="email" type="email" className="form-control" placeholder="Enter email" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pwd">
          Password:
          <input type="password" className="form-control" placeholder="Enter password" id="password" />
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

export default SignInForm;
