import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { getNotepads, updateNotepad } from 'redux/middlewares/notepadMiddlewares';
import useInputChange from 'customHooks/useInputChange';

const NotepadModal = ({
  show, onHide, notepadId, oldTitle,
}) => {
  const dispatch = useDispatch();
  const [input, handleInputChange] = useInputChange();

  const userId = useSelector((state) => state.authReducer.userId);

  const valideNotepad = async () => {
    await dispatch(updateNotepad({ title: input.title, notepadId }));
    await dispatch(getNotepads());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="margin-modal-title">
          Title of your notepad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <input name="title" type="text" onChange={handleInputChange} placeholder={oldTitle} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={valideNotepad}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotepadModal;

NotepadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  notepadId: PropTypes.number.isRequired,
  oldTitle: PropTypes.string.isRequired,
};