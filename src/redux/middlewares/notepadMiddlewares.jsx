import * as notepadAPI from 'services/notepadAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import { updateNotepadsList, updateCurrentNotepad } from 'redux/actions/notepadActions';

const getNotepads = () => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.getNotepads();
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(updateNotepadsList(body));
    dispatch(requestSuccess());

    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};

const getNotepad = ({ notepadId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.getNotepad({ notepadId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(updateCurrentNotepad(body));
    dispatch(requestSuccess());

    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};

const createNotepad = ({ title, userId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.createNotepad({ title, userId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(requestSuccess());
    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};

const updateNotepad = ({ color, notepadId, title }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.updateNotepad({ color, notepadId, title });
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(requestSuccess());
    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
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
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};
export {
  getNotepads, getNotepad, createNotepad, updateNotepad, destroyNotepad,
};
