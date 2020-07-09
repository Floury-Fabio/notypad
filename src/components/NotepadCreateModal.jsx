import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import useInputChange from 'customHooks/useInputChange';
import * as notepadAPI from 'services/notepadAPI';

const NotepadCreateModal = ({ show, onHide }) => {

  const userId = useSelector((state) => state.authReducer.userId);
  const [input, handleInputChange] = useInputChange();

  const createNotepad = async () => {
    await notepadAPI.createNotepad({ ...input, userId });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="margin-modal-title">
          Title of your notepad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <input name="title" type="text" onChange={handleInputChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createNotepad}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotepadCreateModal;
