import React, { useEffect, useState } from 'react'
import Bollywoodrightdiv from '../Bollywood/Bollywoodrightdiv'
import Bollywoodrightimgdiv from '../Bollywood/Bollywoodrightimgdiv'
import { fastfood, food_right } from '../Home/Api'
import Latest from '../Home/Single Components/Latest'
import Advertisment from '../Home/Waves/Advertisment'
import Waves from '../Home/Waves/Waves'
import "../Home/styles/food.css"
import axios from 'axios'


const Food = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        let res = await axios.get('https://react-mern-blog.herokuapp.com/getPostsByCat/food')
        setData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className='Food'>
                <div className='food_1'>
                    <Latest heading='Food' />
                    {
                        data.map(item => {
                            return (
                                <Waves key={item._id} title={item.blogTitle} imgurl={item.imgUrl} content={item.content} category="Food_blog / Click to Read More" id={item._id} cat={item.cat} />
                            )
                        })
                    }

                </div>
                <div className='food_2'>
                    <Latest heading="Top Posts" />
                    <Bollywoodrightimgdiv title={fastfood[0].title} imgurl={fastfood[0].imgurl} content={fastfood[0].content} category="Food_blog" date="Nov 21, 2021" />
                    {
                        food_right.map(food_right => {
                            return (
                                <Bollywoodrightdiv key={food_right.id} imgurl={food_right.imgurl} title={food_right.title} category="Food_blog" date="DEC 3, 2021" />
                            )
                        })
                    }
                    <Advertisment />
                </div>
            </div>

        </>
    )
}

export default Food