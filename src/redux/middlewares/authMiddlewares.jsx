import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import * as authAPI from 'services/authAPI';
import { request, loginSuccess, loginFailure } from 'redux/actions/authActions';

const signUp = ({ email, password }) => (
  async (dispatch) => {
    dispatch(request());
    const response = await authAPI.signUp({ email, password });
    const body = await response.json();

    if (response.status !== 201) {
      dispatch(loginFailure(body.errors));
    } else {
      Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
      const decodedToken = jwt_decode(response.headers.get('Authorization'));
      dispatch(loginSuccess(decodedToken));
    }
  }
);

const signIn = (email, password, type) => (
  async (dispatch) => {
    dispatch(request());
    const response = await authAPI.signUp(email, password, type);
    const body = await response.json();

    if (response.status !== 201) {
      dispatch(loginFailure(body.error));
    } else {
      Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
      const decodedToken = jwt_decode(response.headers.get('Authorization'));
      dispatch(loginSuccess(decodedToken));
    }
  }
);

export { signIn, signUp };
