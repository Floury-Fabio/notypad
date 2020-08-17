import { request, requestSuccess, requestFailure } from 'redux/actions/requestActions';
import { services } from 'helpers/reducersHelpers';

const callAPI = ({ callName, args }) => (
  async (dispatch) => {
    dispatch(request());
    const response = await services[callName](args);

    if (Math.floor(response.status / 100) !== 2) {
      const body = await response.json();
      dispatch(requestFailure(body.error));
    } else {
      dispatch(requestSuccess());
    }
    return response;
  }
);

export { callAPI };
