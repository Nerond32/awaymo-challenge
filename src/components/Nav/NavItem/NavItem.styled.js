import styled from 'styled-components';
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

export default NavItemWrapper;
