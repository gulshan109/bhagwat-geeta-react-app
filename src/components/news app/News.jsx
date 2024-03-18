import axios from 'axios'
import React, { useEffect, useState } from 'react'

function News() {
    const [news, setNews] = useState([])
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState("in")
    async function api() {
        const url = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=7cb673a8218f496599d39c750a055faf`)
        setNews(url.data.articles);
    }
    useEffect(() => {
        api()

    }, [country])

    useEffect(() => {
        async function getCountries() {
            const resp = await axios.get("https://gist.githubusercontent.com/almost/7748738/raw/575f851d945e2a9e6859fb2308e95a3697bea115/countries.json");
            setCountries(resp.data)
        }
        getCountries()
    }, [])

    return (
        <div className=' flex justify-center items-center flex-col px-8'>
            <h1 className=''>NEWS WORLD</h1>

            <div className='flex items-center overflow-scroll w-screen gap-4 h-48 w-full flex-row'>
                {
                    countries.map((value, index) =>
                        <button key={index}
                        onClick={()=>setCountry(value.code.toLowerCase())}
                        className='p-4 bg-gray-300 rounded-xl h-14 w-fit flex flex-row'>{value.name}</button>
                    )
                }
            </div>

            <div className=' flex flex-col px-24 py-10'>
                {
                    news.length > 0 && news.map((val, index) =>
                        <div key={index} className=' gap-6 flex flex-col '>
                            <h1 className=' text-3xl bg-gray-400 px-10 py-2'>{val.source.name}</h1>
                            <span className=' text-xl text-slate-500'> Title :{val.title}</span>
                            <div className=' flex flex-col'>
                                <p className=' bg-slate-400 w-[50vw]'>{val.description}</p>
                                <p className=' bg-slate-400 w-[50vw]'>{val.content}</p>
                                <h1 className=' bg-red-900 text-white py-2 px-10 w-80'> Author :{val.author}</h1>
                                <span className='py-2 px-10 w-80'>{val.publishedAt}</span>
                            </div>
                            <h1 className=' bg-black text-white py-4 px-10'>{val.title}</h1>
                            <img src={val.urlToImage} alt="Images" className=' w-[60vw] h-[60vh]' />

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default News