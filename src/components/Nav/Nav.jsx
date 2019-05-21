import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <div>
      <FontAwesomeIcon icon="user-circle" />
      Profile
      <br />
      <FontAwesomeIcon icon="plane" />
      My bookings
      <br />
      <FontAwesomeIcon icon="credit-card" />
      My payments
      <br />
      <FontAwesomeIcon icon="compact-disc" />
      Support
      <br />
      <FontAwesomeIcon icon="phone" />
      Contact Us
      <br />
      <FontAwesomeIcon icon="sign-out-alt" />
      Log out
      <br />
      <FontAwesomeIcon icon="question-circle" />
      About
      <br />
      <FontAwesomeIcon icon="info-circle" />
      FAQ
      <br />
    </div>
  );
};

export default Nav;
