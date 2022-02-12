import React from 'react';
import video from '../../assets/stranger_video.m4v';
import Divider from '../Divider';

const Box_c = () => {
  return (
    <>
      <section className='section box-a'>
        <div className='section-info'>
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
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

export default Box_c;
