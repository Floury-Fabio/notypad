import React from 'react';
import RedactNote from 'components/RedactNote';

const NotesPage = () => (
  <>
    <div id="main-container" className="container m-auto">
      <div className="row bg-success h-100">
        <div className="col-3 bg-secondary p-0">
          test
        </div>
        <div className="col-9 p-0">
          <div className="bg-dark h-50"> test </div>
          <div className="bg-warning h-50">
            <RedactNote />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default NotesPage;
