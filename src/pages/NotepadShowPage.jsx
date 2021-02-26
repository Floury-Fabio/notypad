import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showNotepad } from 'redux/middlewares/notepadMiddlewares';

import NotesList from 'components/NotesList';
import RedactNote from 'components/RedactNote';

const NotesPage = () => {
  const { notepadId } = useParams();
  const dispatch = useDispatch();
  const currentNotepad = useSelector((state) => state.notepadReducer.currentNotepad);

  const fetchCurrentNotepad = async () => {
    await dispatch(showNotepad({ notepadId }));
  };

  useEffect(() => { fetchCurrentNotepad(); }, []);

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
            <div className="bg-dark h-50"> test </div>
            <div className="bg-warning h-50">
              {currentNotepad
                ? <RedactNote notepadId={parseInt(notepadId, 10)} notes={currentNotepad.notes} />
                : <RedactNote notepadId={parseInt(notepadId, 10)} notes={[]} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
