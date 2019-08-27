import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderWrapper from './Header.styled';

const Header = ({ changeMenuStateCallback, isMenuOpened }) => {
  return (
    <HeaderWrapper>
      <img src="./awaymoFullWhite.svg" alt="Awaymo  avatar" />
      <FontAwesomeIcon
        onClick={changeMenuStateCallback}
        className={
          isMobile
            ? 'header-exit-button'
            : 'header-exit-button non-touch-device'
        }
        icon={isMenuOpened ? 'times' : 'angle-down'}
      />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  changeMenuStateCallback: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool.isRequired
};

export default memo(Header);
