import React from 'react'
import "../Home/styles/bollywoodrightdiv.css"

const Bollywoodrightdiv = ({ imgurl, title, category, date }) => {
    return (
        <>
            <div className='bollywoodrightdiv'>
                <div className='bollywoodrightimg'><img src={imgurl} alt="abc"></img></div>
                <div className='bollywoodrighttitle'><p>{title}</p></div>
                <p className='date_p'>{category} / {date}</p>
            </div>


        </>
    )
}

export default Bollywoodrightdiv