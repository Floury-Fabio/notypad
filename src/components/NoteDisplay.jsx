import React from 'react';
import PropTypes from 'prop-types';
import MarkdownView from 'react-showdown';

const NoteDisplay = ({ currentNote }) => (
  <div className="h-50 mb-2 bg-secondary rounded p-2">
    <p id="note-title-display">
      {currentNote.title}
    </p>
    <p id="note-content-display">
      <MarkdownView markdown={currentNote.content} />
    </p>
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
