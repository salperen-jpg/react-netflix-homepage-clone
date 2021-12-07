import React from 'react';
import Divider from './Divider';
import phone from '../assets/phone.jpg';
import small from '../assets/stranger.png';
import gif from '../assets/gif.gif';

const Box_b = () => {
  return (
    <>
      <section className='section box-b'>
        <div className='section-info'>
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div className='img-container'>
          <img src={phone} alt='' className='phone' />
          <div className='img-bottom'>
            <img src={small} alt='' />
            <div className='push-left'>
              <h4>Stranger Things</h4>
              <span className='download'>Downloading...</span>
            </div>
            <img src={gif} alt='' />
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Box_b;
