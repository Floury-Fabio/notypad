import * as noteAPI from 'services/noteAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import updateCurrentNote from 'redux/actions/noteActions';

const createNote = ({ notepadId, title, content }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await noteAPI.createNote({ notepadId, title, content });
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(updateCurrentNote(body));
    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};

const updateNote = ({
  notepadId, id, title, content,
}) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await noteAPI.updateNote({
      notepadId, id, title, content,
    });
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(updateCurrentNote(body));
    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};
const destroyNote = ({ notepadId, noteId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await noteAPI.destroyNote({ notepadId, noteId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body.error); }

    dispatch(requestSuccess());
    return true;
  } catch (errorMessage) {
    dispatch(requestFailure(errorMessage));
    return false;
  }
};
export { createNote, updateNote, destroyNote };
