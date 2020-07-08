import React, { useState, useEffect } from 'react';
import * as notepadAPI from 'services/notepadAPI';

import NotepadCreateModal from 'components/NotepadCreateModal';

const Notepads = () => {
  const [notepads, setNotepads] = useState([]);
  const [show, setShow] = useState(false);

  const fetchNotepads = async () => {
    const response = await notepadAPI.getNotepads();
    const body = await response.json();
    setNotepads(body);
  };

  useEffect(() => { fetchNotepads(); }, []);

  return (
    <>
      <h3> Notepads </h3>
      { notepads.length > 0
        ? <p> dedede </p>
        : <p> You haven&apos;t notepads </p> }
      <button type="button" className="btn btn-primary" onClick={() => setShow(true)}> New Notepad </button>
      <NotepadCreateModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Notepads;
