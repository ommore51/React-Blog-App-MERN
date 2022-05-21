import React from 'react';
import "../styles/wavesstories.css"
import Date from '../Single Components/Date';

const Wavestories = ({ title, content }) => {
  return <>

    <div className='stories'>

      <h2>{title}</h2>
      <div className='stories_content'> <p>{content}</p></div>
      <Date title="Waves-Stories" content="JAN 20 2018" />
    </div>


  </>;
};

export default Wavestories;
