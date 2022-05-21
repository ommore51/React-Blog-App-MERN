import React from 'react';
import '../styles/card1.css'
import Date from '../Single Components/Date';

const Card1 = ({ imgurl, content, title }) => {
  return <>
    <div className='card1'>
      <div className='card1-img'><img src={imgurl} alt="abc"></img></div>
      <h1>{title}</h1>
      <p className='card1-p'>{content}</p>
      <Date title="Cryptocurrency" content="Blog" />
    </div>
  </>;
};

export default Card1;
