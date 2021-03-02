import Cookies from 'js-cookie';

const getNotepads = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/api/v1/notepads.json';
  const url = baseURL + endUrl;

  const request = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get('token'),
    },
  };

  return fetch(url, request);
};

const getNotepad = ({ notepadId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}.json`;
  const url = baseURL + endUrl;

  const request = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get('token'),
    },
  };

  return fetch(url, request);
};

const createNotepad = ({ title, userId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = '/api/v1/notepads.json';
  const url = baseURL + endUrl;

  const data = {
    notepad: {
      title,
      user_id: userId,
    },
  };

  const request = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get('token'),
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const updateNotepad = ({ title, notepadId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}.json`;
  const url = baseURL + endUrl;

  const data = {
    notepad: {
      title,
    },
  };

  const request = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get('token'),
    },
    body: JSON.stringify(data),
  };

  return fetch(url, request);
};

const destroyNotepad = ({ notepadId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}.json`;
  const url = baseURL + endUrl;

  const request = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get('token'),
    },
  };

  return fetch(url, request);
};

export {
  getNotepads, getNotepad, createNotepad, updateNotepad, destroyNotepad,
};
