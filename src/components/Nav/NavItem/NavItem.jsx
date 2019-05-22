import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDesktopOrder } from '../desktopOrder';

const NavItemWrapper = styled.div`
  .item-name {
    display: inline;
    margin-left: 0.5em;
  }
  @media screen and (max-width: 479px) {
    display: ${props => (props.isDesktopExclusive ? 'none' : 'initial')};
  }
  @media screen and (min-width: 480px) {
    order: ${props => getDesktopOrder(props.name)};
    .mobile-only {
      display: none;
    }
  }
`;

const NavItem = ({ name, nameAppend, icon, rotation, isDesktopExclusive }) => {
  return (
    <NavItemWrapper name={name} isDesktopExclusive={isDesktopExclusive}>
      {icon !== undefined && (
        <FontAwesomeIcon
          className="mobile-only"
          icon={icon}
          transform={{ rotate: rotation }}
        />
      )}
      <p className="item-name">
        {name}
        {nameAppend !== undefined && (
          <span className="mobile-only"> {nameAppend}</span>
        )}
      </p>
    </NavItemWrapper>
  );
};

NavItem.defaultProps = {
  icon: undefined,
  isDesktopExclusive: false,
  nameAppend: undefined,
  rotation: 0
};

NavItem.propTypes = {
  icon: PropTypes.string,
  isDesktopExclusive: PropTypes.bool,
  rotation: PropTypes.number,
  name: PropTypes.string.isRequired,
  nameAppend: PropTypes.string
};

export default NavItem;
