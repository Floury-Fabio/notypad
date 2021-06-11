import React from 'react';
import PropTypes from 'prop-types';

import NoteRow from 'components/NoteRow';
import { useDispatch } from 'react-redux';
import { updateCurrentNote } from 'redux/actions/noteActions';

import 'styles/NotesList.scss';

const NotesList = ({ notes }) => {
  const dispatch = useDispatch();
  const resetNote = () => {
    dispatch(updateCurrentNote({
      title: '',
      content: '',
    }));
  };
  return (
    <div className="NotesList">
      <ul className="NotesList-group list-group">
        {notes.map((note) => <NoteRow note={note} key={`${note.title} ${note.id}`} />)}
      </ul>
      <button type="submit" className="NotesList-reset-button btn btn-primary" onClick={resetNote}>reset</button>
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
