import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  justify-self: flex-end;
  flex: 0;
  border-top: 1px solid #f18990;
  margin: 0 5% 0 5%;
  width: 90%;
  @media screen and (max-width: 480px) {
    .footer-details {
      display: none;
    }
  }
`;

export default FooterWrapper;
