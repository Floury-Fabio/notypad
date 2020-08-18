import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NotesList from 'components/NotesList';
import RedactNote from 'components/RedactNote';
import { callAPI } from 'redux/middlewares/requestMiddlewares';

const NotesPage = () => {
  const [notes, setNotes] = useState();
  const { notepadId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await dispatch(callAPI({ callName: 'getNotes', args: { notepadId } }));
      if (response.status === 200) {
        const body = await response.json();
        setNotes(body);
      }
    };
    fetchNotes();
  }, []);
  return (
    <>
      <div id="main-container" className="container m-auto">
        <div className="row bg-success h-100">
          <div className="col-3 bg-secondary p-0">
            <NotesList notes={notes} />
          </div>
          <div className="col-9 p-0">
            <div className="bg-dark h-50"> test </div>
            <div className="bg-warning h-50">
              <RedactNote notepadId={notepadId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotesPage;
