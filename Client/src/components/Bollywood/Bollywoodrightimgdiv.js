import React from 'react'
import "../Home/styles/bollywoodrightimgdiv.css"

const Bollywoodrightimgdiv = ({ title, imgurl, category, date, content }) => {
    return (
        <>
            <div className='bollywoodrightimgdiv'>
                <div className='bollywood_rightimg'><img src={imgurl} alt="abc"></img></div>
                <h1>{title}</h1>
                <p className='bollywoodrightimgdiv_content'>{content}</p>
                <p className='date_p'>{category} / {date}</p>
            </div>

        </>
    )
}

export default Bollywoodrightimgdiv