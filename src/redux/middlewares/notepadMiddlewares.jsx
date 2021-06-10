import * as notepadAPI from 'services/notepadAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import { updateNotepadsList, updateCurrentNotepad } from 'redux/actions/notepadActions';

const getNotepads = () => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.getNotepads();
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(updateNotepadsList(body));
    dispatch(requestSuccess());

    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};

const getNotepad = ({ notepadId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.getNotepad({ notepadId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(updateCurrentNotepad(body));
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

const updateNotepad = ({ title, notepadId, color }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.updateNotepad({ title, notepadId, color });
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};

const destroyNotepad = ({ notepadId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.destroyNotepad({ notepadId });

    if (!response.ok) { throw new Error('delete has fail'); }

    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};
export {
  getNotepads, getNotepad, createNotepad, updateNotepad, destroyNotepad,
};
