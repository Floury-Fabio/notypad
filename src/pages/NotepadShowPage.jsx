import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNotepad } from 'redux/middlewares/notepadMiddlewares';
import { cleanCurrentNote } from 'redux/actions/noteActions';

import NotesList from 'components/NotesList';
import RedactNote from 'components/RedactNote';
import NoteDisplay from 'components/NoteDisplay';

const NotesPage = () => {
  const { notepadId } = useParams();
  const dispatch = useDispatch();
  const currentNotepad = useSelector((state) => state.notepadReducer.currentNotepad);
  const currentNote = useSelector((state) => state.noteReducer.currentNote);

  const fetchCurrentNotepad = async () => {
    await dispatch(getNotepad({ notepadId }));
  };

  useEffect(() => { fetchCurrentNotepad(); }, []);
  useEffect(() => () => {
    dispatch(cleanCurrentNote());
  }, []);

  return (
    <>
      <div id="main-container" className="container m-auto">
        <div className="row bg-success h-100">
          <div className="col-3 bg-secondary p-0">
            {currentNotepad
              ? <NotesList notes={currentNotepad.notes} />
              : <NotesList notes={[]} />}
          </div>
          <div className="col-9 p-0">
            <NoteDisplay currentNote={currentNote} />
            <RedactNote currentNote={currentNote} notepadId={notepadId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
