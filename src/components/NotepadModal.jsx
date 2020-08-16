import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import useInputChange from 'customHooks/useInputChange';

const NotepadModal = ({
  show, onHide, data, setData 
}) => {
  const [input, handleInputChange] = useInputChange();

  const valideNotepad = () => {
    setData({ ...input, notepadId: data.notepadId });
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="margin-modal-title">
          Title of your notepad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <input name="title" type="text" onChange={handleInputChange} placeholder={data.title} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={valideNotepad}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotepadModal;

NotepadModal.defaultProps = {
  data: {},
};
