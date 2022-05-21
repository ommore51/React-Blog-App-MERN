import React from 'react';
import Latest from '../Single Components/Latest';
import Wavestories from './Wavestories';
import '../styles/wavestoriesparent.css'
import { stories } from '../Api';

const Wavestoriesparent = () => {
  return <>
    <Latest heading="Latest Stories" />
    <div className='main_wavestories'>
      {
        stories.map(story => {
          return (
            <Wavestories title={story.title} content={story.content} />
          )
        })
      }

    </div>



  </>;
};

export default Wavestoriesparent;
