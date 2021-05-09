import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getNotepads as reloadNotepads, updateNotepad } from 'redux/middlewares/notepadMiddlewares';

import 'styles/ColorBox.scss';

const ColorBox = ({ notepadId, color }) => {
  const dispatch = useDispatch();

  const swapColor = async (event) => {
    if (event.keyCode === 229 || event.type === 'click') {
      const response = await dispatch(updateNotepad({ notepadId, color }));
      if (response) { await dispatch(reloadNotepads()); }
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
        onClick={swapColor}
        onKeyDown={swapColor}
      />
    </div>
  );
};

export default ColorBox;

ColorBox.defaultProps = {
  color: 'blue',
};

ColorBox.propTypes = {
  color: PropTypes.string,
  notepadId: PropTypes.number.isRequired,
};
