import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';

import ColorDropdown from 'components/ColorDropdown';
import NotepadModal from 'components/NotepadModal';
import PencilIcon from 'components/PencilIcon';
import TrashIcon from 'components/TrashIcon';

import { destroyNotepad, getNotepads as reloadCurrentNotepads } from 'redux/middlewares/notepadMiddlewares';
import blueNotepadImage from 'assets/blueNotepadImage.png';
import redNotepadImage from 'assets/redNotepadImage.png';
import orangeNotepadImage from 'assets/orangeNotepadImage.png';
import cyanNotepadImage from 'assets/cyanNotepadImage.png';
import greenNotepadImage from 'assets/greenNotepadImage.png';
import yellowNotepadImage from 'assets/yellowNotepadImage.png';

const NotepadCard = ({ notepad }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const notepadImages = {
    red: redNotepadImage,
    blue: blueNotepadImage,
    green: greenNotepadImage,
    cyan: cyanNotepadImage,
    yellow: yellowNotepadImage,
    orange: orangeNotepadImage,
  };

  const removeNotepad = async () => {
    const response = await dispatch(destroyNotepad({ notepadId: notepad.id }));
    if (response) { dispatch(reloadCurrentNotepads()); }
  };

  return (
    <>
      <Card className="bg-secondary border-0 mb-4" style={{ maxWidth: '18rem', minWidth: '18rem' }}>
        <Link to={`/notepad/${notepad.id}`}>
          <Card.Img variant="top" src={notepadImages[notepad.color]} />
        </Link>
        <Card.Body>
          <Card.Text className="text-center">
            { notepad.title }
          </Card.Text>

          <div className="d-flex justify-content-between">
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

            <ColorDropdown notepad={notepad} colorsList={Object.keys(notepadImages)} />
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
    color: PropTypes.string,
  }).isRequired,
};
