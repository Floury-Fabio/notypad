import React from 'react';
import PropTypes from 'prop-types';

import NoteRow from 'components/NoteRow';
import { useDispatch } from 'react-redux';
import { updateCurrentNote } from 'redux/actions/noteActions';

const NotesList = ({ notes }) => {
  const dispatch = useDispatch();
  const resetNote = () => {
    dispatch(updateCurrentNote({
      title: '',
      content: '',
    }));
  };
  return (
    <div className="w-25 bg-secondary rounded p-1 d-flex flex-column">
      <ul className="list-group w-100">
        {notes.map((note) => <NoteRow note={note} key={`${note.title} ${note.id}`} />)}
      </ul>
      <button id="submit" type="submit" className="btn btn-primary mt-auto ml-auto mb-2" onClick={resetNote}>reset</button>
    </div>
  );
};

export default NotesList;

NotesList.defaultProps = {
  notes: [],
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};
