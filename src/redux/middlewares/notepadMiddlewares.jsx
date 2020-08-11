import * as notepadAPI from 'services/notepadAPI';
import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';

const getNotepads = () => (
  async (dispatch) => {
    dispatch(request());
    const response = await notepadAPI.getNotepads();
    const body = await response.json();

    if (response.status !== 201) {
      dispatch(requestFailure(body.error));
    } else {
      dispatch(requestSuccess());
    }
    return response.status;
  }
);

const createNotepad = ({ title, userId }) => (
  async (dispatch) => {
    dispatch(request());
    const response = await notepadAPI.createNotepad({ title, userId });
    const body = await response.json();

    if (response.status !== 201) {
      dispatch(requestFailure(body.error));
    } else {
      dispatch(requestSuccess());
    }
    return response.status;
  }
);

export { getNotepads, createNotepad };
