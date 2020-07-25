import React from 'react';
import PropTypes from 'prop-types';

const NotepadRow = ({ notepad }) => (
  <tr>
    <td>{notepad.title}</td>
  </tr>
);

export default NotepadRow;

NotepadRow.propTypes = {
  notepad: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
