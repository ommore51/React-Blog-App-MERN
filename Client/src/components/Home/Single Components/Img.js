import React from 'react';
import '../styles/img.css'
import img1 from "../../../Images/img1.jpg"
import img2 from "../../../Images/img2.jpg"
import img3 from "../../../Images/img3.jpg"


const Img = () => {
  return <>
    <div className='img-container'>
      <div className='left-img-div'>
        <img src={img1} alt="abc" />

      </div>

      <div className='right-img-div'>
        <div className='top-img-div'><img src={img2} alt="abc" /></div>
        <div className='bottom-img-div'><img src={img3} alt="abc" /></div>
      </div>
    </div>
  </>;
};


export default Img;




