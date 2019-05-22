import React from 'react';
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

const Footer = () => {
  return (
    <FooterWrapper>
      <p>We&apos;re here to help</p>
      <span className="footer-details">
        <p>+44 (0) 20 8050 3459</p>
        <p>support@awaymo.com</p>
      </span>
    </FooterWrapper>
  );
};

export default Footer;
