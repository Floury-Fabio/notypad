import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';

import ColorBox from 'components/ColorBox';
import ColorMenu from 'components/ColorMenu';

const ColorDropdown = ({ setColor }) => {
  const colors = [
    'blue',
    'green',
    'red',
    'yellow',
    'orange',
    'cyan',
  ];
  return (
    <Dropdown className="d-flex justify-content-center ">
      <Dropdown.Toggle />
      <Dropdown.Menu as={ColorMenu}>
        {colors.map((color) => (
          <Dropdown.Item
            as={ColorBox}
            color={color}
            setColor={setColor}
            key={color}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ColorDropdown;

ColorDropdown.propTypes = {
  setColor: PropTypes.func.isRequired,
};
