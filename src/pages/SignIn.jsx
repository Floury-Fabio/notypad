import React from 'react';
import SignInForm from 'components/SignInForm';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { notify } from 'redux/actions/requestActions';
import i18n from 'services/i18n';

const SignIn = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (new URLSearchParams(location.search).has('confirmation')) {
    dispatch(notify(i18n.t('account_activation')));
  }
  return (
    <>
      <h3 className="text-center"> Login </h3>
      <SignInForm />
    </>
  );
};

export default SignIn;
