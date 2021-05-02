import React from 'react';
import PropTypes from 'prop-types';
import CardDeck from 'react-bootstrap/CardDeck';

import NotepadCard from 'components/NotepadCard';

const NotepadsList = ({ notepads }) => (
  <CardDeck className="justify-content-center mr-0">
    {notepads.map((notepad) => <NotepadCard notepad={notepad} key={`${notepad.title} ${notepad.id}`} />)}
  </CardDeck>
);

export default NotepadsList;

NotepadsList.propTypes = {
  notepads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
