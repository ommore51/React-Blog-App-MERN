import React from 'react';
import Latest from '../Single Components/Latest'
import Verticalrightdiv from './Verticalrightdiv';
import "../styles/verticalgallery.css"
import Verticalrightimgdiv from './Verticalrightimgdiv';
import img15 from '../../../Images/img15.jpg'
import { verticalimg } from '../Api';

const Verticalgallery = () => {
  return <>
    <div className='vertical'>
      <div className='vertical_left'>
        <div className='vertical_left_img'><img src={img15} alt="abc"></img></div>
      </div>
      <div className='vertical_right'>
        <Latest heading="Top Posts" />
        <Verticalrightimgdiv />

        {
          verticalimg.map(vertical => {
            return (
              < Verticalrightdiv imgurl={vertical.imgurl} title={vertical.title} />
            )
          }
          )


        }

      </div>

    </div>

  </>;
};

export default Verticalgallery;
