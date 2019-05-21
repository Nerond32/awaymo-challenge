import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  text-align: center;
  @media screen and (max-width: 480px) {
    .footer-details {
      display: none !important;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>We&apos;re here to help</p>
      <p>+44 (0) 20 8050 3459</p>
      <p>support@awaymo.com</p>
    </FooterWrapper>
  );
};

export default Footer;
