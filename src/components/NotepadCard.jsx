import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { destroyNotepad, getNotepads as reloadCurrentNotepads } from 'redux/middlewares/notepadMiddlewares';
import NotepadModal from 'components/NotepadModal';
import notepadImage from 'assets/notepadImage2.png';

const NotepadCard = ({ notepad }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const removeNotepad = async () => {
    const response = await dispatch(destroyNotepad({ notepadId: notepad.id }));
    if (response) { dispatch(reloadCurrentNotepads()); }
  };

  return (
    <>
      <Card className="bg-secondary border-0 mb-4" style={{ 'max-width': '18rem', 'min-width': '18rem' }}>
        <Link to={`/notepad/${notepad.id}`}>
          <Card.Img variant="top" src={notepadImage} />
        </Link>
        <Card.Body>
          <Card.Text className="text-center">
            { notepad.title }
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button id={`update-btn-${notepad.id}`} variant="primary" onClick={() => setShow(true)}>upd</Button>
            <Button id={`delete-btn-${notepad.id}`} variant="danger" onClick={removeNotepad}>del</Button>
          </div>
        </Card.Body>
      </Card>
      <NotepadModal
        show={show}
        setShow={setShow}
        onHide={() => setShow(false)}
        oldTitle={notepad.title}
        action="update"
        notepadId={notepad.id}
      />
    </>
  );
};

export default NotepadCard;

NotepadCard.propTypes = {
  notepad: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
