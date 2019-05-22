import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import addIconsToLib from './icons';

addIconsToLib();

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
`;

const AppWrapper = styled.div`
  background-color: #fd6365;
  color: white;
  height: 100%;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Nav />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
};

export default App;
