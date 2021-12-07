import React from 'react';
import logo from '../assets/logo.png';
import Divider from './Divider';

const Hero = () => {
  return (
    <main>
      <article className='hero'>
        <div className='hero-center'>
          <div className='hero-info'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='hero-form'>
              <input
                type='text'
                name=''
                id=''
                className='hero-input'
                placeholder='Email address'
              />
              <button className='btn hero-btn'>
                <span>get started </span>
                <span>{'>'}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
      <Divider />
    </main>
  );
};

export default Hero;
