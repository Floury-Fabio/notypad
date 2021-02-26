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

const showNotepad = ({ notepadId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.showNotepad({ notepadId });
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

const updateNotepad = ({ title, notepadId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await notepadAPI.updateNotepad({ title, notepadId });
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
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};
export {
  getNotepads, showNotepad, createNotepad, updateNotepad, destroyNotepad,
};
