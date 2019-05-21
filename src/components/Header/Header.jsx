import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderWrapper = styled.header`
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid white;
  height: 3.5em;
  margin: 0 1em 0.5em 1em;
  display: flex;
  img {
    flex: 1;
    width: 1.3em;
    height: 1.3em;
    order: 5;
  }
  .header-exit-button {
    justify-self: flex-end;
    order: 10;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <img src="./awaymoFullWhite.svg" alt="Awaymo  avatar" />
      <FontAwesomeIcon className="header-exit-button" icon="times" />
    </HeaderWrapper>
  );
};

export default Header;
