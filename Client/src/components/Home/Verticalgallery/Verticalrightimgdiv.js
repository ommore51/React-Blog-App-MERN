import React from 'react';
import '../styles/verticalrightimgdiv.css';
import img11 from '../../../Images/img11.jpg'
import Date from '../Single Components/Date';

const Verticalrightimgdiv = () => {
    return <>
        <div className='Verticalrightimgdiv'>
            <div className='vertical_right_img'><img src={img11} alt="abc"></img></div>
            <h1>Should I worry that my dog has coronavirus?</h1>
            <Date title="World Animal protection" content="Blog" />
        </div>

    </>;
};

export default Verticalrightimgdiv;
