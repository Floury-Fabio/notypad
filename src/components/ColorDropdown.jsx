import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';

import ColorBox from 'components/ColorBox';
import ColorMenu from 'components/ColorMenu';

const ColorDropdown = ({ notepad, colorsList }) => (
  <Dropdown className="d-flex justify-content-center ">
    <Dropdown.Toggle />
    <Dropdown.Menu as={ColorMenu}>
      {colorsList.map((color) => (
        <Dropdown.Item
          as={ColorBox}
          color={color}
          key={color}
          notepad={notepad}
        />
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default ColorDropdown;

ColorDropdown.propTypes = {
  colorsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  notepad: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};
