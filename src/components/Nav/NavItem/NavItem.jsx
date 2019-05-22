import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDesktopOrder, getMobileOrder } from '../navItemOrder';

const NavItemWrapper = styled.div`
  .item-name {
    display: inline;
    margin-left: 0.5em;
  }
  &.navitem-enter {
    position: relative;
    left: -200px;
    opacity: 0;
    transform: scale(1.1);
  }
  &.navitem-enter-active {
    left: 0px;
    position: relative;
    opacity: 1;
    transform: scale(1);
    transition: all 60ms;
    transition-delay: ${props => getDesktopOrder(props.name) * 60}ms;
  }
  @media screen and (max-width: 479px) {
    order: ${props => getMobileOrder(props.name)};
    display: ${props => (props.isDesktopExclusive ? 'none' : 'initial')};
    font-size: 1.4em;
    &.navitem-enter-active {
      transition-delay: ${props => getMobileOrder(props.name) * 60}ms;
    }
  }
  @media screen and (min-width: 480px) {
    order: ${props => getDesktopOrder(props.name)};
    .mobile-only {
      display: none;
    }
  }
`;

class NavItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const { name, nameAppend, icon, rotation, isDesktopExclusive } = this.props;
    const { isMounted } = this.state;
    return (
      <CSSTransition in={isMounted} classNames="navitem" timeout={2000}>
        <NavItemWrapper name={name} isDesktopExclusive={isDesktopExclusive}>
          {icon !== null && (
            <FontAwesomeIcon
              className="mobile-only"
              icon={icon}
              transform={{ rotate: rotation }}
            />
          )}
          <p className="item-name">
            {name}
            {nameAppend !== null && (
              <span className="mobile-only"> {nameAppend}</span>
            )}
          </p>
        </NavItemWrapper>
      </CSSTransition>
    );
  }
}

NavItem.defaultProps = {
  icon: null,
  isDesktopExclusive: false,
  nameAppend: null,
  rotation: 0
};

NavItem.propTypes = {
  icon: PropTypes.string,
  isDesktopExclusive: PropTypes.bool,
  rotation: PropTypes.number,
  name: PropTypes.string.isRequired,
  nameAppend: PropTypes.string
};

export default NavItem;
