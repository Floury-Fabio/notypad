import React from 'react';
import { useParams } from 'react-router-dom';
import useInputChange from 'customHooks/useInputChange';
import * as noteAPI from 'services/noteAPI';

const RedactNote = () => {
  const { notepadId } = useParams();
  const [input, handleInputChange] = useInputChange();

  const submit = async () => {
    console.log('submit')
    console.log(input)
    console.log(notepadId)
    const response = await noteAPI.createNote({ ...input, notepadId });
    const body = await response.json()
    console.log(body)
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
