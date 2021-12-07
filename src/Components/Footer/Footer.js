import React from 'react';
import { links } from './links';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Questions? <a href=''> Call 00 800 112 4392 </a>
      </p>
      <div className='links'>
        {links.map((link) => {
          return (
            <span className='link' key={link.id}>
              {link.link}
            </span>
          );
        })}
      </div>
      <select name='language' id='' className='footer-lang'>
        <option value=''>English</option>
        <option value=''>Poland</option>
      </select>
      <span className='area'>Netflix Poland</span>
    </footer>
  );
};

export default Footer;
