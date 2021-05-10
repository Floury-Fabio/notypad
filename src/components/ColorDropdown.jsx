import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'react-bootstrap/Dropdown';

import ColorBox from 'components/ColorBox';
import ColorMenu from 'components/ColorMenu';

import notepadImages from 'helpers/notepadImages';

const ColorDropdown = ({ notepadId }) => {
  const colors = Object.keys(notepadImages);

  return (
    <Dropdown className="d-flex justify-content-center ">
      <Dropdown.Toggle data-test="color-dropdown" />
      <Dropdown.Menu as={ColorMenu}>
        {colors.map((color) => (
          <Dropdown.Item
            as={ColorBox}
            color={color}
            key={color}
            notepadId={notepadId}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ColorDropdown;

ColorDropdown.propTypes = {
  notepadId: PropTypes.number.isRequired,
};
