import React, { memo, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { AppWrapper, GlobalStyle } from './App.styled';

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
