import React from 'react';
import video from '../assets/tv_video.m4v';
import Divider from './Divider';

const Box_a = () => {
  return (
    <>
      <section className='section box-a'>
        <div className='section-info'>
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className='animation'>
          <video autoPlay loop muted>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </section>
      <Divider />
    </>
  );
};

export default Box_a;
