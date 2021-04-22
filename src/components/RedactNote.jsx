import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from 'redux/middlewares/noteMiddlewares';
import { updateCurrentNote } from 'redux/actions/noteActions';
import searchNoteWithTitle from 'helpers/notepadHelpers';
import { getNotepad as reloadNotepad } from 'redux/middlewares/notepadMiddlewares';

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
    <div className="bg-warning h-50">
      <div className="form-group">
        <label htmlFor="title">
          Title
          <input id="note-title-input" name="title" type="text" className="form-control" placeholder="Title" value={currentNote.title} onChange={saveInput} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="content">
          Content
          <textarea id="note-content-input" name="content" className="form-control" placeholder="Content" value={currentNote.content} onChange={saveInput} />
        </label>
      </div>
      <button id="submit" type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
    </div>
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
