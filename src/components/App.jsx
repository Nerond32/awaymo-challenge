import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import addIconsToLib from './icons';

addIconsToLib();

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Footer />
    </React.Fragment>
  );
};

export default App;
