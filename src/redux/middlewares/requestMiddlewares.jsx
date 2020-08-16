import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import { services } from 'helpers/reducersHelpers';

const callAPI = ({ callName, args }) => (
  async (dispatch) => {
    dispatch(request());
    const response = await services[callName](args);
    const body = await response.json();

    if (response.status !== 201) {
      dispatch(requestFailure(body.error));
    } else {
      dispatch(requestSuccess());
    }
    return response.status;
  }
);

export { callAPI };
