import React from 'react';
import '../styles/verticalrightdiv.css'
import Date from '../Single Components/Date';


const Verticalrightdiv = ({ imgurl, title }) => {
  return <>

    <div className='vertical_right_div'>
      <div className='vertical_right_div_img'><img src={imgurl} alt="abc"></img></div>
      <div className='right__div2'><h2>{title}</h2>
        <Date title="World Animal protection" content="Blog" />
      </div>
    </div>


  </>;
};

export default Verticalrightdiv;
