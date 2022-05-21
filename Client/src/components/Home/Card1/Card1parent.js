import React from 'react';
import Card1 from './Card1';
import '../styles/card1parent.css'
import Latest from '../Single Components/Latest';
import latest from '../Api';



const Card1parent = () => {
  return <>
    <Latest heading="The Latest" />

    <div className='card-section'>
      {

        latest.map(travelblog => {
          return (
            <Card1 key={travelblog.id} content={travelblog.content} imgurl={travelblog.imgurl} title={travelblog.title} />
          )
        })
      }


    </div>
  </>;
};

export default Card1parent;
