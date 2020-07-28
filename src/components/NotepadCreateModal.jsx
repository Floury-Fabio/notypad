import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import useInputChange from 'customHooks/useInputChange';
import { createNotepad } from 'redux/middlewares/notepadMiddlewares';

const NotepadCreateModal = ({ show, onHide }) => {

  const userId = useSelector((state) => state.authReducer.userId);
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, handleInputChange] = useInputChange();

  const valideNotepad = async () => {
    const code = await dispatch(createNotepad({ ...input, userId }));
    if (code === 201) {
      onHide();
      history.push('/home');
      history.push('/notepads');
    } else {
    }
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
        <Button onClick={valideNotepad}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotepadCreateModal;
