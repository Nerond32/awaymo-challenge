import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Nav />
      <main />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
};

export default App;
