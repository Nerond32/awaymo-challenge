import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ProfileInfoWrapper from './ProfileInfo.styled';

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
