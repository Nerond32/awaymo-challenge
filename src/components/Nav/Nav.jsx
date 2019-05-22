import React from 'react';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NavItem from './NavItem/NavItem';
import { getMobileOrder } from './itemOrder';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
    & > div {
      margin: 0.6em 0.8em 0 0.8em;
      padding-bottom: 0.6em;
      :not(:first-of-type):not(:last-of-type) {
        border-bottom: 1px solid #f18990;
      }
    }
  }
  @media screen and (min-width: 480px) {
    align-content: flex-start;
    flex-wrap: wrap;
    font-size: 1.2em;
    font-weight: bold;
    max-height: 300px;
    div:nth-child(${getMobileOrder('Contact')}) {
      flex-basis: auto;
      height: calc(300px - 6 * 24px);
      margin-right: 100px;
    }
    div:nth-child(${getMobileOrder('Resume Application')}) {
      margin-bottom: 0.6em;
    }
  }
`;

const profileData = {
  name: 'Krzysztof',
  lastName: 'Kwiecień',
  balance: '1,500.00',
  imgSrc: '/avatar.png'
};

const navItems = [
  { name: 'Home', isDesktopExclusive: true },
  { name: 'Flights', isDesktopExclusive: true },
  { name: 'Profile', icon: 'user-circle' },
  { name: 'My Bookings', icon: 'plane', rotation: -45 },
  { name: 'My Payments', icon: 'credit-card' },
  { name: 'Support', icon: 'compact-disc' },
  { name: 'Contact', icon: 'phone', rotation: 90 },
  { name: 'Log Out', icon: 'sign-out-alt' },
  { name: 'About', icon: 'question-circle', nameAppend: 'Us' },
  { name: 'FAQ', icon: 'info-circle' },
  { name: 'Resume Application', isDesktopExclusive: true }
];

const Nav = () => {
  const items = navItems.map((item, key) => <NavItem key={key} {...item} />);
  return (
    <NavWrapper>
      <ProfileInfo {...profileData} />
      {items}
    </NavWrapper>
  );
};

export default Nav;
