import React from 'react'
import Face_data from './Face_data'
import img1 from "../../Images/img1.jpg"
import "./styles/blog_bottom_div.css"

const Blog_bottom_div = () => {
    return (
        <>
            <div className='blog_bottom_div'>
                < div className='blog_bottom_div_img'>
                    <img src={img1} alt="abc"></img></div>
                < div className='blog_bottom_div_title'>
                    <h2>Joshua Tree Overnight Adventure</h2>

                    <Face_data name="Dmitry Nozhenko" date="Aug 10 - 4min read" />
                </div>
            </div>


        </>
    )
}

export default Blog_bottom_div