import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInputChange from 'customHooks/useInputChange';
import { createNote, updateNote } from 'redux/middlewares/noteMiddlewares';
import { updateCurrentNote } from 'redux/actions/noteActions';

const RedactNote = ({ currentNote, notepadId }) => {
  const [input, handleInputChange] = useInputChange({ ...currentNote });
  const dispatch = useDispatch();

  const submit = async () => {
    if (currentNote.title === input.noteTitle) {
      await dispatch(updateNote({ notepadId, ...input }));
    } else {
      await dispatch(createNote({ notepadId, ...input }));
    }
  };

  useEffect(() => {
    dispatch(updateCurrentNote({ title: input.title, content: input.content }));
  },
  [input]);

  return (
    <>
      <div className="form-group">
        <label htmlFor="noteTitle">
          Title
          <input id="noteTitle" name="noteTitle" type="text" className="form-control" placeholder="Title" value={currentNote.title} onChange={handleInputChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="content">
          Content
          <textarea id="content" name="content" className="form-control" placeholder="Content" value={currentNote.content} onChange={handleInputChange} />
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
    </>
  );
};

export default RedactNote;

RedactNote.defaultProps = {
  currentNote: {},
};

RedactNote.propTypes = {
  currentNote: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    notepadId: PropTypes.string,
  }),
  notepadId: PropTypes.number.isRequired,
};
