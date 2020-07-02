import React from 'react';

const SignInForm = () => {
  return (
<form className="form p-4 mt-3 mb-3 rounded" action="/action_page.php" onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" placeholder="Enter email" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" id="password" />
  </div>
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 

  )
}
