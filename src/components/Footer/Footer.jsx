import React, { memo } from 'react';
import FooterWrapper from './Footer.styled';

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

export default memo(Footer);
