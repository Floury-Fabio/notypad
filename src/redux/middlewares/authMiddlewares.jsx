import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
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
      const decodedToken = jwtDecode(response.headers.get('Authorization'));
      dispatch(loginSuccess(decodedToken));
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
      dispatch(loginFailure(body.error));
    } else {
      Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
      const decodedToken = jwtDecode(response.headers.get('Authorization'));
      dispatch(loginSuccess(decodedToken));
    }
  }
);

export { signIn, signUp };
