import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { getNotepads, createNotepad } from 'redux/middlewares/notepadMiddlewares';
import useInputChange from 'customHooks/useInputChange';

const NotepadModal = ({
  show, setShow, onHide,
}) => {
  const dispatch = useDispatch();
  const [input, handleInputChange] = useInputChange();

  const userId = useSelector((state) => state.authReducer.userId);

  const valideNotepad = async () => {
    await dispatch(createNotepad({ title: input.title, userId }));
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
        <Button onClick={valideNotepad}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotepadModal;

NotepadModal.defaultProps = {
  data: {},
};

NotepadModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  data: PropTypes.shape({
    notepadId: PropTypes.number,
    title: PropTypes.string,
  }),
};
