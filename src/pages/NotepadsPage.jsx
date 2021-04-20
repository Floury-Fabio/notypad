import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NotepadModal from 'components/NotepadModal';
import NotepadsList from 'components/NotepadsList';
import { getNotepads } from 'redux/middlewares/notepadMiddlewares';

const NotepadsPage = () => {
  const dispatch = useDispatch();
  const notepadsList = useSelector((state) => state.notepadReducer.notepadsList);

  const [show, setShow] = useState(false);
  const fetchNotepads = async () => {
    await dispatch(getNotepads());
  };

  useEffect(() => { fetchNotepads(); }, []);

  return (
    <>
      <h3> Notepads </h3>
      {notepadsList && notepadsList.length > 0
        ? <NotepadsList notepads={notepadsList} />
        : <p> You haven&apos;t notepads </p>}
      <button type="button" className="btn btn-primary" onClick={() => setShow(true)}> New Notepad </button>
      <NotepadModal show={show} setShow={setShow} onHide={() => setShow(false)} action="create" />
    </>
  );
};

export default NotepadsPage;
