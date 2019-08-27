import styled from 'styled-components';

const HeaderWrapper = styled.header`
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #f18990;
  min-height: 3.5em;
  margin: 0 1em 0.5em 1em;
  display: flex;
  img {
    flex: 1;
    width: 1.6em;
    height: 1.6em;
    order: 5;
  }
  .header-exit-button {
    justify-self: flex-end;
    order: 10;
    transition: all 500ms;
  }

  .non-touch-device:hover {
    font-size: 2em;
  }
  @media screen and (min-width: 480px) {
    border-bottom: 2px solid white;
  }
`;

export default HeaderWrapper;
