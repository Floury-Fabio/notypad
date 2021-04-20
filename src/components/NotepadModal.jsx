import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { getNotepads, createNotepad, updateNotepad } from 'redux/middlewares/notepadMiddlewares';
import useInputChange from 'customHooks/useInputChange';

const NotepadModal = ({
  show, setShow, onHide, action, notepadId,
}) => {
  const dispatch = useDispatch();
  const [input, handleInputChange] = useInputChange();

  const userId = useSelector((state) => state.authReducer.userId);

  const validateNotepad = async () => {
    if (action === 'create') { await dispatch(createNotepad({ title: input.title, userId })); }
    if (action === 'update') { await dispatch(updateNotepad({ title: input.title, notepadId })); }
    await dispatch(getNotepads());
    setShow(false);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="margin-modal-title">
          Title of your notepad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <input name="title" id="notepad-title-input" type="text" onChange={handleInputChange} placeholder="title" />
      </Modal.Body>
      <Modal.Footer>
        <Button id="validate-btn" onClick={validateNotepad}>{action}</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotepadModal;

NotepadModal.defaultProps = {
  data: {},
  notepadId: null,
};

NotepadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  notepadId: PropTypes.number,
  data: PropTypes.shape({
    notepadId: PropTypes.number,
    title: PropTypes.string,
  }),
};
