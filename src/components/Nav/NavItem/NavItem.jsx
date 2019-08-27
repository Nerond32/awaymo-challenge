import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDesktopOrder, getMobileOrder } from '../navItemOrder';
import NavItemWrapper from './NavItem.styled';

const NavItem = ({
  name,
  mobileName,
  icon,
  rotation,
  isDesktopExclusive,
  shouldRender
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setIsMounted(shouldRender);
  }, [shouldRender]);
  return (
    <CSSTransition
      in={isMounted}
      classNames={isMobile ? 'navitem' : 'non-touch-device navitem'}
      timeout={900}
    >
      <NavItemWrapper name={name} isDesktopExclusive={isDesktopExclusive}>
        {icon !== null && (
          <FontAwesomeIcon
            className="mobile-only"
            icon={icon}
            transform={{ rotate: rotation }}
          />
        )}
        <a
          className="item-name"
          href="/"
          onClick={e => e.preventDefault()}
          tabIndex={
            window.innerWidth > 479
              ? getDesktopOrder(name) + 1
              : getMobileOrder(name) + 1
          }
        >
          {isMobile && mobileName ? mobileName : name}
        </a>
      </NavItemWrapper>
    </CSSTransition>
  );
};

NavItem.defaultProps = {
  icon: null,
  isDesktopExclusive: false,
  nameAppend: null,
  rotation: 0
};

NavItem.propTypes = {
  icon: PropTypes.string,
  isDesktopExclusive: PropTypes.bool,
  shouldRender: PropTypes.bool.isRequired,
  rotation: PropTypes.number,
  name: PropTypes.string.isRequired,
  nameAppend: PropTypes.string
};

export default memo(NavItem);
