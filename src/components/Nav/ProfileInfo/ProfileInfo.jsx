import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getDesktopOrder } from '../navItemOrder';

const ProfileInfoWrapper = styled.div`
  text-align: center;
  .profile-picture {
    background-color: white;
    border-radius: 100%;
    padding: 0.4em;
    height: 2em;
    width: 2em;
  }
  @media screen and (max-width: 479px) {
    line-height: 1.4em;
    .desktop {
      display: none;
    }
    .profile-details-name {
      font-weight: 500;
    }
  }
  @media screen and (min-width: 480px) {
    display: flex;
    font-size: 0.8em;
    margin: 1em 0 1em 0;
    order: ${getDesktopOrder('ProfileInfo')};
    .mobile {
      display: none;
    }
    .profile-details {
      align-self: center;
      text-align: left;
    }
    .profile-picture {
      border: 0.15em solid #fd6365;
      box-shadow: 0px 0px 0px 0.1em white;
      margin: 0em 1em 0 1em;
      padding: 0.6em;
      height: 1.6em;
      width: 1.6em;
    }
  }
`;

const ProfileInfo = ({ name, lastName, imgSrc, balance }) => {
  return (
    <ProfileInfoWrapper>
      <img className="profile-picture" src={imgSrc} alt="profile" />
      <div className="profile-details">
        <span className="profile-details-name">
          {name}
          <span className="desktop"> {lastName}</span>
        </span>
        <span className="mobile">
          <br />
          Available balance
          <div>£{balance}</div>
        </span>
        <span className="desktop">
          <br />£{balance} Available
        </span>
      </div>
    </ProfileInfoWrapper>
  );
};

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
};

export default ProfileInfo;
