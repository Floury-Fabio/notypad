import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInputChange from 'customHooks/useInputChange';
import callAPI from 'redux/middlewares/requestMiddlewares';

const RedactNote = ({ notepadId, notes }) => {
  const [input, handleInputChange] = useInputChange();
  const dispatch = useDispatch();

  const submit = async () => {
    const res = notes.find((note) => note.title === input.noteTitle);
    if (res === undefined) {
      await dispatch(callAPI({ callName: 'createNote', args: { ...input, notepadId } }));
    } else {
      await dispatch(callAPI({ callName: 'updateNote', args: { noteId: res.id, content: input.content, notepadId } }));
    }
  };
  return (
    <>
      <div className="form-group">
        <label htmlFor="noteTitle">
          Title
          <input id="noteTitle" name="noteTitle" type="text" className="form-control" placeholder="Title" onChange={handleInputChange} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="content">
          Content
          <textarea id="content" name="content" className="form-control" onChange={handleInputChange} />
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
    </>
  );
};

export default RedactNote;

RedactNote.defaultProps = {
  notes: [],
};

RedactNote.propTypes = {
  notepadId: PropTypes.number.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object),
};
