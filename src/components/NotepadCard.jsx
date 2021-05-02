import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';

import NotepadModal from 'components/NotepadModal';
import PencilIcon from 'components/PencilIcon';
import TrashIcon from 'components/TrashIcon';

import { destroyNotepad, getNotepads as reloadCurrentNotepads } from 'redux/middlewares/notepadMiddlewares';
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
      <Card className="bg-secondary border-0 mb-4" style={{ maxWidth: '18rem', minWidth: '18rem' }}>
        <Link to={`/notepad/${notepad.id}`}>
          <Card.Img variant="top" src={notepadImage} />
        </Link>
        <Card.Body>
          <Card.Text className="text-center">
            { notepad.title }
          </Card.Text>

          <div className="d-flex justify-content-center">
            <PencilIcon
              notepadId={notepad.id}
              button
              size={2}
              setShow={setShow}
            />
            <TrashIcon
              id={`delete-btn-${notepad.id}`}
              button
              color="red"
              notepadId={notepad.id}
              size={2}
              removeNotepad={removeNotepad}
            />
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
