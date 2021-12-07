import React from 'react';
import { faq } from './data';
import Question from './Question';
import Form from './Form';
import Divider from './Divider';

const Questions = () => {
  return (
    <>
      <div className='faq-container'>
        <h1>Frequently Asked Questions</h1>
        <div className='btn-container'>
          {faq.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </div>
      <Form />
      <Divider />
    </>
  );
};

export default Questions;
