import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import * as authAPI from 'services/authAPI';
import { loginSuccess, logoutSuccess } from 'redux/actions/authActions';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import adaptErrorMessage from 'helpers/misc';
import i18n from 'services/i18n';

const signUp = ({ email, password }) => (
  async (dispatch) => {
    dispatch(request());
    const response = await authAPI.signUp({ email, password });
    const body = await response.json();

    if (response.status !== 201) {
      const error = adaptErrorMessage(body.errors);
      dispatch(requestFailure(error));
    } else {
      dispatch(requestSuccess(i18n.t('confirmation_mail_send')));
    }
    return response.status;
  }
);

const signIn = ({ email, password }) => (
  async (dispatch) => {
    dispatch(request());
    const response = await authAPI.signIn({ email, password });
    const body = await response.json();

    if (response.status !== 201) {
      dispatch(requestFailure(body.error));
    } else {
      const token = response.headers.get('Authorization') || body.Authorization;
      Cookies.set('token', token, { sameSite: 'Lax' });
      const decodedToken = jwtDecode(token);
      dispatch(requestSuccess());
      dispatch(loginSuccess(decodedToken));
    }
    return response.status;
  }
);

const signOut = () => (
  async (dispatch) => {
    dispatch(request());
    const response = await authAPI.signOut();

    if (response.status !== 204) {
      const body = await response.json();
      dispatch(requestFailure(body.error));
    } else {
      Cookies.remove('token');
      dispatch(requestSuccess());
      dispatch(logoutSuccess());
    }
    return response.status;
  }
);

export { signIn, signUp, signOut };
