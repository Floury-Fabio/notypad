import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useInputChange from 'customHooks/useInputChange';
import { callAPI } from 'redux/middlewares/requestMiddlewares';

const RedactNote = () => {
  const [input, handleInputChange] = useInputChange();
  const { notepadId } = useParams();
  const dispatch = useDispatch();

  const submit = async () => {
    const response = await dispatch(callAPI({ callName: 'createNote', args: { ...input, notepadId } }));
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
