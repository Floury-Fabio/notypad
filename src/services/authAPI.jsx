import Cookies from 'js-cookie';

const signUp = ({ email, password }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/users.json';
  const url = baseURL + endUrl;

  const data = {
    user: {
      email,
      password,
    },
  };

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const signIn = ({ email, password }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/users/sign_in.json';
  const url = baseURL + endUrl;

  const data = {
    user: {
      email,
      password,
    },
  };

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const signOut = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/users/sign_out.json';
  const url = baseURL + endUrl;

  const request = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/jour',
      Authorization: Cookies.get('token'),
    },
  };

  return fetch(url, request);
};

export { signUp, signIn, signOut };
