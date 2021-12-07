import React from 'react';
import logo from '../assets/logo.png';
// import { FaBeer } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Netflix' className='logo' />
          <div className='nav-right-side'>
            <select name='language' id=''>
              <option value=''>English</option>
              <option value=''>Poland</option>
            </select>
            <button className='btn'>sign in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
