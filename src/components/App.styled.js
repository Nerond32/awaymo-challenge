import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

export const AppWrapper = styled.div`
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
