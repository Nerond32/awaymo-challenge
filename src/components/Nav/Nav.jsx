import React from 'react';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NavItem from './NavItem/NavItem';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
    & > div:not(:last-of-type) {
      margin: 0.6em 0.8em 0 0.8em;
      padding-bottom: 0.6em;
      border-bottom: 1px solid #f18990;
    }
  }
  @media screen and (min-width: 480px) {
    max-height: 300px;
    align-content: flex-start;
    flex-wrap: wrap;
    div:nth-child(6) {
      flex-basis: auto;
      height: calc(300px - 6 * 24px);
      margin-right: 100px;
    }
    div:nth-child(11) {
      margin-bottom: 0.6em;
    }
  }
`;

const navItems = [
  { name: 'Profile', icon: 'user-circle' },
  { name: 'My Bookings', icon: 'plane', rotation: -45 },
  { name: 'My Payments', icon: 'credit-card' },
  { name: 'Support', icon: 'compact-disc' },
  { name: 'Contact', icon: 'phone', rotation: 90 },
  { name: 'Log Out', icon: 'sign-out-alt' },
  { name: 'About', icon: 'question-circle', nameAppend: 'Us' },
  { name: 'FAQ', icon: 'info-circle' },
  { name: 'Home', isDesktopExclusive: true },
  { name: 'Flights', isDesktopExclusive: true },
  { name: 'Resume Application', isDesktopExclusive: true }
];

const Nav = () => {
  const items = navItems.map((item, key) => <NavItem key={key} {...item} />);
  return (
    <NavWrapper>
      <ProfileInfo />
      {items}
    </NavWrapper>
  );
};

export default Nav;
