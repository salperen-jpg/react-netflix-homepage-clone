import React from 'react';
import kids from '../../assets/kids.png';
import Divider from '../Divider';

const Box_d = () => {
  return (
    <>
      <div className='section box-d'>
        <div className='section-info'>
          <h1> Create profiles for kids.</h1>
          <h2>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
        </div>
        <img src={kids} alt='' />
      </div>
      <Divider />
    </>
  );
};

export default Box_d;
