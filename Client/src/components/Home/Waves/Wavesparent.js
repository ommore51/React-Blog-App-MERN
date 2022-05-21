import React, { useEffect, useState } from 'react';
import Waves from './Waves';
import Latest from '../Single Components/Latest';
import "../styles/wavesparent.css"
import Advertisment from './Advertisment';

import axios from 'axios'

const Wavesparent = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    let res = await axios.get('https://react-mern-blog.herokuapp.com/getPostsByCat/safety')
    setData(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <>
    <Latest heading="Latest Articles" />
    <div className='wavemain'>
      <div className='wavesleft'>
        {
          data.map(item => {
            return (
              < Waves imgurl={item.imgUrl} content={item.content} title={item.blogTitle} category="Covid-19 Blog / Click to read more" id={item._id} cat={item.cat} />
            )
          })

        }
      </div>
      <Advertisment />
    </div>
  </>;
};

export default Wavesparent;
