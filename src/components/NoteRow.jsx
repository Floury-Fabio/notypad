import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getNotepad as reloadCurrentNotepad } from 'redux/middlewares/notepadMiddlewares';
import { getNote as reloadCurrentNote, destroyNote } from 'redux/middlewares/noteMiddlewares';

import { BsXCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const NoteRow = ({ note }) => {
  const dispatch = useDispatch();

  const selectNote = async (event) => {
    if (event.keyCode === 229 || event.type === 'click') {
      dispatch(reloadCurrentNote({ notepadId: note.notepad_id, noteId: note.id }));
    }
  };

  const removeNote = async (event) => {
    if (event.keyCode === 229 || event.type === 'click') {
      const response = await dispatch(destroyNote({ notepadId: note.notepad_id, noteId: note.id }));
      if (response) { dispatch(reloadCurrentNotepad({ notepadId: note.notepad_id })); }
    }
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div role="button" tabIndex="-1" onClick={selectNote} onKeyDown={selectNote}>
          {note.title}
        </div>
        <IconContext.Provider value={{ color: 'red', className: 'global-class-name' }}>
          <div role="button" tabIndex="0" onClick={removeNote} onKeyDown={removeNote}>
            <BsXCircle />
          </div>
        </IconContext.Provider>
      </li>
    </>
  );
};

export default NoteRow;

NoteRow.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    notepad_id: PropTypes.number,
  }).isRequired,
};
