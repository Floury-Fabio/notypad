import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/middlewares/authMiddlewares';
import { displayError } from 'redux/actions/requestActions';
import useInputChange from 'customHooks/useInputChange';
import ReCAPTCHA from 'react-google-recaptcha';
import i18n from 'services/i18n';

const SignInForm = () => {
  const [input, handleInputChange] = useInputChange();
  const [captchaValue, setCaptchaValue] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const validCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!captchaValue && !window.Cypress) {
      dispatch(displayError(i18n.t('captchaValidation')));
      return;
    }

    const code = await dispatch(signIn(input));
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
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_CAPTCHA_KEY}
        onChange={validCaptcha}
      />
      <button type="submit" data-test="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default SignInForm;
