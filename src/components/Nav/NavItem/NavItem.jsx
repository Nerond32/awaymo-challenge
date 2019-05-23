import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDesktopOrder, getMobileOrder } from '../navItemOrder';

const NavItemWrapper = styled.div`
  transition: transform 0.1s ease;
  .item-name {
    color: inherit;
    text-decoration: none;
    display: inline;
    margin-left: 0.5em;
  }
  &.navitem-enter {
    position: relative;
    left: -200px;
    opacity: 0;
  }
  &.navitem-enter-active {
    left: 0px;
    position: relative;
    opacity: 1;
    transition: all 60ms;
    transition-delay: ${props => getDesktopOrder(props.name) * 60}ms;
  }
  &.navitem-exit {
    position: relative;
    left: 0px;
    opacity: 1;
  }
  &.navitem-exit-active {
    left: -200px;
    position: relative;
    opacity: 0;
    transition: all 60ms;
    transition-delay: ${props => getDesktopOrder(props.name) * 60}ms;
  }
  &.navitem-exit-done {
    opacity: 0;
  }
  &.non-touch-device {
    :hover {
      transform: scale(1.3);
      transform: translate(0.3em, 0);
    }
  }
  @media screen and (max-width: 479px) {
    order: ${props => getMobileOrder(props.name)};
    display: ${props => (props.isDesktopExclusive ? 'none' : 'initial')};
    font-size: 1.4em;
    &.navitem-enter-active {
      transition-delay: ${props => getMobileOrder(props.name) * 60}ms;
    }
    &.navitem-exit-active {
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

  componentDidUpdate(prevProps) {
    if (prevProps.shouldRender && !this.props.shouldRender) {
      this.setState({ isMounted: false });
      setTimeout(() => this.setState({ shouldRender: false }), 900);
    } else if (!prevProps.shouldRender && this.props.shouldRender) {
      this.setState({ isMounted: true, shouldRender: true });
    }
  }

  render() {
    const { name, nameAppend, icon, rotation, isDesktopExclusive } = this.props;
    const { isMounted } = this.state;
    return (
      <CSSTransition
        in={isMounted}
        classNames={isMobile ? 'navitem' : 'non-touch-device navitem'}
        timeout={900}
      >
        <NavItemWrapper name={name} isDesktopExclusive={isDesktopExclusive}>
          {icon !== null && (
            <FontAwesomeIcon
              className="mobile-only"
              icon={icon}
              transform={{ rotate: rotation }}
            />
          )}
          <a
            className="item-name"
            href="/"
            onClick={e => e.preventDefault()}
            tabIndex={
              window.innerWidth > 479
                ? getDesktopOrder(name) + 1
                : getMobileOrder(name) + 1
            }
          >
            {name}
            {nameAppend !== null && (
              <span className="mobile-only"> {nameAppend}</span>
            )}
          </a>
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
  shouldRender: PropTypes.bool.isRequired,
  rotation: PropTypes.number,
  name: PropTypes.string.isRequired,
  nameAppend: PropTypes.string
};

export default NavItem;
