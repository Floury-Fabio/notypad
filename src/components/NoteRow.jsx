import React from 'react';
import PropTypes from 'prop-types';

const NoteRow = ({ note }) => (
  <>
    <li className="list-group-item">
      {note.title}
    </li>
  </>
);

export default NoteRow;

NoteRow.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
