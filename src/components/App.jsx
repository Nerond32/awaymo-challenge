import React from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInfoCircle,
  faQuestionCircle,
  faSignOutAlt,
  faPhone,
  faCompactDisc,
  faCreditCard,
  faPlane,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faInfoCircle,
  faQuestionCircle,
  faSignOutAlt,
  faPhone,
  faCompactDisc,
  faCreditCard,
  faPlane,
  faUserCircle
);

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
