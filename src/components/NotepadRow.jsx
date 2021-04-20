import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { destroyNotepad } from 'redux/middlewares/notepadMiddlewares';
import NotepadModal from 'components/NotepadModal';

const NotepadRow = ({ notepad }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  const removeNotepad = async () => {
    await dispatch(destroyNotepad({ NotepadID: notepad.id }));
    setShouldHide(true);
  };

  return (
    <>
      <tr className={shouldHide ? 'd-none' : ''}>
        <td>
          <Link to={`/notepad/${notepad.id}`}>
            {notepad.title}
          </Link>
        </td>
        <td width="10%">
          <Button id={`update-btn-${notepad.id}`} variant="primary" onClick={() => setShow(true)}>upd</Button>
          <Button variant="danger" onClick={removeNotepad}>del</Button>
        </td>
      </tr>
      <NotepadModal
        show={show}
        setShow={setShow}
        onHide={() => setShow(false)}
        oldTitle={notepad.title}
        action="update"
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
