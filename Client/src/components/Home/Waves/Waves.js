import React from 'react';
import "../styles/waves.css";
import { Link } from 'react-router-dom'


const Waves = ({ imgurl, title, content, fontsize, category, date, marginTop, id, cat }) => {
  return <>
    <Link to={`/${cat}/blog/${id}`}>
      <div className='waves'>
        <div className='waves_img'><img src={imgurl} alt="abc"></img> </div>
        <div className='waves_content'>
          <h1 style={{ fontSize: `${fontsize}px`, }}>{title}</h1>
          <p style={{ marginTop: `${marginTop}px` }}>{content}</p>
          <p className='date_p'>{category} / {date}</p>
        </div>
      </div></Link>


  </>;
};

export default Waves;
