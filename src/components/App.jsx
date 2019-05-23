import React from 'react';
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

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      isMenuOpened: true
    };
  }

  changeMenuState = () => {
    this.setState(prevState => {
      return { isMenuOpened: !prevState.isMenuOpened };
    });
  };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const { isMounted, isMenuOpened } = this.state;
    return (
      <AppWrapper>
        <CSSTransition in={isMounted} classNames="hf" timeout={300}>
          <Header
            changeMenuStateCallback={this.changeMenuState}
            isMenuOpened={isMenuOpened}
          />
        </CSSTransition>
        <Nav isMenuOpened={isMenuOpened} />
        <main />
        <CSSTransition in={isMounted} classNames="hf" timeout={300}>
          <Footer />
        </CSSTransition>
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

export default App;
