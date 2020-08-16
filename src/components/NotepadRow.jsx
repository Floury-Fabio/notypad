import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const NotepadRow = ({ notepad }) => (
  <tr>
    <td>{notepad.title}</td>
    <td width="10%">
      <Button variant="primary">upd</Button>
    </td>
  </tr>
);

export default NotepadRow;

NotepadRow.propTypes = {
  notepad: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
