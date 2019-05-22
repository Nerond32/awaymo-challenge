import React from 'react';
import styled from 'styled-components';
import { getDesktopOrder } from '../desktopOrder';

const ProfileInfoWrapper = styled.div`
  text-align: center;
  img {
    background-color: white;
    border-radius: 100%;
    padding: 0.3em;
    height: 2em;
    width: 2em;
  }
  @media screen and (min-width: 480px) {
    order: ${getDesktopOrder('ProfileInfo')};
  }
`;

const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <div>Dominik</div>
      <img src="/avatar.png" alt="profile" />
      <br />
      Available balance
      <div>£1,500.00</div>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
