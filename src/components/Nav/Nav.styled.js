import styled from 'styled-components';
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

export default NavWrapper;
