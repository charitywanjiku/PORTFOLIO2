import React from 'react';
import './footer.css';

import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id='footer'>
      <h4>If you want to learn more about</h4>
      <a href="/" className='footer__logo'>Charity Wanjiku</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/charity-wanjiku-008469285/" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/charitywanjiku" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/_charityy___/" target='_blank' rel="noopener noreferrer"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Charity Wanjiku.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
