import React, { memo, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import addIconsToLib from './icons';

addIconsToLib();

const GlobalStyle = createGlobalStyle`
 body {
  background-color: #fd6365;
  color: white;
 }
  html,
  body,
  #root {
    height:100%;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  main {
    flex: 1;
  }
  .hf-enter {
    opacity: 0;
  }
  .hf-enter-active {
    opacity: 1;
    transition: all 500ms;
  }
`;

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const changeMenuState = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <AppWrapper>
      <CSSTransition in={isMounted} classNames="hf" timeout={300}>
        <Header
          changeMenuStateCallback={changeMenuState}
          isMenuOpened={isMenuOpened}
        />
      </CSSTransition>
      <Nav isMenuOpened={isMenuOpened} />
      <CSSTransition in={isMounted} classNames="hf" timeout={300}>
        <Footer />
      </CSSTransition>
      <GlobalStyle />
    </AppWrapper>
  );
};

export default memo(App);
