import React from 'react';
import PropTypes from 'prop-types';

const ColorMenu = React.forwardRef(
  ({ children, style, 'aria-labelledby': labeledBy }, ref) => (
    <div
      ref={ref}
      style={{ ...style, inset: 'auto auto auto auto' }} // override inset in order to center menu
      aria-labelledby={labeledBy}
      id="color-menu"
    >
      <ul className="m-0 p-0 mt-2">
        {children}
      </ul>
    </div>
  ),
);

export default ColorMenu;

ColorMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.shape({
    width: PropTypes.string,
  }).isRequired,
  'aria-labelledby': PropTypes.string.isRequired,
};
