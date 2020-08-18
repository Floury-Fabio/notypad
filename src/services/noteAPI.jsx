import Cookies from 'js-cookie';

const createNote = ({ notepadId, noteTitle, content }) => {
  const baseURL = process.env.REACT_APP_API_URL;
  const endUrl = `/api/v1/notepads/${notepadId}/notes.json`;
  const url = baseURL + endUrl;

  const data = {
    note: {
      notepad_id: notepadId,
      title: noteTitle,
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

export { createNote };
