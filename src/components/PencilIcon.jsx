import React from 'react';
import PropTypes from 'prop-types';
import { TiPencil } from 'react-icons/ti';
import { IconContext } from 'react-icons';

const PencilIcon = ({
  notepadId, color, size, setShow, button,
}) => (
  <IconContext.Provider value={{ color, size: `${size}em`, className: 'global-class-name' }}>
    <TiPencil type={button ? 'button' : ''} id={`update-btn-${notepadId}`} onClick={() => setShow(true)} />
  </IconContext.Provider>
);

export default PencilIcon;

PencilIcon.defaultProps = {
  button: null,
  color: 'black',
  notepadId: null,
  setShow: null,
  size: '1',
};
PencilIcon.propTypes = {
  button: PropTypes.bool,
  color: PropTypes.string,
  notepadId: PropTypes.number,
  setShow: PropTypes.func,
  size: PropTypes.number,
};
