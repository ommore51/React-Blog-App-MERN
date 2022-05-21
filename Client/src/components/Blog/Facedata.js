import React from 'react'
import icon from "../Blog/icon.png"
import "../Blog/styles/face_data.css"

const Facedata = ({ name, date, written }) => {
    return (
        <>
            <div className='face_data'>
                <div className='face'><img src={icon} alt="abc"></img> </div>
                <div className='data'>
                    <div className="written_by">{written}</div>
                    <div className='data_name'>{name}</div>
                    <div className='data_date'>{date}</div>

                </div>


            </div>



        </>
    )
}

export default Facedata;