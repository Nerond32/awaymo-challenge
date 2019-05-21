import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ title, iconName, rotation }) => {
  return (
    <div>
      <FontAwesomeIcon icon={iconName} transform={{ rotate: rotation }} />
      {title}
      <br />
    </div>
  );
};

NavItem.defaultProps = {
  rotation: 0
};

NavItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  rotation: PropTypes.number,
  title: PropTypes.string.isRequired
};

export default NavItem;
