import React, { memo, useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NavItem from './NavItem/NavItem';
import { navItems, profileData } from './navData';
import NavWrapper from './Nav.styled';

const Nav = ({ isMenuOpened }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isMenuOpened);
  useEffect(() => {
    if (!isMenuOpened) {
      setIsClosing(true);
      setTimeout(() => setShouldRender(false), 1000);
    } else {
      setIsClosing(false);
      setShouldRender(true);
    }
  }, [isMenuOpened]);
  const items = navItems.map((item, key) => (
    <NavItem key={key} {...item} shouldRender={!isClosing} />
  ));
  return shouldRender ? (
    <NavWrapper>
      <ProfileInfo {...profileData} shouldRender={!isClosing} />
      {items}
    </NavWrapper>
  ) : null;
};

export default memo(Nav);
