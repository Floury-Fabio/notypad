import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from 'redux/middlewares/noteMiddlewares';
import { updateCurrentNote } from 'redux/actions/noteActions';
import searchNoteWithTitle from 'helpers/notepadHelpers';
import { getNotepad as reloadNotepad } from 'redux/middlewares/notepadMiddlewares';

import 'styles/RedactNote.scss';

const RedactNote = ({ currentNote, notepadId }) => {
  const dispatch = useDispatch();

  const submit = async () => {
    const foundedNoteId = await searchNoteWithTitle(currentNote.title, notepadId);
    if (foundedNoteId) {
      await dispatch(updateNote({ notepadId, id: foundedNoteId, ...currentNote }));
    } else {
      await dispatch(createNote({ notepadId, ...currentNote }));
    }
    dispatch(reloadNotepad({ notepadId }));
  };

  const saveInput = (e) => {
    dispatch(updateCurrentNote({
      ...currentNote,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };

  return (
    <div className="RedactNote">
      <div className="form-group">
        <label htmlFor="title">
          Title
          <input name="title" type="text" className="form-control RedactNote-title" placeholder="Title" value={currentNote.title} onChange={saveInput} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="content">
          Content
          <textarea name="content" className="form-control RedactNote-content" placeholder="Content" value={currentNote.content} onChange={saveInput} />
        </label>
      </div>
      <button type="submit" className="btn btn-primary RedactNote-submit" onClick={submit}>Submit</button>
    </div>
  );
};

export default RedactNote;

RedactNote.defaultProps = {
  currentNote: {},
};

RedactNote.propTypes = {
  currentNote: PropTypes.shape({
    content: PropTypes.string,
    notepadId: PropTypes.string,
    title: PropTypes.string,
  }),
  notepadId: PropTypes.number.isRequired,
};
