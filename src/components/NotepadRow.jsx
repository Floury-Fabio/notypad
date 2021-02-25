import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import callAPI from 'redux/middlewares/requestMiddlewares';
import NotepadModal from 'components/NotepadModal';

const NotepadRow = ({ notepad }) => {
  const [show, setShow] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  const removeNotepad = async () => {
    setShouldHide(true);
  };

  return (
    <>
      <tr className={shouldHide ? 'd-none' : ''}>
        <td>
          <Link to={`/notepad/${notepad.id}`}>
            { notepad.title}
          </Link>
        </td>
        <td width="10%">
          <Button variant="primary" onClick={() => setShow(true)}>upd</Button>
          <Button variant="danger" onClick={removeNotepad}>del</Button>
        </td>
      </tr>
      <NotepadModal
        show={show}
        onHide={() => setShow(false)}
        oldTitle={notepad.title}
        notepadId={notepad.id}
      />
    </>
  );
};
export default NotepadRow;

NotepadRow.propTypes = {
  notepad: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
