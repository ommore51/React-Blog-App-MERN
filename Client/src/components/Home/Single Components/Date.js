import React from 'react'
import "../styles/date.css"

const Date = ({ title, content }) => {
    return (
        <>  <div className='date'>
            <p className='date_p'>{title} / {content}</p>
        </div>



        </>
    )
}

export default Date;