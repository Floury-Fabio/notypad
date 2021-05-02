import React from 'react';
import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const TrashIcon = ({
  notepadId, color, size, removeNotepad, button,
}) => (
  <IconContext.Provider value={{ color, size: `${size}em`, className: 'global-class-name' }}>
    <BsFillTrashFill className="ml-3" type={button ? 'button' : ''} id={`delete-btn-${notepadId}`} onClick={() => removeNotepad()} />
  </IconContext.Provider>
);

export default TrashIcon;

TrashIcon.defaultProps = {
  button: null,
  color: 'black',
  notepadId: null,
  removeNotepad: null,
  size: '1',
};
TrashIcon.propTypes = {
  button: PropTypes.bool,
  color: PropTypes.string,
  notepadId: PropTypes.number,
  removeNotepad: PropTypes.func,
  size: PropTypes.number,
};
