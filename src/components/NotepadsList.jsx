import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

import NotepadRow from 'components/NotepadRow';

const NotepadsList = ({ notepads }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>Setting</th>
      </tr>
    </thead>
    <tbody>
      {notepads.map((notepad) => <NotepadRow notepad={notepad} key={`${notepad.title}`} />)}
    </tbody>
  </Table>
);

export default NotepadsList;

NotepadsList.propTypes = {
  notepads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
