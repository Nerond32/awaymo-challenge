import React from 'react';
import NavItem from './NavItem/NavItem';

const Nav = () => {
  return (
    <nav>
      <NavItem title="Profile" iconName="user-circle" />
      <NavItem title="My bookings" iconName="plane" rotation={-45} />
      <NavItem title="My payments" iconName="credit-card" />
      <NavItem title="Support" iconName="compact-disc" />
      <NavItem title="Contact Us" iconName="phone" rotation={90} />
      <NavItem title="Log out" iconName="sign-out-alt" />
      <NavItem title="About" iconName="question-circle" />
      <NavItem title="FAQ" iconName="info-circle" />
    </nav>
  );
};

export default Nav;
