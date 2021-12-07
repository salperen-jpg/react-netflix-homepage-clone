import React from 'react';

const Form = () => {
  return (
    <>
      <h3 className='align-header'>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className='hero-form faq-form '>
        <input
          type='text'
          name=''
          id=''
          className='hero-input'
          placeholder='Email address'
        />
        <button className='btn hero-btn faq-bottom-btn'>
          <span>get started </span>
          <span>{'>'}</span>
        </button>
      </div>
    </>
  );
};

export default Form;
