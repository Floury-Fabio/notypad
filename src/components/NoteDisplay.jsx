import React from 'react';
import PropTypes from 'prop-types';
import MarkdownView from 'react-showdown';
import 'styles/NoteDisplay.scss';

const NoteDisplay = ({ currentNote }) => {
  if (!currentNote) {
    return (
      <div className="NoteDisplay" />
    );
  }

  return (
    <div className="NoteDisplay">
      <h4 NoteDisplay-title>
        { currentNote.title }
      </h4>
      <p className="NoteDisplay-content">
        <MarkdownView markdown={currentNote.content} />
      </p>
    </div>
  );
};

export default NoteDisplay;

NoteDisplay.defaultProps = {
  currentNote: null,
};

NoteDisplay.propTypes = {
  currentNote: PropTypes.shape({
    content: PropTypes.string,
    notepadId: PropTypes.string,
    title: PropTypes.string,
  }),
};
