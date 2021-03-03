import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import * as noteAPI from 'services/noteAPI';

const services = {
  getNotes: noteAPI.getNotes,
  createNote: noteAPI.createNote,
  updateNote: noteAPI.updateNote,
};

const authRefresher = () => {
  let initialState;
  if (Cookies.get('token') === undefined || Cookies.get('token') === null) {
    initialState = {
      userId: null,
      isAuth: false,
    };
  } else {
    const decodedToken = jwtDecode(Cookies.get('token'));
    initialState = {
      userId: decodedToken.sub,
      exp: decodedToken.exp,
      isAuth: true,
    };
  }
  return initialState;
};

export { authRefresher, services };
