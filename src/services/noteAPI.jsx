import Cookies from 'js-cookie';

const getNotes = ({ notepadId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}/notes.json`;
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

const getNote = ({ noteId, notepadId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}/notes/${noteId}.json`;
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

const createNote = ({ notepadId, title, content }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}/notes.json`;
  const url = baseURL + endUrl;

  const data = {
    note: {
      notepad_id: notepadId,
      title,
      content,
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

const updateNote = ({ notepadId, id, content }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}/notes/${id}.json`;
  const url = baseURL + endUrl;

  const data = {
    note: {
      content,
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

const destroyNote = ({ notepadId, noteId }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}/notes/${noteId}.json`;
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
  getNotes, getNote, createNote, updateNote, destroyNote,
};
