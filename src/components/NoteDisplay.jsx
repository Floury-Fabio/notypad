import React from 'react';
import PropTypes from 'prop-types';

const NoteDisplay = ({ currentNote }) => (
  <div className="container bg-green h-50">
    <div className="row">
      <p>
        {' '}
        {currentNote.title}
        {' '}
      </p>
    </div>
    <div className="row">
      <p>
        {' '}
        {currentNote.content}
        {' '}
      </p>
    </div>
  </div>
);

export default NoteDisplay;

NoteDisplay.defaultProps = {
  currentNote: {},
};

NoteDisplay.propTypes = {
  currentNote: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    notepadId: PropTypes.string,
  }),
};
