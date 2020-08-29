import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import * as notepadAPI from 'services/notepadAPI';
import * as noteAPI from 'services/noteAPI';

const services = {
  getNotepads: notepadAPI.getNotepads,
  createNotepad: notepadAPI.createNotepad,
  updateNotepad: notepadAPI.updateNotepad,
  deleteNotepad: notepadAPI.deleteNotepad,
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
      isAuth: true,
    };
  }
  return initialState;
};

export { authRefresher, services };
