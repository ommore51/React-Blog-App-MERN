import React, { useEffect, useState } from 'react';
import Latest from '../Home/Single Components/Latest';
import Bollywoodrightimgdiv from './Bollywoodrightimgdiv';
import "../Home/styles/bollywood.css"
import Advertisment from '../Home/Waves/Advertisment';
import { bollywoodright, bolly } from '../Home/Api';
import Bollywoodrightdiv from './Bollywoodrightdiv';
import Waves from '../Home/Waves/Waves'
import axios from 'axios'



const Bollywood = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        let res = await axios.get('https://react-mern-blog.herokuapp.com/getPostsByCat/bollywood')
        setData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return <>


        <div className='bollywood' >

            <div className='bollywood_1'>
                <Latest heading="Bollywood" />
                {
                    data.map(item => {
                        return (
                            <Waves key={item._id} title={item.blogTitle} imgurl={item.imgUrl} content={item.content} fontsize="18" marginTop='10' category="Bollywood_Blog/ Click to Read More" id={item._id} cat={item.cat} />
                        )

                    })
                }

            </div>
            <div className='bollywood_2'>
                <Latest heading="Top Posts" />

                <Bollywoodrightimgdiv title={bolly[0].title} imgurl={bolly[0].imgurl} category="Bollywood_Blogger" date="JAN 18 2022" />



                {
                    bollywoodright.map(bollywoodright => {
                        return (
                            <Bollywoodrightdiv key={bollywoodright.id} imgurl={bollywoodright.imgurl} title={bollywoodright.title} category="Bollywood_Blogger" date="FEB 18 2022" />
                        )
                    })
                }


                <Advertisment />


            </div>




        </div>


    </>;
};

export default Bollywood;
