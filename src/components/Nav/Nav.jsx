import React from 'react';
import styled from 'styled-components';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NavItem from './NavItem/NavItem';
import { navItems, profileData } from './navData';
import { getMobileOrder } from './navItemOrder';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 479px) {
    & > div {
      margin: 0.6em 0.8em 0 0.8em;
      padding-bottom: 0.6em;
      :not(:first-of-type):not(:last-of-type) {
        border-bottom: 1px solid #f18990;
      }
    }
  }
  @media screen and (min-width: 480px) {
    align-content: flex-start;
    flex-wrap: wrap;
    font-size: 1.2em;
    font-weight: bold;
    height: 300px;
    max-height: 300px;
    & > div {
      align-self: stretch;
    }
    div:nth-child(${getMobileOrder('Contact')}) {
      flex-basis: auto;
      height: calc(300px - 6 * 24px);
      margin-right: 100px;
    }
    div:nth-child(${getMobileOrder('Resume Application')}) {
      margin-bottom: 0.6em;
    }
  }
`;

class Nav extends React.Component {
  state = {
    shouldRender: this.props.isMenuOpened,
    isClosing: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isMenuOpened && !this.props.isMenuOpened) {
      this.setState({ isClosing: true });
      setTimeout(() => this.setState({ shouldRender: false }), 1000);
    } else if (!prevProps.isMenuOpened && this.props.isMenuOpened) {
      this.setState({ isClosing: false, shouldRender: true });
    }
  }

  render() {
    const items = navItems.map((item, key) => (
      <NavItem key={key} {...item} shouldRender={!this.state.isClosing} />
    ));
    return this.state.shouldRender ? (
      <NavWrapper>
        <ProfileInfo {...profileData} shouldRender={!this.state.isClosing} />
        {items}
      </NavWrapper>
    ) : null;
  }
}

export default Nav;
