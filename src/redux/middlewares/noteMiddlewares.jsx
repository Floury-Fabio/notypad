import * as noteAPI from 'services/noteAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import { updateCurrentNote } from 'redux/actions/noteActions';

const getNote = ({ noteId, notepadId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await noteAPI.getNote({ noteId, notepadId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(updateCurrentNote({ title: body.title, content: body.content }));
    dispatch(requestSuccess());
    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};

const createNote = ({ notepadId, title, content }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await noteAPI.createNote({ notepadId, title, content });
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(updateCurrentNote({ title: body.title, content: body.content }));
    dispatch(requestSuccess());
    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
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

    if (!response.ok) { throw new Error(body); }

    dispatch(updateCurrentNote({ title: body.title, content: body.content }));
    dispatch(requestSuccess());
    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};
const destroyNote = ({ notepadId, noteId }) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await noteAPI.destroyNote({ notepadId, noteId });
    const body = await response.json();

    if (!response.ok) { throw new Error(body); }

    dispatch(requestSuccess());
    return true;
  } catch (error) {
    dispatch(requestFailure(error.message));
    return false;
  }
};
export {
  getNote, createNote, updateNote, destroyNote,
};
