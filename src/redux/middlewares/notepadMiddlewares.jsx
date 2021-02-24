import Cookies from 'js-cookie';

import * as notepadAPI from 'services/notepadAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import updateNotepadsList from 'redux/actions/notepadActions';

const getNotepads = () => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.getNotepads();
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(updateNotepadsList(body));
    Cookies.set('notepadsList', body, { sameSite: 'lax' });

    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};

const createNotepad = ({ title, userId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.createNotepad({ title, userId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};

export { getNotepads, createNotepad };
