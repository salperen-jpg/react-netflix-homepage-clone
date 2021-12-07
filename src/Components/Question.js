import React, { useState } from 'react';

const Question = ({ id, title, info }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className='outline'>
        <div className='outline-container'>
          <button className='faq-btn' onClick={() => setIsShow(!isShow)}>
            <span>{title}</span>
            {isShow ? (
              <i className='fas fa-times'></i>
            ) : (
              <i className='fas fa-plus'></i>
            )}
          </button>
        </div>
        {isShow && <div className='info'>{info}</div>}
      </div>
    </>
  );
};

export default Question;
