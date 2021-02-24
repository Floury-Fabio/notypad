import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NotepadsList from 'components/NotepadsList';
import NotepadModal from 'components/NotepadModal';
import callAPI from 'redux/middlewares/requestMiddlewares';

const NotepadsPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authReducer.userId);

  const [notepads, setNotepads] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const setupNotepadsListOrAddingInvitation = () => {
    let content;
    if (notepads.length > 0) {
      content = <NotepadsList notepads={notepads} />;
    } else {
      content = <p> You haven&apos;t notepads </p>;
    }
    return content;
  };

  const fetchNotepads = useCallback(async () => {
    const response = await dispatch(callAPI({ callName: 'getNotepads' }));
    if (response.status === 200) {
      const body = await response.json();
      setNotepads(body);
    }
  }, [dispatch]);

  useEffect(() => { fetchNotepads(); }, [fetchNotepads]);
  useEffect(() => {
    const validateNotepad = async () => {
      if (data !== undefined) {
        const response = await dispatch(callAPI({ callName: 'createNotepad', args: { ...data, userId } }));
        if (response.status === 201) {
          setShow(false);
          fetchNotepads();
        }
      }
    };
    validateNotepad();
  }, [data, dispatch, userId, fetchNotepads]);

  return (
    <>
      <h3> Notepads </h3>
      {setupNotepadsListOrAddingInvitation()}
      <button type="button" className="btn btn-primary" onClick={() => setShow(true)}> New Notepad </button>
      <NotepadModal show={show} onHide={() => setShow(false)} setData={setData} />
    </>
  );
};

export default NotepadsPage;
