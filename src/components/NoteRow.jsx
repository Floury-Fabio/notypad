import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { showNotepad as reloadCurrentNotepad } from 'redux/middlewares/notepadMiddlewares';
import destroyNote from 'redux/middlewares/noteMiddlewares';
import { BsXCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const NoteRow = ({ note }) => {
  const dispatch = useDispatch();
  const remove = async () => {
    const response = await dispatch(destroyNote({ notepadId: note.notepad_id, noteId: note.id }));
    if (response) { dispatch(reloadCurrentNotepad({ notepadId: note.notepad_id })); }
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <p>
          {note.title}
        </p>
        <IconContext.Provider value={{ color: 'red', className: 'global-class-name' }}>
          <div role="button" tabIndex="0" onClick={remove} onKeyDown={remove}>
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
