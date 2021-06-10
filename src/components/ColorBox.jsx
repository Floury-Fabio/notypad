import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateNotepad, getNotepads as reloadNotepads } from 'redux/middlewares/notepadMiddlewares';
import 'styles/ColorBox.scss';

const ColorBox = ({ color, notepad }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(updateNotepad({ ...notepad, notepadId: notepad.id, color }));
    await dispatch(reloadNotepads());
  };

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      dispatch(updateNotepad({ ...notepad, notepadId: notepad.id, color }));
    }
  };

  return (
    <div className="color-box-outside" style={{ backgroundColor: color }}>
      <div
        className="color-box-inside"
        aria-label="swapColor"
        tabIndex="0"
        role="button"
        type="button"
        onClick={handleClick}
        onKeyDown={handleKey}
      />
    </div>
  );
};

export default ColorBox;

ColorBox.defaultProps = {
  color: 'blue',
};

ColorBox.propTypes = {
  notepad: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
};
