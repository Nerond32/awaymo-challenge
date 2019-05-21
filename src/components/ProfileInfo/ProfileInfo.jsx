import React from 'react';
import styled from 'styled-components';

const ProfileInfoWrapper = styled.div`
  text-align: center;
  img {
    background-color: white;
    border-radius: 100%;
    padding: 0.3em;
    height: 2em;
    width: 2em;
  }
`;

const ProfileInfo = () => {
  return (
    <ProfileInfoWrapper>
      <div>Dominik</div>
      <img src="/avatar.png" alt="profile" />
      <br />
      Available balance
      <div>Â£1,500.00</div>
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
