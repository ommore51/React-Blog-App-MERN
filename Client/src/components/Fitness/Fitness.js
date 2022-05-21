import React, { useEffect, useState } from 'react'
import { fit, fit_right } from '../Home/Api'
import Latest from '../Home/Single Components/Latest'
import Waves from '../Home/Waves/Waves'
import "../Home/styles/fitness.css"
import Bollywoodrightimgdiv from '../Bollywood/Bollywoodrightimgdiv'
import Bollywoodrightdiv from '../Bollywood/Bollywoodrightdiv'
import Advertisment from '../Home/Waves/Advertisment'
import axios from 'axios'



const Fitness = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        let res = await axios.get('https://react-mern-blog.herokuapp.com/getPostsByCat/fitness')
        setData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className='Fitness'>
                <div className='fitness_1'>
                    <Latest heading="Fitness" />
                    {
                        data.map(item => {
                            return (
                                <Waves key={item._id} title={item.blogTitle} imgurl={item.imgUrl} content={item.content} category="Fitness_Blog / Click to Read More" id={item._id} cat={item.cat} />
                            )
                        })
                    }
                </div>
                <div className='fitness_2'>
                    <Latest heading="Top Posts" />
                    <Bollywoodrightimgdiv title={fit[0].title} imgurl={fit[0].imgurl} category='Fitness_Blog' date='Aug 13 2021' />
                    {
                        fit_right.map(fit_right => {
                            return (
                                <Bollywoodrightdiv key={fit_right.id} title={fit_right.title} imgurl={fit_right.imgurl} category="Fitness_Blog" date='Sept 9 2021' />
                            )
                        })
                    }
                    <Advertisment />
                </div>


            </div>


        </>
    )
}

export default Fitness