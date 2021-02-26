import * as noteAPI from 'services/noteAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';

const destroyNotepad = ({ notepadId, noteId }) => async (dispatch) => {
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
export default destroyNotepad;
