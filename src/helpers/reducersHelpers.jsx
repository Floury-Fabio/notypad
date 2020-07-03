import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const authRefresher = () => {
  let initialState;
  if (Cookies.get('token') === undefined || Cookies.get('token') === null) {
    initialState = {
      loading: false,
      userId: null,
      isAuth: false,
      error: null,
    };
  } else {
    const decodedToken = jwtDecode(Cookies.get('token'));
    initialState = {
      loading: false,
      userId: decodedToken.sub,
      isAuth: true,
      error: null,
    };
  }
  return initialState;
};

export { authRefresher }
