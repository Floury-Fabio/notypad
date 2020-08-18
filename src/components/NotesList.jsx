import React from 'react';
import PropTypes from 'prop-types';

import NoteRow from 'components/NoteRow';

const NotesList = ({ notes }) => (
  <>
    <ul className="list-group">
      {notes.map((note) => <NoteRow note={note} key={`${note.title} ${note.id}`} />)}
    </ul>
  </>
);

export default NotesList;

NotesList.defaultProps = {
  notes: [],
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};
