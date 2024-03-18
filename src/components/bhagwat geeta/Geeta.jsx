import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  Banner from '../../../img/banner2.webp'

function Geeta() {
    const [geeta, setGeeta] = useState()
    const [chapter, setChapter] = useState(0)
    const [data, setData] = useState([])
    useEffect(() => {
        const geetaApi = async() => {
            const options = {
                method: 'GET',
                url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/`,
                params: {
                    skip: chapter,
                    limit: '18'
                },
                headers: {
                    'X-RapidAPI-Key': 'd8f761c8b8msh68738e62c82fa2ap1d3e12jsn86e07f35f5d3',
                    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setData(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        geetaApi()
    }, [chapter])
    const handleClick = () =>{
        setChapter(geeta)
    }
    const handleChange = (e) =>{
        setGeeta(e.target.value)
    }

    return (
        <div className=' w-full h-full'>
            <header className=' w-full bg-orange-500 h-20 flex justify-between items-center '>
                <h1 className=' text-3xl'> भागवद गीता </h1>
                <nav className=' flex gap-2'>
            <input type="search" onChange={handleChange} placeholder="खोज" className=' border-orange-500 p-2 rounded-lg'/>
            <button onClick={handleClick} className=' border border-black p-2 rounded-lg '>Search</button>
                </nav>
            </header>
                <div className='flex justify-center items-center p-4'>
                    <img src={Banner} alt="Banner" />
                </div>
            <section className='flex flex-col w-full p-8 justify-center items-center gap-8'>
                {
                    data.length > 0 && data.map((value , index) => 
                    <div key={index} className='flex flex-col gap-4'>
                        <h2 className=' bg-rose-400 p-2 uppercase font-semibold'>{value.slug}</h2>
                        <div>
                        <span>{value.name} : </span>
                        <span className='italic'>{value.name_meaning}</span>

                        </div>
                        <h2 className=' font-semibold'>{value.name_translated}</h2>
                        <div className='shadow-inner  shadow-orange-500 p-8 gap-4'>
                        <p className=''>{value.chapter_summary}</p>
                        <p>{value.chapter_summary_hindi}</p>

                        </div>
                    </div>
                    )
                }
            </section>
        </div>
    )
}

export default Geeta