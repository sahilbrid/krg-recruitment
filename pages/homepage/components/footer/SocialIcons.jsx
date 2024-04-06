import React from 'react';
import styled from 'styled-components';
// import krglogo from './images/cropped-logo.jpeg';
import krglogo from '../../cropped-krg-logo-removebg-preview.png';
import facebook from './images/facebook.png';
import instaimg from '../../insta-removebg-preview.png';
// import instaimg from './images/insta.jpeg';
// import linkedin from '../../linkedin-removebg-preview.png';
import linkedin from './images/linkedin.png';
import x from './images/twitter.png';

const IconsContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0.5rem 1rem 0.5rem 0;
`;

const SocialIcons = () => {
  return (
    <IconsContainer>
      <IconContainer>
        <a href="#"><img src={krglogo} alt="" width="200px" height="200px" /></a>
      </IconContainer>
      <SocialLinks>
        <a href="#"><Icon src={facebook} alt="Facebook"/></a>
        <a href="#"><Icon src={instaimg} alt="Instagram" /></a>
        <a href="#"><Icon src={x} alt="Twitter" /></a>
        <a href="#"><Icon src={linkedin} alt="LinkedIn" /></a>
      </SocialLinks>
    </IconsContainer>
  );
};

export default SocialIcons;