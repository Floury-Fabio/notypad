import React from 'react';
import PropTypes from 'prop-types';
import 'styles/ColorBox.scss';

const ColorBox = ({ color, setColor }) => {
  const swapColor = (event) => {
    if (event.keyCode === 229 || event.type === 'click') {
      setColor(color);
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
  setColor: PropTypes.func.isRequired,
};
