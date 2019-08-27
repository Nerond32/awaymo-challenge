import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { getDesktopOrder } from '../navItemOrder';

const ProfileInfoWrapper = styled.div`
  text-align: center;
  &.profileinfo-enter {
    opacity: 0;
  }
  &.profileinfo-enter-active {
    opacity: 1;
    transition: all 1000ms;
  }
  &.profileinfo-exit {
    opacity: 1;
  }
  &.profileinfo-exit-active {
    opacity: 0;
    transition: all 1000ms;
  }
  &.profileinfo-exit-done {
    opacity: 0;
  }
  .profile-picture {
    background-color: white;
    border-radius: 100%;
    padding: 0.4em;
    height: 2em;
    width: 2em;
    transition: transform 0.5s ease;
  }
  .profile-picture:hover {
    transform: rotate(360deg);
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

const ProfileInfo = ({ name, lastName, imgSrc, balance, shouldRender }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setIsMounted(!isMounted);
  }, [shouldRender]);
  return (
    <CSSTransition in={isMounted} classNames="profileinfo" timeout={300}>
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
    </CSSTransition>
  );
};

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
  shouldRender: PropTypes.bool.isRequired
};

export default memo(ProfileInfo);
