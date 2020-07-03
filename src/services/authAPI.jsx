const signUp = ({ email, password }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/signup.json';
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
  const endUrl = '/login.json';
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
export { signUp, signIn };
