import Cookies from 'js-cookie';

const getNotepads = ({ userId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = 'api/v1/notepads.json';
  const url = baseURL + endUrl;

  const data = {
    userId,
  };

  const request = {
    method: 'get',
    headers: {
      'Content-Type': 'application/jour',
      Authorization: Cookies.get('token'),
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

export { getNotepads }
