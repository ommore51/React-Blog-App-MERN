import React, { useEffect, useState } from 'react'
import Bollywoodrightimgdiv from '../Bollywood/Bollywoodrightimgdiv'
import { tech, techright } from '../Home/Api'
import Latest from '../Home/Single Components/Latest'
import Waves from '../Home/Waves/Waves'
import '../Home/styles/technology.css'
import Bollywoodrightdiv from '../Bollywood/Bollywoodrightdiv'
import Advertisment from '../Home/Waves/Advertisment'
import axios from 'axios'


const Technology = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        let res = await axios.get('https://react-mern-blog.herokuapp.com/getPostsByCat/technology')
        setData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className='Technology'>
                <div className='technology_1'>
                    <Latest heading="Technology" />
                    {
                        data.map(item => {
                            return (
                                <Waves key={item._id} imgurl={item.imgUrl} title={item.blogTitle} content={item.content} category="Tech_Blog / Click to Read More" id={item._id} cat={item.cat} />
                            )
                        })
                    }

                </div>
                <div className='technology_2'>
                    <Latest heading="Top Posts" />
                    <Bollywoodrightimgdiv title={tech[0].title} imgurl={tech[0].imgurl} content={tech[0].content} category="Tech_Blog" date='AUG 20, 2020' />
                    {
                        techright.map(techright => {
                            return (
                                <Bollywoodrightdiv key={techright.id} title={techright.title} imgurl={techright.imgurl} content={techright.content} category="Tech_Blog" date='Dec 3 2020' />
                            )
                        })
                    }
                    <Advertisment />
                </div>


            </div>

        </>
    )
}

export default Technology