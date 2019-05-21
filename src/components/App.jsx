import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import addIconsToLib from './icons';

addIconsToLib();

const AppWrapper = styled.div`
  background-color: #fd6365;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <ProfileInfo />
      <Nav />
      <Footer />
    </AppWrapper>
  );
};

export default App;
